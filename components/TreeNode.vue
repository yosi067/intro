<script setup>
import { ref } from 'vue'

const props = defineProps({
  node: Object,
  depth: { type: Number, default: 0 },
  expanded: Object,
  toggle: Function,
})

const hovered = ref(false)
const hasChildren = props.node.children && props.node.children.length > 0
const isExpanded = () => props.expanded.has(props.node.name)
</script>

<template>
<div :style="{ marginLeft: depth > 0 ? '20px' : '0' }">
  <div
    class="tree-node"
    :class="{ clickable: hasChildren }"
    :style="{
      borderColor: hovered ? (node.color || '#374151') : '#1f2937',
      background: hovered ? (node.color || '#374151') + '10' : '#111827',
    }"
    @click="hasChildren && toggle(node.name)"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <!-- Dot -->
    <div
      class="node-dot"
      :style="{
        background: node.color || '#6b7280',
        boxShadow: hovered ? `0 0 8px ${node.color || '#6b7280'}` : 'none',
      }"
    />
    <!-- Content -->
    <div class="node-content">
      <div class="node-name-row">
        <span class="node-name">{{ node.name }}</span>
        <span
          v-if="node.members"
          class="node-badge"
          :style="{ color: node.color, background: (node.color || '#6b7280') + '15' }"
        >{{ node.members }}人</span>
      </div>
      <div v-if="node.role || node.tech" class="node-sub">{{ node.role || node.tech }}</div>
    </div>
    <!-- Arrow -->
    <span
      v-if="hasChildren"
      class="node-arrow"
      :style="{ transform: isExpanded() ? 'rotate(90deg)' : 'rotate(0deg)' }"
    >▶</span>
  </div>

  <!-- Children -->
  <div
    v-if="hasChildren && isExpanded()"
    class="node-children"
    :style="{ borderColor: (node.color || '#374151') + '30' }"
  >
    <TreeNode
      v-for="child in node.children"
      :key="child.name"
      :node="child"
      :depth="depth + 1"
      :expanded="expanded"
      :toggle="toggle"
    />
  </div>
</div>
</template>

<style scoped>
.tree-node {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  margin-bottom: 3px;
  border-radius: 6px;
  border: 1px solid #1f2937;
  transition: all 0.2s ease;
  user-select: none;
}
.clickable { cursor: pointer; }
.node-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: box-shadow 0.2s;
}
.node-content { flex: 1; min-width: 0; }
.node-name-row { display: flex; align-items: center; gap: 6px; }
.node-name { color: #f3f4f6; font-size: 12px; font-weight: 600; }
.node-badge {
  font-size: 9px;
  padding: 0 5px;
  border-radius: 3px;
  font-family: 'JetBrains Mono', monospace;
}
.node-sub {
  font-size: 10px;
  color: #6b7280;
  font-family: 'JetBrains Mono', monospace;
  margin-top: 1px;
}
.node-arrow {
  color: #4b5563;
  font-size: 9px;
  transition: transform 0.2s;
  flex-shrink: 0;
}
.node-children {
  border-left: 1px dashed;
  margin-left: 15px;
}
</style>
