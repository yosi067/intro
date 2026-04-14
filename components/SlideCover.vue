<template>
<div class="h-full w-full flex flex-col justify-center items-center relative overflow-hidden">
  <div class="absolute inset-0 bg-grid opacity-10"></div>
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>

  <div class="relative z-10 text-center space-y-6 px-8">
    <div class="font-mono text-emerald-400/60 text-xs tracking-[0.3em] uppercase">
      Senior Technical Manager
    </div>

    <h1 class="text-6xl font-bold leading-tight tracking-tight">
      <span class="text-white">Yosi</span>
      <span class="text-gray-500 font-light"> Lin</span>
    </h1>

    <p class="text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
      15 年軟體工程 · 前端架構 · 團隊管理
    </p>

    <div class="flex justify-center gap-3 pt-4 flex-wrap">
      <span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono">TypeScript</span>
      <span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono">React / Vue</span>
      <span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono">Pixi.js</span>
      <span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono">Rust / Wasm</span>
      <span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono">WebSocket</span>
    </div>
  </div>

  <div class="absolute bottom-8 text-gray-600 text-xs font-mono tracking-widest animate-bounce">
    PRESS SPACE →
  </div>
</div>
</template>
