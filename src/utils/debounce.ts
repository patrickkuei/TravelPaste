const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    return (...args: Parameters<T>): void => {
            clearTimeout(timeoutId)

        timeoutId = setTimeout(() => fn(...args), delay)
    }
}

export default debounce