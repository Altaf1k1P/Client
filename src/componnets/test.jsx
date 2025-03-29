import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faArrowsRotate, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { getAllProducts } from "./AllProducts.jsx";  // Ensure correct import

function Test() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);  // ✅ Initialize as an empty array
    const [loading, setLoading] = useState(true);  // ✅ Track loading state

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            console.log(data)
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
                         <img src={product.images?.[0]?.src || "placeholder.jpg"} alt={product.name} />
                            <p className="product-price">${product.price}</p>
                        </div>
                ))
            )}
        </>
    );
}

export default Test;
