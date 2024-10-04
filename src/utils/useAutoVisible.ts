import { useEffect, useState } from 'react';

const useAutoVisible = (duration = 100) => {
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
      const timeoutId = setTimeout(() => setIsVisible(true), duration);
      return () => clearTimeout(timeoutId);
    }, [duration]);
    

  return isVisible
}

export default useAutoVisible
