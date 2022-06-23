<script lang="ts">
	import Card from "$lib/Card.svelte";
	import categories from '$lib/categories'
	export let post: App.Post

	import Article from "$lib/Article.svelte";
</script>

<svelte:head>
	<title>{post.title} - gizmo_lab</title>
</svelte:head>

<Article>
	<Card>
		<div class="bg-light-darker">
			<h1 class="text-4xl font-bold mb-3">{post.title}</h1>
			<p class="text-xl mb-3 italic text-green">{categories[post.categories]}</p>
			<img
				alt={post.fmedia[0]}
				class="rounded-lg m-auto my-6"
				src="https://picsum.photos/id/{post.fmedia}/200/250" 
			/>
			<p class="text-lg">{post.body}</p>
		</div>
	</Card>
</Article>
