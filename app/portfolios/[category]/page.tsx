import PortfoliosPage from '../page'

type Props = {
  params: {
    category: string
  }
}

// ✅ Pass category slug to main page
export default function CategoryFilterPage({ params }: Props) {
  return <PortfoliosPage defaultCategory={params.category} />
}

// ✅ ALL categories in SLUG format
export async function generateStaticParams() {
  const categories = [
    'brand-identity',
    'packaging',
    'pitch-deck',
    'ui/ux-design',
    'editorial',
    'social-media',
    'motion-design',
  ]

  return categories.map((category) => ({
    category,
  }))
}