import { getGlobalConfig } from './config.js'

export interface Theme {
  bashBorder: string
  claude: string
  permission: string
  secondaryBorder: string
  text: string
  secondaryText: string
  suggestion: string
  // Semantic colors
  success: string
  error: string
  warning: string
  openagi: string // Custom accent color for OpenAGI theme
  diff: {
    added: string
    removed: string
    addedDimmed: string
    removedDimmed: string
  }
}

const lightTheme: Theme = {
  bashBorder: '#ff0087',
  claude: '#D97757',
  permission: '#5769f7',
  secondaryBorder: '#999',
  text: '#000',
  secondaryText: '#666',
  suggestion: '#5769f7',
  success: '#2c7a39',
  error: '#ab2b3f',
  warning: '#966c1e',
  openagi: '#5769f7',
  diff: {
    added: '#69db7c',
    removed: '#ffa8b4',
    addedDimmed: '#c7e1cb',
    removedDimmed: '#fdd2d8',
  },
}

const lightDaltonizedTheme: Theme = {
  bashBorder: '#0066cc', // Blue instead of pink for better contrast
  claude: '#ff9933', // Orange adjusted for deuteranopia
  permission: '#3366ff', // Brighter blue for better visibility
  secondaryBorder: '#999',
  text: '#000',
  secondaryText: '#666',
  suggestion: '#3366ff',
  success: '#006699', // Blue instead of green
  error: '#cc0000', // Pure red for better distinction
  warning: '#ff9900', // Orange adjusted for deuteranopia
  openagi: '#3366ff',
  diff: {
    added: '#99ccff', // Light blue instead of green
    removed: '#ffcccc', // Light red for better contrast
    addedDimmed: '#d1e7fd',
    removedDimmed: '#ffe9e9',
  },
}

const darkTheme: Theme = {
  bashBorder: '#fd5db1',
  claude: '#D97757',
  permission: '#b1b9f9',
  secondaryBorder: '#888',
  text: '#fff',
  secondaryText: '#999',
  suggestion: '#b1b9f9',
  success: '#4eba65',
  error: '#ff6b80',
  warning: '#ffc107',
  openagi: '#b1b9f9',
  diff: {
    added: '#225c2b',
    removed: '#7a2936',
    addedDimmed: '#47584a',
    removedDimmed: '#69484d',
  },
}

const darkDaltonizedTheme: Theme = {
  bashBorder: '#3399ff', // Bright blue instead of pink
  claude: '#ff9933', // Orange adjusted for deuteranopia
  permission: '#99ccff', // Light blue for better contrast
  secondaryBorder: '#888',
  text: '#fff',
  secondaryText: '#999',
  suggestion: '#99ccff',
  success: '#3399ff', // Bright blue instead of green
  error: '#ff6666', // Bright red for better visibility
  warning: '#ffcc00', // Yellow-orange for deuteranopia
  openagi: '#99ccff',
  diff: {
    added: '#004466', // Dark blue instead of green
    removed: '#660000', // Dark red for better contrast
    addedDimmed: '#3e515b',
    removedDimmed: '#3e2c2c',
  },
}

// Custom OpenAGI theme with a futuristic color scheme
const openAgiTheme: Theme = {
  bashBorder: '#4a5aef', // Vibrant blue
  claude: '#6d42c7',     // Purple for primary accent (replaces Claude orange)
  permission: '#5eead4', // Teal for permissions
  secondaryBorder: '#9ea3b0',
  text: '#f0f4fc',       // Slightly off-white for better contrast 
  secondaryText: '#a0a8c0', // Muted blue-gray
  suggestion: '#42a5f5', // Blue for suggestions
  success: '#4ade80',    // Vibrant green
  error: '#f87171',      // Vibrant red
  warning: '#fbbf24',    // Amber yellow
  openagi: '#42a5f5',
  diff: {
    added: '#34d399',    // Emerald green
    removed: '#fb7185',  // Rose red
    addedDimmed: '#065f46', // Dark green
    removedDimmed: '#881337', // Dark rose
  },
}

export type ThemeNames =
  | 'dark'
  | 'light'
  | 'light-daltonized'
  | 'dark-daltonized'
  | 'openagi'           // Add the new theme name

export function getTheme(overrideTheme?: ThemeNames): Theme {
  const config = getGlobalConfig()
  switch (overrideTheme ?? config.theme) {
    case 'light':
      return lightTheme
    case 'light-daltonized':
      return lightDaltonizedTheme
    case 'dark-daltonized':
      return darkDaltonizedTheme
    case 'openagi':      // Add the new theme case
      return openAgiTheme
    default:
      return darkTheme
  }
}
