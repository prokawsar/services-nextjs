import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '../src/app/page'

test('home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))
  expect(
    main.getByRole('heading', {
      level: 1,
      name: /Hello, I'm Kawsar Ahmed\.js!/i,
    }),
  ).toBeDefined()

  const footer = within(screen.getByRole('contentinfo'))
  expect(footer.getByRole('link', { name: /Made by/i })).toBeDefined()
})
