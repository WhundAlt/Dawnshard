<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import '../../app.pcss';
	import Header from './header.svelte';
	import Navigation from './navigation.svelte';
	import { routeGroups } from './routes';
</script>

<ModeWatcher />
<Header />
<Navigation {routeGroups} />

<main class="pl-0 md:pl-[var(--navigation-width)]" style:padding-top="var(--header-height)">
	<slot />
</main>
