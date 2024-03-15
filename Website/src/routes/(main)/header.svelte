<script lang="ts">
	import { toggleMode } from "mode-watcher";
	import { Button } from '$shadcn/components/ui/button';
	import * as Drawer from "$shadcn/components/ui/drawer/index";
	import { Sun, Moon, Menu, Close } from './icons';
	import { cn } from '$shadcn/utils.js';
	import { routeGroups } from './routes';

</script>

<Drawer.Root direction="left">
	<header id="header" class="bg-background" >
		<Drawer.Trigger class="md:hidden">
			<Button variant="ghost" class="md:hidden">
				<Menu />
			</Button>
		</Drawer.Trigger>
		<h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Dawnshard</h1>
		<div style:flex-grow="1" />
		<Button>Login</Button>
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>

		<Drawer.Portal class="md:hidden">
			<Drawer.Content id="drawer-content" class="fixed pl-6 pr-2 pt-2 bg-background mt-0 bottom-0 left-0 top-0 w-[50%] rounded-r-[10px]">
				<div id="my-content" class="flex flex-col">
					<Drawer.Close class="self-end">
						<Button variant="ghost">
							Close <Close class="ml-2 mt-0.5 h-5 w-5"/>
						</Button>
					</Drawer.Close>
					{#each routeGroups as routeGroup}
						<h2 class="text-m scroll-m-20 font-semibold tracking-tight">{routeGroup.title}</h2>
						{#each routeGroup.routes as route}
							<Button href={route.href} variant="ghost" size="sm" class={cn('justify-start')}>
								<svelte:component this={route.icon} class="mr-2 size-4" aria-hidden="true" />
								{route.title}
							</Button>
						{/each}
					{/each}
				</div>
			</Drawer.Content>
		</Drawer.Portal>
	</header>
</Drawer.Root>

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
</style>
