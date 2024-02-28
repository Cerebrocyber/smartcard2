import { Inter } from "next/font/google";
import styles from '../styles/pasteldobairro.module.css';
import Image from "next/image";
import Link from "next/link";

const Pasteldobairro = () => (
  <div className='homepastel'>
    <div className="homepastel-background"></div>
    <section className='homepastel-content'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/pasteldobairro.webp'
          alt='logo'
          width={700}
          height={700}
          className='logopastel'
        />
      </Link>
      <p className="fraselogo">
        OS PASTÉIS MAIS SABOROSOS
      </p>
      <br className='max-md:hidden' />
      <div className="bots">
        <Link href='tel:+5514996217032' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx1.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://api.whatsapp.com/send?phone=5514996217032&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20SmartCard' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx2.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='http://www.facebook.com/smartcardweb/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx3.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.instagram.com/smartcardweb/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx4.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://goo.gl/maps/J2Y53kaACZYtwgmaA?coh=178573&entry=tt' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx5.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
      </div>
      <div className="pastelmenu">
  <div className="image-container">
    <Image
      src='/assets/images/pastelmenu1.png'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu2.png'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu3.png'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu4.png'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu5.png'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu6.png'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
  </div>
</div>
    </section>
  </div>
);

export default Pasteldobairro;
