<script lang="ts">
	import Card from "$lib/Card.svelte";
	import categories from '$lib/categories'
	export let posts: App.Post

	import Article from "$lib/Article.svelte";
</script>

<svelte:head>
	<title> {categories[posts[0].categories]} - gizmo_lab</title>
</svelte:head>

<Article>
{#each posts as post}
		<Card>
			<div class="inline-flex items-stretch content-start">
				<a
					class="flex-shrink-0 w-32"
					href="/posts/{post.date}-{post.slug}"
				>
					<img
						alt={post.title}
						class="rounded-lg hover:opacity-80 transition-all"
						src="https://picsum.photos/id/{post.fmedia}/200/250" 
					/>
				</a>
				<div class="ml-4 flex-shrink">
										<a
						class="hover:text-orange transition-all"
						href="/category/{post.categories}"
					><p class="text-green">{categories[post.categories[0]]}</p></a>
					<a
						class="hover:text-orange transition-all"
						href="/posts/{post.date}-{post.slug}"
					>
						<h1 class="text-2xl font-bold">{post.title}</h1>
						<p
							class="overflow-hidden h-[4.5rem]"
						>
							{post.body}
						</p>
					</a>
				</div>
			</div>
		</Card>
{/each}
</Article>
