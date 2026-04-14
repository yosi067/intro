<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-emerald-400/60 text-xs tracking-[0.3em] uppercase">
      Development Velocity
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      研發效率優化
    </h2>

    <div class="grid grid-cols-2 gap-6 mt-4">
      <!-- Modularization -->
      <div v-click class="space-y-4">
        <div class="text-sm font-mono text-cyan-400/70 tracking-wider">共用模組化</div>
        <div class="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6 space-y-4">
          <p class="text-gray-300 text-sm leading-relaxed">
            重構早期代碼，將常用功能抽離為共用模組，提升專案復用率，只需專注於核心功能開發
          </p>
          <div class="flex items-center gap-3">
            <div class="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style="width: 80%"></div>
            </div>
          </div>
          <div class="flex items-center gap-2 text-cyan-400 text-sm">
            <span>→</span>
            <span>多產品同時量產模式</span>
          </div>
        </div>
      </div>

      <!-- Automation -->
      <div v-click class="space-y-4">
        <div class="text-sm font-mono text-emerald-400/70 tracking-wider">自動化測試</div>
        <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 space-y-4">
          <p class="text-gray-300 text-sm leading-relaxed">
            內部開發自動化測試工具，保證交付穩定版本給測試團隊，只需專注於規格驗證與功能測試，提升整體效率
          </p>
          <div class="flex items-center gap-3 font-mono text-xs text-gray-500">
            <span class="px-2 py-1 bg-gray-800 rounded">WebdriverIO</span>
            <span class="px-2 py-1 bg-gray-800 rounded">Selenium</span>
            <span class="px-2 py-1 bg-gray-800 rounded">Appium</span>
          </div>
          <div class="flex items-center gap-2 text-emerald-400 text-sm">
            <span>→</span>
            <span>產能提升 50%+，縮短更新週期</span>
          </div>
        </div>
      </div>
    </div>

    <div v-click class="flex justify-center pt-2">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-700 bg-gray-800/30 text-gray-400 text-xs font-mono">
        線上監控：Google Analytics / BigQuery + Sentry → 問題追蹤與解決
      </div>
    </div>
  </div>
</div>
</template>
