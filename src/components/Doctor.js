import React from "react";

function Doctor(props) {

    console.log(props);
    return (
        <div className="col-lg-6">
            <div className="member d-flex align-items-start">
                <div className="pic"><img src={props.img} className="img-doctor" alt /></div>
                <div className="member-info">
                    <h4>{props.name}</h4>
                    <span>{props.designation}</span>
                    <p>{props.des}</p>
                    <div className="social">
                        <a href><i className="ri-twitter-fill" /></a>
                        <a href><i className="ri-facebook-fill" /></a>
                        <a href><i className="ri-instagram-fill" /></a>
                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor;