import Styles from './styles/footer.module.scss'
import Image from 'next/image'

const Footer = () => {
    return(
        <>
            <footer id="contactus" className={Styles.footer}>
                <div className={Styles.contact_info_container}>
                    <div className={Styles.info_container}>
                        <div className={Styles.info_row}>
                            <p className={Styles.address}>address</p>
                            <a href="https://www.google.com/maps/place/Empire+State+Building/@40.7484405,-73.9856644,15z/data=!4m5!3m4!1s0x0:0xd134e199a405a163!8m2!3d40.7484405!4d-73.9856644">
                                <p className={Styles.address}>20 W 34th St, New York, NY 10001</p>
                            </a>
                            
                        </div>
                        <div className={Styles.info_row}>
                            
                            <p className={Styles.number}>call</p>
                            <div className={Styles.number}><a href="tel:777-777-7777"><Image src="/icons/call.png" width={15} height={15}/>  777-777-7777</a></div>
                        </div>
                    </div>
                    <div className={Styles.info_container}>
                        <div className={Styles.hour_row}>
                            <p className={Styles.hour}>Sun</p>
                            <p className={Styles.hour}>9am - 6pm</p>
                        </div>
                        <div className={Styles.hour_row}>
                            <p className={Styles.hour}>Mon-Fri</p>
                            <p className={Styles.hour}>9am - 7pm</p>
                        </div>
                        <div className={Styles.hour_row}>
                            <p className={Styles.hour}>Sat</p>
                            <p className={Styles.hour}>9am - 8pm</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.icons_container}>
                    <a href="https://instagram.com"><Image src="/icons/instagram2.png" width={25} height={25} /></a>
                    <a href="https://facebook.com"><Image src="/icons/facebook.png" width={25} height={25} /></a>
                </div>
                <p className={Styles.copyright}>Copyright &copy; 2021 MAGI Web Production. <br />All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer;