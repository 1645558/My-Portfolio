import React from "react";

const Resume = () => {
    return (
        <div style={{ background: 'rgb(24, 24, 24)', height: '100vh', color: 'rgb(200, 200, 200)', overflowY: 'scroll' }}>
            <h1 style={{ fontSize: '70px'}} className="d-flex justify-content-center">
                Connor Thompson
            </h1>
            <h4 style={{ fontSize: '50px'}} className="d-flex justify-content-center">
                Junior Web Developer
            </h4>
            <p style={{ fontSize: '20px'}} className="d-flex justify-content-center">
                1016 Wesley Downs Rd | 704-219-2058
            </p>
            <hr className="m-auto w-50" />
            <section className="container mb-5">
                <div style={{ width: '50vw', paddingLeft: '3%'}}>
                    <h4 style={{ fontSize: '30px'}} className="pt-4">
                        Summary
                    </h4>
                    <p className="pt-3" style={{ fontSize: '20px'}}>
                        Efficient Junior Web Developer with Certificate in Full Stack Web Development. Excellent
                        communication and organizational abilities with resourceful approach to solving diverse problems.
                        Deadline-driven and knowledgeable professional with strong desire to learn and contribute to team
                        success. Successful at improving usability, performance and functionality by applying my skills.
                        Collaborative and hardworking team player with critical thinking skills and systematic approach.
                    </p>
                    <hr className="w-75" />
                    <h4 style={{ fontSize: '30px'}}>
                        Skills
                    </h4>
                    <p className="pt-3" style={{ fontSize: '20px'}}>
                        React, JavaScript, CSS, HTML, Node, Express, MySQL, NoSQL, MongoDB, Bootstrap, Client-Side Routing,
                        Authentication, User Experience Design (UX)
                    </p>
                    <hr className="w-75" />
                    <h4 style={{ fontSize: '30px'}}>
                        Education
                    </h4>
                    <ul>
                        <p className="pt-4" style={{ fontSize: '20px'}}>
                            Highschool Diploma

                        </p>
                        <p style={{ fontSize: '20px'}}>
                        - Weddington HighSchool
                        2013-2017
                        </p>
                        <p style={{ fontSize: '20px'}} className="pt-4">
                            Certificate: Full Stack Web Development
                        </p>
                        <p style={{ fontSize: '20px'}}>
                            - University of North Carolina at Charlotte
                            05/2022-08/2022
                        </p>
                    </ul>
                    <hr className="w-75" />
                    <h4 style={{ fontSize: '30px'}}>
                        Work Experience
                    </h4>
                    <p className="pt-5" style={{ fontSize: '20px'}}>
                        DSP Associate - Spears Enterprises LLC
                    </p>
                    <ul>
                        <li style={{ fontSize: '20px'}}>
                            Completed on-time deliveries by choosing best and most efficient routes.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Operated vehicle safely in highly congested areas with no traffic violations.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Completed rush deliveries on tight timetables to satisfy customer needs.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Communicated customer complaints, requests and feedback to company management for
                            swift resolution.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Contacted customers prior to delivery to confirm and coordinate delivery times.
                        </li>
                    </ul>
                    <p className="pt-5" style={{ fontSize: '20px'}}>
                        HVAC Technician - Mount Mitchell Heating & Air
                    </p>
                    <ul>
                        <li style={{ fontSize: '20px'}}>
                            Maintained quality assurance and customer satisfaction objectives.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Executed diagnostics, troubleshooting and evaluations on HVAC units.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Organized work to meet demanding production goals.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Completed job reports and logs immediately following service calls.
                        </li>
                    </ul>
                    <p className="pt-5" style={{ fontSize: '20px'}}>
                        Delivery Driver - Sharon's linen and laundry service
                    </p>
                    <ul>
                        <li style={{ fontSize: '20px'}}>
                            Successfully avoided time delivery delays by carefully planning best routes.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Fostered positive working relationships with regular customers.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Verified daily deliveries against shipping instructions before delivering to customers
                        </li>
                    </ul>
                    <p className="pt-5" style={{ fontSize: '20px'}}>
                        Deli Worker - Ingles Markets
                    </p>
                    <ul>
                        <li style={{ fontSize: '20px'}}>
                            Carefully prepared orders by slicing, weighing and packaging cheeses and meats
                            and accurately calculated prices.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Cleaned and sanitized dishes and utensils, consistently keeping adequate supplies
                            on hand for expected customer loads.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Listened carefully to customer instructions and prepared orders according to those
                            preferences.
                        </li>
                    </ul>
                    <p className="pt-5" style={{ fontSize: '20px'}}>
                        Cashier - Poppy Seeds Bagels
                    </p>
                    <ul>
                        <li style={{ fontSize: '20px'}}>
                            Operated cash register for cash, check and credit card transactions with excellent accuracy levels.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Worked flexible schedule and extra shifts to meet business needs.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Restocked and organized merchandise in front lanes.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Answered questions about store policies and addressed customer concerns.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Worked closely with shift manager to solve problems and handle customer concerns.
                        </li>
                    </ul>
                    <p className="pt-5" style={{ fontSize: '20px'}}>
                        Line Cook - Smoke BBQ & Grill
                    </p>
                    <ul>
                        <li style={{ fontSize: '20px'}}>
                            Prepared multiple orders simultaneously during peak periods with high accuracy rate maximizing customer satisfaction and repeat business.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Set up and prepared cooking supplies and workstations during opening and closing to
                            maximize productivity.
                        </li>
                        <li style={{ fontSize: '20px'}}>
                            Created identical dishes numerous times daily with consistent care, attention to detail and quality.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
};

export default Resume;