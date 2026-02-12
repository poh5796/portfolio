<script>
  import Hero from '$lib/components/sections/Hero.svelte';
  import About from '$lib/components/sections/About.svelte';
  import ExperienceLog from '$lib/components/sections/ExperienceLog.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import NetworkVisualizer from '$lib/components/sections/NetworkVisualizer.svelte';
</script>

<Hero />

<div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
  <div class="sticky top-20 self-start h-[600px]">
    <NetworkVisualizer />
  </div>
  <div>
    <ExperienceLog />
  </div>
</div>

<About />
<Contact />
