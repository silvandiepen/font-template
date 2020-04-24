<template>
	<div id="app">
		<Options class="option-panel" />
		<div class="canvas-panel">
			<Settings />
			<TemplateCanvas />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Options, TemplateCanvas, Settings } from '@/components';

export default Vue.extend({
	name: 'App',
	components: {
		Settings,
		TemplateCanvas,
		Options
	}
});
</script>

<style lang="scss" src="@/assets/scss/app.scss" />
