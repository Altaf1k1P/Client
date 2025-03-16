import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/SingleProduct.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



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

                </div>
            </div>
        </>
    );
};

export default SingleProduct;
