import { takeLatest, call, put, all} from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess, fetchCollectionsFail
} from './shop.actions'

import ShopActionTypes from './shops.types';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch (error){
        yield put(fetchCollectionsFail(error.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync);
};

export function* shopSagas(){
    yield all ([call(fetchCollectionsStart)])
};