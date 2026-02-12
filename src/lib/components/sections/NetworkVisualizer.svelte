<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { isDark } from '$lib/stores/theme';

  // Configuration for the network
  const NODE_COUNT = 15;
  const CONNECTION_DISTANCE = 150;

  let width = 800;
  let height = 600;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let animationFrameId: number;

  interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }

  let nodes: Node[] = [];

  function initNodes() {
    nodes = Array.from({ length: NODE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5, // Slow drift velocity
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 2 // Radius between 2 and 4
    }));
  }

  function update() {
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Dynamic colors based on theme
    const isDarkMode = $isDark;
    const dotColor = isDarkMode ? '#10B981' : '#059669'; // Green-500 vs Green-600
    const lineColor = isDarkMode ? '16, 185, 129' : '5, 150, 105'; // Green-500 vs Green-600

    // Update positions & Draw Lines
    ctx.lineWidth = 0.5;

    // Draw connections first
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_DISTANCE) {
          const opacity = 1 - distance / CONNECTION_DISTANCE;
          ctx.strokeStyle = `rgba(${lineColor}, ${opacity * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (let node of nodes) {
      // Movement
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off walls
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Draw dot
      ctx.fillStyle = dotColor;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(update);
  }

  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext('2d');
      width = canvas.parentElement?.clientWidth || 800;
      height = canvas.parentElement?.clientHeight || 600;
      canvas.width = width;
      canvas.height = height;

      initNodes();
      update();

      // Handle resize
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          width = entry.contentRect.width;
          height = entry.contentRect.height;
          canvas.width = width;
          canvas.height = height;
          initNodes();
        }
      });

      if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement);
      }

      return () => {
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
      };
    }
  });
</script>

<div class="relative w-full h-full min-h-[400px] bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl transition-colors duration-300">
  <!-- Grid Background Overlay -->
  <div
    class="absolute inset-0 bg-[linear-gradient(rgba(209,213,219,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(209,213,219,0.5)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(17,24,39,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.9)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20 transition-colors duration-300"
  ></div>

  <!-- Canvas for Network -->
  <canvas bind:this={canvas} class="absolute inset-0 block"></canvas>

  <!-- Overlay Text / HUD -->
  <div class="absolute top-4 left-4 font-mono text-xs text-green-600/70 dark:text-green-500/50">
    <div>SYSTEM_STATUS: ONLINE</div>
    <div>NODES: {nodes.length}</div>
    <div>TRAFFIC: LOW</div>
  </div>

  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h3 class="text-4xl md:text-5xl font-black text-gray-100 dark:text-gray-800 tracking-tighter select-none z-0 opacity-50 transition-colors duration-300">
      SYSTEM<br />TOPOLOGY
    </h3>
  </div>
</div>
