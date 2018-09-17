import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default{
	getTodosApi : function(){
     	return axios.get('/todos').then(
	        (response)=>{
	        	return response.data;
	        },
	        (error)=>{
	          	return error;
	        }
      	);
    }
}