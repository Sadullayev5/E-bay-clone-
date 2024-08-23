import { BiSearchAlt2 } from "react-icons/bi"; 
import { FiShoppingCart } from "react-icons/fi"; 
import { BiBell } from "react-icons/bi"; 
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Nav.css'
import logo from '../images/Ebay.png'


const Nav = () => {


    const [ t , i18n] = useTranslation()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
    }

    const ChangeLanguage = (e) => {

        i18n.changeLanguage(e.target.value)
    }

  if(localStorage.getItem('token') === null){
    return (
        <div className="container">
            <nav>
                <div className="nav-top">
                    <ul className='nav-links'>
                        <li><Link to='/login' style={{color: '#0654BA', textDecoration: 'underline'}} className='nav-link'>{t('navtop1')}</Link></li>
                        <li><Link className='nav-link'>{t('navtop2')}</Link></li>
                        <li><Link className='nav-link'>{t('navtop3')}</Link></li>
                        <li><Link className='nav-link'>{t('navtop4')}</Link></li>
                    </ul>
                    <div className="nav-buttons">
                        <select defaultValue={i18n.language} onChange={ChangeLanguage}>
                            <option value="en">En</option>
                            <option value="uz">Uz</option>
                            <option value="ru">Ru</option>
                        </select>
                        <Link className="nav-btn" ><BiBell /></Link>
                        <Link className="nav-btn" ><FiShoppingCart /></Link>
                    </div>
                </div>
                <div className="nav-bottom">
                    <img src={logo} alt="" />
                    <input  type="text" placeholder={t('navsearch')} />
                    <button>{t('navbtn')}</button>
                    <p >{t('navT')}</p>
                </div>
            </nav>
        </div>
      )
  }
  else{
    return (
        <div className="container">
            <nav>
                <div className="nav-top">
                    <ul className='nav-links'>
                        <li><Link onClick={handleLogout} style={{color: '#0654BA', textDecoration: 'underline'}} className='nav-link'>{t('logout')}</Link></li>
                        <li><Link className='nav-link'>{t('navtop2')}</Link></li>
                        <li><Link className='nav-link'>{t('navtop3')}</Link></li>
                        <li><Link className='nav-link'>{t('navtop4')}</Link></li>
                    </ul>
                    <div className="nav-buttons">
                        <select defaultValue={i18n.language} onChange={ChangeLanguage}>
                            <option value="en">En</option>
                            <option value="uz">Uz</option>
                            <option value="ru">Ru</option>
                        </select>
                        <Link className="nav-btn" ><BiBell /></Link>
                        <Link className="nav-btn" ><FiShoppingCart /></Link>
                    </div>
                </div>
                <div className="nav-bottom">
                    <img src={logo} alt="" />
                    <input  type="text" placeholder={t('navsearch')} />
                    <button>{t('navbtn')}</button>
                    <p >{t('navT')}</p>
                </div>
            </nav>
        </div>
      )
  }
}

export default Nav