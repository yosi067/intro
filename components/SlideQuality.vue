<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-emerald-400/60 text-xs tracking-[0.3em] uppercase">
      Observability &amp; AIOps
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      可觀測性驅動的品質治理
    </h2>
    <!-- Pipeline visualization -->
    <div class="flex items-center gap-3 mt-4">
      <div v-click class="flex-1 rounded-xl border border-gray-800 bg-gray-900/60 p-4 text-center space-y-2 hover:border-cyan-500/30 transition-all">
        <div class="text-2xl">📡</div>
        <div class="text-white font-semibold text-sm">OpenTelemetry</div>
        <div class="text-gray-500 text-xs">統一遙測數據採集<br/>Traces / Metrics / Logs</div>
      </div>
      <div class="text-gray-700 font-mono">→</div>
      <div v-click class="flex-1 rounded-xl border border-gray-800 bg-gray-900/60 p-4 text-center space-y-2 hover:border-violet-500/30 transition-all">
        <div class="text-2xl">📊</div>
        <div class="text-white font-semibold text-sm">InfluxDB</div>
        <div class="text-gray-500 text-xs">時序資料庫<br/>Flux 查詢與指標聚合</div>
      </div>
      <div class="text-gray-700 font-mono">→</div>
      <div v-click class="flex-1 rounded-xl border border-gray-800 bg-gray-900/60 p-4 text-center space-y-2 hover:border-emerald-500/30 transition-all">
        <div class="text-2xl">📈</div>
        <div class="text-white font-semibold text-sm">Grafana</div>
        <div class="text-gray-500 text-xs">即時儀表板視覺化<br/>告警通知整合</div>
      </div>
      <div class="text-gray-700 font-mono">→</div>
      <div v-click class="flex-1 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center space-y-2">
        <div class="text-2xl">🤖</div>
        <div class="text-emerald-400 font-semibold text-sm">AI 預測維護</div>
        <div class="text-gray-500 text-xs">異常模式辨識<br/>故障預測與預警</div>
      </div>
    </div>
    <!-- Bottom insight -->
    <div v-click class="mt-4 rounded-lg border border-gray-800 bg-gray-900/40 p-4">
      <div class="flex items-start gap-3">
        <div class="w-1 h-14 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
        <div>
          <div class="text-white font-semibold text-sm">從「被動救火」到「主動預防」</div>
          <p class="text-gray-500 text-xs mt-1 leading-relaxed">
            透過 OpenTelemetry 統一採集前端與伺服器遙測數據，以 InfluxDB 儲存時序指標，
            Grafana 視覺化呈現趨勢。當指標偏離常態時自動觸發告警，結合 AI 模型實現預測性維護。
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
