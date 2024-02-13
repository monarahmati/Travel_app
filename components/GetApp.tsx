import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className="get-app">
        <div className="z-20 flex w-full flex-col items-start justify-center gap-12 ">
          <h2 className="bold-20 lg:bold-64 xl:max-w-[320px] ">Get for free now!</h2>
          <p className="regular-16 text-gray-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ipsum.
          </p>
          <div className='flex flex-col xl:flex-row  w-full gap-3 whitespace-nowrap' >
            <Button type='button' title='App Store' icon='/apple.svg' variant='btn_white' full={true} />
            <Button type='button' title='Play Store' icon='/android.svg' variant='btn_dark_green_outline' full/>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt='phone.img' width={550} height={870} />
        </div>


      </div>
    </section>
  )
}

export default GetApp