import React from 'react';
import posteImg from '../assets/poste.jpg'
const Loading = () => {
    return (
        <div className='h-screen w-full bg-[#0E1959] text-white flex items-center justify-center flex-col'>
            <img src={posteImg}/>
        </div>
    );
}

export default Loading;
