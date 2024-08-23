import { BiRightArrowAlt } from "react-icons/bi"; 
import React from 'react'
import './Home.css'
import { Link  } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import axios from "axios";
import { useEffect , useState } from "react";
import featured1 from '../../images/featured1.png'
import featured2 from '../../images/featured2.png'
import ebay2 from '../../images/ebay2.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";





const Home = () => {

    

    const [t] = useTranslation()
    const [products , setproducts] = useState([])

    useEffect(() => {
        axios("https://dummyjson.com/products?limit=12")
        .then(response => response.data)
        .then(data => setproducts(data.products))
    } , [])  
        
      
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        }
      };

    


  return (
   <div className="home-container">
    <div className="home">
        <ul className='home-list'>
            <li><Link className='home-link'>{t('homeL1')}</Link></li>
            <li><Link className='home-link'>{t('homeL2')}</Link></li>
            <li><Link className='home-link'>{t('homeL3')}</Link></li>
            <li><Link className='home-link'>{t('homeL4')}</Link></li>
            <li><Link className='home-link'>{t('homeL5')}</Link></li>
            <li><Link className='home-link'>{t('homeL6')}</Link></li>
            <li><Link className='home-link'>{t('homeL7')}</Link></li>
            <li><Link className='home-link'>{t('homeL8')}</Link></li>
            <li><Link className='home-link'>{t('homeL9')}</Link></li>
            <li><Link className='home-link'>{t('homeL10')}</Link></li>
            <li><Link className='home-link'>{t('homeL11')}</Link></li>
            <li><Link className='home-link'>{t('homeL12')}</Link></li>
            <li><Link className='home-link'>{t('homeL13')}</Link></li>
        </ul>
        <div className="banner">
            <div className="banner-text">
                <i>{t('homebannerT')}</i>
                <p>{t('homebannertext')}</p>
                <Link to='/all' className="banner-btn">{t('homebannerbtn')} <BiRightArrowAlt /></Link>

            </div>
            <div className="banner-products">
                    {
                        products.slice(0,3).map(product =>
                            <div key={product.id} className="banner-product">
                                <Link to={`/singlepage/${product.id}`} className="banner-product-title">{product.title} <BiRightArrowAlt /></Link>
                                <img className="banner-product-img" src={product.images[0]} alt="" />
                            </div>
                        )
                    }
                </div>
        </div>
        <div className="trending-products">
            <div className="trending-products-wrapper">
            {
                products.slice(0,7).map(product =>
                    <div key={product.id} className="trending-product">
                        <img className="trending-product-img" src={product.images[0]} alt="" />
                        <Link to={`/singlepage/${product.id}`} className="trending-product-title">{product.title}</Link>
                    </div>
                )
            }
            </div>
            <Link to='/all' className="trending-product-link">{t('trendingProductLink')}<BiRightArrowAlt/></Link>
        </div>
        <div className="featured">
            <div className="featured-content">
                <p>{t('featured')}</p>
                <img src={ebay2} alt="" />
                <i>{t('featuredText')}</i>
                <p>{t('featuredText2')}</p>
                <Link to='/all' className="featured-btn">{t('featuredLink')} <BiRightArrowAlt /></Link>
            </div>
            <div className="featured-img">
                <img src={featured1} alt="" />
                <img src={featured2} alt="" />
            </div>
        </div>
        <div className="todays-deals">
            <Link to='/all' className="trending-product-link">{t('todaysdeals')}<BiRightArrowAlt/></Link>
            <div className="todays-deals-wrapper">
            <Carousel  responsive={responsive}>
                {
                    products.map( product =>
                        <div onClick={() => window.location.href = `/singlepage/${product.id}`} key={product.id} className="todays-deals-product">
                            <img className="todays-deals-img" src={product.images[0]} alt="" />
                            <i className="todays-deals-price">${product.price}</i>
                        </div>
                    )
                }
            </Carousel>
            </div>  
        </div>
    </div>
   </div>
  )
}

export default Home