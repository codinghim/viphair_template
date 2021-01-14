import Layout from '../components/Layout'
import Styles from '../styles/pages/about.module.scss'

const About = () => {
    return(
        <>
        <Layout>
            <section className={Styles.intro_section}>
                <h1>About page</h1>
            </section>
        </Layout>
        </>
    )
}

export default About;