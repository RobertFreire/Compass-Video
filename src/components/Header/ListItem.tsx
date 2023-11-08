import React from 'react';


interface ListItemProps {
    text: string;
    isLink: boolean;
    linkTo?: string;
    img: string;
    style ?: any;
    handleSearchModalOpen?: () => void;
    handleProfileModalOpen?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ text, isLink, linkTo, img, style, handleSearchModalOpen, handleProfileModalOpen }) => {
    return (
        <li style={style}>
            {isLink ? (
                <a href={linkTo}><img src={img} alt={text} />{text}</a> 
            ) : (
                <button onClick={text === 'Buscar' ? handleSearchModalOpen : handleProfileModalOpen}>
                    {text}
                </button>
            )}
        </li>
    );
};

export default ListItem;
