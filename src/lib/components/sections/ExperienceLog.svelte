<script lang="ts">
  import { EXPERIENCE, type Experience } from '$lib/data/resume';

  const getCommitPrefix = (text: string): { prefix: string; color: string } => {
    const lower = text.toLowerCase();
    if (lower.includes('architected') || lower.includes('designed') || lower.includes('engineered')) {
      return { prefix: '[FEAT]', color: 'text-blue-600 dark:text-blue-400' };
    }
    if (lower.includes('refactor') || lower.includes('optimized') || lower.includes('modernized')) {
      return { prefix: '[REFACTOR]', color: 'text-purple-600 dark:text-purple-400' };
    }
    if (lower.includes('fix') || lower.includes('risk') || lower.includes('security')) {
      return { prefix: '[FIX]', color: 'text-red-600 dark:text-red-400' };
    }
    if (lower.includes('cloud') || lower.includes('docker') || lower.includes('pipeline') || lower.includes('infrastructure')) {
      return { prefix: '[INFRA]', color: 'text-orange-600 dark:text-orange-400' };
    }
    if (lower.includes('test') || lower.includes('validated') || lower.includes('certified')) {
      return { prefix: '[TEST]', color: 'text-green-600 dark:text-green-400' };
    }
    return { prefix: '[LOG]', color: 'text-gray-500 dark:text-gray-400' };
  };
</script>

<div id="experience" class="font-mono text-sm sm:text-base max-w-4xl mx-auto">
  <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <!-- Window Header -->
    <div class="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
      <span class="ml-4 text-gray-500 dark:text-gray-400 text-xs">user@portfolio:~/work</span>
    </div>

    <!-- Terminal Content -->
    <div class="p-4 sm:p-6 space-y-8 overflow-x-hidden">
      <div class="text-green-600 dark:text-green-400">
        <span class="text-blue-600 dark:text-blue-400">➜</span> <span class="text-yellow-600 dark:text-yellow-400">~/work</span> <span class="text-gray-600 dark:text-gray-300">cat experience.log</span>
      </div>

      {#each EXPERIENCE as job, i}
        <div class="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-2">
          <!-- Job Header: Company & Role -->
          <div class="mb-2">
            <span class="text-purple-600 dark:text-purple-400 font-bold">COMMIT {EXPERIENCE.length - i}</span>
            <span class="text-gray-400 dark:text-gray-500 mx-2">|</span>
            <span class="text-yellow-600 dark:text-yellow-300 font-bold">{job.company}</span>
            <span class="text-gray-400 dark:text-gray-500 mx-2">-></span>
            <span class="text-gray-800 dark:text-gray-300">{job.role}</span>
            <span class="text-gray-500 text-xs block sm:inline sm:ml-4">({job.period})</span>
          </div>

          <!-- Technologies Badge -->
          <div class="flex flex-wrap gap-2 mb-4">
            {#each job.technologies as tech}
              <span class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded border border-gray-200 dark:border-gray-700 uppercase transition-colors">{tech}</span>
            {/each}
          </div>

          <!-- Description Logs -->
          <div class="space-y-1 mb-4">
            {#each job.description as desc}
              {@const { prefix, color } = getCommitPrefix(desc)}
              <div class="flex items-start">
                <span class={`${color} font-bold mr-2 w-20 flex-shrink-0 text-right`}>{prefix}</span>
                <span class="text-gray-700 dark:text-gray-300">{desc}</span>
              </div>
            {/each}
          </div>

          <!-- Highlights (Build Artifacts) -->
          {#if job.highlights.length > 0}
            <div class="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700/50 mt-2 transition-colors">
              <div class="text-gray-500 text-xs uppercase mb-2">Build Artifacts / Metrics</div>
              <ul class="list-none space-y-1">
                {#each job.highlights as highlight}
                  <li class="pl-0 text-green-600 dark:text-green-300 flex items-start">
                    <span class="mr-2">✔</span>
                    {highlight}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      {/each}

      <!-- Command Prompt at Bottom -->
      <div class="text-green-600 dark:text-green-400 animate-pulse">
        <span class="text-blue-600 dark:text-blue-400">➜</span> <span class="text-yellow-600 dark:text-yellow-400">~/work</span> <span class="inline-block w-2.5 h-4 bg-gray-600 dark:bg-gray-400 ml-1 align-middle"></span>
      </div>
    </div>
  </div>
</div>
