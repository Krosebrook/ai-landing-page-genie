# FEAT-001: Advanced Analytics Dashboard

## Metadata
**Feature ID:** FEAT-001  
**Author:** Product Team  
**Status:** ✅ Ready for Implementation  
**Priority:** P0 (Critical)  
**Target Release:** Q1 2025, Week 3  
**Effort Estimate:** 3 weeks  
**Dependencies:** Blink Analytics SDK, Recharts  
**Last Updated:** December 21, 2025

---

## 1. Executive Summary

### Problem Statement
Users create landing pages but have zero visibility into performance. They don't know:
- How many people visit their pages
- Where visitors come from
- Which elements get clicked
- What their conversion rate is
- When to optimize vs. when to move on

**Impact:** 45% of users abandon their pages within 30 days because they don't see measurable results.

### Solution Overview
Comprehensive analytics dashboard providing real-time visitor tracking, conversion metrics, heatmaps, and AI-powered optimization recommendations. Users can make data-driven decisions to improve page performance.

### Key Differentiators
- **Real-time Updates:** Live visitor count with < 5s latency (competitors update every 5-10 minutes)
- **Conversion Attribution:** Track which traffic sources convert best (most don't offer this)
- **Heatmap Visualization:** See exactly where users click and scroll (rare in landing page builders)
- **AI Recommendations:** Get specific suggestions to improve conversions (unique to us)

### Success Metrics
- **Adoption:** 85% of active users view analytics weekly (baseline: 0%)
- **Engagement:** 3x increase in page optimization iterations
- **Retention:** 25% reduction in 30-day churn (from 45% to 34%)
- **Conversion:** 15% increase in free-to-paid conversion (users see ROI)

---

## 2. User Research

### User Personas

**Primary: Growth Marketer (Maya)**
- **Role:** Digital Marketing Manager at SaaS startup
- **Goals:** Launch campaigns quickly, prove ROI to management
- **Pain Points:** Can't track attribution, spends hours in Google Analytics
- **Quote:** "I need to know if this landing page is working within 24 hours, not next week."

**Secondary: Small Business Owner (David)**
- **Role:** Owner of local service business
- **Goals:** Generate leads, understand what works
- **Pain Points:** No time to learn complex analytics tools
- **Quote:** "I just want to know: are people filling out my form or not?"

**Tertiary: Agency Account Manager (Sarah)**
- **Role:** Manages 15 client landing page campaigns
- **Goals:** Report results to clients weekly
- **Pain Points:** Manually compiling data from multiple tools
- **Quote:** "I spend 10 hours a week just creating performance reports."

### User Pain Points (Research Findings)

From 50 user interviews (November 2024):
1. **57% of users** don't know their conversion rate
2. **43% of users** have never looked at their page analytics (don't have any)
3. **72% of users** want simpler dashboards (Google Analytics too complex)
4. **89% of users** want real-time data (not delayed reports)
5. **34% of users** abandoned pages because "didn't know if they worked"

### Competitive Analysis

| Feature | Us | Unbounce | Leadpages | Instapage |
|---------|----|-----------|-----------| --------- |
| Real-time Tracking | ✅ Yes | ❌ No | ❌ No | ⚠️ Paid only |
| Conversion Tracking | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| Heatmaps | ✅ Yes | ⚠️ Integr. | ❌ No | ⚠️ Integr. |
| Traffic Source Attribution | ✅ Yes | ⚠️ Basic | ⚠️ Basic | ✅ Yes |
| AI Recommendations | ✅ Yes | ❌ No | ❌ No | ❌ No |
| Export Reports | ✅ CSV/PDF | ✅ CSV | ✅ CSV | ✅ PDF |

**Our Advantage:** Only platform with native real-time tracking + heatmaps + AI recommendations.

---

## 3. User Stories

### US-001: Real-time Dashboard View
**Priority:** P0  
**Effort:** 1 week

**As a** marketer,  
**I want to** see real-time visitor statistics on my dashboard,  
**So that** I can monitor campaign performance as it happens and react quickly to issues.

**Acceptance Criteria:**
- [ ] Dashboard displays current visitor count with < 5s latency
- [ ] Metrics auto-update without page refresh (WebSocket connection)
- [ ] Visual pulse indicator shows when new visitors arrive
- [ ] Mobile-responsive dashboard (works on phone)
- [ ] Graceful degradation if WebSocket fails (fallback to polling)

**Mockup:** [Figma Link - Dashboard Overview]

**Out of Scope:**
- Historical data older than 90 days (future: data archiving)
- Custom date ranges beyond 7d/30d/90d (future: advanced filtering)

---

### US-002: Conversion Tracking & Attribution
**Priority:** P0  
**Effort:** 1 week

**As a** business owner,  
**I want to** track form submission rates broken down by traffic source,  
**So that** I can calculate ROI and allocate my marketing budget effectively.

**Acceptance Criteria:**
- [ ] Conversion rate displayed prominently (% with trend arrow)
- [ ] Traffic source breakdown (organic, paid, social, direct, referral)
- [ ] UTM parameter tracking (source, medium, campaign)
- [ ] Historical trend chart (line chart, 30 days)
- [ ] Export to CSV functionality
- [ ] Conversion goal configuration (track specific buttons, not just forms)

**Mockup:** [Figma Link - Conversion Dashboard]

**Business Rules:**
- Conversion = form submission OR tracked button click
- Attribution = last-touch (most recent UTM params)
- Unknown source = labeled as "Direct"

**Out of Scope:**
- Multi-touch attribution (future: attribution modeling)
- Revenue tracking (future: e-commerce integration)

---

### US-003: Heatmap Visualization
**Priority:** P1  
**Effort:** 1 week

**As a** designer,  
**I want to** see where users click and how far they scroll,  
**So that** I can optimize page layout based on actual user behavior.

**Acceptance Criteria:**
- [ ] Click heatmap shows click density (red = most clicks, blue = least)
- [ ] Scroll heatmap shows % of users who reached each section
- [ ] Toggle between desktop and mobile views
- [ ] Date range selector (last 7 days, 30 days)
- [ ] Overlay heatmap on actual page screenshot
- [ ] Export heatmap as PNG image

**Mockup:** [Figma Link - Heatmap View]

**Technical Constraints:**
- Heatmap data aggregated (not real-time, updated hourly)
- Minimum 100 sessions required to generate heatmap
- Canvas rendering for performance (not DOM overlay)

**Out of Scope:**
- Mouse movement tracking (privacy concern + performance cost)
- Rage click detection (future: UX insights)
- Session recordings (future: qualitative analysis)

---

### US-004: Analytics Dashboard Home
**Priority:** P0  
**Effort:** 3 days

**As a** user,  
**I want to** see my key metrics at a glance when I open the dashboard,  
**So that** I can quickly assess performance without digging through reports.

**Acceptance Criteria:**
- [ ] 4 primary metric cards: Page Views, Unique Visitors, Conversions, Conversion Rate
- [ ] Each card shows current value + % change from previous period
- [ ] Color-coded trend indicators (green = up, red = down, gray = no change)
- [ ] Date range selector affects all metrics
- [ ] Loading skeleton while fetching data
- [ ] Empty state if no data yet ("Publish your page to start tracking")

**Mockup:** [Figma Link - Metric Cards]

---

### US-005: Traffic Sources Report
**Priority:** P1  
**Effort:** 2 days

**As a** marketer,  
**I want to** understand where my traffic comes from,  
**So that** I can double down on effective channels and cut underperforming ones.

**Acceptance Criteria:**
- [ ] Pie chart showing traffic distribution
- [ ] Table with source, visits, conversions, conversion rate
- [ ] Sort by any column
- [ ] Filter by date range
- [ ] Drill down into specific source (e.g., all "google" traffic)
- [ ] Export table to CSV

**Business Logic:**
```typescript
// Source categorization
const categorizeSource = (referrer: string, utm_source?: string) => {
  if (utm_source) return utm_source // UTM takes precedence
  if (!referrer) return 'Direct'
  if (referrer.includes('google')) return 'Organic Search'
  if (referrer.includes('facebook')) return 'Social - Facebook'
  if (referrer.includes('linkedin')) return 'Social - LinkedIn'
  return 'Referral'
}
```

---

## 4. Technical Specification

### Architecture Overview

```
┌──────────────┐         ┌──────────────────┐         ┌──────────────┐
│  Published   │         │  Analytics SDK   │         │   Database   │
│  Landing     │────────▶│  (Client-side    │────────▶│   (SQLite)   │
│  Page        │  Events │   Tracking)      │  Store  │              │
└──────────────┘         └──────────────────┘         └──────────────┘
                                  │                            │
                                  │                            │
                                  ▼                            ▼
                         ┌──────────────────┐         ┌──────────────┐
                         │  Blink Realtime  │────────▶│  Analytics   │
                         │  (WebSocket)     │  Push   │  Dashboard   │
                         └──────────────────┘         │  (React UI)  │
                                                       └──────────────┘
```

### Data Flow

**Event Tracking (Client-side):**
1. User visits published landing page
2. Analytics SDK auto-loads (injected into page HTML)
3. SDK captures: pageview, clicks, form submissions, scroll depth
4. Events batched (every 10 events or 30 seconds)
5. Batch sent to `/api/analytics/:pageId/track`
6. Server validates, enriches (geo, device), stores in DB
7. Real-time update pushed via WebSocket to dashboard

**Dashboard Query (Server-side):**
1. Dashboard requests metrics via `/api/analytics/:pageId?range=7d`
2. Server queries DB with aggregation (SUM, COUNT, GROUP BY)
3. Results cached for 5 minutes (Redis or in-memory)
4. Response sent to dashboard
5. Dashboard renders charts and metrics

### Database Schema

```sql
-- Analytics Events (Fact Table)
CREATE TABLE analytics_events (
  id TEXT PRIMARY KEY DEFAULT lower(hex(randomblob(16))),
  landing_page_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  visitor_id TEXT, -- Anonymous unique ID (cookie-based)
  event_type TEXT NOT NULL, -- 'pageview' | 'click' | 'form_submit' | 'scroll'
  timestamp TEXT NOT NULL,
  
  -- Page context
  page_url TEXT,
  page_title TEXT,
  
  -- Event details
  element_id TEXT, -- For clicks: button ID or class
  element_text TEXT, -- For clicks: button text
  form_id TEXT, -- For form submits
  scroll_depth INTEGER, -- For scroll: % of page
  
  -- Session metadata
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  
  -- Device info
  device_type TEXT, -- 'desktop' | 'mobile' | 'tablet'
  browser TEXT,
  os TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  
  -- Location (server-enriched)
  country TEXT,
  region TEXT,
  city TEXT,
  
  created_at TEXT DEFAULT datetime('now')
);

-- Indexes for fast queries
CREATE INDEX idx_events_page_timestamp ON analytics_events(landing_page_id, timestamp);
CREATE INDEX idx_events_session ON analytics_events(session_id);
CREATE INDEX idx_events_type ON analytics_events(event_type);
CREATE INDEX idx_events_page_type_timestamp ON analytics_events(landing_page_id, event_type, timestamp);

-- Analytics Sessions (Dimension Table)
CREATE TABLE analytics_sessions (
  id TEXT PRIMARY KEY DEFAULT lower(hex(randomblob(16))),
  landing_page_id TEXT NOT NULL,
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL UNIQUE,
  
  -- Time
  first_seen TEXT NOT NULL,
  last_seen TEXT NOT NULL,
  duration INTEGER, -- seconds
  
  -- Engagement
  page_views INTEGER DEFAULT 1,
  clicks INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  scroll_depth INTEGER DEFAULT 0, -- max scroll %
  
  -- Attribution
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  channel TEXT, -- Categorized: 'organic', 'paid', 'social', 'direct'
  
  -- Device
  device_type TEXT,
  browser TEXT,
  os TEXT,
  
  -- Location
  country TEXT,
  
  created_at TEXT DEFAULT datetime('now'),
  updated_at TEXT DEFAULT datetime('now')
);

CREATE INDEX idx_sessions_page ON analytics_sessions(landing_page_id);
CREATE INDEX idx_sessions_visitor ON analytics_sessions(visitor_id);
CREATE INDEX idx_sessions_created ON analytics_sessions(created_at);

-- Conversion Goals (Configuration)
CREATE TABLE conversion_goals (
  id TEXT PRIMARY KEY DEFAULT lower(hex(randomblob(16))),
  landing_page_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  
  goal_type TEXT NOT NULL, -- 'form_submit' | 'button_click' | 'scroll' | 'time_on_page'
  goal_name TEXT NOT NULL,
  target_element TEXT, -- CSS selector for button_click
  target_value REAL, -- Threshold for scroll/time goals
  
  active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT datetime('now')
);

CREATE INDEX idx_goals_page ON conversion_goals(landing_page_id);

-- Aggregated Metrics (Materialized View - Refreshed Hourly)
CREATE TABLE analytics_daily_summary (
  id TEXT PRIMARY KEY DEFAULT lower(hex(randomblob(16))),
  landing_page_id TEXT NOT NULL,
  date TEXT NOT NULL, -- YYYY-MM-DD
  
  sessions INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0,
  page_views INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  conversion_rate REAL DEFAULT 0,
  avg_session_duration INTEGER DEFAULT 0, -- seconds
  bounce_rate REAL DEFAULT 0, -- % of single-pageview sessions
  
  created_at TEXT DEFAULT datetime('now'),
  
  UNIQUE(landing_page_id, date)
);

CREATE INDEX idx_summary_page_date ON analytics_daily_summary(landing_page_id, date);
```

### API Endpoints

#### Track Event (Client-side SDK)
```typescript
POST /api/analytics/:pageId/track

Headers:
- Content-Type: application/json
- X-Visitor-ID: <anonymous_visitor_id> (from cookie)

Body:
{
  events: [
    {
      type: 'pageview' | 'click' | 'form_submit' | 'scroll',
      timestamp: '2025-01-15T10:30:00.000Z',
      sessionId: 'sess_abc123',
      
      // Optional: event-specific data
      elementId?: 'hero-cta-button',
      elementText?: 'Get Started',
      formId?: 'contact-form',
      scrollDepth?: 75,
      
      // Session context
      pageUrl: 'https://example.com/landing',
      referrer: 'https://google.com/search',
      utmSource?: 'google',
      utmMedium?: 'cpc',
      utmCampaign?: 'summer_sale',
      
      // Device info
      deviceType: 'desktop',
      browser: 'Chrome 120',
      os: 'macOS',
      screenWidth: 1920,
      screenHeight: 1080
    }
  ]
}

Response: 202 Accepted
{
  success: true,
  eventsProcessed: 1
}

Errors:
- 400: Invalid event data
- 404: Landing page not found
- 429: Rate limit exceeded (1000 events/minute per page)
```

#### Get Analytics Dashboard Data
```typescript
GET /api/analytics/:pageId?range=7d&timezone=UTC

Query Parameters:
- range: '24h' | '7d' | '30d' | '90d' (default: '7d')
- timezone: IANA timezone (default: 'UTC')

Response: 200 OK
{
  pageId: 'page_123',
  dateRange: {
    from: '2025-01-08T00:00:00.000Z',
    to: '2025-01-15T23:59:59.000Z'
  },
  
  // Key metrics
  metrics: {
    pageViews: {
      current: 5432,
      previous: 4123,
      change: 31.7 // % change from previous period
    },
    uniqueVisitors: {
      current: 2345,
      previous: 1987,
      change: 18.0
    },
    conversions: {
      current: 156,
      previous: 98,
      change: 59.2
    },
    conversionRate: {
      current: 6.65, // %
      previous: 4.93,
      change: 34.9
    }
  },
  
  // Traffic sources
  trafficSources: [
    {
      source: 'Google Organic',
      sessions: 1234,
      conversions: 89,
      conversionRate: 7.21
    },
    {
      source: 'Facebook Ads',
      sessions: 567,
      conversions: 34,
      conversionRate: 6.00
    },
    {
      source: 'Direct',
      sessions: 423,
      conversions: 21,
      conversionRate: 4.96
    }
  ],
  
  // Time series data (for charts)
  timeSeries: [
    {
      date: '2025-01-08',
      pageViews: 654,
      conversions: 18,
      conversionRate: 2.75
    },
    // ... more daily data
  ],
  
  // Device breakdown
  devices: {
    desktop: 1567, // sessions
    mobile: 678,
    tablet: 100
  },
  
  // Top pages/sections
  topElements: [
    {
      elementId: 'hero-cta',
      clicks: 234,
      conversions: 89
    },
    {
      elementId: 'pricing-cta',
      clicks: 156,
      conversions: 67
    }
  ]
}

Errors:
- 401: Unauthorized
- 403: User doesn't own this page
- 404: Page not found
```

#### Get Heatmap Data
```typescript
GET /api/analytics/:pageId/heatmap?range=7d&type=clicks

Query Parameters:
- range: '7d' | '30d' | '90d'
- type: 'clicks' | 'scroll'

Response: 200 OK
{
  type: 'clicks',
  pageWidth: 1440, // Normalized width
  pageHeight: 3000, // Full page height
  
  // Click heatmap
  clicks: [
    {
      x: 720, // Normalized coordinates (relative to pageWidth)
      y: 450,
      count: 234,
      elementId: 'hero-cta'
    },
    // ... thousands of click points
  ],
  
  // Scroll heatmap
  scrollDepth: [
    { depth: 0, visitors: 2345 }, // 100% reached
    { depth: 25, visitors: 1987 }, // 85% reached
    { depth: 50, visitors: 1234 }, // 53% reached
    { depth: 75, visitors: 456 }, // 19% reached
    { depth: 100, visitors: 89 } // 4% reached bottom
  ],
  
  // Metadata
  sessionCount: 2345,
  minSessionsRequired: 100
}

Note: Requires minimum 100 sessions to generate heatmap
```

#### Real-time Updates (WebSocket)
```typescript
WS /api/analytics/:pageId/live

Headers:
- Authorization: Bearer <jwt_token>

// Server sends updates every 5 seconds
Message (Server → Client):
{
  type: 'metrics_update',
  timestamp: '2025-01-15T10:30:00.000Z',
  data: {
    activeVisitors: 23, // Currently on page
    recentConversions: 2, // Last 5 minutes
    liveEvents: [
      {
        type: 'pageview',
        timestamp: '2025-01-15T10:29:55.000Z',
        country: 'US',
        device: 'mobile'
      }
    ]
  }
}

// Client subscribes
Message (Client → Server):
{
  type: 'subscribe',
  pageId: 'page_123'
}

// Client unsubscribes
Message (Client → Server):
{
  type: 'unsubscribe'
}
```

### UI Components

#### Component Hierarchy
```
<AnalyticsDashboard>
  <DashboardHeader>
    <PageSelector />
    <DateRangePicker />
    <ExportButton />
  </DashboardHeader>
  
  <MetricsOverview>
    <MetricCard metric="pageViews" />
    <MetricCard metric="uniqueVisitors" />
    <MetricCard metric="conversions" />
    <MetricCard metric="conversionRate" />
  </MetricsOverview>
  
  <ChartsSection>
    <ConversionTrendChart data={timeSeries} />
    <TrafficSourcesChart data={sources} />
  </ChartsSection>
  
  <TabsSection>
    <Tabs>
      <Tab label="Traffic Sources">
        <TrafficSourcesTable data={sources} />
      </Tab>
      <Tab label="Heatmap">
        <HeatmapViewer pageId={pageId} />
      </Tab>
      <Tab label="Events">
        <EventsTimeline events={recentEvents} />
      </Tab>
    </Tabs>
  </TabsSection>
</AnalyticsDashboard>
```

#### MetricCard Component
```typescript
interface MetricCardProps {
  metric: 'pageViews' | 'uniqueVisitors' | 'conversions' | 'conversionRate'
  current: number
  previous: number
  change: number // %
  loading?: boolean
}

<MetricCard>
  <CardHeader>
    <Icon /> Page Views
  </CardHeader>
  <CardBody>
    <Value>5,432</Value>
    <Trend change={31.7} />
    <Comparison>vs last period: 4,123</Comparison>
  </CardBody>
</MetricCard>

Variants:
- Default: Show value + trend
- Loading: Skeleton animation
- Empty: "No data yet" message
```

#### HeatmapViewer Component
```typescript
interface HeatmapViewerProps {
  pageId: string
  range: '7d' | '30d' | '90d'
  type: 'clicks' | 'scroll'
}

State:
- heatmapData: HeatmapData | null
- loading: boolean
- error: Error | null
- viewport: 'desktop' | 'mobile'

Implementation:
- Canvas rendering for performance
- Gradient overlay (red → yellow → blue)
- Zoom controls (+/-)
- Export as PNG button
```

### Business Logic

#### Session Management
```typescript
// Generate session ID (client-side)
function getSessionId(): string {
  // Check if session ID exists in sessionStorage
  let sessionId = sessionStorage.getItem('analytics_session_id')
  
  if (!sessionId) {
    // Create new session
    sessionId = `sess_${Date.now()}_${Math.random().toString(36)}`
    sessionStorage.setItem('analytics_session_id', sessionId)
    sessionStorage.setItem('session_start', Date.now().toString())
  }
  
  // Session expires after 30 minutes of inactivity
  const lastActivity = sessionStorage.getItem('last_activity')
  if (lastActivity && Date.now() - parseInt(lastActivity) > 30 * 60 * 1000) {
    // Create new session
    sessionId = `sess_${Date.now()}_${Math.random().toString(36)}`
    sessionStorage.setItem('analytics_session_id', sessionId)
  }
  
  sessionStorage.setItem('last_activity', Date.now().toString())
  return sessionId
}
```

#### Conversion Attribution
```typescript
// Categorize traffic source
function categorizeTrafficSource(
  referrer: string | null,
  utmSource?: string,
  utmMedium?: string
): string {
  // UTM parameters take precedence
  if (utmSource) return utmSource
  
  // No referrer = direct traffic
  if (!referrer) return 'Direct'
  
  // Categorize by referrer domain
  const domain = new URL(referrer).hostname
  
  if (domain.includes('google')) return 'Organic Search - Google'
  if (domain.includes('bing')) return 'Organic Search - Bing'
  if (domain.includes('facebook')) return 'Social - Facebook'
  if (domain.includes('linkedin')) return 'Social - LinkedIn'
  if (domain.includes('twitter') || domain.includes('t.co')) return 'Social - Twitter'
  
  return `Referral - ${domain}`
}

// Calculate conversion rate
function calculateConversionRate(
  conversions: number,
  sessions: number
): number {
  if (sessions === 0) return 0
  return Math.round((conversions / sessions) * 1000) / 10 // Round to 1 decimal
}

// Calculate period change
function calculateChange(current: number, previous: number): number {
  if (previous === 0) return current > 0 ? 100 : 0
  return Math.round(((current - previous) / previous) * 1000) / 10
}
```

#### Real-time Active Visitors
```typescript
// Server-side logic to count active visitors
async function getActiveVisitors(pageId: string): Promise<number> {
  // Count unique visitors with events in last 5 minutes
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
  
  const result = await db.sql<{ count: number }>(`
    SELECT COUNT(DISTINCT visitor_id) as count
    FROM analytics_events
    WHERE landing_page_id = ?
      AND timestamp > ?
  `, [pageId, fiveMinutesAgo])
  
  return result.rows[0]?.count || 0
}
```

### Performance Optimizations

#### Query Optimization
```sql
-- Use aggregated daily summary for historical queries
SELECT 
  SUM(sessions) as total_sessions,
  SUM(conversions) as total_conversions,
  AVG(conversion_rate) as avg_conversion_rate
FROM analytics_daily_summary
WHERE landing_page_id = :pageId
  AND date BETWEEN :start_date AND :end_date;

-- Only query raw events for last 24 hours
SELECT 
  COUNT(DISTINCT session_id) as sessions,
  COUNT(CASE WHEN event_type = 'form_submit' THEN 1 END) as conversions
FROM analytics_events
WHERE landing_page_id = :pageId
  AND timestamp > datetime('now', '-24 hours');
```

#### Caching Strategy
- Cache dashboard metrics for 5 minutes (in-memory or Redis)
- Invalidate cache on new event (for real-time updates)
- Separate cache keys per page and date range

```typescript
const getCachedMetrics = async (pageId: string, range: string) => {
  const cacheKey = `analytics:${pageId}:${range}`
  
  // Try cache first
  const cached = await redis.get(cacheKey)
  if (cached) return JSON.parse(cached)
  
  // Query database
  const metrics = await queryMetrics(pageId, range)
  
  // Cache for 5 minutes
  await redis.setex(cacheKey, 300, JSON.stringify(metrics))
  
  return metrics
}
```

#### Frontend Optimizations
- Lazy load heatmap component (only when tab active)
- Debounce real-time updates (batch every 5 seconds)
- Use React.memo for metric cards (prevent re-renders)
- Virtual scrolling for long event tables

---

## 5. Implementation Plan

### Phase 1: Data Collection & Backend (Week 1)

**Days 1-2: Database & Migrations**
- [ ] Create analytics tables (events, sessions, goals, summaries)
- [ ] Add indexes for query performance
- [ ] Write migration scripts
- [ ] Seed test data for development

**Days 3-4: Event Tracking API**
- [ ] Implement POST /api/analytics/:pageId/track
- [ ] Validate and sanitize event data
- [ ] Enrich events with server-side data (geo, device parsing)
- [ ] Batch insert events (performance)
- [ ] Error handling and logging

**Days 5-7: Analytics Query APIs**
- [ ] Implement GET /api/analytics/:pageId (dashboard data)
- [ ] Implement GET /api/analytics/:pageId/heatmap
- [ ] Write SQL queries with aggregations
- [ ] Add caching layer
- [ ] Unit tests for API endpoints

**Deliverables:**
- [ ] Working API with 100% test coverage
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Postman collection for manual testing

---

### Phase 2: Frontend Dashboard (Week 2)

**Days 8-9: Dashboard Layout & Metrics**
- [ ] Create AnalyticsDashboard component
- [ ] Implement MetricCard components
- [ ] Fetch and display key metrics
- [ ] Add loading and error states
- [ ] Date range picker component

**Days 10-11: Charts & Visualizations**
- [ ] Integrate Recharts library
- [ ] Implement ConversionTrendChart (line chart)
- [ ] Implement TrafficSourcesChart (pie chart)
- [ ] Add responsive chart sizing
- [ ] Tooltips and legends

**Days 12-14: Advanced Features**
- [ ] Build TrafficSourcesTable (sortable, filterable)
- [ ] Implement HeatmapViewer component
- [ ] Add export to CSV/PDF functionality
- [ ] Real-time updates via WebSocket
- [ ] Mobile responsive testing

**Deliverables:**
- [ ] Functional analytics dashboard
- [ ] Component tests (React Testing Library)
- [ ] Storybook stories for components

---

### Phase 3: Polish & Integration (Week 3)

**Days 15-16: Analytics SDK (Client-side)**
- [ ] Create lightweight tracking SDK (< 10KB gzipped)
- [ ] Auto-inject into published pages
- [ ] Track pageviews, clicks, form submissions
- [ ] Batch events and handle offline
- [ ] Privacy-compliant (GDPR/CCPA)

**Days 17-18: Testing & Optimization**
- [ ] E2E tests (Playwright)
- [ ] Performance testing (load 10K events)
- [ ] Query optimization (add missing indexes)
- [ ] Cross-browser testing
- [ ] Mobile device testing

**Days 19-21: Documentation & Launch Prep**
- [ ] Write user-facing documentation
- [ ] Create video tutorial (5 minutes)
- [ ] Update changelog
- [ ] Feature flag setup
- [ ] Monitoring and alerts

**Deliverables:**
- [ ] Production-ready feature
- [ ] Test coverage report (>80%)
- [ ] Performance benchmarks
- [ ] Launch announcement draft

---

## 6. Testing Strategy

### Unit Tests (Jest)

**API Endpoint Tests:**
```typescript
describe('POST /api/analytics/:pageId/track', () => {
  it('should accept valid event batch', async () => {
    const events = [
      {
        type: 'pageview',
        timestamp: new Date().toISOString(),
        sessionId: 'sess_123',
        pageUrl: 'https://example.com'
      }
    ]
    
    const response = await request(app)
      .post('/api/analytics/page_123/track')
      .send({ events })
      .expect(202)
    
    expect(response.body.success).toBe(true)
    expect(response.body.eventsProcessed).toBe(1)
  })
  
  it('should reject invalid event data', async () => {
    const events = [{ type: 'invalid' }]
    
    await request(app)
      .post('/api/analytics/page_123/track')
      .send({ events })
      .expect(400)
  })
})

describe('calculateConversionRate', () => {
  it('should return 0 for no sessions', () => {
    expect(calculateConversionRate(10, 0)).toBe(0)
  })
  
  it('should calculate percentage correctly', () => {
    expect(calculateConversionRate(50, 1000)).toBe(5.0)
    expect(calculateConversionRate(1, 3)).toBe(33.3)
  })
})
```

### Integration Tests

```typescript
describe('Analytics End-to-End Flow', () => {
  it('should track event and reflect in dashboard', async () => {
    // Create landing page
    const page = await createTestPage()
    
    // Track pageview event
    await request(app)
      .post(`/api/analytics/${page.id}/track`)
      .send({
        events: [{
          type: 'pageview',
          sessionId: 'sess_test',
          timestamp: new Date().toISOString()
        }]
      })
      .expect(202)
    
    // Wait for processing
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Query dashboard
    const dashboard = await request(app)
      .get(`/api/analytics/${page.id}?range=24h`)
      .set('Authorization', `Bearer ${testToken}`)
      .expect(200)
    
    expect(dashboard.body.metrics.pageViews.current).toBe(1)
  })
})
```

### E2E Tests (Playwright)

```typescript
test('user can view analytics dashboard', async ({ page }) => {
  // Login
  await page.goto('/login')
  await login(page, testUser)
  
  // Create and publish page
  await page.goto('/dashboard')
  await page.click('text=Create Page')
  const landingPage = await createAndPublishPage(page)
  
  // Generate some traffic (simulate)
  await simulatePageViews(landingPage.url, 50)
  
  // Open analytics
  await page.goto(`/analytics/${landingPage.id}`)
  
  // Verify metrics displayed
  await expect(page.locator('[data-metric="pageViews"]')).toContainText('50')
  await expect(page.locator('[data-metric="conversionRate"]')).toBeVisible()
  
  // Verify chart renders
  await expect(page.locator('canvas')).toBeVisible()
  
  // Click heatmap tab
  await page.click('text=Heatmap')
  await expect(page.locator('[data-testid="heatmap-canvas"]')).toBeVisible()
})
```

---

## 7. Security & Privacy

### Data Privacy Compliance

**GDPR Compliance:**
- [ ] Anonymous visitor tracking by default (no PII)
- [ ] Cookie consent banner (required for EU visitors)
- [ ] Data export functionality (GDPR Article 15)
- [ ] Data deletion API (GDPR Article 17 - Right to be Forgotten)
- [ ] Data retention policy (90 days default, configurable)

**CCPA Compliance:**
- [ ] "Do Not Sell My Info" option
- [ ] Opt-out of tracking functionality
- [ ] Privacy policy disclosure

### Security Measures

**Input Validation:**
```typescript
// Validate event data
const eventSchema = z.object({
  type: z.enum(['pageview', 'click', 'form_submit', 'scroll']),
  timestamp: z.string().datetime(),
  sessionId: z.string().min(10).max(100),
  pageUrl: z.string().url().optional(),
  elementId: z.string().max(255).optional(),
  // ... more fields
})

const validateEvent = (event: unknown) => {
  try {
    return eventSchema.parse(event)
  } catch (error) {
    throw new ValidationError('Invalid event data')
  }
}
```

**Rate Limiting:**
- 1000 events per minute per page (prevent abuse)
- 100 dashboard queries per hour per user
- IP-based rate limiting for public tracking endpoint

**Access Control:**
- Users can only view analytics for pages they own
- JWT authentication required for dashboard API
- Read-only analytics (no deletion from dashboard)

---

## 8. Deployment & Rollout

### Feature Flag Configuration
```typescript
// Feature flag
const isAnalyticsEnabled = (userId: string) => {
  return featureFlags.check('analytics_dashboard', userId)
}

// Staged rollout
// Week 1: 10% of users
// Week 2: 50% of users
// Week 3: 100% of users
```

### Monitoring & Alerts

**Key Metrics to Monitor:**
- Event ingestion rate (events/second)
- Dashboard query response time (p95)
- WebSocket connection count
- Database query performance
- Error rate

**Alerts:**
- Event ingestion failure > 1% for 5 minutes
- Dashboard load time > 3s for 10 minutes
- WebSocket disconnections > 10% for 5 minutes
- Database slow queries > 500ms

### Rollback Plan

**Triggers:**
- Event data loss detected
- Dashboard unavailable for 10+ minutes
- Database performance degradation
- User reports > 20 in 1 hour

**Rollback Steps:**
1. Disable analytics tracking SDK (feature flag off)
2. Show "Analytics temporarily unavailable" message
3. Investigate and fix root cause
4. Re-enable gradually (10% → 50% → 100%)

---

## 9. Documentation

### User Documentation (Help Center)

**Article 1: Getting Started with Analytics**
- What is the Analytics Dashboard?
- How to access your page analytics
- Understanding key metrics
- Video tutorial (5 minutes)

**Article 2: Tracking Conversions**
- What counts as a conversion?
- Setting up conversion goals
- Tracking custom button clicks
- Best practices for conversion tracking

**Article 3: Using Heatmaps**
- What is a heatmap?
- How to interpret click and scroll heatmaps
- Optimizing your page based on heatmap data
- Mobile vs desktop heatmaps

### Developer Documentation (API Docs)

**Analytics API Reference:**
- Authentication (JWT)
- Rate limits
- Endpoint descriptions
- Request/response examples
- Error codes
- Code samples (JavaScript, Python, cURL)

---

## 10. Success Criteria

### Launch Criteria (Must Pass Before Release)

- [ ] All unit tests passing (>80% coverage)
- [ ] All integration tests passing
- [ ] E2E tests passing in Chrome, Firefox, Safari
- [ ] Performance benchmarks met:
  - Dashboard load < 2s
  - API response time < 500ms (p95)
  - Event ingestion < 100ms (p95)
- [ ] Security review completed
- [ ] Privacy compliance verified (GDPR/CCPA)
- [ ] Documentation published
- [ ] Feature flag configured
- [ ] Monitoring and alerts active

### Post-Launch Metrics (4 Weeks)

**Adoption Metrics:**
- [ ] 85% of active users view analytics at least once
- [ ] 60% of users view analytics weekly
- [ ] Average time spent on analytics dashboard: 3+ minutes

**Engagement Metrics:**
- [ ] 40% of users export data at least once
- [ ] 25% of users use heatmap feature
- [ ] Average pages optimized after viewing analytics: 2.5

**Business Impact:**
- [ ] 25% reduction in 30-day churn
- [ ] 15% increase in free-to-paid conversion
- [ ] NPS score increase from 45 to 55

### Success Review (8 Weeks)

**Review Questions:**
1. Did we hit adoption targets? (85% usage)
2. Are users finding value? (qualitative feedback)
3. Did it impact churn? (retention data)
4. Did it drive upgrades? (conversion data)
5. What are users asking for next? (feature requests)

**Next Iteration:**
- Analyze feedback and usage data
- Prioritize top 3 enhancement requests
- Plan iteration 2 (advanced features)

---

**Document Status:** ✅ APPROVED FOR IMPLEMENTATION  
**Implementation Start Date:** January 6, 2025  
**Target Completion:** January 24, 2025  
**Owner:** Analytics Team Lead  
**Reviewers:** Product Manager, Tech Lead, Designer
