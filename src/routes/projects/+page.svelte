<script>
  // Mock Data - In a real app, this might come from a JSON file or Markdown
  const projects = [
    { id: 1, title: 'E-Commerce Core', role: 'Backend Lead', desc: 'Microservices architecture handling 10k RPS.' },
    { id: 2, title: 'WebGL Portfolio', role: 'Frontend', desc: 'Interactive 3D experience using Threlte.' },
    { id: 3, title: 'Auth System', role: 'Full Stack', desc: 'Oauth2 provider implementation with strict security.' }
  ];
</script>

<div class="max-w-6xl mx-auto px-6 py-20">
  <h2 class="text-5xl font-bold mb-16">Selected Works</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each projects as project}
      <!-- Project Card -->
      <article class="group relative block h-96 bg-gray-100 rounded-xl overflow-hidden cursor-pointer">
        <!-- Image Placeholder -->
        <div class="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
          Project Image
        </div>
        
        <!-- Hover Overlay content -->
        <div class="absolute bottom-0 left-0 w-full p-8 bg-white/90 backdrop-blur translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span class="text-xs font-mono uppercase tracking-widest text-gray-500">{project.role}</span>
          <h3 class="text-2xl font-bold mt-1">{project.title}</h3>
          <p class="mt-2 text-gray-600">{project.desc}</p>
        </div>
      </article>
    {/each}
  </div>
</div>