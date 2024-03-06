import React from "react";




export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            {props.elem.currentArc === 1 && <div className="card-badge">CURRENT ARC</div>}
            <img className="card-img" src={require(`../images/${props.elem.image}`)} alt="" />
            <p className="card-name">{props.elem.title}</p>
            <p className="card-description">{props.elem.description}</p>
        </div>
    )
}