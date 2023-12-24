'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';

const Carosello = () => {
  return (
    <>
     <Carousel className='carosello'>
      <Carousel.Item>
<Image className='imgCarousel' src={'/logoEmme.png'}
  width={1000}
  height={1000}
  alt=''/>
  <Carousel.Caption>
         <Link href={'https://www.emme24.it'} target='_blank' ><h3>Emme24.it</h3></Link>
          <p>QUOTIDIANO ONLINE DI LIBERA INFORMAZIONE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<Image className='imgCarousel' src={'/viviLacedonia.png'}
  width={1000}
  height={1000}
  alt=''/>
  <Carousel.Caption>
         <Link href={'https://www.vivilacedonia.it'} target='_blank' ><h3>vivilacedonia.it</h3></Link>
          <p style={{textTransform:'uppercase'}}>Lacedonia è un luogo tutto da scoprire pieno di bellezza e di storia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<Image className='imgCarousel' src={'/mefCom.png'}
  width={1000}
  height={1000}
  alt=''/>
  <Carousel.Caption>
         <Link href={'https://www.mefcommunication.it'} target='_blank' ><h3>mefcommunication.it</h3></Link>
          <p style={{textTransform:'uppercase'}}>Lacedonia è un luogo tutto da scoprire pieno di bellezza e di storia.</p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
    </>
  )
}

export default Carosello
