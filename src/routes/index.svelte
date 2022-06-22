<script lang="ts">
	import Article from "$lib/Article.svelte";
	import Card from "$lib/Card.svelte";
	import categories from "$lib/categories";
	
	export let posts: any;
</script>

	
<svelte:head>
	<title>We are gizmo_lab</title>
</svelte:head>

<Article>
	<h1 class="text-3xl font-bold">Πρόσφατα</h1>


	
	{#each posts as item}
		<Card>
			<p class="text-green">{categories[item.categories[0]]}</p>
			<a
				class="hover:text-orange transition-all"
				href="/posts/{item.date}-{item.title}"
			>
				<h1 class="text-2xl font-bold">{item.title}</h1>
				<img class="rounded-t-lg"  src="/img/{item.fmedia}" >
				<p class="whitespace-nowrap overflow-ellipsis overflow-hidden">
					{item.body}
				</p>
			</a>
		</Card>
	{/each}
</Article>
