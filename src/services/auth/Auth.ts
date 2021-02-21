import api from '../api/instance';
import {FormValuesLogin} from '../../components/login/LForm';

/* 
    @Undestanding

    Se a API não fosse um Mock (fack), eu usaria o método seria POST, 
    para que fosse gerado um Auth Token. Entretanto, utilizei o método get
    para poder um ID de um dado mockado inexistente, gerando assim diferentes
    diferentes respostas da API, como 404, simulando um erro.

*/

export default {

    login: async () => {
        try {
            let fakeId = Math.floor(Math.random() * 3);

            const response = await api.get(`/auth/:${fakeId}`);
            return response;

        } catch (error) {
            console.log("Error trying request /auth", error);
        }
    }
}

