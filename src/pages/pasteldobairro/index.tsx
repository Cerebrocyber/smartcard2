import Link from "next/link";
import Image from "next/image";

const Home = () => (
  <div className='homepastel'>
    <div className="homepastel-background"></div>
    <section className='homepastel-content'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logopastel.webp'
          alt='logo'
          width={700}
          height={700}
          className='logopastel'
        />
      </Link>
      <p className="fraselogopastel">
        FAÇA JÁ SUA ENCOMENDA!
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
      <Image
        src='/assets/images/qrcode.svg'
        alt=''
        width={60}
        height={60}
        className='qrcode'
      />
      <Link href='/pasteldobairromenu'>
        <span className="button">
          <p className="textbtpastel">CARDÁPIO</p>
        </span>           
      </Link>      
    </section>
  </div>
);

export default Home;
