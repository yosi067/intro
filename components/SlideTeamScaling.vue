<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-violet-400/60 text-xs tracking-[0.3em] uppercase">
      Development Strategy
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      前後端解耦的開發策略
    </h2>
    <p class="text-gray-500 max-w-lg text-sm">
      過往經驗中，硬體韌體與前端 UI 的開發時程經常互相等待。以下是我實踐過的解法。
    </p>
    <div class="grid grid-cols-2 gap-6 mt-4">
      <!-- Left: Common Pain -->
      <div v-click class="space-y-3">
        <div class="text-sm font-mono text-gray-500 tracking-wider">常見瓶頸</div>
        <div class="rounded-xl border border-gray-700/50 bg-gray-800/30 p-4 space-y-2">
          <div class="flex items-center gap-2 text-gray-400">
            <span class="text-sm">•</span>
            <span class="text-sm">前端依賴硬體端韌體就緒</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <span class="text-sm">•</span>
            <span class="text-sm">通訊協議變更導致整合回退</span>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <span class="text-sm">•</span>
            <span class="text-sm">手動迴歸測試耗時</span>
          </div>
        </div>
      </div>
      <!-- Right: Solution -->
      <div v-click class="space-y-3">
        <div class="text-sm font-mono text-emerald-400/70 tracking-wider">我的做法</div>
        <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-2">
          <div class="flex items-center gap-2 text-emerald-400">
            <span class="text-sm">✓</span>
            <span class="text-sm">建立 Mock Server 模擬 Redfish 協議</span>
          </div>
          <div class="flex items-center gap-2 text-emerald-400">
            <span class="text-sm">✓</span>
            <span class="text-sm">E2E 自動化迴歸測試</span>
          </div>
          <div class="flex items-center gap-2 text-emerald-400">
            <span class="text-sm">✓</span>
            <span class="text-sm">CI/CD Pipeline 每次 PR 自動驗證</span>
          </div>
        </div>
      </div>
    </div>
    <div v-click class="flex justify-center pt-2">
      <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-500/15 bg-emerald-500/5 text-emerald-400/80 font-mono text-xs">
        過往實績：整合週期從數週級縮短至每週迭代
      </div>
    </div>
  </div>
</div>
</template>
