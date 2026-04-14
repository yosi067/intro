<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <!-- Section label -->
    <div class="font-mono text-emerald-400/60 text-xs tracking-[0.3em] uppercase">
      Technical Competency
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      技術情境解決能力
    </h2>
    <p class="text-gray-500 text-lg max-w-xl">
      針對高頻數據場景，從前端渲染到系統架構的全棧解決方案
    </p>
    <!-- Skill Table -->
    <div class="grid grid-cols-1 gap-3 mt-4">
      <div v-click class="group flex items-stretch rounded-lg border border-gray-800 bg-gray-900/50 hover:border-emerald-500/30 transition-all duration-300">
        <div class="w-2 bg-emerald-500 rounded-l-lg"></div>
        <div class="flex-1 p-5 flex items-center justify-between">
          <div>
            <div class="flex items-center gap-3">
              <span class="font-mono text-emerald-400 text-sm bg-emerald-500/10 px-2 py-0.5 rounded">Rust / Wasm</span>
              <span class="text-white font-semibold">高頻數據處理引擎</span>
            </div>
            <p class="text-gray-500 text-sm mt-1">LTTB 降採樣、異常偵測、EMA 平滑移至 WebAssembly，搭配 SharedArrayBuffer 零拷貝雙緩衝</p>
          </div>
          <div class="font-mono text-gray-600 text-xs">PERFORMANCE</div>
        </div>
      </div>
      <div v-click class="group flex items-stretch rounded-lg border border-gray-800 bg-gray-900/50 hover:border-cyan-500/30 transition-all duration-300">
        <div class="w-2 bg-cyan-500 rounded-l-lg"></div>
        <div class="flex-1 p-5 flex items-center justify-between">
          <div>
            <div class="flex items-center gap-3">
              <span class="font-mono text-cyan-400 text-sm bg-cyan-500/10 px-2 py-0.5 rounded">WebSocket</span>
              <span class="text-white font-semibold">即時遙測數據串流</span>
            </div>
            <p class="text-gray-500 text-sm mt-1">Redfish JSON 協議、自動重連、四種訊息類型（遙測 / 事件 / ECC / NVSwitch），100 台伺服器即時監控</p>
          </div>
          <div class="font-mono text-gray-600 text-xs">REAL-TIME</div>
        </div>
      </div>
      <div v-click class="group flex items-stretch rounded-lg border border-gray-800 bg-gray-900/50 hover:border-violet-500/30 transition-all duration-300">
        <div class="w-2 bg-violet-500 rounded-l-lg"></div>
        <div class="flex-1 p-5 flex items-center justify-between">
          <div>
            <div class="flex items-center gap-3">
              <span class="font-mono text-violet-400 text-sm bg-violet-500/10 px-2 py-0.5 rounded">Pixi.js · Three.js</span>
              <span class="text-white font-semibold">GPU 加速視覺化引擎</span>
            </div>
            <p class="text-gray-500 text-sm mt-1">Pixi.js 機櫃熱力圖 + GLSL Shader 特效、Three.js 3D 等角投影機房視圖、NVLink 拓撲圖</p>
          </div>
          <div class="font-mono text-gray-600 text-xs">RENDERING</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
