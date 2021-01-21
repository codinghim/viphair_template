import Layout from '../components/Layout'
import Styles from '../styles/pages/style.module.scss'
import { getImages } from '../lib/gallery'
import Image from 'next/image'
import { useEffect } from 'react'
import { mobileNav, closeNavMenu } from '../lib/navbar'

const Style = ({dir}) => {

    useEffect(()=>{
        closeNavMenu()
        mobileNav()
    })

    const removeExtension = (filename) =>{
        let result = filename.substr(0, filename.lastIndexOf('.')) || filename;
        return result
    }
    
    return(
        <>
        <Layout>
            <section className={Styles.gallery_section}>
                <div className={Styles.gallry_title_container}>
                    <p className={Styles.gallery_title}>Styles</p>
                    <p className={Styles.gallery_quote}>"Life is too short to have boring hair. "</p>
                </div>
                <Image src="/icons/page_divider.png" width={2000} height={30} layout="responsive"/>
                <div className={Styles.gallery_grid}>
                    {dir.map((fileName, index) => (
                        <div className={Styles.gallery_image_container} key={index}>
                            <Image src={`/images/hair/${fileName}`} width={300} height={450} objectFit="cover"/>
                            <div className={Styles.gallery_image_title_container}>
                                <p id="image_title" className={Styles.gallery_image_title}>{removeExtension(fileName)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const dir = await getImages()
    return{
        props: {dir}
    }
}
export default Style;