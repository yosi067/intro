<template>
<div class="h-full w-full flex flex-col justify-center items-center relative overflow-hidden">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <!-- Glowing orb -->
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-violet-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
  <div class="relative z-10 text-center space-y-8 px-8 max-w-3xl">
    <div class="font-mono text-violet-400/60 text-xs tracking-[0.3em] uppercase">
      Live Demo
    </div>
    <h2 class="text-5xl font-bold text-white tracking-tight leading-tight">
      軟體定義硬體的
      <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">未來願景</span>
    </h2>
    <p class="text-xl text-gray-400 font-light leading-relaxed">
      當監控軟體不再只是「讀取數據」，<br />
      而是能「理解數據」並「預測未來」。
    </p>
    <!-- Demo feature cards -->
    <div v-click class="grid grid-cols-3 gap-4 mt-8">
      <div class="rounded-lg border border-gray-800 bg-gray-900/40 p-4 space-y-2">
        <div class="text-emerald-400 font-mono text-xs">01</div>
        <div class="text-white text-sm font-semibold">即時遙測儀表板</div>
        <div class="text-gray-600 text-xs">100 台 × 72 GPU<br/>Pixi.js 熱力圖 + Three.js 3D</div>
      </div>
      <div class="rounded-lg border border-gray-800 bg-gray-900/40 p-4 space-y-2">
        <div class="text-cyan-400 font-mono text-xs">02</div>
        <div class="text-white text-sm font-semibold">Rust/Wasm 數據處理</div>
        <div class="text-gray-600 text-xs">LTTB 降採樣 · 異常偵測<br/>SharedArrayBuffer 零拷貝</div>
      </div>
      <div class="rounded-lg border border-gray-800 bg-gray-900/40 p-4 space-y-2">
        <div class="text-violet-400 font-mono text-xs">03</div>
        <div class="text-white text-sm font-semibold">AI 預測性維護</div>
        <div class="text-gray-600 text-xs">Weibull 故障概率<br/>自動修復 Playbook</div>
      </div>
    </div>
    <div v-click class="pt-4">
      <a href="https://yosi067.github.io/BlackPulse/" target="_blank"
         class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-white font-mono text-sm hover:from-violet-500/30 hover:to-cyan-500/30 transition-all cursor-pointer no-underline">
        <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
        進入 BlackPulse AI 線上 Demo →
      </a>
    </div>
  </div>
</div>
</template>
