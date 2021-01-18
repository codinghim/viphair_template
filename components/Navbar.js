import Link from 'next/link'
import { useEffect } from 'react'
import Styles from './styles/navbar.module.scss'
import { reserve } from '../lib/reserve'
import { hideNavDiv, resizeReserve } from '../lib/navbar'

const Navbar = () => {
    useEffect(()=>{
        let prevScrollPosition = 0;
        window.onscroll= () =>{
            let currentScrollPosition = document.documentElement.scrollTop
            if(currentScrollPosition > prevScrollPosition){
                //hide navbar when scrolling down
                if( document.documentElement.clientWidth < 768 ){
                    document.getElementById('navbar').style.transform = "translateY(-8vh)"; //change inside to the height of navbar located in /styles/lib/var.scss
                }else{
                    document.getElementById('navbar').style.transform = "translateY(-12vh)"; //change inside to the height of navbar located in /styles/lib/var.scss
                }
            }else{
                //hide navbar when scrolling down
                document.getElementById('navbar').style.transform = "none";
            }
            prevScrollPosition = document.documentElement.scrollTop
        }
        window.onresize = () => {
            resizeReserve()
            hideNavDiv()
        }
    },[])

    return(
        <>
        <Link href="/">
            <a className={Styles.nav_logo}>VIP <br />HAIR</a>
        </Link>
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
            </div>
            <div id="hidden" className={Styles.hidden}></div>            
        </nav>
        
        <button id="reserveButton" onClick={reserve} className={Styles.reserve}>
            Reserve Now
        </button>
        </>
    )
}

export default Navbar;