import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default{
	getTodos : function(){
     	return axios.get('/todos').then(
	        (response)=>{
	        	return response.data;
	        },
	        (error)=>{
	          	return error;
	        }
      	);
    },
    userid : function () {
    	return 1;
    }
}