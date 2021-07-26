<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { quintIn, quintOut } from 'svelte/easing';

	export let component: typeof SvelteComponent;
	export let text: string;
	export let style: string;

	function toastIn(node: HTMLDivElement, { duration = 325 }) {
		return {
			duration,
			css: (t: number) => {
				const eased = quintOut(t);

				return `
          transform: translate3d(0,${-200 + eased * 200}%,-1px) scale(${0.5 + eased * 0.5});
          opacity: ${0.5 + eased * 0.5};
        `;
			}
		};
	}

	function toastOut(node: HTMLDivElement, { duration = 325 }) {
		return {
			duration,
			css: (t: number) => {
				const eased = quintIn(t);

				return `
          transform: translate3d(0,${-150 + eased * 150}%,-1px) scale(${0.5 + eased * 0.5});
          opacity: ${eased};
        `;
			}
		};
	}
	let isUnder = false;
</script>

<div
	class="relative {isUnder ? 'z-[-1]' : 'z-10'}"
	in:toastIn
	out:toastOut
	on:introstart={() => (isUnder = true)}
	on:introend={() => (isUnder = false)}
	on:outrostart={() => (isUnder = true)}
	role="alert"
>
	<div {style} class="toast px-3 py-2 rounded-lg border flex items-center bg-white space-x-2">
		<svelte:component this={component} {text} />
	</div>
</div>

<style>
	.toast {
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
		max-width: 400px;
	}
</style>
