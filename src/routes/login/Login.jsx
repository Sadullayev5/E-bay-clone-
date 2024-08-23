import { BiPencil } from "react-icons/bi"; 
import React , { useState } from 'react'
import logo from '../../images/Ebay.png'
import { useTranslation } from 'react-i18next'
import { Link , useNavigate } from 'react-router-dom'
import './Login.css'
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [t , i18n] = useTranslation()

  const ChangeLanguage = (e) => {

    i18n.changeLanguage(e.target.value)
}

  const [ username , setUsername ] = useState("")
  const [ password , setPassword ] = useState("")


  const handleLogin = (e) => {
    e.preventDefault()
      axios.post('https://dummyjson.com/auth/login', { username: username,   password: password})
    .then (response => {
      if(response.status === 200){
        localStorage.setItem('userName' , username)
        localStorage.setItem('token' , response.data.token)
        navigate('/')

      }
      else{
        alert(response.data)
      }
    })  
    
    
  }

  return (
    <div className="login-wrapper">
      <select defaultValue={i18n.language} onChange={ChangeLanguage}>
            <option value="en">En</option>
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
        </select>
      <img  onClick={() => window.location.href = '/'} className="login-img" style={{cursor: 'pointer'}} src={logo} alt="" />
      <div className="login">
        <form onSubmit={handleLogin} >
          <h2>{t('login')}</h2>
          <p>{t('login2')} <Link>{t('login3')}</Link></p>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder={t('login4')} onChange={(e) => setPassword(e.target.value)} />
          <button>{t('login5')}</button>
        </form>
        <div className="learn-more">
          <p>{t('login6')}</p>
          <p>{t('login7')}</p>
          <Link>{t('login8')}<BiPencil /></Link>
        </div>
      </div>
    </div>
  )
}

export default Login