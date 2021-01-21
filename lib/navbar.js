
/**
 *  This function hides toggles between navbar and navbar with menu bar
 */
export const mobileNav = () => {

    if( document.documentElement.clientWidth < 540 ){ //If title hides navbar
        document.getElementById("navbar").style.display="none"
        document.getElementById("navbar_m").style.display="block"
        console.log("dt hidden, m shown")
    }else{
        document.getElementById("navbar_m").style.display="none"
        document.getElementById("navbar").style.display="flex"
        console.log("m hidden, dt shown")
    }
}

/**
 *  This function open the navbar menu on side
 */
export const openNavMenu = () => {
    document.getElementById('navbar_m_expanded').style.transform = "none";
}

/**
 *  This function closes the navbar menu on side
 */
export const closeNavMenu = () => {
    document.getElementById('navbar_m_expanded').style.transform = "translate(200px)";
}