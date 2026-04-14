<script setup>
/**
 * Vue wrapper for React TeamArchitecture component.
 * Uses ReactDOM.createRoot to mount the React tree inside a Vue ref container.
 */
import { ref, onMounted, onUnmounted } from 'vue'
import React from 'react'
import { createRoot } from 'react-dom/client'
import TeamArchitectureReact from './TeamArchitectureReact.jsx'

const containerRef = ref(null)
let root = null

onMounted(() => {
  if (containerRef.value) {
    root = createRoot(containerRef.value)
    root.render(React.createElement(TeamArchitectureReact))
  }
})

onUnmounted(() => {
  if (root) {
    root.unmount()
  }
})
</script>

<template>
  <div ref="containerRef" />
</template>
