import React from 'react'
import { NavLink } from 'react-router-dom'

const Started = () => {
    return (
        <div className=' bg-[#0E1959] flex flex-col items-center p-4 -lg:p-0 text-center justify-around font-semibold' style={{height:'30vh'}}>
            <div className="text-wrapper w-2/4 -md:w-full -md:text-xs text-white">
                Prêt à commencer? <br />  Inscrivez-vous dès aujourd'hui pour commencer à profiter de tous les avantages de notre application de service rapide des colis. Simplifiez vos envois, suivez vos colis en temps réel et bénéficiez d'une livraison rapide et fiable où que vous soyez.

            </div>

            <div className='w-full'>
                <NavLink to={'/signup'}>
            <button type="button" className="m-2 text-[#0E1959] focus:outline-none  bg-yellow-400 hover:bg-[#FEC424] focus:ring-4 focus:ring-[#FEC424] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Inscrives-vous</button>
                </NavLink>
            </div>

        </div>
    )
}

export default Started