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

// Analytics types
export interface AnalyticsEvent {
  id: string
  landingPageId: string
  sessionId: string
  visitorId?: string
  eventType: 'pageview' | 'click' | 'form_submit' | 'scroll'
  timestamp: string
  pageUrl?: string
  elementId?: string
  elementText?: string
  scrollDepth?: number
  referrer?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  deviceType?: string
  browser?: string
  country?: string
  createdAt: string
}

export interface AnalyticsSession {
  id: string
  landingPageId: string
  visitorId: string
  sessionId: string
  firstSeen: string
  lastSeen: string
  pageViews: number
  conversions: number
  referrer?: string
  utmSource?: string
  channel?: string
  deviceType?: string
  country?: string
  createdAt: string
}

export interface AnalyticsSummary {
  pageViews: number
  uniqueVisitors: number
  conversions: number
  conversionRate: number
  bounceRate?: number
  avgSessionDuration?: number
}

export interface AnalyticsMetric {
  current: number
  previous: number
  change: number
}

export interface TrafficSource {
  source: string
  sessions: number
  conversions: number
  conversionRate: number
}

// Template types
export interface Template {
  id: string
  creatorId: string
  name: string
  slug: string
  description: string
  category: 'saas' | 'ecommerce' | 'realestate' | 'events' | 'education' | 'healthcare' | 'finance'
  style: 'modern' | 'bold' | 'minimal' | 'corporate' | 'creative'
  useCase: 'lead_gen' | 'product_launch' | 'webinar' | 'app_download' | 'newsletter'
  previewImage: string
  screenshots?: string[]
  demoUrl?: string
  tags: string[]
  price: number
  isPaid: number
  isApproved: number
  downloads: number
  rating: number
  reviewCount: number
  templateData?: string // JSON stringified template structure
  createdAt: string
  updatedAt: string
}

export interface TemplateCategory {
  id: string
  name: string
  slug: string
  icon?: string
  count: number
}
