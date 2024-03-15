<script lang="ts">
	import { Button } from '$shadcn/components/ui/button';

	import type { RouteGroup } from './routes';
	import { cn } from '$shadcn/utils.js';

	export let routeGroups: RouteGroup[];
	export let drawerOpen: boolean;
</script>

<div id="navigation" class="flex-col gap-4 py-2 hidden md:flex">
	<nav class="grid gap-1 px-2">
		{#each routeGroups as routeGroup}
			<h2 class="text-m scroll-m-20 font-semibold tracking-tight">{routeGroup.title}</h2>
			{#each routeGroup.routes as route}
				<Button href={route.href} variant="ghost" size="sm" class={cn('justify-start')}>
					<svelte:component this={route.icon} class="mr-2 size-4" aria-hidden="true" />
					{route.title}
				</Button>
			{/each}
		{/each}
	</nav>
</div>



<style>
	#navigation {
		border-right: 1px solid;
		border-color: var(--divider);
		position: fixed;
		height: 100%;
		top: var(--header-height);
		width: var(--navigation-width);
		padding: 1rem 0 0 1rem;
	}
</style>
