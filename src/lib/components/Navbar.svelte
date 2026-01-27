<script>
  // Simple navigation array
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];
</script>

<nav class="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-gray-200 bg-white/80 backdrop-blur-sm">
  <div class="font-bold text-xl tracking-tighter">
    DEV.PORTFOLIO
  </div>
  
  <ul class="flex gap-6">
    {#each links as link}
      <li>
        <a href={link.href} class="hover:underline hover:text-gray-600 transition-colors">
          {link.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>