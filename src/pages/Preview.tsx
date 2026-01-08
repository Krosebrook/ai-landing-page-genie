import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blink } from '@/lib/blink'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Loader2, Star } from 'lucide-react'
import type { LandingPage, FormField } from '@/types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Preview() {
  const { id } = useParams()
  const [page, setPage] = useState<LandingPage | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPage()
  }, [id])

  const loadPage = async () => {
    if (!id) return

    try {
      const pageData = await blink.db.landingPages.get<LandingPage>(id)
      setPage(pageData)
    } catch (error) {
      console.error('Failed to load page:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Page not found</p>
      </div>
    )
  }

  const features = page.features ? JSON.parse(page.features) : []
  const benefits = page.benefits ? JSON.parse(page.benefits) : []
  const testimonials = page.testimonials ? JSON.parse(page.testimonials) : []
  const faq = page.faq ? JSON.parse(page.faq) : []
  const formFields = page.formFields ? JSON.parse(page.formFields) : []

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {page.heroImageUrl && (
          <div className="absolute inset-0 z-0">
            <img src={page.heroImageUrl} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
          </div>
        )}
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {page.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {page.heroSubheadline}
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              {page.heroCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-24 px-6 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature: any, i: number) => (
                <Card key={i} className="p-6">
                  <CheckCircle className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-24 px-6 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial: any, i: number) => (
                <Card key={i} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item: any, i: number) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Form Section */}
      {formFields.length > 0 && (
        <section className="py-24 px-6 bg-secondary">
          <div className="container mx-auto max-w-2xl">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                Get Started Today
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {formFields.map((field: FormField, i: number) => (
                  <div key={i}>
                    <label className="block text-sm font-medium mb-2">
                      {field.label}
                      {field.required && <span className="text-destructive ml-1">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <Textarea 
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    ) : (
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
                <Button type="submit" size="lg" className="w-full">
                  {page.heroCta}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      )}
    </div>
  )
}
