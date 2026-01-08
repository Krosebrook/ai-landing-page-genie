# Analytics Dashboard

> **Status**: 📋 Planning Phase  
> **Target Release**: Week 2, January 2025  
> **Priority**: HIGH

## Overview

The Analytics Dashboard provides comprehensive insights into your landing page performance, visitor behavior, and conversion metrics. Make data-driven decisions to optimize your pages and maximize ROI.

## Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Metrics Explained](#metrics-explained)
- [Use Cases](#use-cases)
- [Technical Implementation](#technical-implementation)
- [API Reference](#api-reference)
- [Privacy & Compliance](#privacy--compliance)

---

## Key Features

### 📊 Real-Time Visitor Tracking
Monitor live visitor activity on your landing pages:
- **Live Visitor Count**: See how many people are currently viewing your page
- **Geographic Distribution**: Map view showing visitor locations by country/city
- **Device Breakdown**: Desktop vs mobile vs tablet usage
- **Traffic Sources**: Track where visitors come from (Direct, Search, Social, Referral)

### 🎯 Conversion Metrics
Track the metrics that matter for your business:
- **Conversion Rate**: Percentage of visitors who complete your goal
- **Form Submissions**: Track leads captured through your forms
- **CTA Click-Through Rate**: Measure engagement with your call-to-action buttons
- **Time to Conversion**: Average time from landing to conversion
- **Conversion by Source**: Which traffic sources convert best

### 🔥 Heatmap Integration
Visual representation of user behavior:
- **Click Heatmaps**: See where users click most frequently
- **Scroll Depth**: Track how far users scroll down your page
- **Attention Maps**: Identify which sections get the most attention
- **Rage Clicks**: Detect frustration points where users click repeatedly

### 📈 Performance Over Time
Understand trends and patterns:
- **Daily/Weekly/Monthly Views**: Track traffic patterns
- **Conversion Rate Trends**: Monitor optimization progress
- **Bounce Rate Analysis**: Identify pages that need improvement
- **Session Duration**: Measure engagement quality

### 🎨 Custom Events
Track specific user actions:
- **Video Plays**: Monitor video engagement
- **Section Views**: Track which sections users see
- **Download Clicks**: Measure content download interest
- **External Link Clicks**: Track outbound link engagement

### 📄 Reports & Export
Share insights with your team:
- **PDF Reports**: Export professional analytics reports
- **CSV Data Export**: Download raw data for custom analysis
- **Scheduled Reports**: Receive weekly/monthly reports via email
- **Custom Date Ranges**: Analyze any time period

---

## Getting Started

### Accessing Analytics

1. Navigate to your Dashboard
2. Click on any landing page card
3. Select the "Analytics" tab
4. View real-time metrics and historical data

### Setting Up Tracking

Analytics tracking is automatically enabled for all published pages. No additional setup required!

```typescript
// Analytics are automatically tracked when users visit your page
// Events captured:
- Page Views
- Form Submissions
- CTA Clicks
- Scroll Depth
- Time on Page
- Exit Events
```

### Viewing Your First Report

1. Publish your landing page
2. Share the link to get traffic
3. Return to Analytics dashboard within 5 minutes
4. See real-time visitor data appear

---

## Metrics Explained

### Core Metrics

#### Page Views
Total number of times your page was loaded.
- **Formula**: Count of all page loads
- **Use**: Measure traffic volume
- **Good Target**: Varies by campaign, but consistent growth is key

#### Unique Visitors
Number of distinct individuals who visited your page.
- **Formula**: De-duplicated visitor count (by device/session)
- **Use**: Understand actual audience size
- **Good Target**: High ratio of unique to total views indicates new traffic

#### Conversion Rate
Percentage of visitors who completed your goal (form submission, CTA click).
- **Formula**: (Conversions / Total Visitors) × 100
- **Use**: Primary success metric
- **Good Target**: 
  - Lead Gen: 10-20%
  - E-commerce: 2-5%
  - SaaS Trial: 5-15%

#### Bounce Rate
Percentage of visitors who leave without interacting.
- **Formula**: (Single Page Sessions / Total Sessions) × 100
- **Use**: Identify engagement issues
- **Good Target**: 
  - Below 40%: Excellent
  - 40-55%: Average
  - Above 55%: Needs improvement

#### Average Session Duration
How long visitors spend on your page.
- **Formula**: Total time on page / Number of sessions
- **Use**: Measure content engagement
- **Good Target**: 
  - 1-2 minutes: Good engagement
  - 2-4 minutes: Excellent engagement
  - Under 30 seconds: Needs attention

### Advanced Metrics

#### Time to Conversion
Average time from landing to completing goal.
- **Formula**: Timestamp of conversion - Timestamp of page load
- **Use**: Understand buyer decision speed
- **Good Target**: 
  - Shorter = Clear value proposition
  - Longer = May need CTA optimization

#### Scroll Depth
Percentage of page users scroll through.
- **Formula**: Furthest scroll point / Total page height
- **Use**: Identify if important content is seen
- **Good Target**: 
  - 50% reaching footer = Good
  - 75% reaching footer = Excellent

#### Click-Through Rate (CTR)
Percentage of visitors who click your CTA.
- **Formula**: (CTA Clicks / Page Views) × 100
- **Use**: Measure CTA effectiveness
- **Good Target**: 
  - 5-10%: Average
  - 10-20%: Good
  - Above 20%: Excellent

---

## Use Cases

### Use Case 1: Optimize Campaign Performance

**Scenario**: You're running a Facebook ad campaign and want to understand which ads drive the best results.

**Steps**:
1. Add UTM parameters to your ad links: `?utm_source=facebook&utm_campaign=product_launch`
2. View "Traffic by Source" in Analytics
3. Compare conversion rates by source
4. Allocate budget to top-performing sources

**Expected Outcome**: 30% improvement in ROI by focusing on best-performing channels.

---

### Use Case 2: Identify Page Friction Points

**Scenario**: Your page has traffic but low conversions.

**Steps**:
1. Check bounce rate (high = problem)
2. View heatmap to see where users click
3. Check scroll depth (are users reaching CTA?)
4. Review "Rage Clicks" for frustration points
5. Make improvements and re-test

**Expected Outcome**: Identify and fix 2-3 major friction points, increasing conversions by 15-25%.

---

### Use Case 3: A/B Test Results Analysis

**Scenario**: You're testing two different headlines.

**Steps**:
1. Create two page variants (Variant A and B)
2. Split traffic 50/50 using A/B testing feature
3. Monitor conversion rates in Analytics
4. When statistical significance reached, declare winner
5. Apply winning variant to all traffic

**Expected Outcome**: Data-driven decision with 95% confidence in optimal headline.

---

### Use Case 4: Geographic Targeting

**Scenario**: You want to understand which countries convert best.

**Steps**:
1. Review "Geographic Distribution" map
2. Identify high-converting countries
3. Check if language/currency matches audience
4. Consider localized pages for top countries
5. Adjust ad targeting to focus on high-converters

**Expected Outcome**: 20% increase in conversions by focusing on geographic sweet spots.

---

## Technical Implementation

### Database Schema

```typescript
// Analytics Event
interface AnalyticsEvent {
  id: string
  landingPageId: string
  userId?: string          // If user is logged in
  sessionId: string        // Anonymous session identifier
  eventType: 'pageview' | 'click' | 'submit' | 'scroll' | 'custom'
  eventName?: string       // Custom event name
  eventData?: object       // Additional event metadata
  timestamp: string
  
  // Visitor info
  visitorId: string        // Anonymous visitor ID (cookie-based)
  ipAddress: string        // Anonymized for privacy
  userAgent: string
  deviceType: 'desktop' | 'mobile' | 'tablet'
  browser: string
  os: string
  
  // Location
  country?: string
  city?: string
  region?: string
  
  // Traffic source
  referrer?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
}

// Analytics Session
interface AnalyticsSession {
  id: string
  landingPageId: string
  visitorId: string
  sessionStart: string
  sessionEnd?: string
  pageViews: number
  eventsCount: number
  converted: boolean
  conversionTimestamp?: string
  bounced: boolean
  maxScrollDepth: number
}

// Analytics Summary (Pre-aggregated for performance)
interface AnalyticsSummary {
  id: string
  landingPageId: string
  date: string             // YYYY-MM-DD
  pageViews: number
  uniqueVisitors: number
  conversions: number
  conversionRate: number
  bounceRate: number
  avgSessionDuration: number
  avgScrollDepth: number
  topSources: object       // JSON: { source: count }
  topCountries: object     // JSON: { country: count }
}
```

### SDK Integration

```typescript
// In landing page component
import { blink } from '@/lib/blink'

// Track page view (automatic)
useEffect(() => {
  blink.analytics.trackPageView({
    pageId: landingPageId,
    pageName: pageTitle,
    // UTM params extracted from URL automatically
  })
}, [])

// Track custom events
const handleCTAClick = () => {
  blink.analytics.trackEvent({
    eventType: 'click',
    eventName: 'cta_primary_click',
    eventData: {
      ctaText: 'Get Started',
      ctaPosition: 'hero'
    }
  })
}

// Track form submission
const handleFormSubmit = async (formData) => {
  blink.analytics.trackEvent({
    eventType: 'submit',
    eventName: 'lead_form_submit',
    eventData: {
      formId: 'hero_form',
      fields: Object.keys(formData)
    }
  })
  
  // Then submit form...
}

// Track scroll depth
useEffect(() => {
  const handleScroll = debounce(() => {
    const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100
    
    if (scrollPercent > 25 && !tracked25) {
      blink.analytics.trackEvent({ eventType: 'scroll', eventName: 'scroll_25' })
      setTracked25(true)
    }
    // Similar for 50%, 75%, 100%
  }, 500)
  
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

### Heatmap Integration

```typescript
// Heatmap tracking (click positions)
import { useEffect } from 'react'

export function useHeatmapTracking(pageId: string) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY + window.scrollY) / document.body.scrollHeight * 100
      
      blink.analytics.trackEvent({
        eventType: 'click',
        eventName: 'heatmap_click',
        eventData: {
          x: x.toFixed(2),
          y: y.toFixed(2),
          element: (e.target as HTMLElement).tagName,
          elementId: (e.target as HTMLElement).id,
          elementClass: (e.target as HTMLElement).className
        }
      })
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pageId])
}
```

### Real-Time Updates

```typescript
// Subscribe to real-time analytics updates
import { useEffect, useState } from 'react'

