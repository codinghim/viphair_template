import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
    return(
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div id="contact"></div>
        </>
    )
}

export default Layout