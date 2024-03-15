<script>
	import * as Card from '$shadcn/components/ui/card/index';
	import { Button } from '$shadcn/components/ui/button/index';
	import GitHub from './icons/github.svelte';
	import Discord from './icons/discord.svelte';
</script>

<div
	id="banner"
	class="background-image dark:testClass grid grid-cols-12 gap-4 bg-[url('/src/lib/assets/story.webp')] dark:bg-[url('/src/lib/assets/storyDark.webp')]"
>
	<Card.Root class="col-span-12 lg:col-span-7">
		<Card.Header>
			<Card.Title class="text-3xl">Welcome to Dawnshard</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="text-lg font-semibold" style:margin-bottom="0.5rem">
				Dawnshard is a server emulator project aimed at enabling continued play of Dragalia Lost.
			</p>
			<p>
				Ever since the official servers were discontinued in November 2022, Dawnshard has been in
				development as a fan-led reimplementation of the game&apos;s web backend.
			</p>
		</Card.Content>
		<Card.Footer class="flex-row flex-wrap gap-2">
			<Button variant="secondary" href="https://github.com/sapiensanatis/dawnshard">
				<span class="mr-2 fill-accent-foreground">
					<GitHub />
				</span>
				Source code
			</Button>
			<Button variant="secondary" href="https://discord.gg/j9zSttjjWj">
				<span class="mr-2 fill-accent-foreground">
					<Discord />
				</span>
				Discord
			</Button>
		</Card.Footer>
	</Card.Root>
</div>

<style>
	#banner {
		padding: 3rem;
		object-position: 100% 50%;
		background-size: cover;
		background-position: 10% 10%;
		background-repeat: no-repeat;
	}
</style>
