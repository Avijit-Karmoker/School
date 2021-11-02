import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './AddressBar.css';

const AddressBar = () => {
    return (
        <section className="address-bar">
            <div className="row  container p-0" style={{margin: 'auto'}}>
                <div className="col-md-3">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span> Sher-e-Bangla Road, Bhandaria</span></p>
                </div>
                <div className="col-md-3">
                    <p><FontAwesomeIcon icon={faPhoneAlt} /> <span> +8801620160721</span></p>
                </div>
                <div className="col-md-6 social-icon text-end">
                    <span><a href="//facebook.com/" target="_blank"> <FontAwesomeIcon className="icon" icon={faFacebook} /></a></span>
                    <span><a href="//twitter.com/home?lang=en" target="_blank"> <FontAwesomeIcon className="icon" icon={faTwitter} /></a></span>
                    <span><a href="//instagram.com/" target="_blank"> <FontAwesomeIcon className="icon" icon={faInstagram} /></a></span>
                    <span><a href="//linkedin.com/" target="_blank"> <FontAwesomeIcon className="icon" icon={faLinkedin} /></a></span>
                </div>
            </div>
        </section>
    );
};

export default AddressBar;