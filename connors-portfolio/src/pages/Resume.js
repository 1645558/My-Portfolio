import React from "react";

const Resume = () => {
    return (
        <div style={{ background: 'rgb(24, 24, 24)', height: '100vh', color: 'rgb(200, 200, 200)', overflowY: 'scroll' }}>
            <h1 className="d-flex justify-content-center">
                Connor Thompson
            </h1>
            <h4 className="d-flex justify-content-center">
                Junior Web Developer
            </h4>
            <p className="d-flex justify-content-center">
                1016 Wesley Downs Rd | 704-219-2058
            </p>
            <hr className="m-auto w-50" />
            <section className="container mb-5" style={{ paddingLeft: '17%' }}>
                <h5 className="pt-4">
                    Summary
                </h5>
                <p>
                    Efficient Junior Web Developer with Certificate in Full Stack Web Development. Excellent
                    communication and organizational abilities with resourceful approach to solving diverse problems.
                    Deadline-driven and knowledgeable professional with strong desire to learn and contribute to team
                    success. Successful at improving usability, performance and functionality by applying my skills.
                    Collaborative and hardworking team player with critical thinking skills and systematic approach.
                </p>
                <hr className="w-75" />
                <h5>
                    Skills
                </h5>
                <p>
                    React, JavaScript, CSS, HTML, Node, Express, MySQL, NoSQL, MongoDB, Bootstrap, Client-Side Routing,
                    Authentication, User Experience Design (UX)
                </p>
                <hr className="w-75" />
                <h5>
                    Education
                </h5>
                <p className="">
                    Highschool Diploma

                </p>
                <p>
                    Weddington HighSchool
                    2013-2017
                </p>
                <p>
                    Certificate: Full Stack Web Development
                </p>
                <p>
                    University of North Carolina at Charlotte
                    05/2022-08/2022
                </p>
            </section>
        </div>
    )
};

export default Resume;