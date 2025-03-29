import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "../assets/css/StyleShop.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faHeart , faArrowsRotate , faBagShopping } from "@fortawesome/free-solid-svg-icons"; 
import ProductListing from '../componnets/ProductListing';


function Shop() {

    const navigate = useNavigate()


    const handleSingleProductDetailsRedirection = (productId) => {

        navigate(`/product/${productId}`)
    }

    return (
        <>
            <div className='shop-main'>
                <h1 className='shop-title'>SHOP</h1>
                <ul className='breadcurm'>
                    <li className='breadcurm-item'><Link rel="stylesheet" to="/" >Home</Link></li>
                    <li className='breadcurm-item active'>Shop</li>
                </ul>
            </div>
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
                
                <ProductListing/>
            </div>
        </>
    )
}


export default Shop