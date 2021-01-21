export function getEnv(tag: string, defaultValue: string): string | undefined {
  return process.env[tag] || defaultValue || undefined
}

export function isWindowSupported() {
  return typeof window === 'undefined'
}
