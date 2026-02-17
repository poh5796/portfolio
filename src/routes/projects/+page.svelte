<script lang="ts">
  import { PROJECT_DETAILS } from '$lib/data/projects';
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div class="mb-12">
    <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects & Work</h1>
    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">A detailed look at my technical contributions, architectural decisions, and lessons learned across different roles.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each PROJECT_DETAILS as company}
      <a href={`/projects/${company.slug}`} class="group block h-full">
        <div class="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 relative overflow-hidden">
          <!-- Background Decoration -->
          <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 dark:text-blue-400">
              <path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" />
            </svg>
          </div>

          <div class="relative z-10 font-mono">
            <p class="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">{company.role}</p>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {company.company}
            </h2>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">{company.period}</p>

            <p class="text-gray-600 dark:text-gray-300 mb-6 font-sans">
              {company.summary}
            </p>

            <div class="flex flex-wrap gap-2">
              {#each company.projects.slice(0, 3) as project}
                <span class="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                  {project.name}
                </span>
              {/each}
              {#if company.projects.length > 3}
                <span class="text-xs text-gray-400 self-center">+{company.projects.length - 3} more</span>
              {/if}
            </div>

            <div class="mt-8 flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
              View Details <span class="ml-2">→</span>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
