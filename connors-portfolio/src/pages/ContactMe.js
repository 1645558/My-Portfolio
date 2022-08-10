import React from "react";

const Contact = () => {
    return (
        <div style={{ background: 'rgb(24, 24, 24)', height: '100vh' }}>
            <form action="mailto:connorwt99@gmail.com" className="d-flex justify-content-center pt-5">
                <input className="w-25" type='email' name="email" placeholder="email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Contact;