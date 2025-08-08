export function debounce<F extends (...args: any[]) => void>(
  callback: F,
  ms: number
) {
  let debounceTimeoutId: ReturnType<typeof setTimeout>;

  const delayedCallback = (...args: Parameters<F>): void => {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => {
      callback(...args);
    }, ms);
  };

  delayedCallback.cancel = () => clearTimeout(debounceTimeoutId);

  return delayedCallback;
}
