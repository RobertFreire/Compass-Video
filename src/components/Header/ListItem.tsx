import React, { useState } from 'react';
import Modal from './Modal';

interface ListItemProps {
    text: string;
    isLink: boolean;
    linkTo?: string;
    img: string;
    handleModalOpen?: () => void;
}


const ListItem: React.FC<ListItemProps> = ({ text, isLink, linkTo, img, handleModalOpen }) => {
    return (
        <li>
            {isLink ? (
                <a href={linkTo}><img src={img} alt={text} />{text}</a>
            ) : (
                <button onClick={handleModalOpen}>{text}</button>
            )}
        </li>
    );
};

export default ListItem;
