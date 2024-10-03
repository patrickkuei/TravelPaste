import { useRef } from "react";

const useDebounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) => {
    const timeoutId = useRef<ReturnType<typeof setTimeout>>()
  
    return (...args: Parameters<T>): void => {
            clearTimeout(timeoutId.current)

        timeoutId.current = setTimeout(() => fn(...args), delay)
    }
}

export default useDebounce