import Navbar from './Navbar';
import Footer from './Footer';
import Reservation from './Reservation';

const Layout = ({children}) => {
    return(
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div id="contact"></div>
        <Reservation />
        </>
    )
}

export default Layout