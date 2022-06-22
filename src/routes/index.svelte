<script lang="ts">
	import Article from "$lib/Article.svelte";
	import Card from "$lib/Card.svelte";
	import categories from "$lib/categories";

	export let posts: any;
</script>

<Article>
	<h1 class="text-3xl font-bold">Πρόσφατα</h1>

	{#each posts as item}
		<Card>
			<p class="text-green">{categories[item.categories[0]]}</p>
			<a
				class="hover:text-orange transition-all"
				href="/posts/{item.date}"
			>
				<h1 class="text-2xl font-bold">{item.title}</h1>
				<p class="whitespace-nowrap overflow-ellipsis overflow-hidden">
					{item.body}
				</p>
			</a>
		</Card>
	{/each}
</Article>
