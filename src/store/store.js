import Vue from 'vue'
import Vuex from 'vuex'

// loading api related functions
import appConfigs from '../includes/api/appConfigs'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state : {
		todos : [],
	},
	mutations:{
		setTodos(state,todos){
			state.todos = todos;
		},
	},
	getters:{
		/*
		example of doing manipulation in received data
		getProducts(state){
			let productsObj = state.products.map((product)=>{
				return {
					name : " * "+product.name+" * ",
					price : product.price/2
				}
			});
			return productsObj;
		},
		*/
		getTodos(state){
			return state.todos;
		}
	},
});