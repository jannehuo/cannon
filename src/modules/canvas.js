const init = () => {
  const c = document.createElement('canvas')
  const ctx = c.getContext('2d')
  c.width = window.innerWidth
  c.height = window.innerHeight
  document.body.appendChild(c);
}

export {init}