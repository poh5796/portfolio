<script>
  import { isDark } from '$lib/stores/theme';

  // Simple navigation array
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  function toggleTheme() {
    isDark.update(n => !n);
  }
</script>

<nav class="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-300">
  <div class="font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
    <a href="/">DEV.PORTFOLIO</a>
  </div>

  <div class="flex items-center gap-6">
    <ul class="flex gap-6">
      {#each links as link}
        <li>
          <a href={link.href} class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline transition-colors">
            {link.name}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Dark Mode Toggle -->
    <button onclick={toggleTheme} class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors" aria-label="Toggle Dark Mode">
      {#if $isDark}
        <!-- Sun Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"
          ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path
            d="m19.07 4.93-1.41 1.41"
          /></svg
        >
      {:else}
        <!-- Moon Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"
          ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
        >
      {/if}
    </button>
  </div>
</nav>
