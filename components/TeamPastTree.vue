<script setup>
import { ref } from 'vue'

const teamData = {
  name: 'H5 研發團隊',
  role: '技術經理兼任小組組長',
  color: '#9ca3af',
  children: [
    {
      name: '研發小組組長',
      role: 'Team Leaders',
      color: '#34d399',
      members: 3,
      children: [
        { name: '需求分析及任務分配', tech: 'Planning & Scheduling', color: '#34d399' },
        { name: '跨部門工作協調', tech: 'Cross-team Collaboration', color: '#34d399' },
        { name: '技術規範及技術資產管理', tech: 'Tech Standards & Assets', color: '#34d399' },
      ],
    },
    {
      name: '基底核心平台組',
      role: 'Core Platform',
      color: '#22d3ee',
      members: 7,
      children: [
        { name: '共用 UI 組件庫', tech: 'Component Library', color: '#22d3ee' },
        { name: '底層 WebSocket 通訊引擎與協定', tech: 'Real-time Protocol', color: '#22d3ee' },
        { name: '遊戲大廳容器層', tech: 'Lobby Container', color: '#22d3ee' },
      ],
    },
    {
      name: '選項化產品組',
      role: 'Product Lines',
      color: '#f59e0b',
      members: 14,
      children: [
        { name: 'A 遊戲 — 對戰類型', tech: 'PvP Games', color: '#f59e0b' },
        { name: 'B 遊戲 — 下注類型', tech: 'Betting Games', color: '#f59e0b' },
        { name: 'C 遊戲 — Slot 類型', tech: 'Slot Games', color: '#f59e0b' },
      ],
    },
    {
      name: 'DevOps & QA',
      role: 'Quality Gate',
      color: '#a78bfa',
      members: 6,
      children: [
        { name: 'Mock Server', tech: 'API Simulation', color: '#a78bfa' },
        { name: 'CI/CD Pipeline', tech: 'Automated Deploy', color: '#a78bfa' },
        { name: '自動化測試', tech: 'WebdriverIO / Selenium', color: '#a78bfa' },
        { name: '瀏覽器及裝置問題排查', tech: 'Cross-browser Debug', color: '#a78bfa' },
      ],
    },
  ],
}

const expanded = ref(new Set([
  'H5 研發團隊',
  '研發小組組長',
  '基底核心平台組',
  '選項化產品組',
  'DevOps & QA',
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
  <div class="tree-header">
    <div>
      <div class="tree-title">H5 研發團隊架構</div>
      <div class="tree-subtitle">Interactive · Click to expand/collapse</div>
    </div>
    <div class="tree-legend">
      <span style="color: #34d399">● Leads</span>
      <span style="color: #22d3ee">● Core</span>
      <span style="color: #f59e0b">● Product</span>
      <span style="color: #a78bfa">● DevOps</span>
    </div>
  </div>

  <div class="tree-scroll">
    <TreeNode :node="teamData" :depth="0" :expanded="expanded" :toggle="toggle" />
  </div>

  <div class="tree-footer">
    <div class="stat"><div class="stat-num" style="color:#34d399">30</div><div class="stat-label">Total Members</div></div>
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
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid #1f2937;
  flex-shrink: 0;
}
.stat { text-align: center; }
.stat-num { font-size: 16px; font-weight: 700; font-family: 'JetBrains Mono', monospace; }
.stat-label { color: #6b7280; font-size: 10px; }
</style>
