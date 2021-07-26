<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Toaster, { toast } from 'svelte-hot-toast';

	// import Toaster from '$lib/_Toast/Toaster.svelte';
	// import { toast } from '$lib/_Toast/toast';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="p-5">
	<button class="block" on:click={() => toast.success(`Here's your successful toast!`)}>
		Successful toast! 🍻🍻
	</button>

	<button
		class="block"
		on:click={() =>
			toast.promise(
				new Promise((resolve, reject) => {
					setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
				}),
				{
					loading: 'Saving...',
					success: 'Settings saved!',
					error: 'Could not save.',
					style: 'width: 200px'
				}
			)}
	>
		Promise toast! 🤙
	</button>

	<button class="block" on:click={() => toast.loading(`Saving...`, { style: 'width: 200px' })}>
		Loading toast!
	</button>

	<button
		class="block"
		on:click={() =>
			toast(`This toast will be here until the end of time?!`, { duration: 123456778 })}
	>
		Infinity toast! ∞
	</button>

	<button class="block" on:click={() => toast.error(`Here's a burnt toast! 🔥🍞`)}>
		Failed toast! 🍻🍻
	</button>

	<button class="block" on:click={() => toast(`Here's your toast!`, { duration: 1000 })}
		>Fast Toast! 💨</button
	>
	<button
		on:click={() =>
			toast(
				`This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller.`
			)}
	>
		Big Toast! 🍻🍻
	</button>
</div>
<Toaster />
