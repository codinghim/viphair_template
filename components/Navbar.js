import Link from 'next/link'
import { useEffect } from 'react'
import Styles from './styles/navbar.module.scss'
import { reserve } from '../lib/reserve'
import { mobileNav, openNavMenu, closeNavMenu } from '../lib/navbar'
import Image from 'next/image'

const Navbar = () => {
    useEffect(()=>{
        document.getElementById("reserveImage").style.backgroundColor= "white";

        let prevScrollPosition = 0;
        window.onscroll= () =>{
            let currentScrollPosition = document.documentElement.scrollTop
            if(currentScrollPosition > prevScrollPosition){
                //hide navbar when scrolling down
                if( document.documentElement.clientWidth < 540){ 
                    //on mobile of width less than 540px
                    document.getElementById('navbar_m').style.transform = "translateY(-8vh)";
                }else if( document.documentElement.clientWidth < 768 ){ 
                    //on mobile of width greater than 540px
                    document.getElementById('navbar').style.transform = "translateY(-8vh)"; //change inside to the height of navbar located in /styles/lib/var.scss
                }else{ 
                    //on larger screen
                    document.getElementById('navbar').style.transform = "translateY(-12vh)"; //change inside to the height of navbar located in /styles/lib/var.scss
                }
            }else{
                //hide navbar when scrolling down
                if( document.documentElement.clientWidth < 540){
                    document.getElementById('navbar_m').style.transform = "none";
                }else{
                    document.getElementById('navbar').style.transform = "none";
                }
                
            }
            prevScrollPosition = document.documentElement.scrollTop
        }
        window.onresize = () => {
            mobileNav()
        }
    },[])

    return(
        <>
        {/* Navbar Logo */}
        <Link href="/">
            <a className={Styles.nav_logo}>VIP <br />HAIR</a>
        </Link>

        {/* Navbar */}
        <nav id="navbar" className={Styles.nav}>
            <div className={Styles.navLink}></div>
            <div className={Styles.navLink_container}>
                <Link href="/about">
                    <a className={Styles.navLink}>About</a>
                </Link>
                <Link href="/style">
                    <a className={Styles.navLink}>Styles</a>
                </Link>
                <Link href="/services">
                    <a className={Styles.navLink}>Services</a>
                </Link>
                <a href="#contactus" className={Styles.navLink}>Contact</a>
            </div>
            <div id="hidden" className={Styles.hidden}></div>            
        </nav>

        {/* mobile Navbar with menu bar */}
        <nav id="navbar_m" className={Styles.navbar_m}>
            <span onClick={openNavMenu}><Image src="/icons/menu.png" width={32} height={32}/></span>
        </nav>
        <div id="navbar_m_expanded" className={Styles.navLink_container_m}>
            <Link href="/about">
                <a className={Styles.navLink_m}>About</a>
            </Link>
            <Link href="/style">
                <a className={Styles.navLink_m}>Styles</a>
            </Link>
            <Link href="/services">
                <a className={Styles.navLink_m}>Services</a>
            </Link>
            <a href="#contactus" onClick={closeNavMenu} className={Styles.navLink_m}>Contact</a>
            <span onClick={closeNavMenu} className={Styles.close_nav_m}>&times;</span>
        </div>
        
        {/* Reservation Button */}
        <span id="reserveButton" onClick={reserve} className={Styles.reserve}>
            <Image id="reserveImage" src="/icons/check4.png" width={100} height={100} />
        </span>
        </>
    )
}

export default Navbar;