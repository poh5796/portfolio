<script lang="ts">
  import { page } from '$app/stores';
  import { learnings } from '$lib/data/learnings';

  $: slug = $page.params.slug;
  $: log = learnings.find(l => l.slug === slug);
</script>

<div class="max-w-3xl mx-auto px-4 sm:px-6 py-12">
  {#if log}
    <article>
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{log.title}</h1>
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
          <span>{log.date}</span>
          <div class="flex gap-2">
            {#each log.tags as tag}
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                #{tag}
              </span>
            {/each}
          </div>
        </div>
      </header>

      <div class="prose dark:prose-invert max-w-none whitespace-pre-wrap text-gray-700 dark:text-gray-300">
        {log.content}
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <a href="/learning-log" class="text-blue-600 dark:text-blue-400 hover:underline"> &larr; Back to Learning Log </a>
      </div>
    </article>
  {:else}
    <div class="text-center py-20">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Log not found</h1>
      <a href="/learning-log" class="text-blue-600 dark:text-blue-400 hover:underline"> Back to Learning Log </a>
    </div>
  {/if}
</div>
