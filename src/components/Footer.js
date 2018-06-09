import React from 'react';

import TaxnetLogo from '../img/taxnet-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <img src={TaxnetLogo} alt="Taxnet Logo" className="footer__logo" />
      <p className="footer__copyright">© ЗАО «ТаксНет» 2001–2017</p>
    </div>
  );
}

export default Footer;
