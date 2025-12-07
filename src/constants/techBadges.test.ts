import { describe, it, expect } from 'vitest'
import { getTechName } from './techBadges'

describe('getTechName', () => {
  it('extracts tech name from badge URL', () => {
    const url = 'https://img.shields.io/badge/React-61DAFB?logo=react'
    expect(getTechName(url)).toBe('React')
  })

  it('returns empty string for invalid URL', () => {
    expect(getTechName('invalid')).toBe('')
  })
})
