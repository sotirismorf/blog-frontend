<script lang="ts">
	import Card from "$lib/Card.svelte";
	import SvelteMarkdown from "svelte-markdown";
	import categories from "$lib/categories";
	import markdownOptions from "$lib/markdown/markdownOptions";
	export let post: App.Post;

	import Article from "$lib/Article.svelte";
</script>

<svelte:head>
	<title>{post.title} - gizmo_lab</title>
</svelte:head>

<Article>
	<Card>
		<div class="bg-light-darker">
			<h1 class="text-4xl font-bold mb-3">{post.title}</h1>
				<a class="hover:text-orange transition-all" href="/category/{post.categories}">
					<p class="text-xl mb-3 italic text-green">
						{categories[post.categories]}
					</p>
				</a>	
			<img
				alt={post.fmedia[0]}
				class="rounded-lg m-auto my-6"
				src="https://picsum.photos/id/{post.fmedia}/200/250"
			/>
			<SvelteMarkdown
				source={post.body}
				renderers={markdownOptions}
			/>
		</div>
	</Card>
</Article>