export function useRealtimeAnalytics(pageId: string) {
  const [liveVisitors, setLiveVisitors] = useState(0)
  const [recentEvents, setRecentEvents] = useState([])
  
  useEffect(() => {
    const channel = blink.realtime.channel(`analytics:${pageId}`)
    
    channel.subscribe({ userId: 'anonymous' })
    
    channel.onMessage((message) => {
      if (message.type === 'visitor_count') {
        setLiveVisitors(message.data.count)
      }
      if (message.type === 'new_event') {
        setRecentEvents(prev => [message.data, ...prev].slice(0, 10))
      }
    })
    
    return () => channel.unsubscribe()
  }, [pageId])
  
  return { liveVisitors, recentEvents }
}
```

---

## API Reference

### Get Analytics Summary

```typescript
GET /api/analytics/summary/:landingPageId

Query Parameters:
- startDate: string (YYYY-MM-DD)
- endDate: string (YYYY-MM-DD)
- granularity: 'day' | 'week' | 'month'

Response:
{
  pageViews: number
  uniqueVisitors: number
  conversions: number
  conversionRate: number
  bounceRate: number
  avgSessionDuration: number
  timeSeries: [
    { date: string, pageViews: number, conversions: number }
  ]
}
```

### Get Traffic Sources

```typescript
GET /api/analytics/sources/:landingPageId

