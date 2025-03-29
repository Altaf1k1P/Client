import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faArrowsRotate, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { getAllProducts } from "./AllProducts.jsx";  // Ensure correct import


function ProductListing() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);  // ✅ Initialize as an empty array
    const [loading, setLoading] = useState(true);  // ✅ Track loading state

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            if (data) {
                setProducts(data);
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const handleSingleProductDetailsRedirection = (productId) => {
        navigate(`/product/${productId}`);
    };

    if (loading) {
        return <p>Loading products...</p>;  // ✅ Prevent mapping over null
    }

    return (
        <>
            {products.length === 0 ? (
                <p>No products available.</p>  // ✅ Handle empty state
            ) : (
                products.map((product) => (
                    <div className="shop-item" key={product.id}>
                   
                         <div className="shop-item-image">
                            <img src={product.images?.[0]?.src || "placeholder.jpg"} alt={product.name} />
                            <div className="shop-hover-item">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="hover-icon" />
                                <FontAwesomeIcon icon={faHeart} className="hover-icon" />
                                <FontAwesomeIcon icon={faArrowsRotate} className="hover-icon" />
                                <FontAwesomeIcon icon={faBagShopping} className="hover-icon" />
                            </div>
                        </div>
                        <div className="shop-item-description">
                            <p className="product-name" style={{ cursor: "pointer" }} onClick={() => handleSingleProductDetailsRedirection(product.id)}>
                                {product.name}
                            </p>
                            <p className="product-type">{product.categories?.[0]?.name || "Uncategorized"}</p>
                            <p className="product-price">${product.price}</p>
                        </div>
                      
                    </div>
                ))
            )}
        </>
    );
}

export default ProductListing;
