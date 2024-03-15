<script lang="ts">
	import '../../app.pcss';
	import Header from './header.svelte';
	import Navigation from './navigation.svelte'
	import { routeGroups } from './routes';
</script>

<Header />
<Navigation routeGroups={routeGroups} />

<main style:padding-top="var(--header-height)" style:padding-left="var(--navigation-width)">
<slot />
</main>