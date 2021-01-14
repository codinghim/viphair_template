import Styles from './styles/reservation.module.scss'
// import emailjs from 'emailjs-com';

const Reservation = () => {

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
    const reserve = () => {
        //make reservation
    }

    return(
        <form className={Styles.reservation_form} data-aos="zoom-in" onSubmit={reserve}>
            <h3>Make reservation</h3>
            <input name="name" type="text" placeholder="Name" autoComplete="off" required/>
            <input name="phone" type="tel" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
            <input name="email" type="email" placeholder="Email" autoComplete="off" required />
            <input name="title" type="text" placeholder="Title" autoComplete="off" required />
            <textarea name="message" placeholder="Type your message here..." required />
            <button >Send</button>
          </form>
    )
}

export default Reservation