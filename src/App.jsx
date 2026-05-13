import { useEffect, useMemo, useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Specials from './pages/Specials'
import Menu from './pages/Menu'
import MenuCategory from './pages/MenuCategory'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

const pageMap = {
  '#home': Home,
  '#specials': Specials,
  '#menu': Menu,
  '#breakfast': () => <MenuCategory categoryKey="breakfast" />,
  '#street-food': () => <MenuCategory categoryKey="streetFood" />,
  '#main-course': () => <MenuCategory categoryKey="mainCourse" />,
  '#beverages-sweets': () => <MenuCategory categoryKey="beveragesSweets" />,
  '#contact': Contact,
  '#terms': Terms,
  '#privacy': Privacy,
}

function getCurrentHash() {
  const hash = window.location.hash || '#home'
  return pageMap[hash] ? hash : '#home'
}

export default function App() {
  const [activePage, setActivePage] = useState('#home')

  useEffect(() => {
    const syncFromHash = () => {
      const nextHash = getCurrentHash()
      setActivePage(nextHash)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!window.location.hash || !pageMap[window.location.hash]) {
      window.history.replaceState(null, '', '#home')
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const ActiveComponent = useMemo(() => pageMap[activePage] || Home, [activePage])

  return (
    <Layout activePage={activePage}>
      <div className="page-shell" data-page={activePage.replace('#', '')}>
        <ActiveComponent />
      </div>
    </Layout>
  )
}
