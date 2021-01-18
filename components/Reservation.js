import { useEffect, useState } from 'react'
import Styles from './styles/reservation.module.scss'
import { close, showAlert, closeAlert } from '../lib/reserve'
// import emailjs from 'emailjs-com';

const Reservation = () => {
    const [today, setToday] = useState("");
    const [nextWeek, setNextWeek] = useState("");

    useEffect(()=>{
        dateMinMax()
    },[])

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

    const reserve = (e) => {
        e.preventDefault();
        const alert = document.getElementById("alertMessage")
        alert.innerHTML= `Thanks for contacting us, ${e.target.elements.name.value}. We will reply to you as soon as possible. Otherwise, Call us at 777-777-7777.`
        showAlert()
    }
    
    const dateMinMax = () =>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        let restoday = yyyy + '-' + mm + '-' + dd;
        setToday(restoday)

        let nextWeek = new Date(today.getTime()+ 7 * 24 * 60 * 60 * 1000); // add 7 days
        dd = String(nextWeek.getDate()).padStart(2, '0');
        mm = String(nextWeek.getMonth() + 1).padStart(2, '0');
        yyyy = nextWeek.getFullYear();

        nextWeek = yyyy + '-' + mm + '-' + dd;
        setNextWeek(nextWeek)
        return
    }

    return(
        <div id="reservation" className={Styles.reservation_container}>
            
            <form className={Styles.reservation_form} data-aos="zoom-in" onSubmit={reserve}>
                <h3>Make reservation</h3>
                <input name="name" type="text" placeholder="Name" autoComplete="off" required/>
                <input name="phone" type="tel" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autoComplete="off" required />
                <input name="date" type="date" autoComplete="off" min={today} max={nextWeek} required />
                <input name="time" type="time" autoComplete="off" min="10:00" max="8:00" required />
                <textarea name="message" placeholder="Type your message here..." required />
                <button >Send</button>
                <span onClick={close}>&times;</span>
            </form>
            <div id="alert" className={Styles.alert_container}>
                
                <div className={Styles.alert}>
                    <div id="alertMessage" className={Styles.alert_message}></div>
                    <span onClick={closeAlert}>&times;</span>
                </div>
            </div>
        </div>
    )
}

export default Reservation