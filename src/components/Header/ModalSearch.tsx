import React, { useState } from 'react';
import style from './Header.module.css';
import lupa from '../../assets/Images/lupa.png';
import close from '../../assets/Images/close.png';
import { getSearch } from '../../shared/api';
import { Navigate, useNavigate } from 'react-router-dom';
import Search from '../../pages/Search/Search';

interface SearchModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ showModal, closeModal }) => {
    const [select, setSelect] = useState('multi')
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () =>{
        try {
            const quest = await getSearch(select, search);
            navigate('/search', { state: { search, select, quest } });
        } catch (error) {
            console.log('Error to search ', error);
        }
    }

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
                            <input required type="text" name="text" autoComplete="off" placeholder='Filme, série ou celebridade' onChange={(e) => setSearch(e.target.value)} value={search} className={style.input} />
                        </div>
                        <div className={style.frame43}>
                            <select className={style.selected} value={select} onChange={(e) => {setSelect(e.target.value);}} onClick={(e) => e.stopPropagation()}>
                                <option value="multi">Tudo</option>
                                <option value="movie">Filmes</option>
                                <option value="collection">Coleções</option>
                                <option value="tv">Séries</option>
                                <option value="person">Celebridades</option>
                            </select>
                            <button className={style.lup} onClick={handleSearch}>
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
