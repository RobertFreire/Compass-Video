import config  from "../../shared/constant";

export const createRequestToken = async () => {
  try {
    const response = await fetch(`${config.BASE_URL}/authentication/token/new?api_key=${config.API_KEY}`);
    const data = await response.json();
    return data.request_token;
  } catch (error) {
    console.error('Erro CreateRequestToken');
    throw error;
  }
};

export const createSession = async (requestToken :string) => {
  try {
    console.log("Estou no createSession")
    const response = await fetch(`${config.BASE_URL}/authentication/session/new?api_key=${config.API_KEY}&request_token=${requestToken}`);
    const data = await response.json();
    console.log('Create Session' + data.session_id)
    return data.session_id;
  } catch (error) {
    console.error('Erro CreateSession');
    throw error;
  }
};