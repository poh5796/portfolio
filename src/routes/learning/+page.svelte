<script lang="ts">
  import { learnings } from '$lib/data/learnings';

  let searchTerm = '';
  let currentPage = 1;
  const itemsPerPage = 5;

  $: filteredLearnings = learnings.filter(log => {
    const searchLower = searchTerm.toLowerCase();
    return log.title.toLowerCase().includes(searchLower) || log.tags.some(tag => tag.toLowerCase().includes(searchLower));
  });

  $: totalPages = Math.ceil(filteredLearnings.length / itemsPerPage);

  // Reset to page 1 when search changes
  $: if (searchTerm) currentPage = 1;

  $: paginatedLearnings = filteredLearnings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 py-12">
  <div class="mb-12">
    <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Learning</h1>
    <p class="text-xl text-gray-600 dark:text-gray-400">A collection of things I've learned along the way.</p>
  </div>

  <!-- Search Bar -->
  <div class="mb-8 relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
    </div>
    <input
      type="text"
      bind:value={searchTerm}
      placeholder="Search by title or tags..."
      class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
    />
  </div>

  <!-- Results List -->
  <div class="space-y-8">
    {#if paginatedLearnings.length > 0}
      {#each paginatedLearnings as log (log.id)}
        <article class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-between items-start mb-2">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <a href={`/learning-log/${log.slug}`}>{log.title}</a>
            </h2>
            <span class="text-sm text-gray-500 dark:text-gray-400 font-mono whitespace-nowrap ml-4">{log.date}</span>
          </div>

          <div class="flex flex-wrap gap-2 mb-4">
            {#each log.tags as tag}
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                #{tag}
              </span>
            {/each}
          </div>

          <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {log.excerpt}
          </p>

          <!-- Read more could link to a detail page if implemented, or expand content -->
          <!-- For now, we assume detail pages might come later or content is shown here if user wants -->
        </article>
      {/each}
    {:else}
      <div class="text-center py-12 text-gray-500 dark:text-gray-400">
        No logs found matching "{searchTerm}".
      </div>
    {/if}
  </div>

  <!-- Pagination -->
  {#if totalPages > 1}
    <div class="mt-12 flex justify-center items-center gap-2">
      <button
        onclick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        class="px-3 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>

      {#each Array(totalPages) as _, i}
        <button
          onclick={() => goToPage(i + 1)}
          class={`px-3 py-1 rounded-md border ${
            currentPage === i + 1 ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          } transition-colors`}
        >
          {i + 1}
        </button>
      {/each}

      <button
        onclick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        class="px-3 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  {/if}
</div>
