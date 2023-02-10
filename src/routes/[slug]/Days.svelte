<script lang="ts">
	import type { Day } from '$lib/types';
	import Talks from './Talks.svelte';

	export let days: Day[];
</script>

<main>
	<div class="container flex row-auto gap-0.5 mx-auto justify-between">
		{#each days as day}
			<a
				href="#"
				class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{day.title}
				</h5>
				<p class="font-normal text-sm text-gray-700 dark:text-gray-400">{day.date}</p>

				<p class="font-normal italic text-gray-700 dark:text-gray-400">{day.description}</p>

				<br />

				<br />

				<Talks talks={day.talks} />
			</a>
		{/each}
	</div>
</main>
