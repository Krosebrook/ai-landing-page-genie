import { useEffect, useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { blink } from '@/lib/blink'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Sparkles, LogOut, FileText, ExternalLink, BarChart3, LayoutTemplate } from 'lucide-react'
import type { LandingPage, Subscription } from '@/types'
import { useNavigate } from 'react-router-dom'

export function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [pages, setPages] = useState<LandingPage[]>([])
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [user])

  const loadDashboardData = async () => {
    if (!user) return

    try {
      // Load user's landing pages
      const pagesData = await blink.db.landingPages.list<LandingPage>({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' }
      })
      setPages(pagesData)

      // Load or create subscription
      let subData = await blink.db.subscriptions.list<Subscription>({
        where: { userId: user.id }
      })

      if (subData.length === 0) {
        // Create default subscription
        const newSub = await blink.db.subscriptions.create({
          userId: user.id,
          plan: 'free',
          status: 'active',
          pagesLimit: 3,
          customDomainsEnabled: 0,
          stripeEnabled: 0
        })
        setSubscription(newSub as Subscription)
      } else {
        setSubscription(subData[0])
      }
    } catch (error) {
      console.error('Failed to load dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const canCreateMore = () => {
    if (!subscription) return false
    if (subscription.plan === 'free') {
      return pages.length < subscription.pagesLimit
    }
    return true // Unlimited for paid plans
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">Landing Page Genie</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/templates')}>
              <LayoutTemplate className="w-4 h-4 mr-2" />
              Templates
            </Button>
            <div className="text-sm">
              <span className="text-muted-foreground">Plan: </span>
              <span className="font-medium capitalize">{subscription?.plan}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">Total Pages</div>
            <div className="text-3xl font-bold">{pages.length}</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">Pages Limit</div>
            <div className="text-3xl font-bold">
              {subscription?.plan === 'free' ? subscription.pagesLimit : '∞'}
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">Current Plan</div>
            <div className="text-3xl font-bold capitalize">{subscription?.plan}</div>
          </Card>
        </div>

        {/* Create New Button */}
        <div className="mb-8">
          <Button 
            size="lg" 
            onClick={() => navigate('/generate')}
            disabled={!canCreateMore()}
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Landing Page
          </Button>
          {!canCreateMore() && (
            <p className="text-sm text-muted-foreground mt-2">
              You've reached your page limit. Upgrade to create more pages.
            </p>
          )}
        </div>

        {/* Landing Pages List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Landing Pages</h2>
          {pages.length === 0 ? (
            <Card className="p-12 text-center">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No pages yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first AI-generated landing page to get started
              </p>
              <Button onClick={() => navigate('/generate')}>
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Page
              </Button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page) => (
                <Card key={page.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg line-clamp-1">{page.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        page.status === 'published' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {page.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {page.offerDescription}
                    </p>
                  </div>
                  {page.heroImageUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-muted h-32">
                      <img 
                        src={page.heroImageUrl} 
                        alt={page.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => navigate(`/edit/${page.id}`)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/analytics/${page.id}`)}
                    >
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/preview/${page.id}`)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
