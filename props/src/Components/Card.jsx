import React from "react";
function Card(props){
    const {img,width,height,name,gender}=props
    var cardStyle={
        textAlign:"center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 20px 70px"
    }
    return(
        <div style={cardStyle}>
             <img src={img} width={width} height={height}/>
             <h2>{name}</h2>
             <p>{gender}</p>
        </div>
    )
}
export default Card;