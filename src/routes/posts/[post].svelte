<script lang="ts">
	import Card from "$lib/Card.svelte";
	export let post: any

	import Article from "$lib/Article.svelte";
</script>

<svelte:head>
	<title>{post.title} - gizmo_lab</title>
</svelte:head>

<Article>
	<Card>
		<div class="bg-light-darker">
			<h1 class="text-4xl font-bold mb-3">{post.title}</h1>
			<p class="text-lg">{post.body}</p>
		</div>
	</Card>
</Article>
