<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Listbox from '$lib/_components/Listbox/Listbox.svelte';
	import ListboxOption from '$lib/_components/Listbox/ListboxOption.svelte';
	import type { Position } from '$lib/_Toast/position';
	import Toaster, { toast } from 'svelte-hot-toast';

	let reversed = false;
	let position: Position = 'top-center';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="p-5 space-y-2">
	<button
		class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
		on:click={() => toast.success(`Here's your successful toast!`)}
	>
		Successful toast! 🍻🍻
	</button>

	<button
		class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
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

	<button
		class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
		on:click={() => toast.loading(`Saving...`, { style: 'width: 200px' })}
	>
		Loading toast!
	</button>

	<!-- <button
		class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
		on:click={() =>
			toast(`This toast will be here until the end of time?!`, { duration: 123456778 })}
	>
		Infinity toast! ∞
	</button> -->

	<button
		class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
		on:click={() => toast.error(`Here's a burnt toast! 🔥🍞`)}
	>
		Failed toast! 🍻🍻
	</button>

	<button
		class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
		on:click={() => toast(`Here's your toast!`, { duration: 1000 })}>Fast Toast! 💨</button
	>
	<button
		class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
		on:click={() =>
			toast(
				`This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller.`
			)}
	>
		Big Toast! 🍻🍻
	</button>

	<div class="flex items-center">
		<input type="checkbox" bind:checked={reversed} id="toggle-reversed" />
		<label class="ml-2" for="toggle-reversed">Toggle direction: {reversed}</label>
	</div>

	<div class="max-w-xl">
		<div>Current position: {position}</div>

		<Listbox class="grid grid-cols-3 gap-2" bind:selected={position}>
			<ListboxOption
				class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
				value="top-left"
			>
				top-left
			</ListboxOption>
			<ListboxOption
				class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
				value="top-center"
			>
				top-center
			</ListboxOption>
			<ListboxOption
				class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
				value="top-right"
			>
				top-right
			</ListboxOption>
			<ListboxOption
				class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
				value="bottom-left"
			>
				bottom-left
			</ListboxOption>
			<ListboxOption
				class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
				value="bottom-center"
			>
				bottom-center
			</ListboxOption>
			<ListboxOption
				class="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none active:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition"
				value="bottom-right"
			>
				bottom-right
			</ListboxOption>
		</Listbox>
	</div>
</div>

<Toaster {reversed} {position} />
