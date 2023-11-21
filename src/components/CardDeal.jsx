import React from 'react'
import { apple,google } from "../assets";
const CardDeal = () => {
  return (
    <div className='bg-[#72e485] px-14 py-20 text-center justify-center'>
      <h2 className='max-[1060px]:text-[20px] text-[35px] font-larsseit font-black'>Get ForeanTech App on Google <br />
Play or App Store</h2>
<p className='max-[1060px]:text-[12px]'>Build your Startup more easily and without any hassle.</p>
<div className={`flex  mt-8 justify-center max-[1060px]:flex-row-reverse`}>
     <img src={apple} alt="apple" className=" mr-5 cursor-pointer" />
     <img src={google} alt="google" className="mr-5 cursor-pointer"/>
</div>
    </div>
  )
}

export default CardDeal