Query Parameters:
- startDate: string
- endDate: string

Response:
{
  sources: [
    { name: string, visitors: number, conversions: number, conversionRate: number }
  ]
}
```

### Get Heatmap Data

```typescript
GET /api/analytics/heatmap/:landingPageId

Query Parameters:
- type: 'click' | 'scroll'
- startDate: string
- endDate: string

Response:
{
  type: string
  dataPoints: [
    { x: number, y: number, intensity: number }
  ]
}
```

### Export Report

```typescript
POST /api/analytics/export/:landingPageId

Body:
{
  format: 'pdf' | 'csv'
  startDate: string
  endDate: string
  includeCharts: boolean
}

Response:
{
  downloadUrl: string
  expiresAt: string
}
```

---

## Privacy & Compliance

### GDPR Compliance
- IP addresses are anonymized (last octet removed)
- Cookie consent banner required before tracking
- Users can request data deletion
- Data retention: 90 days by default, configurable

### CCPA Compliance
- Do Not Sell My Personal Information link required
- Opt-out mechanism provided
- Data access requests honored within 45 days

### Data Security
- All analytics data encrypted at rest and in transit
- Access logs maintained for audit
- No PII (Personally Identifiable Information) collected without consent

### Cookie Policy
```javascript
// Required cookies (functional)
- session_id: Session tracking
- visitor_id: Anonymous visitor identification

// Analytics cookies (with consent)
- _analytics_session: Session-level analytics
- _analytics_visitor: Cross-session visitor tracking

// No third-party cookies
```

---

## FAQs

**Q: How quickly does analytics data update?**  
A: Real-time metrics update within 5-10 seconds. Historical aggregations update every 15 minutes.

**Q: Can I track custom events?**  
A: Yes! Use `blink.analytics.trackEvent()` to track any custom user action.

**Q: What's the data retention period?**  
A: 90 days for free plans, 2 years for pro plans, unlimited for enterprise.

**Q: Can I export raw data?**  
A: Yes, CSV export includes all event-level data for custom analysis.

**Q: Is analytics tracking GDPR-compliant?**  
A: Yes, we anonymize IPs, provide cookie consent, and honor data deletion requests.

**Q: Can I see analytics for unpublished pages?**  
A: No, analytics only track published pages with live traffic.

**Q: How are unique visitors calculated?**  
A: Using cookie-based visitor IDs with 30-day expiration. Clearing cookies counts as new visitor.

---

## Support

Need help with Analytics Dashboard?

- **Email**: support@ai-landing-genie.com
- **Live Chat**: Available in dashboard (9 AM - 5 PM EST)
- **Documentation**: [Full Analytics Guide](https://docs.ai-landing-genie.com/analytics)
- **Video Tutorials**: [YouTube Channel](https://youtube.com/landing-genie)

---

**Last Updated**: December 21, 2025  
**Version**: 1.0.0 (Planning Phase)
