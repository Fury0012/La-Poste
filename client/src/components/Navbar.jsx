import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import posteImg from '../assets/poste.png';
import { PosteState } from '../config/PosteProvider'; // Importing PosteState context

const Navbar = () => {
    const { user } = PosteState(); // Accessing user information from context
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        navigate("/");
        window.location.reload()
    };

    // Function to render navbar items based on user role
    const renderNavbarItems = () => {
        if (user) {
            let roleSpecificItems;

            // Check user role and render navbar items accordingly
            switch (user?.user?.role) {
                case 'ADMIN':
                    roleSpecificItems = (
                        <>
                            <li>
                                <NavLink
                                    to="/manage-users"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Gerer les comptes utilisateurs
                                </NavLink>
                            </li>
                        </>
                    );
                    break;
                case 'AGENT':
                    roleSpecificItems = (
                        <>
                            <li>
                                <NavLink
                                    to="/track-payments"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Suivre les paiements
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/manage-rates"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Gerer les tarifs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/schedule-collections"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Planifier les tournees de collecte
                                </NavLink>
                            </li>
                        </>
                    );
                    break;
                case 'USER':
                    roleSpecificItems = (
                        <>
                            <li>
                                <NavLink
                                    to="/client-area"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Espace Client
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/pass-parcel"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Passer colis
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/edit-profile"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Modifier Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/view-invoices"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Consulter facture
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/record-payment"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Enregistrer paiement
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/track-parcels"
                                    className="nav-link"
                                    activeClassName="active-nav-link"
                                >
                                    Suivre colis en temps reel
                                </NavLink>
                            </li>
                        </>
                    );
                    break;
                default:
                    roleSpecificItems = null; // Handle unexpected roles
            }

            return (
                <>
                    {roleSpecificItems}
                    <li>
                        <button
                            onClick={handleLogout}
                            className="nav-link"
                        >
                            Se deconnecter
                        </button>
                    </li>
                </>
            );
        } else {
            // Render default items if user information is not available
            return (
                <>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'text-[#FEC424] scale-110' : 'hover:text-[#FEC424] hover:scale-110 transition-all'}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => isActive ? 'text-[#FEC424] scale-110' : 'hover:text-[#FEC424] hover:scale-110 transition-all'}
                        >
                            Se connecter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            className={({ isActive }) => isActive ? 'text-[#FEC424] scale-110' : 'hover:text-[#FEC424] hover:scale-110 transition-all'}
                        >
                            S'inscrire
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) => isActive ? 'text-[#FEC424] scale-110' : 'hover:text-[#FEC424] hover:scale-110 transition-all'}
                        >
                            A propos de nous
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) => isActive ? 'text-[#FEC424] scale-110' : 'hover:text-[#FEC424] hover:scale-110 transition-all'}
                        >
                            Contactez-nous
                        </NavLink>
                    </li>
                    {/* Add more default items as needed */}
                </>
            );
        }
    };
    return (
        <div className='h-20 w-full bg-[#E1E1E1] flex items-center justify-between text-black px-7 absolute '>
            <a href='/' className='h-full w-auto scale-150 m-auto hover:scale-110 transition-all'>
                <img src={posteImg} alt="Poste" className='h-full w-auto  m-auto' />
            </a>
            <button className='md:hidden' onClick={toggleMenu}>
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
            <ul className={`ul-nav md:flex md:items-center md:justify-around md:m-auto md:gap-8 cursor-pointer -md:absolute -md:bg-white p-4 top-20 right-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`} style={{ transition: 'max-height 0.3s ease-in-out' }}>
                {renderNavbarItems()}
            </ul>
        </div>
    );
};

export default Navbar;
