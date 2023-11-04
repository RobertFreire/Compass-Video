import React from 'react';
import style from './Header.module.css';
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
            <div className={style.modalContent} onClick={handleClick} onKeyUp={handleKeyPress} tabIndex={0}>
                <div className={style['input-group']}>
                    <input required type="text" name="text" autoComplete="off" placeholder='Filme, série ou celebridade' className={style.input} />
                </div>
                <div className={style.frame43}>
                    <select className={style.selected} onClick={(e) => e.stopPropagation()}>
                        <option value="tudo">Tudo</option>
                        <option value="filmes">Filmes</option>
                        <option value="colecoes">Coleções</option>
                        <option value="series">Séries</option>
                        <option value="celebridades">Celebridades</option>
                    </select>
                    <button className={style.lup}>
                        <img src={lupa} alt='Buscar' />
                    </button>
                    <button className={style.close} onClick={closeModal}>
                        <img src={close} alt='Fechar' />
                    </button>
                </div>
            </div>
        );
    } else if (modalType === 'profile') {
        modalContent = (
            <div className={style.perfilContent} onClick={handleClick} onKeyUp={handleKeyPress} tabIndex={0}>
                <div className={style['perfil-modal']}>
                    <div className={style.buttons}>
                        <button className={style.Perfil1}><img src={widow} alt='Perfil1' />Leslie Alexander</button>
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
                    <a href='#' className={style.edit}>Sair</a>
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
