import React, { useEffect} from 'react';
import { createSession } from './ApiAuth';
import Loading from '../../shared/Ui/loading/Loading';
import { useNavigate } from "react-router-dom";
import { useUser } from './UserContext';



const Callback = () => {
    const {authenticated, setAuthenticated, getUserInfo } = useUser();
    const navigate = useNavigate();

        const handleCallback = async () => {
            const searchParams = new URLSearchParams(window.location.search);
            const approved = searchParams.get('approved');
            const requestToken = localStorage.getItem('Token')

            if (approved == 'true' && requestToken) {
                try {
                    console.log('Request Token' + requestToken)
                    const SessionId = await createSession(requestToken);
                    localStorage.setItem('session', SessionId);
                    setAuthenticated(true);
                    getUserInfo(SessionId);
                } catch (error) {
                    console.error('Erro on create session');
                }
            } else {
                console.log('User denied');
            }
    }

    useEffect (() => {
        handleCallback();
        
    },[])

    useEffect(() => {
        if (authenticated) {
            navigate("/home");
            console.log(authenticated);
            localStorage.setItem('autenticated', JSON.stringify(authenticated));
        }
    }, [authenticated]);


    return (
        <>
            <Loading />
        </>
    );
};

export default Callback;


