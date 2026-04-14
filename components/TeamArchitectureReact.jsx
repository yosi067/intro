import React, { useState } from 'react'

const teamData = {
  name: 'BlackPulse AI 研發中心',
  role: 'CTO / Technical Director',
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

function TeamNode({ node, depth = 0, isExpanded, onToggle }) {
  const [hovered, setHovered] = useState(false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div style={{ marginLeft: depth > 0 ? 24 : 0 }}>
      <div
        onClick={() => hasChildren && onToggle(node.name)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 14px',
          marginBottom: 4,
          borderRadius: 8,
          border: `1px solid ${hovered ? (node.color || '#374151') : '#1f2937'}`,
          background: hovered ? `${node.color || '#374151'}10` : '#111827',
          cursor: hasChildren ? 'pointer' : 'default',
          transition: 'all 0.2s ease',
          userSelect: 'none',
        }}
      >
        {/* Color indicator */}
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: node.color || '#6b7280',
            boxShadow: hovered ? `0 0 8px ${node.color || '#6b7280'}` : 'none',
            transition: 'box-shadow 0.2s',
          }}
        />

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#f3f4f6', fontSize: 13, fontWeight: 600 }}>
              {node.name}
            </span>
            {node.members && (
              <span
                style={{
                  fontSize: 10,
                  color: node.color,
                  background: `${node.color}15`,
                  padding: '1px 6px',
                  borderRadius: 4,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {node.members}人
              </span>
            )}
          </div>
          {(node.role || node.tech) && (
            <div
              style={{
                fontSize: 11,
                color: '#6b7280',
                fontFamily: 'JetBrains Mono, monospace',
                marginTop: 2,
              }}
            >
              {node.role || node.tech}
            </div>
          )}
        </div>

        {/* Expand indicator */}
        {hasChildren && (
          <span
            style={{
              color: '#4b5563',
              fontSize: 10,
              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          >
            ▶
          </span>
        )}
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div
          style={{
            borderLeft: `1px dashed ${node.color || '#374151'}30`,
            marginLeft: 18,
            paddingLeft: 0,
          }}
        >
          {node.children.map((child) => (
            <TeamNode
              key={child.name}
              node={child}
              depth={depth + 1}
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function TeamArchitectureReact() {
  const [expanded, setExpanded] = useState(new Set(['BlackPulse AI 研發中心', '核心基底平台組', '選項化產品組', 'DevOps & QA', 'AI 應用研究組']))

  const handleToggle = (name) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(name)) {
        next.delete(name)
      } else {
        next.add(name)
      }
      return next
    })
  }

  return (
    <div
      style={{
        width: 680,
        padding: 20,
        borderRadius: 12,
        border: '1px solid #1f2937',
        background: '#0d1117',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: '1px solid #1f2937',
        }}
      >
        <div>
          <div style={{ color: '#f3f4f6', fontSize: 15, fontWeight: 700 }}>
            研發團隊架構圖
          </div>
          <div
            style={{
              color: '#6b7280',
              fontSize: 11,
              fontFamily: 'JetBrains Mono, monospace',
              marginTop: 2,
            }}
          >
            Interactive · Click to expand/collapse
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 12,
            fontSize: 10,
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          <span style={{ color: '#34d399' }}>● Core</span>
          <span style={{ color: '#22d3ee' }}>● Product</span>
          <span style={{ color: '#a78bfa' }}>● DevOps</span>
          <span style={{ color: '#f472b6' }}>● AI</span>
        </div>
      </div>

      {/* Tree */}
      <TeamNode
        node={teamData}
        isExpanded={expanded.has(teamData.name)}
        onToggle={handleToggle}
      />

      {/* Footer stats */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          marginTop: 16,
          paddingTop: 12,
          borderTop: '1px solid #1f2937',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              color: '#34d399',
              fontSize: 18,
              fontWeight: 700,
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            30
          </div>
          <div style={{ color: '#6b7280', fontSize: 10 }}>Total Engineers</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              color: '#22d3ee',
              fontSize: 18,
              fontWeight: 700,
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            4
          </div>
          <div style={{ color: '#6b7280', fontSize: 10 }}>Teams</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              color: '#a78bfa',
              fontSize: 18,
              fontWeight: 700,
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            1
          </div>
          <div style={{ color: '#6b7280', fontSize: 10 }}>Shared Platform</div>
        </div>
      </div>
    </div>
  )
}
