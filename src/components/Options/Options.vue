<template>
	<div class="options">
		<div
			class="options__background"
			@click="panelActive = !panelActive"
			:class="{ 'options__background--active': panelActive }"
		/>
		<button class="options__trigger" @click="panelActive = !panelActive">
			panel
		</button>
		<ul class="options__list" :class="{ 'options__list--active': panelActive }">
			<li
				class="options__option"
				:class="{ 'options__option--active': list.active }"
				@click="activateCharset(list.name)"
				v-for="(list, idx) in charsSets"
				:key="idx"
			>
				<h4 class="options__title">{{ list.title }}</h4>
				<ul class="options__set">
					<li
						class="options__character"
						v-for="(char, idc) in list.data"
						:key="idc"
					>
						{{ char }}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { CharactersType } from '@/assets/characters';
import Vue from 'vue';

export default Vue.extend({
	data: () => ({
		panelActive: false
	}),
	computed: {
		charsSets(): CharactersType[] {
			return this.$store.getters['getCharacterSets'];
		}
	},
	methods: {
		activateCharset(name: string) {
			this.$store.dispatch('toggleCharset', name);
		}
	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/assets/scss/tools';
.options {
	padding: 1em;
	width: 100%;
	@media #{$desktop} {
		background-color: beige();
	}
	li,
	ul {
		margin: 0;
		list-style-type: none;
	}
	&__background {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: beige(0.8);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s;
		@media #{$mobile} {
			&--active {
				opacity: 1;
				pointer-events: all;
			}
		}
	}
	&__trigger {
		width: 4em;
		height: 4em;
		border-radius: 50%;
		position: fixed;
		z-index: 2;
		pointer-events: all;
		transform: scale(0);
		@media #{$mobile} {
			transform: scale(1);
		}
	}
	&__list {
		padding: 1em;
		border-radius: 1em;
		background-color: white;
		@media #{$mobile} {
			max-width: 320px;
			margin: auto;
			box-shadow: 0 0 2em 0em beige(0.5);
			transform: skewY(20deg) translateY(100%);
			transition: transform 0.5s;
		}
		&--active {
			transform: skewY(0deg) translateY(0%);
		}
	}
	&__option {
		border-radius: 0.5em;
		display: block;
		background-color: white;
		padding: 1em;
		border: 1px solid transparent;
		& + & {
			margin-top: 1em;
		}
		&::before {
			content: '';
			width: 1em;
			height: 1em;
			position: absolute;
			left: 100%;
			top: 50%;
			transform: translate(-50%, -50%) rotate(45deg) scale(1);
			border-radius: 0 0.25em 0 0;
			background-color: blue();
			clip-path: polygon(0 0, 100% 0, 100% 100%);
			// transition: transform 0.3s;
		}
		&--active {
			background-color: blue();
			// border-color: rgba(100, 200, 255, 1);

			.options__set {
				opacity: 0.5;
			}
			.options__title {
				opacity: 1;
			}
			animation: bumpy 0.3s ease-in-out forwards;
			@at-root {
				@keyframes bumpy {
					0%,
					100% {
						transform: scale(1);
					}
					80% {
						transform: scale(1.05);
					}
				}
			}
		}
	}
	&__title {
		opacity: 0.5;
		margin: 0;
	}
	&__set {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		opacity: 0.25;
	}
	&__character {
		width: 1.5em;
		height: 1.5em;
		font-size: 0.75em;
		// background-color: rgba(0, 0, 0, 0.5);
		line-height: 1.5em;
		text-align: center;
		color: currentColor;
		// color: white;
		margin: 1em;
	}
}
</style>
