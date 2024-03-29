import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="py-4 bg-dark text-white-50">
            <div className="text-center">
                <div>
                    <p>
                        PrivateLab 2023 | Magánlaboratórium Szegeden |
                        06-1-999-9999 | privatelab@gmail.com
                    </p>
                </div>
                <div>
                    <p><i>"Jobb megelőzni, mint gyógyítani."</i></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
