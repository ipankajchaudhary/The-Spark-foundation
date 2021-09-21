import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    var stylingObject = {
        bg: {
            backgroundImage:`url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpapertip.com%2Fwpic%2FbxbRxb_bank-wallpaper%2F&psig=AOvVaw0DOhCUR0_-DSlBH9M59X1_&ust=1632328927256000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDz0aHBkPMCFQAAAAAdAAAAABAD)`
        },
        center:{
            display:"inline-block",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            width: "500px",
            height: "100px",
            margin: "auto",
            textAlign  :'center'
            // backgroundColor: "#f3f3f3",
        },
        text:{
            color: "black"
        },
        btn: {
            color: "white",
            textColor: "white",
        },
        link: {
            textDecoration : "none",
            color : "white"
        }
    }
    return (
        <div style={stylingObject.bg}>
            <div style={stylingObject.center}> <div style={stylingObject.text}> <h2> <b> Welcome to the TSF BANK</b> </h2>
            </div>
            <div> <button className="btn btn-primary" style={stylingObject.btn}> <Link  style={stylingObject.link} to="/view">GET STARTED</Link> </button> </div></div>
        </div>
    )
}

export default Home
