export interface Learning {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  content: string; // Markdown content
}

export const learnings: Learning[] = [
  {
    id: '1',
    title: 'Understanding Svelte Stores',
    date: '2023-10-15',
    excerpt: 'A deep dive into writable, readable, and derived stores in Svelte.',
    slug: 'understanding-svelte-stores',
    tags: ['svelte', 'javascript', 'state-management'],
    content: `
# Understanding Svelte Stores

Svelte stores are a powerful way to manage state in your applications. 

## Writable Stores

Writable stores allow you to read and write values from anywhere in your app.

\`\`\`javascript
import { writable } from 'svelte/store';
export const count = writable(0);
\`\`\`

## Readable Stores

Readable stores are for values that can't be set from the outside, like mouse position or time.

## Derived Stores

Derived stores allow you to create a store based on the value of one or more other stores.
    `
  },
  {
    id: '2',
    title: 'CSS Grid vs Flexbox',
    date: '2023-10-20',
    excerpt: 'When to use Grid and when to use Flexbox for layout.',
    slug: 'css-grid-vs-flexbox',
    tags: ['css', 'layout', 'design'],
    content: `
# CSS Grid vs Flexbox

Both are powerful layout systems, but they serve different purposes.

- **Flexbox** is one-dimensional (rows OR columns).
- **Grid** is two-dimensional (rows AND columns).

Use Flexbox for alignment and Grid for layout structure.
    `
  },
  {
    id: '3',
    title: 'TypeScript Generics Explained',
    date: '2023-11-05',
    excerpt: 'Making your code reusable with Generics.',
    slug: 'typescript-generics',
    tags: ['typescript', 'programming'],
    content: `
# TypeScript Generics

Generics allow you to create reusable components that work with a variety of types rather than a single one.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`
    `
  },
  {
    id: '4',
    title: 'Optimizing React Performance',
    date: '2023-11-12',
    excerpt: 'Tips and tricks to keep your React apps fast.',
    slug: 'react-performance',
    tags: ['react', 'javascript', 'performance'],
    content: 'Using useMemo, useCallback, and React.memo properly can significantly improve performance.'
  },
  {
    id: '5',
    title: 'Introduction to Rust',
    date: '2023-11-25',
    excerpt: 'Why Rust is becoming so popular for systems programming.',
    slug: 'intro-to-rust',
    tags: ['rust', 'systems-programming'],
    content: 'Rust guarantees memory safety without a garbage collector.'
  },
  {
    id: '6',
    title: 'Web Accessibility Basics',
    date: '2023-12-01',
    excerpt: 'Making the web usable for everyone.',
    slug: 'web-a11y',
    tags: ['accessibility', 'html', 'css'],
    content: 'Use semantic HTML, providing alt text for images, and ensuring keyboard navigability.'
  },
  {
    id: '7',
    title: 'Docker for Beginners',
    date: '2023-12-10',
    excerpt: 'Containerizing your applications.',
    slug: 'docker-beginners',
    tags: ['devops', 'docker', 'containers'],
    content: 'Docker solves the "it works on my machine" problem.'
  },
  {
    id: '8',
    title: 'GraphQL vs REST',
    date: '2024-01-05',
    excerpt: 'Comparing two popular API architectural styles.',
    slug: 'graphql-vs-rest',
    tags: ['api', 'graphql', 'rest'],
    content: 'GraphQL allows clients to request exactly what they need.'
  },
  {
    id: '9',
    title: 'Javscript ES6+ Features',
    date: '2024-01-15',
    excerpt: 'Modern JavaScript features you should be using.',
    slug: 'es6-features',
    tags: ['javascript', 'es6'],
    content: 'Arrow functions, destructuring, spread operator, modules, etc.'
  },
  {
    id: '10',
    title: 'The Future of AI in Coding',
    date: '2024-02-01',
    excerpt: 'How AI agents are changing the way we write software.',
    slug: 'ai-coding',
    tags: ['ai', 'future', 'coding'],
    content: 'AI assistants are becoming more capable of handling complex tasks.'
  }
];
