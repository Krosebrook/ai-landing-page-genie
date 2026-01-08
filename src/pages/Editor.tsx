import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '@/components/AuthProvider'
import { blink } from '@/lib/blink'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Save, Eye, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import type { LandingPage } from '@/types'

export function Editor() {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [page, setPage] = useState<LandingPage | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadPage()
  }, [id, user])

  const loadPage = async () => {
    if (!id || !user) return

    try {
      const pageData = await blink.db.landingPages.get<LandingPage>(id)
      if (pageData && pageData.userId === user.id) {
        setPage(pageData)
      } else {
        toast.error('Page not found')
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Failed to load page:', error)
      toast.error('Failed to load page')
      navigate('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!page || !id) return

    setSaving(true)
    try {
      await blink.db.landingPages.update(id, {
        title: page.title,
        heroHeadline: page.heroHeadline,
        heroSubheadline: page.heroSubheadline,
        heroCta: page.heroCta,
        features: page.features,
        benefits: page.benefits,
        testimonials: page.testimonials,
        faq: page.faq,
        formFields: page.formFields,
        updatedAt: new Date().toISOString()
      })
      toast.success('Changes saved!')
    } catch (error) {
      console.error('Save failed:', error)
      toast.error('Failed to save changes')
    } finally {
      setSaving(false)
    }
  }

  const handlePublish = async () => {
    if (!page || !id) return

    try {
      await blink.db.landingPages.update(id, {
        status: 'published',
        updatedAt: new Date().toISOString()
      })
      toast.success('Page published!')
      navigate(`/preview/${id}`)
    } catch (error) {
      console.error('Publish failed:', error)
      toast.error('Failed to publish page')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!page) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-xl font-bold">{page.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate(`/preview/${id}`)}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave} disabled={saving}>
              {saving ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Save
            </Button>
            <Button size="sm" onClick={handlePublish}>
              Publish
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-5xl">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="form">Form</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card className="p-6 space-y-4">
              <div>
                <Label>Hero Headline</Label>
                <Input
                  value={page.heroHeadline || ''}
                  onChange={(e) => setPage({ ...page, heroHeadline: e.target.value })}
                  placeholder="Main headline"
                />
              </div>
              <div>
                <Label>Hero Subheadline</Label>
                <Textarea
                  value={page.heroSubheadline || ''}
                  onChange={(e) => setPage({ ...page, heroSubheadline: e.target.value })}
                  placeholder="Supporting text"
                  rows={3}
                />
              </div>
              <div>
                <Label>CTA Button Text</Label>
                <Input
                  value={page.heroCta || ''}
                  onChange={(e) => setPage({ ...page, heroCta: e.target.value })}
                  placeholder="Get Started"
                />
              </div>
              {page.heroImageUrl && (
                <div>
                  <Label>Hero Image</Label>
                  <div className="mt-2 rounded-lg overflow-hidden border">
                    <img src={page.heroImageUrl} alt="Hero" className="w-full" />
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card className="p-6">
              <Label>Features (JSON)</Label>
              <Textarea
                value={page.features || ''}
                onChange={(e) => setPage({ ...page, features: e.target.value })}
                rows={15}
                className="font-mono text-sm mt-2"
              />
            </Card>
          </TabsContent>

          <TabsContent value="testimonials">
            <Card className="p-6">
              <Label>Testimonials (JSON)</Label>
              <Textarea
                value={page.testimonials || ''}
                onChange={(e) => setPage({ ...page, testimonials: e.target.value })}
                rows={15}
                className="font-mono text-sm mt-2"
              />
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card className="p-6">
              <Label>FAQ (JSON)</Label>
              <Textarea
                value={page.faq || ''}
                onChange={(e) => setPage({ ...page, faq: e.target.value })}
                rows={15}
                className="font-mono text-sm mt-2"
              />
            </Card>
          </TabsContent>

          <TabsContent value="form">
            <Card className="p-6">
              <Label>Form Fields (JSON)</Label>
              <Textarea
                value={page.formFields || ''}
                onChange={(e) => setPage({ ...page, formFields: e.target.value })}
                rows={15}
                className="font-mono text-sm mt-2"
              />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
