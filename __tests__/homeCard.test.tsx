import React from 'react'

import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import HomeCard from '../packages/ui/components/Card/HomeCard' // Update the import path

describe('HomeCard', () => {
  it('renders component with correct content', () => {
    render(<HomeCard />)

    // Check if the component renders the expected content
    expect(screen.getByText('Turbo Repo Micro Frontend Basecode')).toBeInTheDocument()
    expect(
      screen.getByText('This Basecode created for experimental and project purpose by adanamanya/alleyboss')
    ).toBeInTheDocument()
    expect(screen.getByText('#tailwindCSS')).toBeInTheDocument()
    expect(screen.getByText('#ReactJS')).toBeInTheDocument()
    expect(screen.getByText('#NextJS')).toBeInTheDocument()
    expect(screen.getByText('#TurboRepo')).toBeInTheDocument()
    expect(screen.getByText('#MicroFrontend')).toBeInTheDocument()

    // Check if the image element is present with the correct alt attribute
    const image = screen.getByAltText('BTC') as HTMLImageElement
    expect(image).toBeInTheDocument()
    expect(image.src).toBe('https://www.ccn.com/wp-content/uploads/2023/07/bitcoin-ordinals-cover.webp')
  })
})
