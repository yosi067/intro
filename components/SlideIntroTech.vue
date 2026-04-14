<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-cyan-400/60 text-xs tracking-[0.3em] uppercase">
      Technical Expertise
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      前端技術棧
    </h2>
    <p class="text-gray-500 max-w-xl">
      從網頁遊戲到企業級應用，涵蓋高性能渲染與跨平台方案
    </p>

    <div class="grid grid-cols-2 gap-3 mt-4">
      <!-- Web Development -->
      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-cyan-500/30 transition-all">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span class="text-cyan-400 font-mono text-xs">WEB DEV</span>
        </div>
        <div class="text-white font-semibold text-sm">TypeScript · React · Vue</div>
        <p class="text-gray-500 text-xs leading-relaxed">元件拆分與任務分配，WebSocket / RESTful API 串接，UI/UX 設計實作</p>
      </div>

      <!-- Game & Rendering -->
      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-emerald-500/30 transition-all">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span class="text-emerald-400 font-mono text-xs">RENDERING</span>
        </div>
        <div class="text-white font-semibold text-sm">Pixi.js · Canvas · WebGL</div>
        <p class="text-gray-500 text-xs leading-relaxed">高性能網頁遊戲設計，HTML5 遊戲與工具開發，GPU 加速視覺化</p>
      </div>

      <!-- Cross-platform -->
      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-violet-500/30 transition-all">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-violet-400"></div>
          <span class="text-violet-400 font-mono text-xs">CROSS-PLATFORM</span>
        </div>
        <div class="text-white font-semibold text-sm">Wasm · Electron · WebView</div>
        <p class="text-gray-500 text-xs leading-relaxed">Wasm 實作底層達到多平台支援及可靠加密，Electron/NW.js 桌面端工具，WebView/iframe 嵌入最佳化</p>
      </div>

      <!-- Streaming & Infra -->
      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-amber-500/30 transition-all">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-amber-400"></div>
          <span class="text-amber-400 font-mono text-xs">STREAMING & CI/CD</span>
        </div>
        <div class="text-white font-semibold text-sm">HLS · RTMP · Vite · Webpack</div>
        <p class="text-gray-500 text-xs leading-relaxed">網頁視訊串流功能開發，Vite/Webpack 專案打包，CI/CD 自動化部署流程</p>
      </div>
    </div>
  </div>
</div>
</template>
