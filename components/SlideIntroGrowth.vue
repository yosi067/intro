<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-amber-400/60 text-xs tracking-[0.3em] uppercase">
      Tech Culture
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      技術推進與教育訓練
    </h2>

    <div class="space-y-3 mt-4">
      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-4 hover:border-amber-500/30 transition-all">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-mono text-sm font-bold shrink-0 mt-0.5">AI</div>
          <div>
            <div class="text-white font-semibold">AI 輔助開發導入</div>
            <p class="text-gray-500 text-sm mt-1">推動團隊使用 AI 輔助開發並制定使用規範，提升整體開發效率</p>
          </div>
        </div>
      </div>

      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-4 hover:border-cyan-500/30 transition-all">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm shrink-0 mt-0.5">🔧</div>
          <div>
            <div class="text-white font-semibold">全端化協作擴展</div>
            <p class="text-gray-500 text-sm mt-1">引導前端同仁建置模擬 Server 端環境，實現全端化協作，擴展技能涵蓋度</p>
          </div>
        </div>
      </div>

      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-4 hover:border-violet-500/30 transition-all">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 text-sm shrink-0 mt-0.5">📡</div>
          <div>
            <div class="text-white font-semibold">每週科技趨勢分享</div>
            <p class="text-gray-500 text-sm mt-1">親自主持並引導討論，保持團隊對產業技術趨勢的敏銳度</p>
          </div>
        </div>
      </div>

      <div v-click class="rounded-lg border border-gray-800 bg-gray-900/50 p-4 hover:border-emerald-500/30 transition-all">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-sm shrink-0 mt-0.5">🎓</div>
          <div>
            <div class="text-white font-semibold">內部教育訓練</div>
            <p class="text-gray-500 text-sm mt-1">自辦多場部門與全公司技術課程 — 涵蓋視覺辨識自動化測試、AI 繪圖、自製遊戲設計開發等</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
