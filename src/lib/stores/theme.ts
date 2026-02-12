import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultValue = false;
const initialValue = browser ? localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) : defaultValue;

export const isDark = writable<boolean>(initialValue);

isDark.subscribe(value => {
  if (browser) {
    if (value) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }
});
