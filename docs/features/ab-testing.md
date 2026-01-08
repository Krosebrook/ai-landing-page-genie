# A/B Testing & Optimization System

> **Status**: 📋 Planning Phase  
> **Target Release**: Week 6, February 2025  
> **Priority**: MEDIUM

## Overview

Built-in A/B testing framework that allows you to create page variants, split traffic automatically, and identify winning versions based on conversion data. AI-powered suggestions help you know what to test and when to declare a winner.

## Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Test Types](#test-types)
- [Statistical Significance](#statistical-significance)
- [AI Optimization Suggestions](#ai-optimization-suggestions)
- [Best Practices](#best-practices)
- [Technical Implementation](#technical-implementation)
- [API Reference](#api-reference)

---

## Key Features

### 🔀 Variant Creation
Create multiple versions of the same page:
- **Clone & Modify**: Start with current page, make changes
- **Element-Level Changes**: Test specific elements (headlines, images, CTAs)
- **Section Rearrangement**: Try different section orders
- **Style Variations**: Test colors, fonts, button styles
- **Content Alternatives**: Different copy, messaging angles

### 📊 Traffic Splitting
Automatic visitor distribution:
- **50/50 Split**: Default even distribution
- **Custom Splits**: 60/40, 70/30, or any ratio
- **Session Persistence**: Users see same variant across visits
- **Smart Routing**: Balance by device type, location, or source
- **Gradual Rollout**: Start small (10/90), increase confidence gradually

### 📈 Statistical Analysis
Know when you have a winner:
- **Confidence Level**: Auto-calculate statistical significance
- **Sample Size**: Minimum visitors needed for valid results
- **P-Value**: Statistical probability of difference being real
- **Confidence Interval**: Range of likely conversion rates
- **Bayesian Analysis**: Probability of each variant being best

### 🤖 AI Optimization Suggestions
Let AI guide your testing:
- **What to Test**: AI analyzes page, suggests test ideas
- **Test Priority**: Rank suggestions by potential impact
- **Variant Generation**: AI creates alternative headlines, CTAs
- **Performance Prediction**: Estimate expected lift
- **Winner Recommendation**: AI interprets results, recommends action

### 🎯 Multivariate Testing
Test multiple elements simultaneously:
- **Factorial Design**: Test all combinations
- **Interaction Effects**: Discover synergies between elements
- **Complexity Management**: AI simplifies interpretation
- **Traffic Requirements**: Auto-calculate minimum visitors needed

### ⚡ Auto-Winner Application
Set it and forget it:
- **Confidence Threshold**: Auto-declare winner at 95% confidence
- **Minimum Sample Size**: Ensure statistical validity
- **Cooldown Period**: Wait for sustained performance
- **Automatic Publish**: Winner becomes default page
- **Notification**: Email when winner declared

---

## Getting Started

### Creating Your First A/B Test

#### Step 1: Choose What to Test

Navigate to your landing page and click "Create A/B Test". Choose test type:

1. **Headline Test**: Which headline converts better?
2. **CTA Test**: Button text, color, or position
3. **Hero Image Test**: Different visuals
4. **Form Length Test**: Short vs long forms
5. **Social Proof Test**: Testimonials vs logos vs numbers
6. **Custom Test**: Any element combination

#### Step 2: Create Variant B

**Option 1: Manual Creation**
1. Clone your original page (now "Variant A")
2. Make specific changes to create "Variant B"
3. Name variant descriptively: "Hero Image - Product Photo"

**Option 2: AI Generation**
1. Click "Generate Variant with AI"
2. Specify what to change: "Make headline more urgency-focused"
3. Review AI-generated variant
4. Approve or regenerate

#### Step 3: Configure Test

**Traffic Split**:
- Even split (50/50) recommended for first tests
- Custom split if testing radically different approach (safer to start 10/90)

**Test Duration**:
- Minimum: 7 days (account for weekly traffic patterns)
- Maximum: 30 days (declare winner sooner if possible)
- AI Recommendation: Based on your traffic, AI suggests optimal duration

**Success Metric**:
- Primary: Form submission, CTA click, purchase
- Secondary: Scroll depth, time on page, video plays
- Multiple metrics tracked, one primary for winner declaration

**Confidence Level**:
- 95% (standard, recommended)
- 90% (faster results, less certain)
- 99% (very certain, takes longer)

#### Step 4: Launch Test

1. Click "Start Test"
2. Traffic automatically splits from this moment
3. Original URL serves both variants randomly
4. Session persistence ensures users see same variant on return

#### Step 5: Monitor Results

View test dashboard showing:
- **Variant Performance**: Conversions, rates, confidence
- **Traffic**: Visitors per variant
- **Time Remaining**: Estimated time to significance
- **Current Leader**: Which variant is winning (if any)
- **Confidence Level**: How certain we are in the result

#### Step 6: Declare Winner

**Manual Declaration**:
1. Wait for 95% confidence
2. Review full analytics (not just conversion rate)
3. Click "Declare Winner"
4. Choose to apply winner to 100% traffic or archive test

**Automatic Declaration** (if enabled):
1. System waits for 95% confidence
2. Ensures minimum sample size met
3. Checks for sustained performance (24-48 hours)
4. Automatically applies winner
5. Sends email notification

---

## Test Types

### 1. Simple A/B Test
Compare two versions of one element.

**Example**: Headline A vs Headline B
- "Transform Your Business in 30 Days" (A)
- "Join 10,000+ Successful Businesses" (B)

**Use When**: Testing single, specific change
**Minimum Traffic**: 1,000 visitors per variant
**Duration**: 7-14 days

---

### 2. Multivariate Test (MVT)
Test multiple elements at once.

**Example**: Headline × CTA Button × Hero Image
- 2 headlines × 2 CTAs × 2 images = 8 variants
  - Variant 1: Headline A + CTA A + Image A
  - Variant 2: Headline A + CTA A + Image B
  - Variant 3: Headline A + CTA B + Image A
  - ...and so on

**Use When**: Want to find optimal combination
**Minimum Traffic**: 10,000+ visitors (scales exponentially)
**Duration**: 14-30 days

---

### 3. Sequential Testing
Run tests one after another.

**Example**: 
1. Week 1-2: Test Headlines → Winner: "Join 10,000+ Businesses"
2. Week 3-4: Test CTAs on winning headline → Winner: "Start Free Trial"
3. Week 5-6: Test Images with winning headline + CTA → Winner: Product Screenshot

**Use When**: Lower traffic or want to isolate each element
**Minimum Traffic**: 500-1,000 per test
**Duration**: 6+ weeks total

---

### 4. Redirect Test
Test completely different pages.

**Example**: 
- Variant A: Current long-form landing page
- Variant B: New short-form landing page

**Use When**: Radically different approaches
**Minimum Traffic**: 2,000 visitors per variant
**Duration**: 14-21 days

---

### 5. Bandit Testing
Automatically shift traffic to better performer.

**Example**:
- Start: 50/50 split
- After 1000 visitors: Variant B performing better
- System shifts to 30/70 (A/B)
- After 2000 visitors: B clearly winning
- System shifts to 10/90
- Final: 0/100 (all traffic to B)

**Use When**: Want to minimize opportunity cost
**Minimum Traffic**: 3,000+ visitors
**Duration**: Ongoing optimization

---

## Statistical Significance

### Understanding Confidence Levels

**95% Confidence** (Standard):
- 95% certain the difference is real, not random
- 5% chance (1 in 20) result is false positive
- Requires ~1,000-3,000 visitors per variant
- Recommended for most tests

**90% Confidence** (Fast):
- 90% certain result is real
- 10% risk of false positive
- Requires ~500-1,500 visitors per variant
- Use when speed matters more than certainty

**99% Confidence** (Rigorous):
- 99% certain result is real
- 1% risk of false positive
- Requires ~5,000-10,000 visitors per variant
- Use for high-stakes decisions

### Sample Size Calculator

The system calculates minimum visitors needed based on:

```
Formula:
n = (Z-score² × p × (1-p)) / margin_of_error²

Where:
- Z-score: 1.96 for 95% confidence
- p: expected conversion rate (default: 0.05 or 5%)
- margin_of_error: typically 0.02 (2%)

Example:
For 5% conversion rate at 95% confidence:
n = (1.96² × 0.05 × 0.95) / 0.02²
n = 456 visitors per variant

Accounting for detection of 20% improvement:
n = ~1,900 visitors per variant
```

### When to Stop a Test Early

**Declare Winner Early If**:
1. ✅ Variant B has 99% confidence level
2. ✅ Absolute conversion difference > 5%
3. ✅ Result sustained for 3+ days
4. ✅ Sample size > 2× minimum

**Never Stop Early If**:
1. ❌ Test running < 7 days (weekly patterns)
2. ❌ Confidence < 95%
3. ❌ Sample size below minimum
4. ❌ Result is inconsistent day-to-day

### False Positives (Type I Errors)

Watching test results in real-time can lead to premature conclusions.

**The Problem**:
- You check results daily
- One day variant B is "winning" at 95% confidence
- You declare winner
- But over full test period, no real difference

**The Solution**:
- Set test duration and confidence level upfront
- Check results weekly, not daily
- Use sequential testing methodology
- Let auto-winner feature handle timing

---

## AI Optimization Suggestions

### What the AI Analyzes

When you click "Get AI Suggestions", the system:

1. **Page Audit**:
   - Analyzes current copy, headlines, CTAs
   - Reviews images, layout, sections
   - Checks form length and fields
   - Evaluates social proof elements

2. **Conversion Funnel**:
   - Identifies drop-off points
   - Spots friction elements
   - Measures attention on key CTAs

3. **Industry Benchmarks**:
   - Compares to high-performing pages in your industry
   - Identifies below-average elements

4. **User Behavior**:
   - Heat map analysis (clicks, scrolls)
   - Session recordings insights
   - Exit intent patterns

### AI-Generated Test Ideas

**Example Output**:

```
🎯 High Impact Tests (Est. +15-25% lift)

1. Headline Test - URGENCY
   Current: "Transform Your Business with Our Platform"
   Suggested: "Join 847 Businesses That Grew 40% This Quarter"
   Why: Adding specificity and social proof typically increases conversions
   Estimated Lift: +18%
   Effort: Low
   Priority: HIGH

2. CTA Button Test - COLOR & TEXT
   Current: Blue button "Learn More"
   Suggested: Green button "Start Free Trial"
   Why: Action-oriented CTAs outperform exploration CTAs. Green shows urgency.
   Estimated Lift: +22%
   Effort: Low
   Priority: HIGH

3. Form Length Test - REDUCE FRICTION
   Current: 7 fields (Name, Email, Phone, Company, Size, Role, Message)
   Suggested: 3 fields (Name, Email, Company)
   Why: Each field reduces conversions ~5%. Get email first, enrich later.
   Estimated Lift: +25%
   Effort: Medium
   Priority: HIGH

📊 Medium Impact Tests (Est. +5-15% lift)

4. Hero Image Test - PRODUCT VS PEOPLE
   Current: Abstract illustration
   Suggested A: Product screenshot
   Suggested B: Happy customer photo
   Why: Real visuals build trust more than illustrations
   Estimated Lift: +12%
   Effort: Low
   Priority: MEDIUM

5. Social Proof Placement - ABOVE FOLD
   Current: Testimonials below fold
   Suggested: Move customer logos above fold
   Why: Trust signals near headline improve conversions
   Estimated Lift: +8%
   Effort: Low
   Priority: MEDIUM
```

### AI-Generated Variants

Once you choose a test, AI can generate the variants:

**For Headline Test**:
- Click "Generate 5 headline alternatives"
- AI produces varied options:
  - Urgency-focused
  - Benefit-focused  
  - Social proof-focused
  - Pain point-focused
  - Authority-focused
- Choose your favorite for Variant B

**For Full Page Redesign**:
- Click "Generate alternative layout"
- AI creates complete variant with:
  - Different section order
  - Alternative copy style
  - Revised CTAs
  - New image suggestions
- Review and customize before launching

---

## Best Practices

### General Guidelines

1. **Test One Thing at a Time** (for A/B tests)
   - Change only the element you're testing
   - Easier to identify what caused improvement
   - Exception: Multivariate test when you have huge traffic

2. **Run Tests for Full Weeks**
   - Traffic patterns vary by day (weekday vs weekend)
   - Running Tue-Thu misses full picture
   - Minimum 7 days, ideally 14 days

3. **Wait for Statistical Significance**
   - Don't declare winner at 80% confidence
   - Be patient, false positives are costly
   - Use auto-winner feature to avoid temptation

4. **Document Everything**
   - Note what you tested and why
   - Record results (even "failed" tests)
   - Build institutional knowledge

5. **Test Continuously**
   - Always have a test running (if traffic allows)
   - Optimization is never "done"
   - Small wins compound over time

### What to Test (Priority Order)

**Tier 1 - Highest Impact**:
1. Headline - Most visited, most important
2. Call-to-Action - Button text, color, position
3. Form Length - Fewer fields = more submissions
4. Social Proof - Testimonials, logos, numbers

**Tier 2 - Medium Impact**:
5. Hero Image - Product, people, or abstract
6. Value Proposition - How you describe benefits
7. Section Order - What users see first
8. Copy Length - Long-form vs short-form

**Tier 3 - Lower Impact**:
9. Colors - Brand colors vs high-contrast
10. Fonts - Typography choices
11. Whitespace - Spacing and density
12. Navigation - Top nav vs no nav

### Common Mistakes to Avoid

❌ **Testing Too Many Things at Once**
- Makes it impossible to know what worked
- Use multivariate only with massive traffic

❌ **Stopping Test Too Early**
- Week 1 results often reverse in week 2
- Patience prevents costly mistakes

❌ **Ignoring Statistical Significance**
- "Variant B looks better" ≠ statistical proof
- Require 95% confidence minimum

❌ **Testing Without Hypothesis**
- "Let's try a blue button" is not a hypothesis
- Better: "Blue button will outperform because it matches brand"

❌ **Not Testing Controversial Ideas**
- Safe tests produce safe (small) gains
- Test bold ideas - when they work, lifts are huge

❌ **Testing Design Over Copy**
- Copy changes typically have 2-3× impact of design
- Test headlines before button colors

❌ **Running Multiple Tests Simultaneously**
- Unless you have 50K+ monthly visitors
- Tests interfere with each other

---

## Technical Implementation

### Database Schema

```typescript
interface ABTest {
  id: string
  landingPageId: string
  userId: string
  name: string
  description?: string
  hypothesis?: string
  
  // Test configuration
  type: 'ab' | 'multivariate' | 'redirect'
  status: 'draft' | 'running' | 'paused' | 'completed' | 'archived'
  startDate?: string
  endDate?: string
  
  // Variants
  variants: Variant[]
  trafficSplit: number[]   // [50, 50] or [30, 70], etc.
  
  // Success criteria
  primaryMetric: 'conversion' | 'cta_click' | 'form_submit' | 'custom'
  secondaryMetrics: string[]
  confidenceLevel: 90 | 95 | 99
  minimumSampleSize: number
  
  // Results
  winnerId?: string
  winnerDeclaredAt?: string
  winnerDeclaredBy?: 'auto' | 'manual'
  
  // Settings
  autoWinner: boolean
  cooldownHours: number    // Wait period before auto-declaring
  
  createdAt: string
  updatedAt: string
}

interface Variant {
  id: string
  testId: string
  name: string
  isControl: boolean       // Original = control
  landingPageId: string    // Points to actual page version
  
  // Performance
  visitors: number
  conversions: number
  conversionRate: number
  
  // Statistical analysis
  confidenceLevel?: number
  pValue?: number
  isWinner?: boolean
}

interface TestResult {
  id: string
  testId: string
  variantId: string
  visitorId: string
  sessionId: string
  
  event: 'view' | 'conversion' | 'cta_click' | 'form_submit'
  eventData?: object
  timestamp: string
  
  // Visitor context
  deviceType: string
  source: string
  country: string
}
```

### Traffic Splitting Logic

```typescript
import { blink } from '@/lib/blink'
import crypto from 'crypto'

export function getVariantForVisitor(
  test: ABTest,
  visitorId: string
): Variant {
  // Use consistent hash to ensure same visitor always sees same variant
  const hash = crypto
    .createHash('md5')
    .update(`${test.id}-${visitorId}`)
    .digest('hex')
  
  const hashNumber = parseInt(hash.substring(0, 8), 16)
  const percentage = hashNumber % 100
  
  // Determine variant based on traffic split
  let cumulative = 0
  for (let i = 0; i < test.variants.length; i++) {
    cumulative += test.trafficSplit[i]
    if (percentage < cumulative) {
      return test.variants[i]
    }
  }
  
  // Fallback to control
  return test.variants.find(v => v.isControl) || test.variants[0]
}

// Usage in page component
export function useLandingPageVariant(pageId: string) {
  const [variant, setVariant] = useState<Variant | null>(null)
  
  useEffect(() => {
    const loadVariant = async () => {
      // Check if page has active test
      const activeTest = await blink.db.abTests.list<ABTest>({
        where: {
          landingPageId: pageId,
          status: 'running'
        },
        limit: 1
      })
      
      if (activeTest.length === 0) {
        // No test, show original page
        return null
      }
      
      const test = activeTest[0]
      
      // Get or create visitor ID
      let visitorId = localStorage.getItem('visitor_id')
      if (!visitorId) {
        visitorId = crypto.randomUUID()
        localStorage.setItem('visitor_id', visitorId)
      }
      
      // Determine variant
      const chosenVariant = getVariantForVisitor(test, visitorId)
      setVariant(chosenVariant)
      
      // Track view
      await blink.db.testResults.create({
        testId: test.id,
        variantId: chosenVariant.id,
        visitorId,
        sessionId: getSessionId(),
        event: 'view',
        timestamp: new Date().toISOString()
      })
    }
    
    loadVariant()
  }, [pageId])
  
  return variant
}
```

### Statistical Significance Calculator

```typescript
/**
 * Calculate statistical significance between two variants
 * Using Z-test for proportions
 */
export function calculateSignificance(
  variantA: { visitors: number; conversions: number },
  variantB: { visitors: number; conversions: number }
): {
  pValue: number
  confidenceLevel: number
  isSignificant: boolean
  zScore: number
} {
  const n1 = variantA.visitors
  const n2 = variantB.visitors
  const p1 = variantA.conversions / n1
  const p2 = variantB.conversions / n2
  
  // Pooled proportion
  const pPool = (variantA.conversions + variantB.conversions) / (n1 + n2)
  
  // Standard error
  const se = Math.sqrt(pPool * (1 - pPool) * (1/n1 + 1/n2))
  
  // Z-score
  const zScore = (p2 - p1) / se
  
  // P-value (two-tailed test)
  const pValue = 2 * (1 - normalCDF(Math.abs(zScore)))
  
  // Confidence level
  const confidenceLevel = (1 - pValue) * 100
  
  return {
    pValue,
    confidenceLevel,
    isSignificant: confidenceLevel >= 95,
    zScore
  }
}

// Standard normal cumulative distribution function
function normalCDF(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z))
  const d = 0.3989423 * Math.exp(-z * z / 2)
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
  return z > 0 ? 1 - p : p
}

// Check if test has reached significance
export async function checkTestSignificance(testId: string): Promise<boolean> {
  const test = await blink.db.abTests.get<ABTest>(testId)
  if (!test || test.variants.length !== 2) return false
  
  const [control, variant] = test.variants
  
  const result = calculateSignificance(
    { visitors: control.visitors, conversions: control.conversions },
    { visitors: variant.visitors, conversions: variant.conversions }
  )
  
  // Update variants with results
  await blink.db.abTests.update(testId, {
    variants: test.variants.map((v, i) => ({
      ...v,
      confidenceLevel: result.confidenceLevel,
      pValue: result.pValue,
      isWinner: i === 1 && result.isSignificant && variant.conversionRate > control.conversionRate
    }))
  })
  
  return result.isSignificant && result.confidenceLevel >= test.confidenceLevel
}
```

### Auto-Winner Detection

```typescript
/**
 * Background job that checks tests for auto-winner criteria
 * Runs every hour
 */
export async function autoWinnerDetection() {
  const runningTests = await blink.db.abTests.list<ABTest>({
    where: {
      status: 'running',
      autoWinner: "1"
    }
  })
  
  for (const test of runningTests) {
    // Check if test meets auto-winner criteria
    const isSignificant = await checkTestSignificance(test.id)
    
    if (!isSignificant) continue
    
    // Check minimum sample size
    const totalVisitors = test.variants.reduce((sum, v) => sum + v.visitors, 0)
    if (totalVisitors < test.minimumSampleSize) continue
    
    // Check cooldown period (ensure sustained performance)
    const variant = test.variants.find(v => v.isWinner)
    if (!variant) continue
    
    // Check if winner has been sustained for cooldown period
    const recentResults = await blink.db.testResults.list({
      where: { testId: test.id, variantId: variant.id },
      orderBy: { timestamp: 'desc' },
      limit: 100
    })
    
    const cooldownTimestamp = new Date(Date.now() - test.cooldownHours * 60 * 60 * 1000)
    const recentConversions = recentResults.filter(
      r => r.event === 'conversion' && new Date(r.timestamp) > cooldownTimestamp
    )
    
    if (recentConversions.length < 10) continue // Need sustained performance
    
    // Declare winner!
    await declareWinner(test.id, variant.id, 'auto')
  }
}

async function declareWinner(
  testId: string,
  winnerId: string,
  declaredBy: 'auto' | 'manual'
) {
  const test = await blink.db.abTests.get<ABTest>(testId)
  const winner = test.variants.find(v => v.id === winnerId)
  
  // Update test
  await blink.db.abTests.update(testId, {
    status: 'completed',
    winnerId,
    winnerDeclaredAt: new Date().toISOString(),
    winnerDeclaredBy: declaredBy
  })
  
  // Apply winner (route 100% traffic to winning variant)
  await blink.db.landingPages.update(test.landingPageId, {
    // Copy winning variant content to original page
    ...getPageContent(winner.landingPageId)
  })
  
  // Send notification
  await blink.notifications.email({
    to: test.userId,
    subject: `A/B Test Winner Declared: ${test.name}`,
    html: `
      <h2>Your A/B test has a winner!</h2>
      <p><strong>Test:</strong> ${test.name}</p>
      <p><strong>Winner:</strong> ${winner.name}</p>
      <p><strong>Improvement:</strong> ${calculateImprovement(test)}%</p>
      <p><strong>Confidence:</strong> ${winner.confidenceLevel}%</p>
      <a href="https://app.ai-landing-genie.com/tests/${testId}">View Full Results</a>
    `
  })
}
```

---

## API Reference

### Create A/B Test

```typescript
POST /api/tests

Body:
{
  landingPageId: string
  name: string
  description?: string
  variants: [
    { name: string, isControl: boolean, landingPageId: string }
  ]
  trafficSplit: number[]
  primaryMetric: string
  confidenceLevel: 90 | 95 | 99
  autoWinner: boolean
}

Response: ABTest
```

### Start Test

```typescript
POST /api/tests/:testId/start

Response:
{
  status: 'running'
  startDate: string
}
```

### Get Test Results

```typescript
GET /api/tests/:testId/results

Response:
{
  test: ABTest
  variants: Variant[]
  significance: {
    pValue: number
    confidenceLevel: number
    isSignificant: boolean
  }
  recommendation: string
}
```

### Declare Winner

```typescript
POST /api/tests/:testId/winner

Body:
{
  winnerId: string
}

Response:
{
  message: 'Winner declared'
  appliedToProduction: boolean
}
```

### Get AI Suggestions

```typescript
POST /api/tests/suggestions

Body:
{
  landingPageId: string
}

Response:
{
  suggestions: [
    {
      priority: 'high' | 'medium' | 'low'
      type: string
      current: string
      suggested: string
      reasoning: string
      estimatedLift: number
      effort: 'low' | 'medium' | 'high'
    }
  ]
}
```

---

## FAQs

**Q: How long should I run a test?**  
A: Minimum 7 days to account for weekly patterns. Most tests need 14-21 days. System will tell you estimated time to significance.

**Q: Can I run multiple tests at once?**  
A: Not recommended unless you have 50K+ visitors/month. Tests can interfere with each other.

**Q: What if neither variant wins?**  
A: That's a valid result! It means your current version is already optimized for that element. Move on to testing something else.

**Q: How much traffic do I need for A/B testing?**  
A: Minimum ~1,000 visitors per variant. With lower traffic, use sequential testing or wait to accumulate more visitors.

**Q: Can I pause a test and restart later?**  
A: Yes, but be cautious. External factors (seasons, campaigns) may have changed. Better to run continuously.

**Q: What's the difference between A/B and multivariate testing?**  
A: A/B tests one element at a time. Multivariate tests multiple elements simultaneously. MVT requires 10× more traffic.

**Q: Should I test on mobile and desktop separately?**  
A: If you have sufficient traffic (5K+ per segment), yes. Device-specific tests can reveal valuable insights.

---

## Support

Need help with A/B testing?

- **Email**: support@ai-landing-genie.com
- **Live Chat**: Available in dashboard
- **Community**: [community.ai-landing-genie.com/ab-testing](https://community.ai-landing-genie.com/ab-testing)
- **Expert Consultation**: [Book a free strategy call](https://ai-landing-genie.com/consultation)

---

**Last Updated**: December 21, 2025  
**Version**: 1.0.0 (Planning Phase)
