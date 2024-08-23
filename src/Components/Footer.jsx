import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const [t] = useTranslation();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <i>{t('footerh1')}</i>
          <ul>
            <li><Link to="#">{t('footer1')}</Link></li>
            <li><Link to="#">{t('footer2')}</Link></li>
            <li><Link to="#">{t('footer3')}</Link></li>
            <li><Link to="#">{t('footer4')}</Link></li>
            <li><Link to="#">{t('footer5')}</Link></li>
            <li><Link to="#">{t('footer6')}</Link></li>
            <li><Link to="#">{t('footer7')}</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <i>{t('footerh2')}</i>
          <ul>
            <li><Link to="#">{t('footer8')}</Link></li>
            <li><Link to="#">{t('footer9')}</Link></li>
            <li><Link to="#">{t('footer10')}</Link></li>
            <li><Link to="#">{t('footer11')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <i>{t('footerh3')}</i>
          <ul>
            <li><Link to="#">{t('footer12')}</Link></li>
            <li><Link to="#">{t('footer13')}</Link></li>
            <li><Link to="#">{t('footer14')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <i>{t('footerh4')}</i>
          <ul>
            <li><Link to="#">{t('footer15')}</Link></li>
            <li><Link to="#">{t('footer16')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <i>{t('footerh5')}</i>
          <ul>
            <li><Link to="#">{t('footer17')}</Link></li>
            <li><Link to="#">{t('footer18')}</Link></li>
            <li><Link to="#">{t('footer19')}</Link></li>
            <li><Link to="#">{t('footer20')}</Link></li>
            <li><Link to="#">{t('footer21')}</Link></li>
            <li><Link to="#">{t('footer22')}</Link></li>
            <li><Link to="#">{t('footer23')}</Link></li>
            <li><Link to="#">{t('footer24')}</Link></li>
            <li><Link to="#">{t('footer25')}</Link></li>
            <li><Link to="#">{t('footer26')}</Link></li>
            <li><Link to="#">{t('footer27')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <i>{t('footerh6')}</i>
          <ul>
            <li><Link to="#">{t('footer28')}</Link></li>
            <li><Link to="#">{t('footer29')}</Link></li>
            <li><Link to="#">{t('footer30')}</Link></li>
          </ul>
          <i>{t('footerh7')}</i>
          <ul>
            <li><Link to="#">{t('footer31')}</Link></li>
            <li><Link to="#">{t('footer32')}</Link></li>
            <li><Link to="#">{t('footer33')}</Link></li>
          </ul>
          <i>{t('footerh8')}</i>
        </div>
      </div>
      <div className="footer-bottom">
      <p>© 1995-2023 eBay Inc. All Rights Reserved.</p>
      <ul className="footer-links">
        <li><a href="/">Accessibility</a></li>
        <li><a href="/">User Agreement</a></li>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Payments Terms of Use</a></li>
        <li><a href="/">Cookies</a></li>
        <li><a href="/">Your Privacy Choices</a></li>
        <li><a href="/">AdChoice</a></li>
      </ul>
      </div>
    </footer>
  )
}

export default Footer