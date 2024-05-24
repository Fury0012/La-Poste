import React from 'react'
import Loading from '../components/Loading'
import landImg from '../assets/poste.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-screen bg-[#0E1959] flex justify-around items-center p-2 -md:flex-col-reverse -md:justify-center'>
            <div className="text-wrapper w-2/4 -sm:text-xs text-center -md:w-full">
                <h1 className='text-4xl -md:text-2xl text-white underline font-black	mb-2'>
                    Bienvenu dans la service rapide de <span className='text-[#FEC424] '>la Poste Tunisienne</span>
                </h1>
                <p className='text-white text-2xl -md:text-base'>
                    Nous Sommes ravis de vous accuellir sur notre plateforme dédiée a simplifier et accélérer l'epédition de vos colis avec le service rapide de la poste.
                </p>
                <NavLink to='/about-us'>
                <button type="button" className="m-2 text-[#0E1959] focus:outline-none  bg-yellow-400 hover:bg-[#FEC424] focus:ring-4 focus:ring-[#FEC424] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">A propos de nous</button>
                </NavLink>

            </div>


            <div className="img-wrapper w-2/2 -md:w-32">
                <img src={landImg} className='w-full' />
            </div>

        </div>
    )
}

export default Home