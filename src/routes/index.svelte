<script lang="ts">
	import Article from "$lib/Article.svelte";
	import Card from "$lib/Card.svelte";
	import categories from "$lib/categories";

	import SvelteMarkdown from "svelte-markdown";
	import markdownOptions from "$lib/markdown/markdownOptions";

	export let posts: App.Post[];
</script>

<svelte:head>
	<title>We are gizmo_lab</title>
</svelte:head>

<Article>
	<h1 class="text-3xl font-bold">Πρόσφατα</h1>

	{#each posts as item}
		<Card>
			<div class="inline-flex items-stretch content-start">
				<a
					class="flex-shrink-0 w-32"
					href="/posts/{item.date}-{item.slug}"
				>
					<img
						alt={item.title}
						class="rounded-lg hover:opacity-80 transition-all"
						src="https://picsum.photos/id/{item.fmedia}/200/250" 
					/>
				</a>
				<div class="ml-4 flex-shrink">
					<a
						class="hover:text-orange transition-all"
						href="/category/{item.categories}">
						<p class="text-green">{categories[item.categories[0]]}</p>
					</a>
					<a
						class="hover:text-orange transition-all"
						href="/posts/{item.date}-{item.slug}"
					>
						<h1 class="text-2xl font-bold">{item.title}</h1>
						<div class="h-16 overflow-hidden">
							<SvelteMarkdown
								source={item.body}
								renderers={markdownOptions}
							/>
						</div>
					</a>
				</div>
			</div>
		</Card>
	{/each}
</Article>
