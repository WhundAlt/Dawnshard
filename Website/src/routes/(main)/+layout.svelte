<script lang="ts">
	import { ModeWatcher } from "mode-watcher";

	import '../../app.pcss';
	import Header from './header.svelte';
	import Navigation from './navigation.svelte';
	import { routeGroups } from './routes';

	$: drawerOpen = false;
</script>

<ModeWatcher/>
<Header bind:drawerOpen/>
<Navigation {routeGroups} {drawerOpen}/>

<main class="md:pl-[var(--navigation-width)] pl-0" style:padding-top="var(--header-height)" >
	<slot />
</main>
