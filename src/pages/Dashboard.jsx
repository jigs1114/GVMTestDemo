import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from './ProductCard';
import { productData } from '../poductdata/Product';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()
    const [productArr, setProductArr] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        setProductArr(productData || []);
        setFilteredProducts(productData || []);
    }, [productData]);

    const onChangePriceFilter = (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = productArr.filter(product => product.name.toLowerCase().includes(value));
        setFilteredProducts(filtered);
    };

    const sortByPrice = (value) => {
        let sortedProducts = [...filteredProducts];
        if (value === 'lowtohigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (value === 'hightolow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setSortBy(value);
        setFilteredProducts(sortedProducts);
    };

    return (
        <>
            <Header navigate={navigate} />
            <div className='p-3'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-2 col-12 border-end'>
                            <form className="d-flex">
                                <input
                                    onChange={onChangePriceFilter}
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </form>
                            <hr></hr>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <select
                                    className="form-select"
                                    onChange={(e) => sortByPrice(e.target.value)}
                                    value={sortBy}
                                >
                                    <option value={''}>Select</option>
                                    <option value={'lowtohigh'}>Low to High</option>
                                    <option value={'hightolow'}>High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-10 col-12'>
                            {
                                filteredProducts.length > 0?
                            
                            <div className='container'>
                                <div className='row'>
                                    {filteredProducts.map((data, i) =>
                                        <div key={i} className='col-lg-3 col-12'>
                                            <ProductCard data={data} />
                                        </div>
                                    )}
                                </div>
                            </div>:
                            <div className='text-center mt-5 fw-bold fs-4 text-danger'>Product not found!</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
