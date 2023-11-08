import React, { useEffect } from 'react';
import style from './Header.module.css';
import widow from '../../assets/Images/widow.png';
import calango from '../../assets/Images/calango.png';
import add from '../../assets/Images/add.png';
import { useUser } from '../auth/UserContext';

interface ProfileModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ showModal, closeModal }) => {
    
    const {user, getUserInfo} = useUser();

    getUserInfo(localStorage.getItem('session')!)

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        if (showModal) {
            document.addEventListener('keydown', handleKeyPress);
        } else {
            document.removeEventListener('keydown', handleKeyPress);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [showModal, handleKeyPress]);

    return (
        <div>
            {showModal && (
                <div className={style.modalBackground} onClick={handleClick}>
                    <div className={style.perfilContent} onClick={(e) => e.stopPropagation()} tabIndex={0}>
                        <div className={style['perfil-modal']}>
                            <div className={style.buttons}>
                                <button className={style.Perfil1}><img src={user!.photo == null ? (widow) : (user!.photo) } alt='Perfil1' />{user ? (user.name) : 'Leslie Alexander'}</button>
                                <button className={style.Perfil2}><img src={calango} alt='Perfil2' />Ronald Richards</button>
                                <button className={style.addPerfil0}>
                                    <button className={style.addPerfil}><img src={add} alt='addPerfil' /></button>
                                    <p>Crear Perfil</p>
                                </button>
                            </div>
                            <a href='#' className={style.edit}>Editar perfis</a>
                            <a href='#' className={style.edit}>Preferências</a>
                            <a href='#' className={style.edit}>Minha assinatura</a>
                            <a href='#' className={style.edit}>Minha conta</a>
                            <a href='#' className={style.edit}>Ajuda</a>
                            <a href='/login' className={style.edit}>Sair</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileModal;
