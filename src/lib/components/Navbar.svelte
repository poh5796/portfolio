<script>
  import { isDark } from '$lib/stores/theme';
  import { slide } from 'svelte/transition';

  // Simple navigation array
  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Learning', href: '/learning' },
    { name: 'Contact', href: '/#contact' }
  ];

  let isOpen = false;

  function toggleTheme() {
    isDark.update(n => !n);
  }

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
  <div class="px-6 py-4 flex justify-between items-center relative z-50 bg-inherit">
    <div class="font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
      <a href="/" class="font-serif tracking-wide">hcpoh</a>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-6">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"
            ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path
              d="m19.07 4.93-1.41 1.41"
            /></svg
          >
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"
            ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
          >
        {/if}
      </button>
    </div>

    <!-- Mobile Controls -->
    <div class="flex items-center gap-4 md:hidden">
      <!-- Dark Mode Toggle (Mobile) -->
      <button onclick={toggleTheme} class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors" aria-label="Toggle Dark Mode">
        {#if $isDark}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"
            ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path
              d="m19.07 4.93-1.41 1.41"
            /></svg
          >
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"
            ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
          >
        {/if}
      </button>

      <!-- Hamburger Menu Button -->
      <button onclick={toggleMenu} class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors" aria-label="Toggle Menu">
        {#if isOpen}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"
            ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
          >
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"
            ><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg
          >
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div transition:slide={{ duration: 300 }} class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
      <ul class="flex flex-col py-4 px-6 gap-4">
        {#each links as link}
          <li>
            <a href={link.href} onclick={closeMenu} class="block text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>
