import { useEffect } from 'react'
import createScript from './create-script'

export const load = () => createScript('https://paperform.co/__embed')
export const show = () => window.Paperform.popup('you1pfhj')
export const use = () => {
  useEffect(() => {
    load()
    if (!localStorage.getItem('paperform')) {
      localStorage.setItem('paperform', true)
      setTimeout(show, 1000)
    }
  }, [])
}
