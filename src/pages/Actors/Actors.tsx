import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { getActors, getMediaCredits } from '../../shared/api'
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import { Actor, Media } from '../../shared/information';
import ActorsSlider from '../../components/Carrosel/Sliders/ActorsSlider';
import Footer from '../../components/Footer/Footer';

const Actors = () => {
    const [actor, setActor] = useState<Actor>()

    const [actorMedia, setActorMedia] = useState<Media[]>();


    const fetchActors = async () => {
        try {
            const actor = await getActors();
            const random = Math.floor(Math.random() * actor.results.length)
            setActor(actor.results[random]);
        } catch (error) {
            console.error("Error in get Actores", error);
        }
    }

    const fetchMovieActors = async () => {
        try {
            if (actor) {
                const movie = await getMediaCredits(actor!.id)
                setActorMedia(movie.cast.slice(0, 20));
            }

        } catch (error) {
            console.error("Error in get Movies Actors", error)
        }
    }

    useEffect(() => {
        fetchActors();
    }, [])

    useEffect(() => {
        fetchMovieActors();
    }, [actor!])

    console.log(actor?.profile_path);

    console.log(actorMedia);


    return (
        <>
            <Header />
            {actor && <MovieInfo location={actor.known_for[0].media_type} MediaId={actor.known_for[0].id} />}
            {actorMedia && <ActorsSlider actorMedia={actorMedia} name={actor!.name} photo={actor!.profile_path} />}
            <Footer />
        </>
    )
}

export default Actors