import React from 'react';
import style from './Header.module.css';
import lupa from '../../assets/Images/lupa.png';
import close from '../../assets/Images/close.png';

interface SearchModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ showModal, closeModal }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    return (
        <div>
            {showModal && (
                <div className='modalBackground' onClick={closeModal}>
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
                </div>
            )}
        </div>
    );
};

export default SearchModal;
