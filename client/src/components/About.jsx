import React from 'react'
import OrderImg from '../assets/Order.svg'

const About = () => {
    return (
        <div className='h-screen bg-[#0E1959] flex items-center justify-around -sm:flex-col-reverse text-center -sm:justify-center gap-9'>
            <div className="text-wrapper w-2/4 text-white text-lg -md:text-xs">
            <span className='text-[#FEC424] text-4xl -sm:text-base font-black'>Expédiez vos colis en toute simplicité.</span>  <br /> <br/> Avec notre application conviviale, vous pouvez expédier vos colis en quelques étapes simples. Plus de files d'attente interminables ou de formalités compliquées. Notre processus d'expédition simplifié vous permet d'envoyer vos colis en un clin d'œil.
            </div>
            <div className="img-wrapper w-2/6  ">
                <img src={OrderImg} />
            </div>
        </div>
    )
}

export default About