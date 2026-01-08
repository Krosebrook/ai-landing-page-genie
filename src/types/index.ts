export interface LandingPage {
  id: string
  userId: string
  title: string
  offerDescription: string
  generatedCopy?: string
  heroHeadline?: string
  heroSubheadline?: string
  heroCta?: string
  features?: string
  benefits?: string
  testimonials?: string
  pricing?: string
  faq?: string
  heroImageUrl?: string
  featureImageUrls?: string
  formFields?: string
  customDomain?: string
  status: 'draft' | 'published' | 'archived'
  createdAt: string
  updatedAt: string
}

export interface Subscription {
  id: string
  userId: string
  plan: 'free' | 'starter' | 'pro' | 'enterprise'
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  status: 'active' | 'canceled' | 'past_due'
  pagesLimit: number
  customDomainsEnabled: number
  stripeEnabled: number
  createdAt: string
  updatedAt: string
}

export interface GenerationHistory {
  id: string
  userId: string
  landingPageId?: string
  prompt: string
  aiModel: string
  tokensUsed?: number
  createdAt: string
}

export interface FormField {
  name: string
  type: 'text' | 'email' | 'phone' | 'textarea' | 'select'
  label: string
  placeholder?: string
  required: boolean
  options?: string[]
}

export interface GeneratedContent {
  heroHeadline: string
  heroSubheadline: string
  heroCta: string
  features: Array<{
    title: string
    description: string
  }>
  benefits: Array<{
    title: string
    description: string
  }>
  testimonials: Array<{
    name: string
    role: string
    content: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
  formFields: FormField[]
}
