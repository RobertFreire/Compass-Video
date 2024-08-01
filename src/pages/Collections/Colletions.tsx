import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom';
import { Collection, parseCollection } from '../../shared/information';
import { getColletions } from '../../shared/api';
import CollectionInfo from '../../components/MovieInfo/CollectionInfo';
import Footer from '../../components/Footer/Footer';
import SearchSlider from '../../components/Carrosel/Sliders/SearchSlider';

const Colletions = () => {

    const { id } = useParams();
    const [details, setDetails] = useState<Collection | null>(null);
   

    const fetchDetails = async () => {
        try {
            const details = await getColletions(id!);
            setDetails(() => parseCollection(details));
        } catch (error) {
            console.error("Erro ao buscar detalhes:", error);
        };
    }

    useEffect(() => {
        fetchDetails();
    },[]);

    console.log(details);

    return (
        <>
            <Header />
            {details && 
            <CollectionInfo collection={details}  />}
            <h1> MAASA</h1>
            {details &&  
            <SearchSlider result={details.parts}  />}
            <Footer />
        </>
    )
}

export default Colletions