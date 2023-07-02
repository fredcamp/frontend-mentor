export default function (node) {
  function onScroll() {
    node.dispatchEvent(new CustomEvent('scroll-apply'))
  }

  window.addEventListener('scroll', onScroll)

  return {
    destroy() {
      window.removeEventListener('scroll', onScroll)
    },
  }
}
