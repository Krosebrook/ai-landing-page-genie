import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '@/components/AuthProvider'
import { blink } from '@/lib/blink'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Users, 
  MousePointerClick,
  BarChart3 
} from 'lucide-react'
import type { LandingPage, AnalyticsSummary, AnalyticsMetric, TrafficSource } from '@/types'

export function Analytics() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [page, setPage] = useState<LandingPage | null>(null)
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null)
  const [trafficSources, setTrafficSources] = useState<TrafficSource[]>([])
  const [loading, setLoading] = useState(true)
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('7d')

  useEffect(() => {
    loadAnalytics()
  }, [id, dateRange])

  const loadAnalytics = async () => {
    if (!id || !user) return

    try {
      setLoading(true)

      // Load landing page
      const pageData = await blink.db.landingPages.get<LandingPage>(id)
      if (!pageData || pageData.userId !== user.id) {
        navigate('/dashboard')
        return
      }
      setPage(pageData)

      // Load analytics summary
      const summaryData = await fetchAnalyticsSummary(id, dateRange)
      setSummary(summaryData)

      // Load traffic sources
      const sourcesData = await fetchTrafficSources(id, dateRange)
      setTrafficSources(sourcesData)
    } catch (error) {
      console.error('Failed to load analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchAnalyticsSummary = async (
    pageId: string, 
    range: string
  ): Promise<AnalyticsSummary> => {
    // For now, return mock data
    // In production, this would query the analytics_events table
    return {
      pageViews: Math.floor(Math.random() * 1000),
      uniqueVisitors: Math.floor(Math.random() * 500),
      conversions: Math.floor(Math.random() * 50),
      conversionRate: Math.random() * 10,
      bounceRate: Math.random() * 50,
      avgSessionDuration: Math.floor(Math.random() * 300)
    }
  }

  const fetchTrafficSources = async (
    pageId: string, 
    range: string
  ): Promise<TrafficSource[]> => {
    // Mock data for now
    return [
      { source: 'Direct', sessions: 234, conversions: 23, conversionRate: 9.8 },
      { source: 'Organic Search', sessions: 567, conversions: 45, conversionRate: 7.9 },
      { source: 'Social Media', sessions: 123, conversions: 8, conversionRate: 6.5 },
      { source: 'Referral', sessions: 89, conversions: 5, conversionRate: 5.6 }
    ]
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`
    }
    return num.toFixed(0)
  }

  const formatPercent = (num: number): string => {
    return `${num.toFixed(1)}%`
  }

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}m ${secs}s`
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      </div>
    )
  }

  if (!page || !summary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Analytics not available</p>
          <Button onClick={() => navigate('/dashboard')} className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{page.title}</h1>
                <p className="text-sm text-muted-foreground">Analytics Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={dateRange === '7d' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setDateRange('7d')}
              >
                7 Days
              </Button>
              <Button
                variant={dateRange === '30d' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setDateRange('30d')}
              >
                30 Days
              </Button>
              <Button
                variant={dateRange === '90d' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setDateRange('90d')}
              >
                90 Days
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Metrics Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Page Views"
            value={summary.pageViews}
            icon={Eye}
            formatter={formatNumber}
          />
          <MetricCard
            title="Unique Visitors"
            value={summary.uniqueVisitors}
            icon={Users}
            formatter={formatNumber}
          />
          <MetricCard
            title="Conversions"
            value={summary.conversions}
            icon={MousePointerClick}
            formatter={formatNumber}
          />
          <MetricCard
            title="Conversion Rate"
            value={summary.conversionRate}
            icon={TrendingUp}
            formatter={formatPercent}
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sources">Traffic Sources</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Bounce Rate</span>
                  <span className="font-medium">{formatPercent(summary.bounceRate || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Avg. Session Duration</span>
                  <span className="font-medium">
                    {formatDuration(summary.avgSessionDuration || 0)}
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Get Started</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Analytics tracking is automatically enabled for published pages. Share your page to start collecting data.
              </p>
              {page.status !== 'published' && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    This page is not published yet. Publish it to start tracking analytics.
                  </p>
                  <Button 
                    size="sm" 
                    className="mt-2"
                    onClick={() => navigate(`/edit/${page.id}`)}
                  >
                    Edit Page
                  </Button>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="sources" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
              <div className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{source.source}</h4>
                        <p className="text-sm text-muted-foreground">
                          {source.sessions} sessions • {source.conversions} conversions
                        </p>
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {formatPercent(source.conversionRate)}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${source.conversionRate * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
              <p className="text-muted-foreground">
                Detailed engagement metrics coming soon. This will include scroll depth, click heatmaps, and time on page analysis.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: number
  icon: React.ElementType
  formatter: (value: number) => string
  change?: number
}

function MetricCard({ title, value, icon: Icon, formatter, change }: MetricCardProps) {
  const formatPercent = (num: number): string => {
    return `${num.toFixed(1)}%`
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">{title}</span>
        <Icon className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-bold">{formatter(value)}</div>
        {change !== undefined && (
          <div className="flex items-center gap-1 text-sm">
            {change > 0 ? (
              <>
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">+{formatPercent(change)}</span>
              </>
            ) : change < 0 ? (
              <>
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="text-red-500">{formatPercent(change)}</span>
              </>
            ) : (
              <span className="text-muted-foreground">No change</span>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
