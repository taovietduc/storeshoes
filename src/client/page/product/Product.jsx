import React, { useEffect, useState } from 'react';
import './Product.css';
import SidebarPro from '../../components/sidebarProduct/SidebarPro';

const defaultProducts = [
    { id: 1, name: 'VANS AUTHENTIC CLASSIC', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317' },
    { id: 2, name: 'VANS OLD SKOOL CLASSIC', brand: 'VANS', price: '1.850.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-true-white-vn000ee3w00-1.jpg?v=1625932182133' },
    { id: 3, name: 'VANS CLASSIC SLIP-ON', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-classic-authentic-red-vn000ee3red-1.png?v=1625932676613' },
    { id: 4, name: 'VANS CLASSIC SK8-HI', brand: 'VANS', price: '1.950.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-slip-on-classic-black-black-vn000eyebka-1.jpg?v=1625936613977' },
    { id: 5, name: 'CONVERSE ALL STAR', brand: 'CONVERSE', price: '1.500.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-the-lizzie-vn0a4bx1rqj-1.jpg?v=1708412330133' },
    { id: 6, name: 'CONVERSE ONE STAR', brand: 'CONVERSE', price: '1.700.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg?v=1625938546987' },
    { id: 7, name: 'CONVERSE CHUCK TAYLOR', brand: 'CONVERSE', price: '1.800.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-vintage-pop-marshmallow-turt-ledove-vn0a5kxdr2s-1.jpg?v=1675498733000' },
    { id: 8, name: 'CONVERSE JACK PURCELL', brand: 'CONVERSE', price: '1.900.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-black-vn0a5kxdy28-1.jpg?v=1671994413000' },
    { id: 1, name: 'VANS AUTHENTIC CLASSIC', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317' },
    { id: 2, name: 'VANS OLD SKOOL CLASSIC', brand: 'VANS', price: '1.850.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-true-white-vn000ee3w00-1.jpg?v=1625932182133' },
    { id: 3, name: 'VANS CLASSIC SLIP-ON', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-classic-authentic-red-vn000ee3red-1.png?v=1625932676613' },
    { id: 4, name: 'VANS CLASSIC SK8-HI', brand: 'VANS', price: '1.950.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-slip-on-classic-black-black-vn000eyebka-1.jpg?v=1625936613977' },
    { id: 5, name: 'CONVERSE ALL STAR', brand: 'CONVERSE', price: '1.500.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-the-lizzie-vn0a4bx1rqj-1.jpg?v=1708412330133' },
    { id: 6, name: 'CONVERSE ONE STAR', brand: 'CONVERSE', price: '1.700.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg?v=1625938546987' },
    { id: 7, name: 'CONVERSE CHUCK TAYLOR', brand: 'CONVERSE', price: '1.800.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-vintage-pop-marshmallow-turt-ledove-vn0a5kxdr2s-1.jpg?v=1675498733000' },
    { id: 8, name: 'CONVERSE JACK PURCELL', brand: 'CONVERSE', price: '1.900.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-black-vn0a5kxdy28-1.jpg?v=1671994413000' },
    { id: 1, name: 'VANS AUTHENTIC CLASSIC', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317' },
    { id: 2, name: 'VANS OLD SKOOL CLASSIC', brand: 'VANS', price: '1.850.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-true-white-vn000ee3w00-1.jpg?v=1625932182133' },
    { id: 3, name: 'VANS CLASSIC SLIP-ON', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-classic-authentic-red-vn000ee3red-1.png?v=1625932676613' },
    { id: 4, name: 'VANS CLASSIC SK8-HI', brand: 'VANS', price: '1.950.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-slip-on-classic-black-black-vn000eyebka-1.jpg?v=1625936613977' },
    { id: 5, name: 'CONVERSE ALL STAR', brand: 'CONVERSE', price: '1.500.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-the-lizzie-vn0a4bx1rqj-1.jpg?v=1708412330133' },
    { id: 6, name: 'CONVERSE ONE STAR', brand: 'CONVERSE', price: '1.700.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg?v=1625938546987' },
    { id: 7, name: 'CONVERSE CHUCK TAYLOR', brand: 'CONVERSE', price: '1.800.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-vintage-pop-marshmallow-turt-ledove-vn0a5kxdr2s-1.jpg?v=1675498733000' },
    { id: 8, name: 'CONVERSE JACK PURCELL', brand: 'CONVERSE', price: '1.900.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-black-vn0a5kxdy28-1.jpg?v=1671994413000' },
    { id: 1, name: 'VANS AUTHENTIC CLASSIC', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317' },
    { id: 2, name: 'VANS OLD SKOOL CLASSIC', brand: 'VANS', price: '1.850.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-authentic-classic-true-white-vn000ee3w00-1.jpg?v=1625932182133' },
    { id: 3, name: 'VANS CLASSIC SLIP-ON', brand: 'VANS', price: '1.450.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-classic-authentic-red-vn000ee3red-1.png?v=1625932676613' },
    { id: 4, name: 'VANS CLASSIC SK8-HI', brand: 'VANS', price: '1.950.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-slip-on-classic-black-black-vn000eyebka-1.jpg?v=1625936613977' },
    { id: 5, name: 'CONVERSE ALL STAR', brand: 'CONVERSE', price: '1.500.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-the-lizzie-vn0a4bx1rqj-1.jpg?v=1708412330133' },
    { id: 6, name: 'CONVERSE ONE STAR', brand: 'CONVERSE', price: '1.700.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg?v=1625938546987' },
    { id: 7, name: 'CONVERSE CHUCK TAYLOR', brand: 'CONVERSE', price: '1.800.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-vintage-pop-marshmallow-turt-ledove-vn0a5kxdr2s-1.jpg?v=1675498733000' },
    { id: 8, name: 'CONVERSE JACK PURCELL', brand: 'CONVERSE', price: '1.900.000₫', image: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-sk8-low-black-vn0a5kxdy28-1.jpg?v=1671994413000' },

];

const Product = () => {
    const [products, setProducts] = useState(defaultProducts);

    useEffect(() => {
        // Fetch the list of products
        fetch('/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error("Error fetching products:", error);
                setProducts(defaultProducts);
            });
    }, []);

    return (
        <div className="product-page">
            <SidebarPro />
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.brand}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
