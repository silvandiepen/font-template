<template>
	<div class="settings">
		<div class="input-field">
			<input
				type="number"
				step="10"
				min="0"
				max="100"
				v-model="letterOpacity"
			/>
			<label>Letter opacity</label>
		</div>
		<div class="input-field">
			<input
				type="number"
				step="10"
				min="0"
				max="100"
				v-model="borderOpacity"
			/>
			<label>Border opacity</label>
		</div>
		<div class="input-field">
			<input type="number" min="0" max="100" v-model="sizeGap" />
			<label>Gap</label>
		</div>
		<div class="input-field">
			<input type="number" min="0" max="100" v-model="sizeSize" />
			<label>Size</label>
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
		sizeSize: {
			get() {
				return this.$store.getters['getSettings'].size.size;
			},
			set(val) {
				this.$store.dispatch('setSetting', { size: { size: val } });
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
	background-color: white;
	color: white;
	top: 1em;
	right: 1em;
	display: flex;
	color: rgba(0, 0, 0, 0.85);
	border-radius: 0.5em;
	overflow: hidden;
	.input-field {
		display: flex;
		flex-direction: column-reverse;
		input {
			-webkit-appeareance: none;
			background-color: rgba(100, 200, 255, 1);
			padding: 0.5em;
			border: none;
			font-size: 1em;
			color: currentColor;
			width: 100%;
			display: block;
			&:focus {
				outline: none;
				background-color: black;
				color: white;
			}
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
