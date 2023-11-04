import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/Images/logo_footer.png';
import house from '../../assets/Images//house.png';
import tv from '../../assets/Images/tv.png';
import movie from '../../assets/Images/movie.png';
import star from '../../assets/Images/star.png';
import lupa from '../../assets/Images/lupa.png';
import plus from '../../assets/Images/plus.png';
import perfil from '../../assets/Images/perfil.png';
import ListItem from './ListItem';
import Modal from './Modal';

const Header = () => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(true);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleSearchModalOpen = () => {
        setIsSearchModalOpen(true);
        setIsSearchVisible(false);
    };

    const handleSearchModalClose = () => {
        setIsSearchModalOpen(false);
        setIsSearchVisible(true);
    };

    const handleProfileModalOpen = () => {
        setIsProfileModalOpen(true);
    };

    const handleProfileModalClose = () => {
        setIsProfileModalOpen(false);
    };

    return (
        <header className='header'>
            <div className='frame60'>
                <img className="image_header" src={logo} alt="UOL_logo" />
                <nav>
                    <ul className='vector'>
                        <ListItem text="Início" isLink img={house} linkTo="/pagina-inicio" />
                        <ListItem text="Séries" isLink img={tv} linkTo="/pagina-series" />
                        <ListItem text="Filmes" isLink img={movie} linkTo="/pagina-filmes" />
                        <ListItem text="Celebridades" isLink img={star} linkTo="/pagina-celebridades" />
                    </ul>
                </nav>
            </div>
            <div className='frame44'>
                {isSearchVisible && (
                    <div className='search'>
                        <button className='btn-modal' onClick={handleSearchModalOpen}>
                            <img src={lupa} alt="lupa" />Buscar</button>
                        <button className='lista-fav'>
                            <img src={plus} alt="plus" />Minha lista</button>
                    </div>
                )}
                <Modal showModal={isSearchModalOpen} closeModal={handleSearchModalClose} img="caminho-para-lupa" modalType="search" />
                <button className='perfil' onClick={handleProfileModalOpen}>
                    <img src={perfil} alt="perfil" />
                </button>
                <Modal showModal={isProfileModalOpen} closeModal={handleProfileModalClose} img="caminho-para-imagem-de-perfil" modalType="profile" />
            </div>
        </header>
    );
};

export default Header;
