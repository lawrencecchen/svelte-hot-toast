<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import BaseToast from './BaseToast.svelte';
	import { freezeToasts, thawToasts } from './toast';
	import { toastEntries } from './toasts.store';
</script>

<div class="toaster font-sans fixed inset-4 pointer-events-none">
	<div class="absolute inset-0 flex flex-col items-center">
		<div
			class="flex-grow-0 flex flex-col items-center pointer-events-auto"
			on:mouseenter={freezeToasts}
			on:mouseleave={thawToasts}
		>
			{#each $toastEntries as [key, { text, component, style }] (key)}
				<div animate:flip={{ duration: 325, easing: quintOut }} class="flex-none py-1">
					<BaseToast {text} {component} {style} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.toaster {
		z-index: 9999;
	}
</style>
