<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-violet-400/60 text-xs tracking-[0.3em] uppercase">
      Team Building
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      團隊建設與產品落地
    </h2>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <!-- Left: Key achievements -->
      <div class="space-y-4">
        <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-violet-500/30 transition-all">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-mono text-sm font-bold">30</div>
            <span class="text-white font-semibold">從零建立研發團隊</span>
          </div>
          <p class="text-gray-500 text-xs leading-relaxed">主導面試與人才招募，組織前端、後端、美術、企劃、測試的跨部門協作模式</p>
        </div>

        <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-cyan-500/30 transition-all">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm">⚙</div>
            <span class="text-white font-semibold">核心架構搭建</span>
          </div>
          <p class="text-gray-500 text-xs leading-relaxed">在產品初期選定擴展性技術方案，親自搭建核心系統架構，支撐百萬級用戶同時在線</p>
        </div>
      </div>

      <!-- Right: Process -->
      <div class="space-y-4">
        <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-emerald-500/30 transition-all">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono text-xs">GIT</div>
            <span class="text-white font-semibold">GitFlow 規範制定</span>
          </div>
          <p class="text-gray-500 text-xs leading-relaxed">約定分支協作規範，技術專案管控與版本管理監督，確保程式碼品質</p>
        </div>

        <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-5 space-y-3 hover:border-amber-500/30 transition-all">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 text-sm">📋</div>
            <span class="text-white font-semibold">技術資產與文件管控</span>
          </div>
          <p class="text-gray-500 text-xs leading-relaxed">建立內部技術文件體系，開發文件製作規範與版本追蹤。管理技術資產以及權限分離，確保資料安全與可追溯性。</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
