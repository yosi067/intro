<template>
<div class="h-full w-full flex flex-col justify-center px-12 py-8 relative">
  <div class="absolute inset-0 bg-grid opacity-5"></div>
  <div class="relative z-10 space-y-4">
    <div class="font-mono text-cyan-400/60 text-xs tracking-[0.3em] uppercase">
      System Architecture
    </div>
    <h2 class="text-4xl font-bold text-white tracking-tight">
      BlackPulse 系統架構
    </h2>
    <p class="text-gray-500 max-w-xl text-sm">
      三層式架構：前端視覺化 → WebSocket 即時串流 → Redfish BMC 模擬器
    </p>

    <div class="grid grid-cols-3 gap-4 mt-4">
      <!-- Top: Dashboard -->
      <div v-click class="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4 space-y-3">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span class="text-cyan-400 font-mono text-xs">THE VISION</span>
        </div>
        <div class="text-white font-semibold text-sm">React 儀表板</div>
        <div class="space-y-1.5 text-gray-500 text-xs">
          <div class="flex items-center gap-2"><span class="text-cyan-400/60">→</span> Pixi.js 機櫃熱力圖 + GLSL</div>
          <div class="flex items-center gap-2"><span class="text-cyan-400/60">→</span> Three.js 3D 機房視圖</div>
          <div class="flex items-center gap-2"><span class="text-cyan-400/60">→</span> Rust-Wasm 數據處理引擎</div>
          <div class="flex items-center gap-2"><span class="text-cyan-400/60">→</span> i18n 多語系 (EN/TW/JA)</div>
        </div>
      </div>

      <!-- Middle: Core -->
      <div v-click class="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 space-y-3">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-amber-400"></div>
          <span class="text-amber-400 font-mono text-xs">THE CORE</span>
        </div>
        <div class="text-white font-semibold text-sm">WebSocket 即時串流</div>
        <div class="space-y-1.5 text-gray-500 text-xs">
          <div class="flex items-center gap-2"><span class="text-amber-400/60">→</span> telemetry_batch 遙測</div>
          <div class="flex items-center gap-2"><span class="text-amber-400/60">→</span> events (SEL 事件)</div>
          <div class="flex items-center gap-2"><span class="text-amber-400/60">→</span> ecc_summary (GPU ECC)</div>
          <div class="flex items-center gap-2"><span class="text-amber-400/60">→</span> nvswitch_summary</div>
        </div>
      </div>

      <!-- Bottom: Edge -->
      <div v-click class="rounded-lg border border-violet-500/20 bg-violet-500/5 p-4 space-y-3">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-violet-400"></div>
          <span class="text-violet-400 font-mono text-xs">THE EDGE</span>
        </div>
        <div class="text-white font-semibold text-sm">Fastify BMC 模擬器</div>
        <div class="space-y-1.5 text-gray-500 text-xs">
          <div class="flex items-center gap-2"><span class="text-violet-400/60">→</span> Redfish JSON 協定</div>
          <div class="flex items-center gap-2"><span class="text-violet-400/60">→</span> 100 台 × 72 GPU × 2 NVSwitch</div>
          <div class="flex items-center gap-2"><span class="text-violet-400/60">→</span> InfluxDB Buffer + Grafana</div>
          <div class="flex items-center gap-2"><span class="text-violet-400/60">→</span> 自動修復 Playbook × 5</div>
        </div>
      </div>
    </div>

    <div v-click class="mt-3 rounded-lg border border-gray-800 bg-gray-900/40 p-4">
      <div class="flex items-start gap-3">
        <div class="w-1 h-12 bg-gradient-to-b from-cyan-400 to-violet-400 rounded-full"></div>
        <div>
          <div class="text-white font-semibold text-sm">靜態模式：免後端完整展示</div>
          <p class="text-gray-500 text-xs mt-1 leading-relaxed">
            儀表板自動偵測環境，無 WebSocket 時切換為內建數據模擬，可直接部署至 GitHub Pages 展示完整功能。
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
