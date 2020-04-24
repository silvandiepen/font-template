<template>
	<div class="settings">
		<div class="input-field">
			<input type="number" min="0" max="100" v-model="letterOpacity" />
			<label>Letter opacity</label>
		</div>
		<div class="input-field">
			<input type="number" min="0" max="100" v-model="borderOpacity" />
			<label>Border opacity</label>
		</div>
		<div class="input-field">
			<input type="number" min="0" max="100" v-model="sizeGap" />
			<label>Gap</label>
		</div>
		<div class="input-field">
			<input type="number" min="0" max="100" v-model="sizeWidth" />
			<label>width</label>
		</div>
		<div class="input-field">
			<input type="number" min="0" max="100" v-model="sizeHeight" />
			<label>height</label>
		</div>
		<div class="input-field">
			<input type="number" min="1" max="30" v-model="totalWidth" />
			<label>columns</label>
		</div>
	</div>
</template>

<script lang="ts">
// import { CharactersType } from '@/assets/characters';
import Vue from 'vue';

export default Vue.extend({
	name: 'HelloWorld',
	computed: {
		letterOpacity: {
			get() {
				return this.$store.getters['getSettings'].opacity.letter;
			},
			set(val) {
				this.$store.dispatch('setSetting', { opacity: { letter: val } });
			}
		},
		borderOpacity: {
			get() {
				return this.$store.getters['getSettings'].opacity.border;
			},
			set(val) {
				this.$store.dispatch('setSetting', { opacity: { border: val } });
			}
		},
		sizeGap: {
			get() {
				return this.$store.getters['getSettings'].size.gap;
			},
			set(val) {
				this.$store.dispatch('setSetting', { size: { gap: val } });
			}
		},
		sizeWidth: {
			get() {
				return this.$store.getters['getSettings'].size.width;
			},
			set(val) {
				this.$store.dispatch('setSetting', { size: { width: val } });
			}
		},
		sizeHeight: {
			get() {
				return this.$store.getters['getSettings'].size.height;
			},
			set(val) {
				this.$store.dispatch('setSetting', { size: { height: val } });
			}
		},
		totalWidth: {
			get() {
				return this.$store.getters['getSettings'].total.width;
			},
			set(val) {
				this.$store.dispatch('setSetting', { total: { width: val } });
			}
		}
	},
	methods: {
		activateCharset(name: string) {
			this.$store.dispatch('toggleCharset', name);
		}
	}
});
</script>
<style lang="scss">
.settings {
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	top: 1em;
	right: 1em;
	display: flex;
	.input-field {
		display: flex;
		flex-direction: column-reverse;
		input {
			background-color: rgba(0, 0, 0, 1);
			padding: 0.5em;
			border: none;
			font-size: 1em;
			color: currentColor;
			width: 100%;
			display: block;
		}
		input[type='number'] {
			// width: 3em;
		}
		& + .input-field {
			border-left: 1px solid white;
		}
		label {
			padding: 1em;
			font-size: 0.5em;
			font-weight: bold;
			text-transform: uppercase;
		}
	}
}
</style>
