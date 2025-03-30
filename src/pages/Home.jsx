import React from 'react';
import SlideComp from '../componnets/Slider.jsx';
import cate1 from "../assets/wp.images/img-cate1.png";
import BgTitle from "../assets/wp.images/bg-title.png";
import '../assets/css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faMagnifyingGlass , faHeart , faArrowsRotate , faBagShopping } from "@fortawesome/free-solid-svg-icons";
import FeatureBlogs from '../componnets/FeatureBlogs.jsx';

function Home() {
  return (
    <div>
      
        <SlideComp />
      
      {/* home banner */}

      <div className='home-banner'>
        <div className='container'>
          {/* add content */}
        </div>
        <div className='container'>
          {/* add content */}
        </div>
        <div className='container'>
          {/* add content */}
        </div>
      </div>

      {/* home banner end */}

      {/* category */}

      <div className='layout2'>
        {/* <!-- Section: Headline --> */}
        <div className='layout2_header'>
          <p>Shop By Categories</p>
          <h1>
            <span>Featured Categories</span>
          </h1>
          <img src={`${BgTitle}`} alt="bg-title" className='bgtitle'/>
        </div>
           {/*  <!-- Section: item --> */}
        <div className='category-item-inner'>
          <div className='category-item'>
            <img src={`${cate1}`} alt="" className='category-img' />
            <div className='category-content'>
              <a href="">fruits</a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
              <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-content'>
              <a href="">fruits</a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
              <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-content'>
              <a href="">fruits</a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
              <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-content'>
              <a href="">fruits</a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
              <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-content'>
              <a href="">fruits</a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
              <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-content'>
              <a href="">fruits</a>
            </div>
          </div>
        </div>

            {/*  <!-- Section: service-highlights --> */}
        <div className="service-highlights">
          <div className="service-item">
           <FontAwesomeIcon icon={faTruckFast} style={{color: "#ffffff"}} />
            <div className="service-content">
              <p>Free Shipping</p>
              <p>On order over $100</p>
            </div>
          </div>

          <div className="service-item">
            <i class="fa-light fa-truck-fast" style={{color:"#fffff"}}></i>
            <div className="service-content">
              <p>Free Returns</p>
              <p>Returns are free within 9 days</p>
            </div>
          </div>

          <div className="service-item">
            <i></i>
            <div className="service-content">
              <p>Support 27/7</p>
              <p>Contact us 24 hours a day</p>
            </div>
          </div>

          <div className="service-item">
            <i></i>
            <div className="service-content">
              <p>100% Payment Secure</p>
              <p>Your payment are safe with us</p>
            </div>
          </div>
        </div>
      </div>
      {/* category end */}
      
      {/* shop */}
      <div className='layout2'>
        {/* <!-- Section: Headline --> */}
        <div className='layout2_header'>
          <p>Shop By Categories</p>
          <h1>
            <span>Featured Categories</span>
          </h1>
          <img src={`${BgTitle}`} alt="bg-title" className='bgtitle'/>
        </div>
        {/*  <!-- Section: shop --> */}
        <div className='shop-items-flex'> 
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name' style={ { cursor: "pointer" } } onClick={ () => handleSingleProductDetailsRedirection(100) }>
                                Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name'>Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name'>Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name'>Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
        </div>
        {/* shop end */}
      </div>

       {/* banner-timer */}
       <div className="banner-timer">
           <div className="container">
                <div className="content">
                   <p className="sub-heading">Natural Product</p>
                     <h2 className="discount">SAVE 40% OFF</h2>
                        <p className="description">Broccoli Roses, Always Fresh And Delicious. 100% Organic</p>
          
                <div className="countdown">
                   <div className="time-box">
                      <span>13</span>
                        <p>HOURS</p>
                    </div>
                   <div className="time-box">
                    <span>41</span>
                    <p>MINS</p>
                   </div>
                <div className="time-box">
                   <span>36</span>
                  <p>SECS</p>
                </div>
            </div>

          <button className="shop-btn">SHOP NOW</button>
        </div>
      </div>
    </div>
     {/* people section */}
        {/*wordpress  */}
        {/*end people section */}


     {/* Latest product */}
     <div className='layout2'>
        {/* <!-- Section: Headline --> */}
        <div className='layout2_header'>
          <p>See Our Latest</p>
          <h1>
            <span>Our Products</span>
          </h1>
          <img src={`${BgTitle}`} alt="bg-title" className='bgtitle'/>
        </div>
        {/*  <!-- Section: shop --> */}
        <div className='shop-items-flex'> 
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name' style={ { cursor: "pointer" } } onClick={ () => handleSingleProductDetailsRedirection(100) }>
                                Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name'>Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name'>Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
                        <div className='shop-item'>
                            <div className='shop-item-image'>
                                <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg" alt="" />
                                <div className='shop-hover-item'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='hover-icon' />
                                    <FontAwesomeIcon icon={ faHeart } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faArrowsRotate } className='hover-icon' />
                                    <FontAwesomeIcon icon={ faBagShopping } className='hover-icon' />
                                </div>
                            </div>
                            <div className='shop-item-description'>
                                <p className='product-name'>Fresh Mango 1Kg</p>
                                <p className='product-type'>Shop</p>
                                <p className='product-price'>$10.00-$35.00</p>
                            </div>
                        </div>
        </div>
        {/* shop end */}

      </div>

      <FeatureBlogs />

    </div>
  );
}

export default Home;