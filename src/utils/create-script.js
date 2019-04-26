import { memoize } from 'lodash'

export default memoize(src => {
  const script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
})
