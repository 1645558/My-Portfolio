import React from "react";
import '../index.css'

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="background">
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>

                    <div style={{ height: '100vh' }}>
                        <h1 className="home d-flex justify-content-center pt-4"
                            style={{ color: 'rgb(200, 200, 200)', marginTop: '10%' }}>Connor Thompson</h1>
                        <h1 className="home d-flex justify-content-center pt-4"
                            style={{ color: 'rgb(200, 200, 200)' }}>
                            Junior Web Developer
                        </h1>
                        <p className="d-flex justify-content-center pt-4"
                            style={{ color: 'rgb(200, 200, 200)' }}>
                            With a passion of bringing ideas to life
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;