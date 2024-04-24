import React, { useEffect, useState } from 'react'
import { productData } from '../poductdata/Product';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

function ProductDetails() {
    const navigate = useNavigate()
    const params = useParams()
    const [productDetails, setProductDetails] = useState('')
    useEffect(() => {

        let productArr = productData
        const filtered = productArr.filter(product => +product.id === +params.id);
        console.log(filtered);
        setProductDetails(filtered[0])

    }, [])
    return (
        <><Header  navigate={navigate} />
            <div className='container  productDetails'>
                <div className='mt-3 p-3'>
                    <div className='row'>

                        <div className='col-lg-4 col-12'>
                            <img className="w-100 p-3" src={productDetails.image} alt="Title" />
                        </div>
                        <div className='col-lg-8 col-12'>
                            <div className='fs-4'>{productDetails.name}</div>
                            <div className='mt-3'>
                                {productDetails.description}
                            </div>
                            <div className='fs-3 mt-3 fw-bold'>
                                ₹ {Number(productDetails.price).toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails