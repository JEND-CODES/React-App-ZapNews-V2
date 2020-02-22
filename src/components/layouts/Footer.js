import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">

            <div className="footer-middle">

            <div className="container">

                <div className="row">

               
    
                </div>
    
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy; {new Date().getFullYear()} ZAPNEWS • Planetcode.fr
                    </p>
                    <p>Site réalisé par Jean-Eudes Nouaille-Degorce</p>
                    
                    <p>Développeur Full Stack
                        
                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <a href="https://www.linkedin.com/in/jean-eudes-nouaille-degorce/" target="_blank" style={{ color:'white'}}>

                    <i className="fab fa-linkedin fa-2x" style={{ fontSize:'24px'}}></i>

                    </a>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <a href="https://github.com/JEND-CODES" target="_blank" style={{ color:'white'}}>

                    <i className="fab fa-github fa-2x" style={{ fontSize:'24px'}}></i>

                    </a>
                        
                        </p> 

                    <br />
                    <br />
                    <br />

                </div>

                <div>
                    
                </div>

            </div>

            </div>
    
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer `

font-family: 'Quicksand', sans-serif;

.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

`;