<div class="max-w-3xl mx-auto px-6 py-20 space-y-20">
  
  <!-- Bio Section -->
  <section class="space-y-6">
    <h2 class="text-4xl font-bold">About Me</h2>
    <p class="text-lg leading-relaxed text-gray-700">
      I am a Node.js developer transitioning into creative development. 
      My background is in distributed systems, API architecture, and performance optimization.
      Currently, I am exploring the intersection of systems engineering and WebGL graphics.
    </p>
  </section>

  <!-- Skills Grid -->
  <section class="space-y-6">
    <h3 class="text-2xl font-bold">Tech Stack</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <!-- Reusable Skill Item -->
      {#each ['Node.js', 'TypeScript', 'SvelteKit', 'WebGL', 'Docker', 'PostgreSQL'] as skill}
        <div class="p-4 border border-gray-200 rounded text-center font-mono text-sm hover:border-black transition cursor-default">
          {skill}
        </div>
      {/each}
    </div>
  </section>
</div>