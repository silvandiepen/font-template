<template>
	<div class="canvas" :style="canvasProps">
		<div class="canvas__page" id="page">
			<ul class="charset" v-for="(charset, idx) in charsSets" :key="idx">
				<h3 class="charset__title">{{ charset.title }}</h3>
				<ul class="charset__set">
					<li
						class="charset__char-holder"
						v-for="(char, idc) in charset.data"
						:key="idc"
					>
						<span class="charset__char">
							{{ char }}
						</span>
					</li>
				</ul>
			</ul>
		</div>
		<a
			class="canvas__download button"
			v-if="download.active"
			:href="download.href"
			:download="download.fileName"
			id="download-link"
		>
			Download Image
		</a>
		<div class="canvas__holder" id="holder"></div>
	</div>
</template>
<script lang="ts">
import htmlToImage from 'html-to-image';
import { CharactersType } from '@/assets/characters';
import Vue from 'vue';

export default Vue.extend({
	name: 'TemplateCanvas',
	computed: {
		charsSets(): CharactersType[] {
			return this.$store.getters['getActiveCharacterSets'];
		},
		canvasProps() {
			return this.$store.getters['getProps'];
		}
	},
	data: () => ({
		download: {
			active: false,
			href: '',
			fileName: 'template'
		}
	}),
	watch: {
		charsSets: {
			handler(val: CharactersType[]) {
				this.download.active = false;
				if (val.length > 0) this.createImage();
			},
			immediate: true
		}
	},
	methods: {
		createImage() {
			const node: HTMLElement | null = document.querySelector('#page');
			if (node !== null) {
				htmlToImage
					.toPng(node)
					.then((dataUrl: string) => {
						const img = new Image();
						img.src = dataUrl;
						const fileName = this.charsSets.reduce(
							(prevVal: string, currVal: CharactersType, idx: number) => {
								return idx == 0 ? currVal.id : prevVal + '-' + currVal.id;
							},
							''
						);
						this.download.fileName = `template-${fileName}.png`;
						this.download.active = true;
						this.download.href = dataUrl;
					})
					.catch((error: string) => {
						console.log('oops, something went wrong', error);
					});
			}
		}
	}
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.canvas {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background-color: rgba(80, 50, 0, 0.1);
	padding: 3em;
	flex-direction: column;

	&__page {
		background-color: white;
		width: 21cm;
		padding: 1cm;
	}
	&__download {
		position: fixed;
		bottom: 2em;
	}
}
.button {
	padding: 1.25em;
	font-size: 1em;
	border: none;
	background-color: rgba(100, 200, 255, 1);
	color: black;
	border-radius: 4px;
	line-height: 1em;
	text-decoration: none;
	&:hover {
		background-color: rgba(90, 190, 245, 1);
	}
	&:focus {
		outline: rgba(0, 225, 225, 1);
	}
}
.charset {
	margin: 0;
	padding: 0;
	ul,
	li {
		list-style-type: none;
		margin: 0;
	}
	--char-size: calc(var(--size, 1) * 1cm);
	--1fr: calc((var(--char-width) + var(--char-gap)) * 1cm);
	&__set {
		display: flex;
		padding: 0;
		align-items: start;
		align-content: start;
		justify-content: start;
		flex-wrap: wrap;
		margin: 0;
		// grid-template-columns: repeat(var(--total-width, 13), var(--1fr));
		// flex-gap: calc(var(--size-gap, 0.25) * 1cm);
		// margin: calc(var(--size-gap, 0.25) * 1cm);
	}
	&__char-holder {
		padding: calc(var(--size-gap, 0.25) * 1cm);
	}
	&__char {
		display: block;
		// width: 2em;

		height: var(--char-size);
		width: var(--char-size);
		line-height: var(--char-size);
		text-align: center;
		border: 1px solid rgba(0, 0, 0, var(--opacity-border));
		color: rgba(0, 0, 0, var(--opacity-letter));
		font-size: calc(var(--char-size) * 0.5);
	}
}
</style>
