import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/AuthProvider'
import { Sparkles, Zap, CheckCircle, Star } from 'lucide-react'

export function LandingPage() {
  const { login } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Landing Page Builder</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Create Stunning Landing Pages
              <span className="block text-primary mt-2">In Minutes, Not Hours</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Describe your offer and let AI generate compelling copy, stunning images, and conversion-optimized forms. No design skills required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" onClick={login}>
                <Sparkles className="w-5 h-5 mr-2" />
                Start Building Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Convert
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI generates complete landing pages with all the elements proven to convert visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="AI-Generated Copy"
              description="Compelling headlines, persuasive benefits, and conversion-focused content written by advanced AI."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Stunning Images"
              description="Professional-quality images generated on-demand to match your brand and message perfectly."
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8" />}
              title="Smart Forms"
              description="Custom lead capture forms with smart validation and seamless integration with your tools."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free. Scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              name="Free"
              price="$0"
              description="Perfect for trying out"
              features={[
                '3 landing pages',
                'AI-generated copy',
                'AI-generated images',
                'Basic forms',
                'Community support'
              ]}
            />
            <PricingCard
              name="Pro"
              price="$29"
              description="For growing businesses"
              features={[
                'Unlimited pages',
                'Custom domains',
                'Stripe integration',
                'Advanced analytics',
                'Priority support',
                'A/B testing'
              ]}
              popular
            />
            <PricingCard
              name="Enterprise"
              price="$99"
              description="For agencies & teams"
              features={[
                'Everything in Pro',
                'White-label solution',
                'Team collaboration',
                'API access',
                'Dedicated support',
                'Custom integrations'
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Landing Page?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of creators who are already converting visitors with AI-powered pages.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={login}>
            <Sparkles className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2024 AI Landing Page Genie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  popular 
}: { 
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean 
}) {
  const { login } = useAuth()
  
  return (
    <div className={`p-8 bg-card rounded-xl border relative ${popular ? 'ring-2 ring-primary shadow-lg' : 'shadow-sm'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-muted-foreground">/month</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full" 
        variant={popular ? 'default' : 'outline'}
        onClick={login}
      >
        Get Started
      </Button>
    </div>
  )
}
