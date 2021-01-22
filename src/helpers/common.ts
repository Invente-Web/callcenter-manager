/**
 * @description return a value of public env tag
 * @param tagName: use without 'NEXT_PUBLIC_' prefix
 * @param defaultValue if tag value is undefined will return this default value
 * @param disablePrefix disable 'NEXT_PUBLIC_' prefix
 */
export const getEnv = (
  tagName: string,
  defaultValue?: string,
  disablePrefix?: boolean
): string | undefined => {
  const prefix = 'NEXT_PUBLIC_';
  if (process.env.public) {
    const env = process.env.public[!disablePrefix ? prefix + tagName : tagName];
    if (!env && !defaultValue) {
      throw new Error('Env not found and has no defaultValue');
    }
    return env || defaultValue;
  }
  return undefined;
};

/**
 * @description check if window is supported
 */
export const isWindowSupported = (): boolean => typeof window === 'undefined';
