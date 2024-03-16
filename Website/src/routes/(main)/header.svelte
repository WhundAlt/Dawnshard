<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$shadcn/components/ui/button';
	import * as Drawer from '$shadcn/components/ui/drawer';
	import { Sun, Moon, Menu, Close } from '$lib/icons';
	import Routes from '$lib/components/routes.svelte'
	import { onMount } from 'svelte';

	let enhance = false;

	onMount(() => {
		enhance = true;
	})
</script>

{#if enhance}
	<Drawer.Root direction="left">
		<header id="header" class="bg-background">
			<Drawer.Trigger class="md:hidden">
				<Button variant="ghost" class="md:hidden">
					<Menu />
				</Button>
			</Drawer.Trigger>
			<h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Dawnshard</h1>
			<div style:flex-grow="1" />
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
			<Button>Login</Button>

			<Drawer.Portal class="md:hidden">
				<Drawer.Content
					id="drawer-content"
					class="fixed bottom-0 left-0 top-0 mt-0 w-[50%] bg-background pl-6 pr-2 pt-2"
				>
					<div id="my-content" class="flex flex-col">
						<Drawer.Close class="self-end">
							<Button variant="ghost">
								Close <Close class="ml-2 mt-0.5 h-5 w-5" />
							</Button>
						</Drawer.Close>
						<Routes/>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</header>
	</Drawer.Root>
{:else}
	<header id="header" class="bg-background">
		<Button variant="ghost" class="md:hidden" href="/navigation">
			<Menu />
		</Button>
		<h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Dawnshard</h1>
		<div style:flex-grow="1" />
		<Button>Login</Button>
	</header>
{/if}

<style>
	#header {
		display: flex;
		flex-grow: 1;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem 0 0.75rem;
		border-bottom: 1px solid;
		border-color: var(--divider);
		position: fixed;
		width: 100vw;
		gap: 1rem;
		height: var(--header-height);
	}

	/* Prevent draggable bar from rendering */
	:global(#drawer-content > :not(#my-content)) {
		display: none;
	}
</style>
