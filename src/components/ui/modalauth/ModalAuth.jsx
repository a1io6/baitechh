'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../../../assets/svg/Vector (47).svg'
import img2 from '../../../../assets/svg/Vector (48).svg'
import './style.scss'
import Link from 'next/link'
function ModalAuth({onClose}) {
  return (
      <div className='modal-auth'>
        <a href="/profile">
      <div className='flex  gap-[15px] items-center justify-start cursor-pointer'>
        <Image src={img} alt="" />
        <h2 className='text-[16px] font-[400]'>Личный кабинет</h2>
      </div>
        </a>
      <Link href="/logout">
      <div className='flex gap-[15px] items-center justify-start cursor-pointer' >
        <Image src={img2} alt="" />
        <h2 className='text-[16px] font-[400]'>Выход</h2>
      </div>
      </Link> 
            <div onClick={onClose} style={{padding:'10px'}} className='modal-auth-overlay' >
            </div>  
    </div>
  )
}

export default ModalAuth
