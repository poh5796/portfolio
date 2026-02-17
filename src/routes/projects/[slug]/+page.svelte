<script lang="ts">
  import { page } from '$app/stores';
  import { PROJECT_DETAILS } from '$lib/data/projects';

  $: slug = $page.params.slug;
  $: company = PROJECT_DETAILS.find(p => p.slug === slug);

  // Group reflections into a distinct section? Or per project?
  // The user asked for "comments, mistakes I made and how could I have done it better".
  // In my data structure `reflections` is per project item.
</script>

<div class="pb-20">
  {#if company}
    <!-- Header -->
    <div class="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-20 px-4 mb-12">
      <div class="max-w-5xl mx-auto">
        <a href="/projects" class="inline-flex items-center text-blue-300 hover:text-white mb-6 uppercase tracking-wider text-xs font-bold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </a>
        <h1 class="text-4xl md:text-6xl font-black mb-4 tracking-tight">{company.company}</h1>
        <div class="flex flex-wrap gap-6 text-lg text-blue-100 font-mono">
          <span>{company.role}</span>
          <span class="opacity-50">|</span>
          <span>{company.period}</span>
        </div>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-4 space-y-20">
      <!-- Intro Summary -->
      <section class="prose dark:prose-invert max-w-none">
        <p class="text-xl leading-relaxed text-gray-700 dark:text-gray-300 border-l-4 border-blue-500 pl-6 italic">
          "{company.summary}"
        </p>
      </section>

      <!-- Projects List -->
      <div class="space-y-16">
        {#each company.projects as project, index}
          <section class="relative">
            <!-- Timeline Connector (Desktop only) -->
            {#if index !== company.projects.length - 1}
              <div class="hidden md:block absolute left-8 top-16 bottom-[-64px] w-0.5 bg-gray-200 dark:bg-gray-800"></div>
            {/if}

            <div class="grid grid-cols-1 md:grid-cols-[64px_1fr] gap-8">
              <!-- Number Indicator -->
              <div class="hidden md:flex flex-col items-center">
                <div class="w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 flex items-center justify-center text-xl font-bold text-blue-600 dark:text-blue-400 z-10 shadow-lg">
                  {index + 1}
                </div>
              </div>

              <!-- Content Card -->
              <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.name}</h2>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-6">
                  {#each project.techStack as tech}
                    <span class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {tech}
                    </span>
                  {/each}
                </div>

                <!-- Description & Outcomes -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 class="text-sm uppercase tracking-wider font-bold text-gray-400 mb-3">Context & Challenge</h3>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <h3 class="text-sm uppercase tracking-wider font-bold text-gray-400 mb-3">Outcomes</h3>
                    <ul class="space-y-2">
                      {#each project.outcomes as outcome}
                        <li class="flex items-start text-gray-700 dark:text-gray-300">
                          <span class="mr-2 text-green-500 mt-1">✔</span>
                          {outcome}
                        </li>
                      {/each}
                    </ul>
                  </div>
                </div>

                <!-- Reflections: Deep Dive -->
                {#if project.reflections && (project.reflections.mistakes.length > 0 || project.reflections.improvements.length > 0)}
                  <div class="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <h3 class="flex items-center text-lg font-bold text-gray-900 dark:text-white mb-6">
                      <span class="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 p-2 rounded mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </span>
                      Engineer's Log: Reflections
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <!-- Mistakes -->
                      {#if project.reflections.mistakes.length > 0}
                        <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border border-red-100 dark:border-red-900/30">
                          <h4 class="text-red-700 dark:text-red-400 font-bold mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Lessons Learned (Mistakes)
                          </h4>
                          <ul class="list-disc list-inside space-y-2 text-sm text-red-800 dark:text-red-300 marker:text-red-400">
                            {#each project.reflections.mistakes as mistake}
                              <li>{mistake}</li>
                            {/each}
                          </ul>
                        </div>
                      {/if}

                      <!-- Improvements -->
                      {#if project.reflections.improvements.length > 0}
                        <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border border-green-100 dark:border-green-900/30">
                          <h4 class="text-green-700 dark:text-green-400 font-bold mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Key Improvements
                          </h4>
                          <ul class="list-disc list-inside space-y-2 text-sm text-green-800 dark:text-green-300 marker:text-green-400">
                            {#each project.reflections.improvements as improvement}
                              <li>{improvement}</li>
                            {/each}
                          </ul>
                        </div>
                      {/if}
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </section>
        {/each}
      </div>
    </div>
  {:else}
    <div class="text-center py-20">
      <h1 class="text-4xl font-bold mb-4">Project Not Found</h1>
      <a href="/projects" class="text-blue-600 hover:underline">Return to Projects</a>
    </div>
  {/if}
</div>
