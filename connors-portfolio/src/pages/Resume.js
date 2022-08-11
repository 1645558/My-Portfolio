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
                <h4 className="pt-4">
                    Summary
                </h4>
                <p>
                    Efficient Junior Web Developer with Certificate in Full Stack Web Development. Excellent
                    communication and organizational abilities with resourceful approach to solving diverse problems.
                    Deadline-driven and knowledgeable professional with strong desire to learn and contribute to team
                    success. Successful at improving usability, performance and functionality by applying my skills.
                    Collaborative and hardworking team player with critical thinking skills and systematic approach.
                </p>
                <hr className="w-75" />
                <h4>
                    Skills
                </h4>
                <p>
                    React, JavaScript, CSS, HTML, Node, Express, MySQL, NoSQL, MongoDB, Bootstrap, Client-Side Routing,
                    Authentication, User Experience Design (UX)
                </p>
                <hr className="w-75" />
                <h4>
                    Education
                </h4>
                <ul>
                    <p className="">
                        Highschool Diploma

                    </p>
                    - Weddington HighSchool
                    2013-2017
                    <p className="pt-4">
                        Certificate: Full Stack Web Development
                    </p>
                    <p>
                        - University of North Carolina at Charlotte
                        05/2022-08/2022
                    </p>
                </ul>
                <hr className="w-75" />
                <h4>
                    Work Experience
                </h4>
                <p>
                    DSP Associate - Spears Enterprises LLC
                </p>
                <ul>
                    <li>
                        Completed on-time deliveries by choosing best and most efficient routes.
                    </li>
                    <li>
                        Operated vehicle safely in highly congested areas with no traffic violations.
                    </li>
                    <li>
                        Completed rush deliveries on tight timetables to satisfy customer needs.
                    </li>
                    <li>
                        Communicated customer complaints, requests and feedback to company management for
                        swift resolution.
                    </li>
                    <li>
                        Contacted customers prior to delivery to confirm and coordinate delivery times.
                    </li>
                </ul>
                <p>
                    HVAC Technician - Mount Mitchell Heating & Air
                </p>
                <ul>
                    <li>
                        Maintained quality assurance and customer satisfaction objectives.
                    </li>
                    <li>
                        Executed diagnostics, troubleshooting and evaluations on HVAC units.
                    </li>
                    <li>
                        Organized work to meet demanding production goals.
                    </li>
                    <li>
                        Completed job reports and logs immediately following service calls.
                    </li>
                </ul>
                <p>
                    Delivery Driver - Sharon's linen and laundry service
                </p>
                <ul>
                    <li>
                        Successfully avoided time delivery delays by carefully planning best routes.
                    </li>
                    <li>
                        Fostered positive working relationships with regular customers.
                    </li>
                    <li>
                        Verified daily deliveries against shipping instructions before delivering to customers
                    </li>
                </ul>
                <p>
                    Deli Worker - Ingles Markets
                </p>
                <ul>
                    <li>
                        Carefully prepared orders by slicing, weighing and packaging cheeses and meats
                        and accurately calculated prices.
                    </li>
                    <li>
                        Cleaned and sanitized dishes and utensils, consistently keeping adequate supplies
                        on hand for expected customer loads.
                    </li>
                    <li>
                        Listened carefully to customer instructions and prepared orders according to those
                        preferences.
                    </li>
                </ul>
                <p>
                    Cashier - Poppy Seeds Bagels
                </p>
                <ul>
                    <li>
                        Operated cash register for cash, check and credit card transactions with excellent accuracy levels.
                    </li>
                    <li>
                        Worked flexible schedule and extra shifts to meet business needs.
                    </li>
                    <li>
                        Restocked and organized merchandise in front lanes.
                    </li>
                    <li>
                        Answered questions about store policies and addressed customer concerns.
                    </li>
                    <li>
                        Worked closely with shift manager to solve problems and handle customer concerns.
                    </li>
                </ul>
                <p>
                    Line Cook - Smoke BBQ & Grill
                </p>
                <ul>
                    <li>
                        Prepared multiple orders simultaneously during peak periods with high accuracy rate maximizing customer satisfaction and repeat business.
                    </li>
                    <li>
                        Set up and prepared cooking supplies and workstations during opening and closing to
                        maximize productivity.
                    </li>
                    <li>
                        Created identical dishes numerous times daily with consistent care, attention to detail and quality.
                    </li>
                </ul>
            </section>
        </div>
    )
};

export default Resume;