import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import HallOfFamePage from './pages/HallOfFamePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/hall-of-fame" element={<HallOfFamePage />} />
      </Route>
    </Routes>
  )
}
