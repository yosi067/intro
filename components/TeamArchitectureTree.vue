<script setup>
import { ref } from 'vue'

const teamData = {
  name: 'BlackPulse AI 研發中心',
  role: 'CTO / Technical Director',
  color: '#9ca3af',
  children: [
    {
      name: '核心基底平台組',
      role: 'Core Platform',
      color: '#34d399',
      members: 8,
      children: [
        { name: 'IPMI/Redfish 協議層', tech: 'Rust + Wasm', color: '#34d399' },
        { name: 'WebSocket 通訊引擎', tech: 'Node.js', color: '#34d399' },
        { name: '共用 UI 組件庫', tech: 'React + Storybook', color: '#34d399' },
      ],
    },
    {
      name: '選項化產品組',
      role: 'Product Options',
      color: '#22d3ee',
      members: 12,
      children: [
        { name: 'A 客戶 — 機架監控', tech: '基底 + 拓撲圖模組', color: '#22d3ee' },
        { name: 'B 客戶 — 散熱管理', tech: '基底 + 熱力圖模組', color: '#22d3ee' },
        { name: 'C 客戶 — 電力管理', tech: '基底 + 能耗分析模組', color: '#22d3ee' },
      ],
    },
    {
      name: 'DevOps & QA',
      role: 'Quality Gate',
      color: '#a78bfa',
      members: 6,
      children: [
        { name: 'Mock Server / E2E', tech: 'Playwright + Docker', color: '#a78bfa' },
        { name: 'CI/CD Pipeline', tech: 'GitHub Actions', color: '#a78bfa' },
        { name: 'AIOps 監控', tech: 'Sentry + GA', color: '#a78bfa' },
      ],
    },
    {
      name: 'AI 應用研究組',
      role: 'AI Research',
      color: '#f472b6',
      members: 4,
      children: [
        { name: '異常模式辨識', tech: 'Python + TensorFlow', color: '#f472b6' },
        { name: '預測性維護模型', tech: 'Time Series Analysis', color: '#f472b6' },
      ],
    },
  ],
}

const expanded = ref(new Set([
  'BlackPulse AI 研發中心',
  '核心基底平台組',
  '選項化產品組',
  'DevOps & QA',
  'AI 應用研究組',
]))

function toggle(name) {
  const s = new Set(expanded.value)
  if (s.has(name)) s.delete(name)
  else s.add(name)
  expanded.value = s
}
</script>

<template>
<div class="tree-root">
  <!-- Header -->
  <div class="tree-header">
    <div>
      <div class="tree-title">研發團隊架構圖</div>
      <div class="tree-subtitle">Interactive · Click to expand/collapse</div>
    </div>
    <div class="tree-legend">
      <span style="color: #34d399">● Core</span>
      <span style="color: #22d3ee">● Product</span>
      <span style="color: #a78bfa">● DevOps</span>
      <span style="color: #f472b6">● AI</span>
    </div>
  </div>

  <!-- Tree -->
  <div class="tree-scroll">
    <TreeNode :node="teamData" :depth="0" :expanded="expanded" :toggle="toggle" />
  </div>

  <!-- Footer -->
  <div class="tree-footer">
    <div class="stat"><div class="stat-num" style="color:#34d399">30</div><div class="stat-label">Total Engineers</div></div>
    <div class="stat"><div class="stat-num" style="color:#22d3ee">4</div><div class="stat-label">Teams</div></div>
    <div class="stat"><div class="stat-num" style="color:#a78bfa">1</div><div class="stat-label">Shared Platform</div></div>
  </div>
</div>
</template>

<style scoped>
.tree-root {
  width: 680px;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #1f2937;
  background: #0d1117;
  font-family: Inter, sans-serif;
}
.tree-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #1f2937;
  flex-shrink: 0;
}
.tree-title { color: #f3f4f6; font-size: 14px; font-weight: 700; }
.tree-subtitle { color: #6b7280; font-size: 10px; font-family: 'JetBrains Mono', monospace; margin-top: 2px; }
.tree-legend { display: flex; gap: 10px; font-size: 10px; font-family: 'JetBrains Mono', monospace; }
.tree-scroll {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  scrollbar-width: thin;
  scrollbar-color: #374151 transparent;
}
.tree-scroll::-webkit-scrollbar { width: 4px; }
.tree-scroll::-webkit-scrollbar-track { background: transparent; }
.tree-scroll::-webkit-scrollbar-thumb { background: #374151; border-radius: 2px; }
.tree-footer {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid #1f2937;
}
.stat { text-align: center; }
.stat-num { font-size: 16px; font-weight: 700; font-family: 'JetBrains Mono', monospace; }
.stat-label { color: #6b7280; font-size: 10px; }
</style>
