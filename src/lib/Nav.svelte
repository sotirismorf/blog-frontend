<script>
	const items = [
		{
			href: "/",
			description: "Αφίσες"
		},
		{
			href: "/about",
			description: "Σχετικά με εμάς"
		}
	]
</script>

<nav class="text-center py-3 bg-light-darker shadow-md">
	<a class="text-2xl pr-5" href="/"><b>gizmo_lab</b></a>
	{#each items as item}
		<a
			class="p-3 text-xl"
			href={item.href}
		>{item.description}</a>
	{/each}
</nav>
