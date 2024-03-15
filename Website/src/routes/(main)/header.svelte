<script>
	import { Button } from '$shadcn/components/ui/button';
</script>

<style>
    .header {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
				align-items: center;
        padding: 0 2rem 0 0.75rem;
				border-bottom: 1px solid;
				border-color: var(--divider);
				position: fixed;
				width: 100vw;
        height: var(--header-height);
    }
</style>

<header class="header">
	<h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Dawnshard</h1>
	<div style:flex-grow="1"/>
	<Button>Login</Button>
</header>

