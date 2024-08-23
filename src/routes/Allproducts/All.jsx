import React, { useEffect , useState } from 'react'
import './All.css'
import { Link } from 'react-router-dom'
import banner from '../../images/all_banner.png'
import { useTranslation } from 'react-i18next'
import axios from 'axios'


const All = () => {

  const { t } = useTranslation()
  const [products , setproducts] = useState([])

  useEffect(() => {
    axios("https://dummyjson.com/products")
  .then(response => response.data)
  .then(data => setproducts(data.products))
  },[])



  return (
    <div className="container-all">
      <div className="all-banner">
        <h2>{t('all-banner')}</h2>
        <img src={banner} alt="" />
        <h3>{t('all-banner2')}</h3>
        <p>{t('all-banner3')}</p>
      </div>
      <div className="all-products">
        {
          products.map( product =>
            <div key={product.id} className='product'>
              <img className='product-img' src={product.images[0]} alt="" />
              <Link to={`/singlepage/${product.id}`}>{product.title}</Link>
              <p>{product.description}</p>
              <strong>{product.price}$</strong>
              <br />
              <br />
              <p>{t('producttext2')}</p>
              <br />
              <p>{t('producttext')}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default All