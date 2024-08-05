import { useEffect, useState } from 'react'

function usePageSize() {
  const [sizeName, setSizeName] = useState(
    window.innerWidth > 1200
      ? 'large'
      : window.innerWidth > 765
        ? 'medium'
        : 'small'
  )
  const showItemNum =
    sizeName === 'large'
      ? { best: 4, selling: 10 }
      : sizeName === 'medium'
        ? { best: 2, selling: 6 }
        : { best: 1, selling: 4 }
  const sizeNaming = () => {
    if (window.innerWidth >= 1200) {
      setSizeName('large')
    } else if (window.innerWidth < 1200 && window.innerWidth >= 765) {
      setSizeName('medium')
    } else if (window.innerWidth < 765) {
      setSizeName('small')
    }
  }

  let timer = false
  const onResize = () => {
    if (!timer) {
      timer = true
      sizeNaming()
      setTimeout(() => {
        timer = false
      }, 50)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return { sizeName, showItemNum }
}

export default usePageSize
