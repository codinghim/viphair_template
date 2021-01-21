import Layout from '../components/Layout'
import Styles from '../styles/pages/about.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'
import { mobileNav, closeNavMenu } from '../lib/navbar'

const About = () => {
    useEffect(()=>{
        closeNavMenu()
        mobileNav()
    })
    return(
        <>
        <Layout>
            <section className={Styles.intro_section}>
                <div className={Styles.p_container}>
                    <p className={Styles.p_about}>about&nbsp;&nbsp;&nbsp;</p>
                    <p className={Styles.p_title}>VIP HAIR</p>
                    <p className={Styles.p_word}><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</em></p>
                    <div className={Styles.p_sub_container}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sollicitudin turpis, nec pretium felis. Pellentesque a elit at tellus pharetra congue nec eu augue. Mauris ipsum dolor, tincidunt ac justo eget, tristique sollicitudin urna. Nunc elementum luctus dictum.</p>
                </div>
                </div>
                
            </section>
            
            <section className={Styles.team_section}>
                <p className={Styles.team_section_title}>Team</p>
                <div className={Styles.divider_container}>
                    <Image src="/icons/page_divider.png" width={2000} height={30} layout="responsive"/>
                </div>
                
                <div className={Styles.team_grid}>
                    <div className={Styles.member_card}>
                        <div className={Styles.member_image_container}>
                            <Image src="/images/profile/austin-wade-X6Uj51n5CE8-unsplash.jpg" width={200} height={300} objectFit="cover"/>
                        </div>
                        <div className={Styles.member_desc_container}>
                            <p className={Styles.member_name}>John Smith</p>
                            <a href="https://instagram.com" className={Styles.member_instagram}><Image src="/icons/instagram.png" width={20} height={20}/> johnsmithstyle</a>
                            <p className={Styles.member_position}>Director</p>
                        </div>
                    </div>
                    <div className={Styles.member_card}>
                        <div className={Styles.member_image_container}>
                            <Image src="/images/profile/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg" width={200} height={300} objectFit="cover"/>
                        </div>
                        <div className={Styles.member_desc_container}>
                            <p className={Styles.member_name}>Jane Doe</p>
                            <a href="https://instagram.com" className={Styles.member_instagram}><Image src="/icons/instagram.png" width={20} height={20}/> janed0e</a>
                            <p className={Styles.member_position}>Stylist</p>
                        </div>
                    </div>
                    <div className={Styles.member_card}>
                        <div className={Styles.member_image_container}>
                            <Image src="/images/profile/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg" width={200} height={300} objectFit="cover"/>
                        </div>
                        <div className={Styles.member_desc_container}>
                            <p className={Styles.member_name}>Pelican Steve</p>
                            <a href="https://instagram.com" className={Styles.member_instagram}><Image src="/icons/instagram.png" width={20} height={20}/> steve.p</a>
                            <p className={Styles.member_position}>Stylist</p>
                        </div>
                    </div>
                    <div className={Styles.member_card}>
                        <div className={Styles.member_image_container}>
                            <Image src="/images/profile/kareya-saleh-tLKOj6cNwe0-unsplash.jpg" width={200} height={300} objectFit="cover"/>
                        </div>
                        <div className={Styles.member_desc_container}>
                            <p className={Styles.member_name}>Natalya Undergrowth</p>
                            <a href="https://instagram.com" className={Styles.member_instagram}><Image src="/icons/instagram.png" width={20} height={20}/> natunderstyle</a>
                            <p className={Styles.member_position}>Stylist</p>
                        </div>
                    </div>
                    <div className={Styles.member_card}>
                        <div className={Styles.member_image_container}>
                            <Image src="/images/profile/michael-dam-mEZ3PoFGs_k-unsplash.jpg" width={200} height={300} objectFit="cover"/>
                        </div>
                        <div className={Styles.member_desc_container}>
                            <p className={Styles.member_name}>Irene	Marshall</p>
                            <a href="https://instagram.com" className={Styles.member_instagram}><Image src="/icons/instagram.png" width={20} height={20}/> irene.style</a>
                            <p className={Styles.member_position}>Stylist</p>
                        </div>
                    </div>
                    <div className={Styles.member_card}>
                        <div className={Styles.member_image_container}>
                            <Image src="/images/profile/stefan-stefancik-QXevDflbl8A-unsplash.jpg" width={200} height={300} objectFit="cover"/>
                        </div>
                        <div className={Styles.member_desc_container}>
                            <p className={Styles.member_name}>Rebecca Young</p>
                            <a href="https://instagram.com" className={Styles.member_instagram}><Image src="/icons/instagram.png" width={20} height={20}/> Youngbecky</a>
                            <p className={Styles.member_position}>Assistant</p>
                        </div>
                    </div>
                    <div className={Styles.member_card}>
                        <div className={Styles.member_image_container}>
                            <Image src="/images/profile/tyler-nix-PQeoQdkU9jQ-unsplash.jpg" width={200} height={300} objectFit="cover"/>
                        </div>
                        <div className={Styles.member_desc_container}>
                            <p className={Styles.member_name}>Tyler North</p>
                            <a href="https://instagram.com" className={Styles.member_instagram}><Image src="/icons/instagram.png" width={20} height={20}/> tylernorthstyle</a>
                            <p className={Styles.member_position}>Assistant</p>
                        </div>
                    </div>
                    

                </div>


            </section>
        </Layout>
        </>
    )
}

export default About;