import { describe, it, expect } from 'vitest'
import { filterProjects } from './filters'
import { PROJECTS } from '../constants'

describe('filterProjects', () => {
  it('returns all projects when no filters', () => {
    const result = filterProjects(PROJECTS, '', '')
    expect(result).toHaveLength(PROJECTS.length)
  })

  it('filters by title', () => {
    const result = filterProjects(PROJECTS, 'React', '')
    expect(result.length).toBeGreaterThan(0)
  })

  it('filters by tech', () => {
    const result = filterProjects(PROJECTS, '', 'React')
    expect(result.length).toBeGreaterThan(0)
  })
})
