import React from 'react';
import './footer.styles.scss'
import { ReactComponent as Logo1} from '../../assets/twitter.svg'
import { ReactComponent as Logo2} from '../../assets/github.svg'
import { ReactComponent as Logo3} from '../../assets/portfolio.svg'



const Footer = () => (
        <div className='footer'>
            <div className='options'>
                <div className='twitter'> 
                    <h4>Follow us on Twitter</h4>
                    <div>
                        <Logo1 className='logo1' />
                    </div>
                </div>
                <div className='github'> 
                    <h4>Github Repo</h4>
                    <Logo2 className='logo2' />
                </div>
                <div className='github'> 
                    <h4>Built by Suhtoshi</h4>
                    <Logo3 className='logo3' />
                </div>
            </div>
        
        </div>
    )

export default Footer;