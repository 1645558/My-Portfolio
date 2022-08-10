import React from "react";
import '../index.css'

const Home = () => {
    return (
        <div style={{ height: '100vh', background: 'rgb(24, 24, 24)'}}>
            <h1 className="d-flex justify-content-center pt-4" 
            style={{ color: 'rgb(200, 200, 200)'}}>Connor Thompson</h1>
            <h1 className="d-flex justify-content-center pt-4" 
            style={{ color: 'rgb(200, 200, 200)'}}>
                Junior Web Developer
            </h1>
            <p className="d-flex justify-content-center pt-4" 
            style={{ color: 'rgb(200, 200, 200)'}}>
                With a passion of bringing ideas to life
            </p>
        </div>
    )
};

export default Home;