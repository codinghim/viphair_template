import { useEffect } from 'react'
import Layout from '../components/Layout'
import { mobileNav, closeNavMenu } from '../lib/navbar'
import Styles from '../styles/pages/services.module.scss'

const Services = () => {
    useEffect(()=>{
        closeNavMenu()
        mobileNav()
    })
    const menuArr = [
        {"title": "haircut", "price": "$ 35 - $ 150"},
        {"title": "color", "price": "$ 100 - $ 500"},
        {"title": "extenston", "price": "$ 200 - $ 600"},
        {"title": "dry & style", "price": "$ 60 - $ 100"},
        {"title": "curls", "price": "$ 100 - $ 300"},
    ]

    return(
        <>
        <Layout>
            <section className={Styles.intro_section}>
                
                <div className={Styles.menu_container}>
                    <p className={Styles.services_title}>Services</p>
                    <p className={Styles.services_description}>The best way to serve you is to communicate with you. Please contact us or come in to help you have the best experience. </p>
                    {menuArr.map((menu,index)=>(
                        <div className={Styles.menu_card} key={index}>
                        <div className={Styles.menu_title}>{menu.title}</div>
                        <div className={Styles.menu_price}>{menu.price}</div>
                    </div>
                    ))}
                    <p className={Styles.services_notice}>*Price may vary depending on stylists, length, and certain designs</p>
                </div>
            </section>
        </Layout>
        </>
    )
}

export default Services;