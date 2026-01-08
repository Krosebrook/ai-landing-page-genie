import { useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { blink } from '@/lib/blink'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Sparkles, ArrowLeft, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import type { GeneratedContent } from '@/types'

export function Generator() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [generating, setGenerating] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    offerDescription: '',
    targetAudience: '',
    keyFeatures: '',
    callToAction: ''
  })

  const handleGenerate = async () => {
    if (!user) return

    if (!formData.title || !formData.offerDescription) {
      toast.error('Please fill in at least title and offer description')
      return
    }

    setGenerating(true)

    try {
      // Generate content with AI
      const prompt = `
You are an expert landing page copywriter. Create compelling landing page content for the following offer:

Title: ${formData.title}
Offer Description: ${formData.offerDescription}
Target Audience: ${formData.targetAudience || 'General audience'}
Key Features: ${formData.keyFeatures || 'Not specified'}
Call to Action: ${formData.callToAction || 'Sign Up'}

Generate:
1. A powerful hero headline (max 80 characters)
2. A compelling hero subheadline (max 150 characters)
3. Hero CTA button text (max 30 characters)
4. 3 key features with title and description
5. 3 benefits with title and description
6. 2 testimonials with name, role, and content
7. 3 FAQ items with question and answer
8. Suggest 5 form fields for lead capture

Make it conversion-focused, persuasive, and professional.
      `

      const { object } = await blink.ai.generateObject({
        prompt,
        schema: {
          type: 'object',
          properties: {
            heroHeadline: { type: 'string' },
            heroSubheadline: { type: 'string' },
            heroCta: { type: 'string' },
            features: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' }
                },
                required: ['title', 'description']
              }
            },
            benefits: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' }
                },
                required: ['title', 'description']
              }
            },
            testimonials: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  role: { type: 'string' },
                  content: { type: 'string' }
                },
                required: ['name', 'role', 'content']
              }
            },
            faq: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  question: { type: 'string' },
                  answer: { type: 'string' }
                },
                required: ['question', 'answer']
              }
            },
            formFields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  type: { type: 'string' },
                  label: { type: 'string' },
                  placeholder: { type: 'string' },
                  required: { type: 'boolean' }
                },
                required: ['name', 'type', 'label', 'required']
              }
            }
          },
          required: ['heroHeadline', 'heroSubheadline', 'heroCta', 'features', 'benefits', 'testimonials', 'faq', 'formFields']
        }
      })

      const content = object as GeneratedContent

      // Generate hero image
      const imagePrompt = `Professional hero image for landing page: ${formData.title}. ${formData.offerDescription}. Modern, clean, high-quality, photorealistic.`
      const { data: imageData } = await blink.ai.generateImage({
        prompt: imagePrompt,
        model: 'fal-ai/nano-banana-pro',
        n: 1,
        size: '1792x1024'
      })

      // Save to database
      const newPage = await blink.db.landingPages.create({
        userId: user.id,
        title: formData.title,
        offerDescription: formData.offerDescription,
        heroHeadline: content.heroHeadline,
        heroSubheadline: content.heroSubheadline,
        heroCta: content.heroCta,
        features: JSON.stringify(content.features),
        benefits: JSON.stringify(content.benefits),
        testimonials: JSON.stringify(content.testimonials),
        faq: JSON.stringify(content.faq),
        formFields: JSON.stringify(content.formFields),
        heroImageUrl: imageData[0].url,
        status: 'draft'
      })

      toast.success('Landing page generated successfully!')
      navigate(`/edit/${newPage.id}`)
    } catch (error) {
      console.error('Generation failed:', error)
      toast.error('Failed to generate landing page. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">Generate Landing Page</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="title">Page Title *</Label>
              <Input
                id="title"
                placeholder="e.g., AI-Powered Email Marketing Tool"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="description">Offer Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe what you're offering, who it's for, and what problem it solves..."
                rows={6}
                value={formData.offerDescription}
                onChange={(e) => setFormData({ ...formData, offerDescription: e.target.value })}
              />
              <p className="text-sm text-muted-foreground mt-2">
                Be specific and detailed. The better the description, the better the AI-generated content.
              </p>
            </div>

            <div>
              <Label htmlFor="audience">Target Audience</Label>
              <Input
                id="audience"
                placeholder="e.g., Small business owners, SaaS founders, marketers"
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="features">Key Features</Label>
              <Textarea
                id="features"
                placeholder="List the main features or capabilities..."
                rows={4}
                value={formData.keyFeatures}
                onChange={(e) => setFormData({ ...formData, keyFeatures: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="cta">Call to Action</Label>
              <Input
                id="cta"
                placeholder="e.g., Start Free Trial, Get Started, Book a Demo"
                value={formData.callToAction}
                onChange={(e) => setFormData({ ...formData, callToAction: e.target.value })}
              />
            </div>

            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleGenerate}
              disabled={generating || !formData.title || !formData.offerDescription}
            >
              {generating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating with AI...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Landing Page
                </>
              )}
            </Button>

            {generating && (
              <div className="text-center text-sm text-muted-foreground">
                This may take 30-60 seconds. We're creating your copy and images...
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
