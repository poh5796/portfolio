<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<!-- 
  pt-20 adds padding-top so content isn't hidden behind the fixed Navbar.
  min-h-screen ensures footer stays at bottom on short pages.
-->
<main class="pt-20 min-h-screen flex flex-col">
  {@render children()}
</main>

<Footer />
