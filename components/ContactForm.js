import Styles from './styles/contactForm.module.scss'
// import emailjs from 'emailjs-com';

const ContactForm = () => {

    //send Email function using Emailjs
    // const sendEmail = (e) => {
    //     //set up env variable in next.config.js before using
    //     e.preventDefault();
    //     let serviceID = process.env.SERVICE_ID 
    //     let templateID = process.env.TEMPLATE_ID
    //     let userID = process.env.EMAILJS_USER_ID
    //     emailjs.sendForm(serviceID, templateID, e.target, userID)
    //         .then(res => {
    //             console.log(res.text)
    //             alert('Message successfully sent! We will reply as soon as possible.')
    //         }, err => {
    //             console.log(err.text)
    //             alert('Message successfully sent. We will reply as soon as possible.')
    //         })
    // }

    return(
        <form className={Styles.contact_us_form} data-aos="zoom-in" onSubmit={sendEmail}>
            <h3>Contact Us</h3>
            <input name="email" type="email" placeholder="Email" autoComplete="off" required />
            <input name="title" type="text" placeholder="Title" autoComplete="off" required />
            <textarea name="message" placeholder="Type your message here..." required />
            <button >Send</button>
          </form>
    )
}

export default ContactForm