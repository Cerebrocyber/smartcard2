import Link from "next/link";
import Image from "next/image";

const Homecuruzu = () => (
  <div className='homecuruzu'>
    <div className="homecuruzu-background"></div>
    <section className='homecuruzu-content'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logocuruzu.webp'
          alt='logo'
          width={700}
          height={700}
          className='logocuruzu'
        />
      </Link>
      <p className="fraselogocuruzu">
        FAÇA JÁ SUA ENCOMENDA!
      </p>
      <br className='max-md:hidden' />
      <div className="bots">
        <Link href='tel:+5514996814646' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx1.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://api.whatsapp.com/send?phone=5514996814646&text=Gostaria%20de%20fazer%20um%20pedido!' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx2.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.facebook.com/profile.php?id=100082903793737' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx3.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.instagram.com/pastelaria_curuzu/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx4.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.google.com/maps?sca_esv=d58752900c71090e&output=search&q=Rua+Curuzu,+512+-+Centro+-+Botucatu/SP&source=lnms&entry=mc' className='flex gap-2 flex-center'>
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
      <Link href='/pastelariacuruzumenu'>
        <span className="button">
          <p className="textbtcuruzu">CARDÁPIO</p>
        </span>           
      </Link>      
    </section>
  </div>
);

export default Homecuruzu;
