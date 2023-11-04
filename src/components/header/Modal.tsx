import React from 'react';
import './Header.css';
import lupa from '../../assets/Images/lupa.png';
import close from '../../assets/Images/close.png';
import widow from '../../assets/Images/widow.png';
import calango from '../../assets/Images/calango.png';
import add from '../../assets/Images/add.png';

interface ModalProps {
    showModal: boolean;
    closeModal: () => void;
    img: string;
    modalType: string; 
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal, img, modalType }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    let modalContent;

    if (modalType === 'search') {
        modalContent = (
            <div className='modalContent' onClick={handleClick} onKeyUp={handleKeyPress} tabIndex={0}>
                <div className="input-group">
                    <input required type="text" name="text" autoComplete="off" placeholder='Filme, série ou celebridade' className="input" />
                </div>
                <div className='frame43'>
                    <select className='selected' onClick={(e) => e.stopPropagation()}>
                        <option value="tudo">Tudo</option>
                        <option value="filmes">Filmes</option>
                        <option value="colecoes">Coleções</option>
                        <option value="series">Séries</option>
                        <option value="celebridades">Celebridades</option>
                    </select>
                    <button className='lup'>
                        <img src={lupa} alt='Buscar' />
                    </button>
                    <button className='close' onClick={closeModal}>
                        <img src={close} alt='Fechar' />
                    </button>
                </div>
            </div>
        );
    } else if (modalType === 'profile') {
        modalContent = (
            <div className='perfilContent' onClick={handleClick} onKeyUp={handleKeyPress} tabIndex={0}>
                <div className='perfil-modal'>
                    <div className='buttons'>
                        <button className='Perfil1'><img src={widow} alt='Perfil1' />Leslie Alexander</button>
                        <button className='Perfil2'><img src={calango} alt='Perfil2' />Ronald Richards</button>
                        <button className='addPerfil0'>
                            <button className='addPerfil'><img src={add} alt='addPerfil' /></button>
                            <p>Crear Perfil</p>
                        </button>
                    </div>
                    <a href='#' className='edit'>Editar perfis</a>
                    <a href='#' className='edit'>Preferências</a>
                    <a href='#' className='edit'>Minha assinatura</a>
                    <a href='#' className='edit'>Minha conta</a>
                    <a href='#' className='edit'>Ajuda</a>
                    <a href='#' className='edit'>Sair</a>
                </div>
            </div>
        );
    }

    return (
        <div>
            {showModal && (
                <div className='modalBackground' onClick={closeModal}>
                    {modalContent}
                </div>
            )}
        </div>
    );
};

export default Modal;
