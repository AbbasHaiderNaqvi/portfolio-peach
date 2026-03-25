import PortfoliosPage from '../page'

// This dynamic page handles URLs like /portfolios/packaging
// It simply imports and renders your main PortfoliosPage component
export default function CategoryFilterPage() {
  return <PortfoliosPage />
}

/** * Optional: If you want to improve SEO by generating 
 * static paths for your categories, you can add this:
 */
export async function generateStaticParams() {
  const categories = [
  'Brand Identity',
  'Packaging',
  'pitch-deck',
  'UI/UX Design',
  'Editorial',
  'Social Media',
  'Motion Design',
  ]

  return categories.map((cat) => ({
    category: cat,
  }))
}