import React from 'react'
import './Minifooter.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Minifooter = () => {

    const { t } = useTranslation();

  return (
    <footer>
        <div className="footer-wrapper">
            <div className="footer-top">
                <ul>
                    <li><Link>{t('footerh5')}</Link></li>
                    <li><Link>{t('footer31')}</Link></li>
                    <li><Link>{t('footerh7')}</Link></li>
                    <li><Link>{t('footer13')}</Link></li>
                    <li><Link>{t('footer28')}</Link></li>
                    <li><Link>{t('footer25')}</Link></li>
                    <li><Link>{t('footer11')}</Link></li>
                    <li><Link>{t('footerh6')}</Link></li>
                    <li><Link>{t('footer14')}</Link></li>
                </ul>
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
        </div>
    </footer>
  )
}

export default Minifooter