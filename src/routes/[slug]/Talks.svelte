<script lang="ts">
	import type { Talk } from '$lib/types';

	export let talks: Talk[];
</script>

<main>
	{#each talks as talk, i}
		<p class="font-bold text-gray-700 dark:text-gray-400">{i + 1}. {talk.title}</p>
		<p class="font-normal text-gray-700 dark:text-gray-400">{talk.speaker}</p>
		<p class="font-normal text-gray-700 dark:text-gray-400">{talk.time}</p>
	{/each}
</main>
