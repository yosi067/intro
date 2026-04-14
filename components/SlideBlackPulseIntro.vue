<template>
<div class="h-full w-full flex flex-col justify-center items-center relative overflow-hidden">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>

  <div class="relative z-10 text-center space-y-8 px-8 max-w-3xl">
    <div class="font-mono text-gray-600 text-xs tracking-[0.3em] uppercase">
      Next Chapter
    </div>

    <h2 class="text-5xl font-bold leading-tight tracking-tight">
      <span class="text-white">BlackPulse</span>
      <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> AI</span>
    </h2>

    <p class="text-lg text-gray-400 font-light leading-relaxed">
      NVIDIA Blackwell NVL72 機群遠端監測平台
    </p>
    <p class="text-sm text-gray-600 font-mono mt-1">
      Pixi.js · Three.js · Rust-Wasm · WebSocket · InfluxDB · Grafana
    </p>

    <div class="flex justify-center gap-6 pt-4">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-mono">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        過去經驗的下一步實踐 — 概念驗證 PoC
      </div>
    </div>
  </div>
</div>
</template>
