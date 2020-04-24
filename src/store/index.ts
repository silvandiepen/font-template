import Vue from 'vue';
import Vuex from 'vuex';
import { Characters } from '@/assets/characters';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		characters: Characters,
		settings: {
			opacity: {
				letter: 25,
				border: 50
			},
			size: {
				gap: 2,
				width: 10,
				height: 10
			},
			total: {
				width: 13
			}
		}
	},
	mutations: {
		TOGGLE_CHARSET(state, value) {
			const foundCharset = state.characters.find((set) => set.name == value);
			if (foundCharset) Vue.set(foundCharset, 'active', !foundCharset.active);
		},
		SET_SETTING(state, value) {
			if (value.opacity)
				state.settings.opacity = {
					...state.settings.opacity,
					...value.opacity
				};
			else if (value.size)
				state.settings.size = {
					...state.settings.size,
					...value.size
				};
			else if (value.total)
				state.settings.total = {
					...state.settings.total,
					...value.total
				};
		}
	},
	getters: {
		getCharacterSets(state) {
			return state.characters;
		},
		getActiveCharacterSets(state) {
			return state.characters.filter((set) => set.active == true);
		},
		getSettings: (state) => {
			return state.settings;
		},
		getProps: (state) => {
			return {
				'--opacity-letter': state.settings.opacity.letter / 100,
				'--opacity-border': state.settings.opacity.border / 100,
				'--size-gap': state.settings.size.gap / 10,
				'--size-width': state.settings.size.width / 10,
				'--size-height': state.settings.size.height / 10,
				'--total-width': state.settings.total.width
			};
		}
	},
	actions: {
		toggleCharset({ commit }, name) {
			commit('TOGGLE_CHARSET', name);
		},
		setSetting({ commit }, value) {
			commit('SET_SETTING', value);
		}
	},
	modules: {}
});
