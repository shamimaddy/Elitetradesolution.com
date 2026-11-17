import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import HallOfFamePage from './pages/HallOfFamePage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import DisclosuresPage from './pages/DisclosuresPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/hall-of-fame" element={<HallOfFamePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclosures" element={<DisclosuresPage />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/disclaimer" element={<Navigate to="/disclosures" replace />} />
        <Route path="/risk-disclosure" element={<Navigate to="/disclosures" replace />} />
        <Route path="/terms-disclaimer" element={<Navigate to="/disclosures" replace />} />
      </Route>
    </Routes>
  )
}
