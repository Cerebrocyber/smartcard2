import { Inter } from "next/font/google";
import styles from '../styles/pasteldobairro.module.css';
import Image from "next/image";
import Link from "next/link";

const Pasteldobairro = () => (
  <section className='homepastel-content'>
    <div className="pastelmenu">
  <div className="image-container">
    <Image
      src='/assets/images/pastelmenu1.webp'
      alt=''
      width={700}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu2.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu3.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu4.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu5.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu6.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
  </div>
</div>
    </section>
 );

export default Pasteldobairro;
