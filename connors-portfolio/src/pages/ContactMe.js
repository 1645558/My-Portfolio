import React from "react";

const Contact = () => {
    return (
        <div style={{ background: 'rgb(24, 24, 24)', height: '100vh' }}>
            <h1 className="d-flex justify-content-center pt-4" style={{ color: 'rgb(200, 200, 200)'}}>Reach Out!</h1>
            <form action="mailto:connorwt99@gmail.com" className="d-flex justify-content-center pt-5">
                <input className="w-25" type='email' name="email" placeholder="email" />
                <button id="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Contact;