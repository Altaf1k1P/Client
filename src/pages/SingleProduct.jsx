import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/SingleProduct.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMagnifyingGlass , faHeart , faArrowsRotate , faBagShopping  } from "@fortawesome/free-solid-svg-icons"; 
import ReviewForm from "../componnets/ReviewForm.jsx"



const SingleProduct = () => {
    const { productId } = useParams();

    const images = [
        "https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg",
        "https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/3.jpg.jpeg",
        "https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/1.jpg.jpeg",
        "https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/4.jpg.jpeg",
        "https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/2-768x768.jpg.jpeg",
      ];

      const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={images[i]} alt={`Thumbnail ${i}`} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  }

  const [activeTab, setActiveTab] = useState("home");

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500
  };


    return (
        <>
            <div className="breadcurm-section">
                <ul className='breadcurm'>
                    <li className='breadcurm-item'><Link rel="stylesheet" to="/" >Home</Link></li>
                    <li className='breadcurm-item'><Link rel="stylesheet" to="/shop" >Shop</Link></li>
                    <li className='breadcurm-item'>Fruits</li>
                    <li className='breadcurm-item active'>Shop</li>
                </ul>
            </div>
            <div className="product-section">
                <div className="product-image-section">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                            <img src='https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/5-600x600.jpg.jpeg' />
                            </div>
                            <div>
                            <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/3.jpg.jpeg" />
                            </div>
                            <div>
                            <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/1.jpg.jpeg" />
                            </div>
                            <div>
                            <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/4.jpg.jpeg" />
                            </div>
                            <div>
                            <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/2-768x768.jpg.jpeg" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="product-details-section">
                    <h1>Fresh Mango 1Kg</h1>
                    <div className="product-rating">
                        <FontAwesomeIcon icon={ faStar } className="review-star"/>
                        <FontAwesomeIcon icon={ faStar } className="review-star"/>
                        <FontAwesomeIcon icon={ faStar } className="review-star"/>
                        <FontAwesomeIcon icon={ faStar } className="review-star"/>
                        <FontAwesomeIcon icon={ faStar } className="review-star"/>
                        <span>(4 customer reviews)</span>
                    </div>
                    <div className="product-pricre">
                        <p>$10.00-$35.00</p>
                    </div>
                    <div className="product-sale-time">

                    </div>
                    <div className="product-short-description">
                        <p>Sapodillas tend to be found in the exotics isle of many retailers. They are not that common except in their countries of origin which is southern Mexico and Central America (Panama, Peurto Rica). Where they are endemic, the tree is known as níspero in the hispanic language. You find the tree in low and coastal forests.</p>
                    </div><hr />
                    <div className="product-quantity">
                        <div className="product-item-no">
                            <button onClick={decreaseQuantity} className="decrease">-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity} className="increase">+</button>
                        </div>
                        <div className="product-add-to-cart">
                            <button onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div><hr />
                </div>
            </div>
            <div className="product-tabs">
                <nav>
                    <div className="nav nav-tabs" role="tablist">
                    <button
                        className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                        onClick={() => setActiveTab("home")}
                    >
                        Home
                    </button>
                    <button
                        className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        Profile
                    </button>
                    <button
                        className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
                        onClick={() => setActiveTab("contact")}
                    >
                        Contact
                    </button>
                    </div>
                </nav>
                <div className="tab-content">
                    <div className={`tab-pane ${activeTab === "home" ? "show active" : "fade"}`}>
                    <h3>Fresh Fruit Sweet Sapodilla Wholesale</h3>
                    <p>Sapodillas tend to be found in the exotics isle of many retailers. They are not that common except in their countries of origin which is southern Mexico and Central America (Panama, Peurto Rica). Where they are endemic, the tree is known as níspero in the hispanic language. You find the tree in low and coastal forests.</p>

                    <p>The tree is mainly grown for shade, its fruit which we discuss briefly later and as an ornamental. The latex is the main source of chicle which is used in the production of a gum base for chewing gum.</p>

                    <p>The species name is Manilkara zapota (L.) P. van Rogen and is found in the Sapotaceae family.</p>

                    <p>My Indian friends know them as Chikoo and they feel the fruit rivals avocado for healthy nutrition which is saying something. A typical cultivar is ‘Tikal’.</p>

                    <h3>Description Of The Sapodilla Fruit</h3>
                    <p>A ripe sapodilla should be sweet with a soft pulpy rusty yellow-red flesh. The fruit as you can see from the photo is globose, conical or oval with one or more seeds. It weighs 75–200 g, ranging from 5 to 9 cm in diameter. The skin is a rusty or burnished orange. The flavour is quite unique too.</p>

                    <p>It is normally eaten fresh, but sometimes it is served as candy, dehydrated slices, jelly and juices.</p>

                    <h3>Cultivation</h3>
                    <p>Difficult as there are so many insects which attack the fruit and trees. Manilkara zapota is an evergreen tree growing to 25 m (82ft.) by 25 m (82ft) at a relatively slow rate. It is hardy to zone (UK) 10 but is frost tender so it can only really be seen on the Scilly Islands. The flowers are pollinated by Insects.It is noted for attracting wildlife.</p>

                    <p>Suitable soils are: light (sandy), medium (loamy) and heavy (clay) soils. The tree prefers well-drained soil but can grow well enough in impoverished, nutritionally poor soil. Suitable pH: acid and neutral soils but does grow in very acid and saline soils.</p>

                    <p>Does not grow in shade. It prefers dry or moist soil and can tolerate drought. The plant can tolerate strong winds but not maritime exposure.</p>
                    <h3>Nutritional Benefits Of The Fruit</h3>
                    <p>The main nutritional benefit comes from its high content of antioxidants especially vitamin C although it doesn’t seem as high as an orange or blackcurrant on a weight basis.</p>

                    <p>The main polyphenols are:- methyl chlorogenate, dihydromyricetin, quercitrin, myricitrin, (+)-catechin, (−)-epicatechin, (+)-gallocatechin, and gallic acid. Smaller amounts of methyl 4-O-galloylchlorogenate and 4-O-galloylchlorogenic acid have been found (Ma et al., 2003). These all have some degree of antioxidant potential.</p>

                    <p>A ‘good’ antioxidant content is not to be ignored as most nutritionists regard antioxidants as suitable vehicles to attack free radicals which are associated with the causes of inflammation, cancers and aging. The fibre content (5.3g/100g) supposedly helps reduce constipation but it’s not a cure otherwise it would be medicine, although I’m not sure that too many other web-sites over emphasize that point. Fibre taken on a regular basis helps to reduce fat absorption, can also mop up free radicals and ensures a healthy digestive system.</p>

                    <p>Did I mention tannins ? No ? Well these are components in fruit generally which have both anti-microbial and anti-viral properties. Whether there are any specific benefits associated with the sapodilla is still being evaluated but it’s clear some interesting components to be examined.</p>

                    <p>There is also a reasonable vitamin content too.</p>

                    <p>Vitamin A (retinol) is of course good for eyes and general metabolism. With a reasonably rich vitamin C content (14.7mg/100g, 24.5 per cent RDA) which keeps cells like leukocytes that combat harmful bacteria and other micro-organisms topped up, there is plenty to be offered.</p>

                    <p>The iron content is 4% RDA and it is taken in India as way to reduce the risk of anaemia (anemia).</p>

                    <p>RDA – Recommended Daily Amount.</p>

                    <p>The seeds must be removed before eating as they contain hydrocyanic acid. The older leaves contain poisonous alkaloids.</p>
                    </div>
                    <div className={`tab-pane ${activeTab === "profile" ? "show active" : "fade"}`}>
                    <table>
                        <tbody>
                            <tr>
                            <th>Brand</th>
                            <td>
                                <p>Hippie</p>
                            </td>
                            </tr>
                            <tr>
                            <th>Dietary &amp; Lifestyle</th>
                            <td>
                                <p>Organic, Raw, Vegan</p>
                            </td>
                            </tr>
                            <tr>
                            <th>Size</th>
                            <td>
                                <p>1 Kg, 2 Kg, 500g</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className={`tab-pane ${activeTab === "contact" ? "show active" : "fade"}`}>
                    <ReviewForm />
                    </div>
                </div>
            </div>
            <div className="related-products">
                <h2 >Related Products</h2>
                <div className="slider-container">
                    <Slider {...settings2}>
                        <div className="product-slider">
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
                        </div>
                        <div className="product-slider">
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
                        </div>
                        <div className="product-slider">
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
                        </div>
                        <div className="product-slider">
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
                        </div>
                        <div className="product-slider">
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
                        </div>
                        <div className="product-slider">
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
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
