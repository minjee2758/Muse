// --- Nav scroll effect ---
const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40)
}, { passive: true })

// --- Mobile menu toggle ---
const mobileToggle = document.getElementById('mobileToggle')
const navLinks = document.querySelector('.nav-links')

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  mobileToggle.setAttribute(
    'aria-label',
    navLinks.classList.contains('open') ? '메뉴 닫기' : '메뉴 열기'
  )
})

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
  })
})

// --- Scroll reveal ---
const revealTargets = document.querySelectorAll(
  '.value-card, .tech-card, .team-card, .timeline-item, .product-placeholder, .section-title, .section-subtitle'
)

revealTargets.forEach((el) => el.classList.add('reveal'))

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
)

revealTargets.forEach((el) => observer.observe(el))

// --- Staggered reveal for grid items ---
document.querySelectorAll('.value-grid, .tech-grid, .team-grid').forEach((grid) => {
  const items = grid.children
  Array.from(items).forEach((item, i) => {
    item.style.transitionDelay = `${i * 100}ms`
  })
})
