import React from 'react';
import './footer.styles.jsx'
// import { ReactComponent as Logo1} from '../../assets/twitter.svg'
// import { ReactComponent as Logo2} from '../../assets/github.svg'
// import { ReactComponent as Logo3} from '../../assets/portfolio.svg'

import { FooterContainer, OptionsContainer, LogoLink } from './footer.styles.jsx';



const Footer = () => (
        <FooterContainer className='footer'>
            <OptionsContainer className='options'>
                <LogoLink to={{ pathname: "https://twitter.com/suhtoshi" }} target="_blank">
                    <h4>Follow us on Twitter</h4>
                    {/* <div>
                        <Logo1 className='logo1' />
                    </div> */}
                </LogoLink>
                <LogoLink to={{ pathname: "https://github.com/suhtoshi/crwn-clothing" }} target="_blank">
                    <h4>Github Repo</h4>
                    {/* <Logo2 className='logo2' /> */}
                </LogoLink>
                <LogoLink className='github'> 
                    <h4>Built by Suhtoshi</h4>
                    {/* <Logo3 className='logo3' /> */}
                </LogoLink>
            </OptionsContainer>
        
        </FooterContainer>
    )

export default Footer;