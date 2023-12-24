import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='container-fluid' >
      <div className="row">
        <div className="col text-center p-2" >
           Designed for application to <Link href={'https://5adesign.it/'}>5adesign.it</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
