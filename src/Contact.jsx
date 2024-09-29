import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub-title">Contact Us</h1>
                <p>
                    <i className="fa-solid fa-paper-plane"></i>
                    <a href="mailto:emailus123@gmail.com">emailus123@gmail.com</a>
                </p>
                <p>
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:123-456-7890" target="_blank" rel="noopener noreferrer">123-456-7890</a>
                </p>
                <p>
                Copyright @ 2024 MoodMap Inc. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Contact
