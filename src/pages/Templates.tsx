import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/components/AuthProvider'
import { blink } from '@/lib/blink'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Sparkles, 
  LayoutTemplate,
  Star,
  Download,
  Eye
} from 'lucide-react'
import type { Template } from '@/types'

export function Templates() {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth()
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    loadTemplates()
  }, [selectedCategory])

  const loadTemplates = async () => {
    try {
      setLoading(true)

      // Load templates from database
      const filters: any = { isApproved: 1 }
      if (selectedCategory !== 'all') {
        filters.category = selectedCategory
      }

      const templatesData = await blink.db.templates.list<Template>({
        where: filters,
        orderBy: { downloads: 'desc' },
        limit: 50
      })

      setTemplates(templatesData)
    } catch (error) {
      console.error('Failed to load templates:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleImportTemplate = async (template: Template) => {
    if (!isAuthenticated) {
      navigate('/')
      return
    }

    try {
      // Import template by creating a new landing page based on it
      const newPage = await blink.db.landingPages.create({
        userId: user!.id,
        title: `${template.name} - Copy`,
        offerDescription: template.description,
        status: 'draft',
        // Additional template data would be applied here
        generatedCopy: template.description
      })

      // Track template download
      await blink.db.templates.update(template.id, {
        downloads: template.downloads + 1
      })

      // Navigate to editor
      navigate(`/edit/${newPage.id}`)
    } catch (error) {
      console.error('Failed to import template:', error)
    }
  }

  const filteredTemplates = templates.filter(template =>
    searchQuery === '' ||
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const categories = [
    { value: 'all', label: 'All Templates' },
    { value: 'saas', label: 'SaaS' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'realestate', label: 'Real Estate' },
    { value: 'events', label: 'Events' },
    { value: 'education', label: 'Education' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutTemplate className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold">Template Library</h1>
            </div>
            <Button onClick={() => navigate('/dashboard')} variant="outline">
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Sparkles className="w-12 h-12 text-primary animate-pulse mx-auto mb-4" />
            <p className="text-muted-foreground">Loading templates...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredTemplates.length === 0 && (
          <Card className="p-12 text-center">
            <LayoutTemplate className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery
                ? 'Try adjusting your search or filters'
                : 'Templates are being added. Check back soon!'}
            </p>
            {searchQuery && (
              <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
            )}
          </Card>
        )}

        {/* Templates Grid */}
        {!loading && filteredTemplates.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* Preview Image */}
                <div className="bg-muted h-48 relative">
                  {template.previewImage ? (
                    <img
                      src={template.previewImage}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <LayoutTemplate className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                  {template.isPaid === 1 && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      ${template.price}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {template.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{template.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {template.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={() => handleImportTemplate(template)}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Use Template
                    </Button>
                    {template.demoUrl && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open(template.demoUrl, '_blank')}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
