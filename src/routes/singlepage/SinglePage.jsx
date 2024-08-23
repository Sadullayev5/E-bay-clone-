import { BiLeftArrowAlt } from "react-icons/bi"; 
import React, { useEffect , useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import axios from "axios";
import './singlepage.css'

const SinglePage = () => {
  const id = useParams().id

  const [t] = useTranslation();

  const [product , setproduct] = useState([])

  const [inputvalue , setinputvalue] = useState(1)

  const handleChange = (event) => {
    if (event.target.value < product.stock + 1) {
      setinputvalue(event.target.value);
    }
  }

  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
  .then(response => setproduct(response.data))
  } , [])

  const cutting = (number)=> {
    const text = number.toString()
    if (text.length > 6 ) {
      return text.slice(0, 6)
    }
    return text
  }


  return (
    <div className="container">
      <div className="single-page-links">
      <div>
      <Link to="/" className="singlepage-back"><BiLeftArrowAlt />{t('singlepageL1')}</Link>
      <p>{t('singlepageL2')} : <Link>{product.category}</Link></p>
      </div>
      <div>
        <Link>{t('singlepageL3')}</Link>
        <Link>{t('singlepageL4')}</Link>
      </div>
    </div>

    <div className="single-product">
      <img className='product-img' src={product.thumbnail} alt="" />
      <div className="product-content">
        <h2>{product.title}</h2>
        <div className="product-info">
          <div  className="info">
            <p>{t('product')}:</p>
            <i>{product.description}</i>
          </div>
          <div className="info">
            <p>{t('product1')} </p>
            <span>{product.brand}</span>
          </div>
          <div className="info">
            <p>{t('product2')} </p>
            <span>{product.shippingInformation}</span>
          </div>
          <div className="info">
            <p>{t('product3')} </p>
            <span>{product.warrantyInformation} </span>
          </div>
          <div className="info">
            <p>{t('product4')} </p>
            <span>{product.returnPolicy} </span>
          </div>
          <div className="info">
            <p>{t('product5')} </p>
            <span>{product.availabilityStatus} </span>
          </div>
          <div className="info">
            <p>{t('product6')}</p>
            <input type="text"  value={inputvalue} onChange={handleChange} />
            <h4>{t('product7')}: {product.stock}</h4>
          </div>
        </div>
        <div style={{display: 'flex' , gap: '20px', marginTop: '20px' }}>
        <div className="product-price">
          <p>{t('product8')}:</p>
          <strong>{cutting(inputvalue * product.price)}$</strong>
          <Link>{t('product9')}</Link>
        </div>
        <div className="product-buttons">
          <button>{t('product10')}</button>
          <button>{t('product11')}</button>
          <button>{t('product12')}</button>
        </div>
        </div>
      </div>
      <div className="sell">
        <h3>{t('sell')}</h3>
        <button>{t('sell1')}</button>
      </div>
    </div>
    </div>
  )
}

export default SinglePage