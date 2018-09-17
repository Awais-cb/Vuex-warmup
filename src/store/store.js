import Vue from 'vue'
import Vuex from 'vuex'

// loading api related functions
import appConfigs from '../includes/api/appConfigs'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state : {
	
		todos : appConfigs.getTodos(),
		userid : appConfigs.userid(),
	
	}
});