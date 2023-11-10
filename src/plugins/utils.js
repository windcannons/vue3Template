export const debounceFn = (fn, delay) => {
  let timer = null
  delay = delay || 500
  return (...args) => {
    const vm = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(vm, args)
    }, delay)
  }
}
