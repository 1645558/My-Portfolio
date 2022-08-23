import React from "react";

const About = () => {
    return (
        <div class="container-fluid">
            <div class="background">
                <div style={{ height: '100vh', color: 'rgb(200, 200, 200)' }}>
                    <h1 className="d-flex justify-content-center pt-4">
                        About Me
                    </h1>
                    <p style={{ textAlign: 'center', paddingLeft: '20%', paddingRight: '20%' }}>
                        My name is Connor Thompson, I'm a junior web developer based in Charlotte NC, USA.
                        I'm passionate about building cutting-edge applications! My journey in coding started
                        a year ago and I've been striving to build bigger and better projects everyday.
                        Checkout my portfolio section to see my favorite projects!
                    </p>
                </div>
            </div>
        </div>
    )
};

export default About;