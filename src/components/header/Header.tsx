import React, { useState } from 'react';
import style from './Header.module.css';
import logo from '../../assets/Images/logo_footer.png';
import house from '../../assets/Images/house.png';
import tv from '../../assets/Images/tv.png';
import movie from '../../assets/Images/movie.png';
import star from '../../assets/Images/star.png';
import lupa from '../../assets/Images/lupa.png';
import plus from '../../assets/Images/plus.png';
import perfil from '../../assets/Images/perfil.png';
import ListItem from './ListItem';
import SearchModal from './ModalSearch';
import ProfileModal from './ProfileModal';


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
        <header className={style.header}>
            <div className={style.frame60}>
                <img className={style.image_header} src={logo} alt="UOL_logo" />
                <nav>
                    <ul className={style.vector}>
                        <ListItem
                            text="Início"
                            isLink
                            img={house}
                            linkTo="/home"
                            style={{
                                filter: location.pathname === '/home' ? 'invert(12%) sepia(96%) saturate(1899%) hue-rotate(129deg) brightness(97%) contrast(104%)' : 'none'
                            }}
                        />
                        <ListItem
                            text="Séries"
                            isLink
                            img={tv}
                            linkTo="/tv"
                            style={{
                                filter: location.pathname === '/tv' ? 'invert(12%) sepia(96%) saturate(1899%) hue-rotate(129deg) brightness(97%) contrast(104%)' : 'none'
                            }}
                        />
                        <ListItem
                            text="Filmes"
                            isLink
                            img={movie}
                            linkTo="/home"
                            style={{
                                filter: location.pathname === '/movies' ? 'invert(12%) sepia(96%) saturate(1899%) hue-rotate(129deg) brightness(97%) contrast(104%)' : 'none'
                            }}
                        />
                        <ListItem
                            text="Celebridades"
                            isLink
                            img={star}
                            linkTo="/actors"
                            style={{
                                filter: location.pathname === '/actors' ? 'invert(12%) sepia(96%) saturate(1899%) hue-rotate(129deg) brightness(97%) contrast(104%)' : 'none'
                            }}
                        />
                    </ul>
                </nav>
            </div>
            <div className={style.frame44}>
                {isSearchVisible && (
                    <div className={style.search}>
                        <button className={style['btn-modal']} onClick={handleSearchModalOpen}>
                            <img src={lupa} alt="lupa" />Buscar
                        </button>
                        <button className={style['lista-fav']}>
                            <img src={plus} alt="plus" />Minha lista
                        </button>
                    </div>
                )}
                <SearchModal showModal={isSearchModalOpen} closeModal={handleSearchModalClose} />
                <button className={style.perfil} onClick={handleProfileModalOpen}>
                    <img src={perfil} alt="perfil" />
                </button>
                <ProfileModal showModal={isProfileModalOpen} closeModal={handleProfileModalClose} />
            </div>
        </header>
    );
};

export default Header;
