import React from "react"
import UpdateImg from '../assets/Update.svg'


const Services = () => {
    return (
        <div className='services w-full bg-[#FEC424] flex items-center justify-around text-[#0E1959] text-xl font-bold -sm:text-base -xs:text-xs text-center ' style={{ height: '70vh' }}>
            <div className="img-wra w-2/6 -sm:hidden">
                <img src={UpdateImg}  />
            </div>
            <div className="text-wrapper w-2/4 -sm:w-full p-4">
            Suivi en temps reel. Restez informe a chaque etape du parcours de votre colis grace a notre systeme de suivi en temps reel. Livraison rapide et fiable. Nous comprenons l'importance de la rapidite et de la fiabilite lorsqu'il s'agit d'expédier des colis. Service clientele exceptionnel. Notre equipe de service clientele devouee est la pour repondre a toutes vos questions et vous fournir une assistance personnalisee a chaque etape du processus.
            </div>
        </div>
    )
}

export default Services
