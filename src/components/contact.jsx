import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
        <input type="text" className="w-6 inputfield" placeholder='Full name' />
        <input type="text" className="w-6 inputfield" placeholder='Email' />
        <textarea className='inputfield w-6' cols="30" rows="10" placeholder='Message'></textarea>
        <div className="btx">Send</div>
    </div>
  )
}

export default Contact;