import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container} from '@mui/material';
import ProductList from "../../components/ProductList/ProductList";

const Catalogue = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8889/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === '' || product.category === selectedCategory)
    );

    return (
        <div>
            <Container maxWidth="lg" style={{marginTop: '80px'}}>
            </Container>
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Catalogue;
