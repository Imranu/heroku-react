import axios from "axios";

const CLIENT_REST_API_BASE_URL = "https://heroku-spring-react-project.herokuapp.com/api/v1/clients";

class ClientService {

    getAllClients(){
        return axios.get(CLIENT_REST_API_BASE_URL);
    }

    createClient(client){
        return axios.post(CLIENT_REST_API_BASE_URL, client)
    }

    getClientById(clientId){
        return axios.get(CLIENT_REST_API_BASE_URL + '/' + clientId)
    }

    updateClientById(clientId, client){
        return axios.put(CLIENT_REST_API_BASE_URL + '/' + clientId, client);
    }

    deleteClientById(clientId){
        return axios.delete(CLIENT_REST_API_BASE_URL + '/' + clientId)
    }

}

export default new ClientService();