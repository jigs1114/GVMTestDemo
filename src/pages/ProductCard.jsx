import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard(props) {
    const navigate = useNavigate()
  return (
    <>
    <div className='mt-3 '>
        <div className="card">
            <img className="card-img-top p-3" src={props.data.image} alt="Title" />
            <div className="card-body" onClick={()=>navigate(`/dashboard/productdetails/${props.data.id}`)}>
                <div className=" product_name">{props.data.name}</div>
                <p className="card-text fw-bold mt-3">₹. {Number(props.data.price).toFixed(2)}</p>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default ProductCard