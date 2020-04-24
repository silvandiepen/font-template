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
				gap: 1,
				size: 12
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
				'--size': state.settings.size.size / 10
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
