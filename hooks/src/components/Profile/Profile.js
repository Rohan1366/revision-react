import React from 'react'
import './Profile.css'
import { useState } from 'react'
const Profile = () => {
    const [state , setState]=useState({
        name: "Chris John",
    gender: "male",
    city: "Delhi",
    image:
      "https://i.pinimg.com/originals/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg",
      country:"india"
    })
    const [styles, setStyles] = useState({
        bgColor: "white",
        textColor: "black",
        text: "Check to Switch Dark Mode",
      });
    const getuserData=()=>{
        fetch("https://randomuser.me/api/?results=1")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setState({
                name:data.results[0].name.first,
                gender:data.results[0].gender,
                city: data.results[0].location.city,
                image: data.results[0].picture.large,
                country:data.results[0].location.country
            })
        })
    }
    const changeStyle = (event) => {
        // alert(event.target.checked);
        // alert(typeof event.target.checked);
    
        // if (event.target.checked) {
        //   //   setBgColor("black");
        //   //   setTextColor("white");
        //   setStyles({
        //     bgColor: "black",
        //     textColor: "white",
        //     text: "Uncheck to Switch Light Mode",
        //   });
        // } else {
        //   //   setBgColor("white");
        //   //   setTextColor("black");
        //   setStyles({
        //     bgColor: "white",
        //     textColor: "black",
        //     text: "Check to Switch Dark Mode",
        //   });
        // }
        {event.target.checked ? setStyles({
              bgColor: "black",
              textColor: "white",
              text: "Uncheck to Switch Light Mode",
            }) : setStyles({
                  bgColor: "white",
                  textColor: "black",
                  text: "Check to Switch Dark Mode",
                }); }
      };
  return (
    <div className='card'
    style={{ backgroundColor: styles.bgColor, color: styles.textColor }}
    >
       <div style={{width:"35%"}}>
            <img src={state.image} width="100%" height="100%"  />
       </div>

       <div style={{width:"65%" , padding:"30px"}}>
          <dl>
            <dt><b>User Name</b></dt>
            <dd>{state.name}</dd>
            <dt><b>City</b></dt>
            <dd>{state.city}</dd>
            <dt><b>Gender</b></dt>
            <dd>{state.gender}</dd>
            <dt><b>Country</b></dt>
            <dd>{state.country}</dd>
            <dt><b>Description</b></dt>
            <dd>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quam
            totam deserunt atque voluptatum dolores deleniti voluptates ut
            cupiditate, beatae molestiae assumenda magnam placeat officia ab,
            aspernatur odit animi suscipit, sapiente soluta voluptatem. Optio,
            aperiam non magni, enim inventore similique quaerat iusto esse
            libero necessitatibus, dolor quod iste molestiae repellendus!

            </dd>
            
          </dl>
          <button onClick={getuserData}>Random User</button>
          <br />
        <input
          type="checkbox"
          onChange={changeStyle}
          style={{ marginTop: "15px" }}
        />
        {styles.text}
       </div>
    </div>
  )
}

export default Profile