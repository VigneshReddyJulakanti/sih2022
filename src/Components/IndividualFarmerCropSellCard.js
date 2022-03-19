import React from 'react'
import { useState } from 'react'

export default function IndividualFarmerCropSellCard(props) {
    const [phno, setphno] = useState(false);
  return (
    <>
        <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10">
            
            <div className="row p-2 bg-white border rounded mt-2 d-flex justify-content-between">
                {/* <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/HO8e9b8.jpg"/></div> */}
                <div className="col-md-6 mt-1">
                    <h5>Crop Name : {props.cropname}</h5>
                    <div className="d-flex flex-row">
                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>Quantity : {props.quantity}</span><br/>
                       
                    </div>
                    <p className="text-justify para mb-0">Company Or Organization : {props.company}</p>
                    <div className="mt-1 mb-1 spec-1"><span>address : </span><span className="dot"></span><span>{props.address}</span><span className="dot"></span></div>
                    {/* <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br/></span></div> */}
                    <p className="text-justify para mb-0">Description : {props.description}</p>
                    <br/><br/>
                    
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1 ml-3">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">{props.cost}</h4><span className="strike-text"></span>
                    </div>
                    {/* <h6 className="text-success">Includhipping</h6> */}
                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button" onClick={()=>{ phno ? setphno(false): setphno(true) }}>SELL</button>
                    {
                        phno &&
                        <p className="text-justify para mb-0 my-2 ">contact no : {props.contact}</p>
                    }
                    {/* <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
