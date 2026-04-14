<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-emerald-400/60 text-xs tracking-[0.3em] uppercase">
      Problem Solving
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      問題排查與解決方案
    </h2>
    <p class="text-gray-500 max-w-xl">
      自製工具追蹤問題根因，將經驗轉化為可複用的組織知識
    </p>

    <div class="space-y-3 mt-4">
      <div v-click class="flex items-stretch rounded-lg border border-gray-800 bg-gray-900/50 hover:border-emerald-500/30 transition-all">
        <div class="w-2 bg-emerald-500 rounded-l-lg"></div>
        <div class="flex-1 p-4">
          <div class="flex items-center gap-3">
            <span class="text-emerald-400 font-mono text-sm bg-emerald-500/10 px-2 py-0.5 rounded">排查</span>
            <span class="text-white font-semibold">內部 / 外部問題排查</span>
          </div>
          <p class="text-gray-500 text-sm mt-2">自製診斷工具定位問題根因，提供具體解決方案與修復路徑</p>
        </div>
      </div>

      <div v-click class="flex items-stretch rounded-lg border border-gray-800 bg-gray-900/50 hover:border-cyan-500/30 transition-all">
        <div class="w-2 bg-cyan-500 rounded-l-lg"></div>
        <div class="flex-1 p-4">
          <div class="flex items-center gap-3">
            <span class="text-cyan-400 font-mono text-sm bg-cyan-500/10 px-2 py-0.5 rounded">導入</span>
            <span class="text-white font-semibold">方案導入與快速量產</span>
          </div>
          <p class="text-gray-500 text-sm mt-2">多語言支援、緊急新案快速上線、新平台適配，確保產品按時交付</p>
        </div>
      </div>

      <div v-click class="flex items-stretch rounded-lg border border-gray-800 bg-gray-900/50 hover:border-violet-500/30 transition-all">
        <div class="w-2 bg-violet-500 rounded-l-lg"></div>
        <div class="flex-1 p-4">
          <div class="flex items-center gap-3">
            <span class="text-violet-400 font-mono text-sm bg-violet-500/10 px-2 py-0.5 rounded">知識</span>
            <span class="text-white font-semibold">問題文件化 → AI 智庫</span>
          </div>
          <p class="text-gray-500 text-sm mt-2">將排查過程與解法結構化歸檔，導入內部 AI 知識庫，讓團隊不再重複踩坑</p>
        </div>
      </div>

      <div v-click class="flex items-stretch rounded-lg border border-gray-800 bg-gray-900/50 hover:border-amber-500/30 transition-all">
        <div class="w-2 bg-amber-500 rounded-l-lg"></div>
        <div class="flex-1 p-4">
          <div class="flex items-center gap-3">
            <span class="text-amber-400 font-mono text-sm bg-amber-500/10 px-2 py-0.5 rounded">逆向</span>
            <span class="text-white font-semibold">競品逆向工程</span>
          </div>
          <p class="text-gray-500 text-sm mt-2">分析競品技術實作與產品需求，轉化為自有產品的技術策略與功能規劃</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
