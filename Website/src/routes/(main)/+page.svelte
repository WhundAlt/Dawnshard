<script>
	import story from '$lib/assets/story.webp'
	import * as Card from '$shadcn/components/ui/card'
</script>

<style>
	#banner {
			padding: 3rem;
			object-position: 100% 50%;
      background-size: cover;
      background-position: 10% 10%;
      background-repeat: no-repeat;
	}
</style>

<div id="banner" class="background-image grid grid-cols-12 gap-4" style:background-image="url({story})">
	<Card.Root class="lg:col-span-7 sm:col-span-12">
		<Card.Header>
			<Card.Title class="text-3xl">Welcome to Dawnshard</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="font-semibold text-lg" style:margin-bottom="0.5rem">
			Dawnshard is a server emulator project aimed at enabling
			continued play of Dragalia Lost.
			</p>
			<p >
				Ever since the official servers were discontinued in November
				2022, Dawnshard has been in development as a fan-led
				reimplementation of the game&apos;s web backend.
			</p>
		</Card.Content>
	</Card.Root>
</div>
