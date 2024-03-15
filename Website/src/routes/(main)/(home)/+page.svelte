<script>
	import { mode } from "mode-watcher";
	import * as Card from '$shadcn/components/ui/card/index';
	import { Button } from '$shadcn/components/ui/button/index';
	import GitHub from './icons/github.svelte'
	import Discord from './icons/discord.svelte'

	console.log($mode);


</script>

<div
	id="banner"
	class="background-image bg-[url('/src/lib/assets/story.webp')] dark:bg-[url('/src/lib/assets/storyDark.webp')] grid grid-cols-12 gap-4 dark:testClass"
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
		<Card.Footer class="flex-row gap-2 flex-wrap">
			<Button variant="secondary" href="https://github.com/sapiensanatis/dawnshard">
				<span class="fill-black dark:fill-white mr-2" >
					<GitHub/>
				</span>
				Source code
			</Button>
			<Button variant="secondary" href="https://discord.gg/j9zSttjjWj">
				<span class="fill-black dark:fill-white mr-2" >
					<Discord/>
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
