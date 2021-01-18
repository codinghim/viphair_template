import Head from 'next/head'
import Styles from '../styles/pages/index.module.scss'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { resizeReserve } from '../lib/navbar'
import {useEffect} from 'react'

export default function Home() {

    useEffect(()=>{
        resizeReserve()
    },[])
    
    return (
        <>
        <Head>
            <title>NextJS Website Template</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <section className={Styles.intro_section}>
                <div className={Styles.main_image_container}>
                    <Image src="/images/hairsalon/salon1.jpg" layout="fill" objectFit="cover"/>
                </div>
            </section>

            <section className={Styles.invite_section}>
                    <div className={Styles.shadowed_box}> </div>
                    <div className={Styles.invite_desc_container}>
                        <p>We invite you to have the best experience</p>
                        <div>
                        <Link href="/services">
                            <a><button>Services</button></a>
                        </Link>
                        </div>
                    </div>
                    
            </section>

            <section className={Styles.desc_section}>
                <div className={Styles.desc_container}>
                    <div className={Styles.desc_image_container_outer}>
                        <div className={Styles.desc_image_container_inner_left}>
                        <Image src="/images/hair/ombre_flipped.jpg" layout="fill" objectFit="cover"/>
                        </div>
                    </div>
                    <div className={Styles.desc_p_container_right}>
                        <div className={Styles.desc_p_container_inner}>
                            <h1>Title here</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius convallis eros non laoreet. Pellentesque sed felis justo. Aliquam eget neque sollicitudin, scelerisque magna non, consectetur ex. Vivamus condimentum leo ac purus interdum, nec euismod ipsum lacinia. Sed euismod est vitae mi molestie, quis accumsan ex tempor. </p>
                            <Link href="/about">
                                <a>View More</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.desc_container}>
                    <div className={Styles.desc_p_container_left}>
                        <div className={Styles.desc_p_container_inner}>
                            <h1>Title here</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius convallis eros non laoreet. Pellentesque sed felis justo. Aliquam eget neque sollicitudin, scelerisque magna non, consectetur ex. Vivamus condimentum leo ac purus interdum, nec euismod ipsum lacinia. Sed euismod est vitae mi molestie, quis accumsan ex tempor. </p>
                            <Link href="/style">
                                <a>View More</a>
                            </Link>
                        </div>
                    </div>
                    <div className={Styles.desc_image_container_outer}>
                        <div className={Styles.desc_image_container_inner_right}>
                        <Image src="/images/hair/modern.jpg" layout="fill" objectFit="cover"/>
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>
        </Layout>
        </>
    )
}
