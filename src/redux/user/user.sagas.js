import { takeLatest, put, all, call } from "@redux-saga/core/effects";

import UserActionTypes from "./user.types";
import { SignInSuccess, SignInFailure } from "./user.actions";

import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';


export function* getSnapShotFromUserAuth(userAuth) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapShopt = yield userRef.get()
        yield put(
            SignInSuccess({ id: userSnapShopt.id, ...userSnapShopt.data() })
        );
    } catch(error){
        yield put(SignInFailure(error));
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    } catch(error){
        yield put(SignInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    }catch(error){
        yield put(SignInFailure(error));
    }
}

export function* onGoogleSignInStart () {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart () {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}