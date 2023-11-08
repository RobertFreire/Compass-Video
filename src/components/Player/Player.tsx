import React from 'react';
import style from './Player.module.css';
import back from '../../assets/Images/arrow_back_ios.png';

interface PlayerProps {
    videoId: string;
}

const extractVideoId = (videoUrl: string) => {
    const url = new URL(videoUrl);
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get('v');
};

const Player: React.FC<PlayerProps> = ({ videoId }) => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className={style['player-container']}>
            <button className={style['back-button']} onClick={goBack}>
                <img src={back} alt='Voltar' />
                <div className={style['back-text']}>
                    <h1>Loki</h1>
                    <p>Trailer: Season 1</p>
                </div>
            </button>
            <div className={style.player}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

const videoUrl = 'https://www.youtube.com/watch?v=xdBWrkcmMwU';
const videoId = extractVideoId(videoUrl);

const App: React.FC = () => {
    return <Player videoId={videoId || ''} />;
};

export default App;
