import React from "react";
import '../index.css'

const Home = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="background">
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>
                    <div class="cube"></div>

                    <div style={{ height: '100vh' }}>
                        <h1 className="d-flex justify-content-center pt-4"
                            style={{ color: 'rgb(200, 200, 200)', fontSize: '100px', marginTop: '10%' }}>Connor Thompson</h1>
                        <h1 className="d-flex justify-content-center pt-4"
                            style={{ color: 'rgb(200, 200, 200)', fontSize: '70px' }}>
                            Junior Web Developer
                        </h1>
                        <p className="d-flex justify-content-center pt-4"
                            style={{ color: 'rgb(200, 200, 200)', fontSize: '30px' }}>
                            With a passion of bringing ideas to life
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;