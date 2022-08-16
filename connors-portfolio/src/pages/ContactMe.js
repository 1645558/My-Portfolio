import React from "react"

const Contact = () => {

    const myFunc = () => {
        const submitText = document.getElementById('submitText');
        const clickedText = document.createElement('p');

        clickedText.textContent = 'Thank You!';
        submitText.appendChild(clickedText);
    }

    return (
        <div class="container-fluid">
            <div class="background">
                <div style={{ height: '100vh' }}>
                    <h1 className="d-flex justify-content-center pt-4" style={{ color: 'rgb(200, 200, 200)' }}>Reach Out!</h1>
                    <form action="mailto:connorwt99@gmail.com" className="d-flex flex-column align-items-center pt-5">
                        <input style={{ fontSize: '30px' }} className="w-25" type='email' name="email" placeholder="Email" />
                        <button onClick={myFunc} style={{ fontSize: '30px', border: 'none', borderRadius: '6px' }} className='mt-5' id="submit-btn" type="submit">Submit</button>
                        <div className="pt-5" style={{ fontSize: '40px', color: 'rgb(200, 200, 200)' }} id="submitText"></div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;