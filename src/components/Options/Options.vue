<template>
	<div class="options">
		<ul class="options__list">
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
	name: 'HelloWorld',
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
.options {
	padding: 1em;
	background-color: rgba(80, 50, 0, 0.1);
	li,
	ul {
		margin: 0;
		list-style-type: none;
	}
	&__list {
		padding: 1em;
		border-radius: 1em;
		background-color: white;
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
		&--active {
			border-color: rgba(100, 200, 255, 1);
			// color: white;
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
		max-width: 13em;
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
