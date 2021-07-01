import styled from 'styled-components';

import {Link} from 'react-router-dom';


export const FooterContainer = styled.div `
    width: 100%;
    padding-top: 100px;
    padding-bottom: 10px;
    background-color: ivory;
    position: absolute;
    left: 0;
    right: 0;
    color: ivory;
`

export const OptionsContainer = styled.div `
    height: 100%;
    display: flex;
    justify-content: space-around;
`

export const LogoLink = styled(Link) `
    background-color: ivory;
    justify-content: center;
    
    &:hover {
        cursor: pointer;
      }
    }
`