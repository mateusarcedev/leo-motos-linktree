import { ImageResponse } from 'next/og'
import fs from 'node:fs'
import path from 'node:path'

export const runtime = 'nodejs'
export const alt = 'Leo Motos — Aluguel de motos em Tefé, AM'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const logoPath = path.join(process.cwd(), 'public', 'logo-badge.jpg')
  const logoSrc = `data:image/jpeg;base64,${fs.readFileSync(logoPath).toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#111110',
          padding: '76px',
          position: 'relative',
          fontFamily: 'Archivo, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -160,
            width: 620,
            height: 790,
            background: '#e01f10',
            opacity: 0.14,
            transform: 'skewX(-14deg)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <img
            src={logoSrc}
            width={132}
            height={132}
            style={{ borderRadius: '50%', border: '3px solid #e01f10' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 22, letterSpacing: 5, color: '#e01f10', fontWeight: 700 }}>
              ALUGUEL DE MOTOS · TEFÉ, AM
            </span>
            <span style={{ fontSize: 66, color: '#fff', fontWeight: 800, letterSpacing: -1 }}>
              LEO MOTOS
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 64 }}>
          <span style={{ fontSize: 58, color: '#fff', fontWeight: 800, lineHeight: 1.08 }}>
            Aluguel fácil, rápido
          </span>
          <div style={{ display: 'flex', gap: 18 }}>
            <span style={{ fontSize: 58, color: '#fff', fontWeight: 800, lineHeight: 1.08 }}>
              e sem
            </span>
            <span style={{ fontSize: 58, color: '#e01f10', fontWeight: 800, lineHeight: 1.08 }}>
              complicação.
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 'auto' }}>
          {['HONDA BIZ', 'HONDA BROS', 'HONDA TITAN'].map((m) => (
            <span
              key={m}
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#f5f3ee',
                border: '2px solid rgba(255,255,255,0.25)',
                borderRadius: 999,
                padding: '12px 26px',
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
