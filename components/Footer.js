import Styles from './styles/footer.module.scss'

const Footer = () => {
    return(
        <>
            <footer className={Styles.footer}>
                <p className={Styles.copyright}>Copyright &copy; 2021 MAGI Web Production. <br />All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer;