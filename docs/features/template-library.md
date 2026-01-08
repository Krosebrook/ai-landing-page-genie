# Template Library & Marketplace

> **Status**: 📋 Planning Phase  
> **Target Release**: Week 4, January 2025  
> **Priority**: HIGH

## Overview

The Template Library provides 50+ professionally-designed landing page templates across industries and use cases. Start with a proven template, customize with AI or manually, and launch faster. Pro users can create and sell templates in the marketplace.

## Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Template Categories](#template-categories)
- [Customization Guide](#customization-guide)
- [Marketplace](#marketplace)
- [Technical Implementation](#technical-implementation)
- [API Reference](#api-reference)

---

## Key Features

### 📚 Curated Template Collection
50+ professionally-designed templates:
- **Industry-Specific**: SaaS, E-commerce, Real Estate, Events, Education, Healthcare, Finance
- **Use Case Focused**: Product Launch, Lead Generation, Webinar Registration, App Download, Newsletter Signup
- **Style Variations**: Modern, Minimal, Bold, Corporate, Creative, Playful
- **Responsive Design**: All templates work flawlessly on desktop, tablet, and mobile
- **Conversion-Optimized**: Based on proven high-converting layouts

### 👀 Live Preview Mode
See before you select:
- **Desktop/Mobile Preview**: Toggle between device sizes
- **Interactive Demo**: Click through sections without selecting
- **Performance Metrics**: See average conversion rates for each template
- **Usage Count**: Popular templates highlighted
- **Rating & Reviews**: Community feedback on templates

### ⚡ One-Click Import
Apply templates instantly:
- **Brand Color Mapping**: Auto-apply your brand colors
- **Font Matching**: Use your preferred typography
- **Content Placeholder**: Replace with your text via AI or manually
- **Image Replacement**: Swap with your images or generate with AI
- **Form Customization**: Adjust form fields to your needs

### 🏪 Community Marketplace
Buy and sell templates:
- **Creator Dashboard**: Upload, price, and manage your templates
- **Revenue Sharing**: 70% to creator, 30% platform fee
- **Template Analytics**: Track downloads, ratings, revenue
- **Version Management**: Update templates, users get notifications
- **License Options**: Single-use, unlimited-use, or commercial licenses

### 🎨 AI Template Generation
Create custom templates with AI:
- **Industry + Style Input**: "SaaS product launch, modern and minimal"
- **Layout Generation**: AI creates complete layout structure
- **Color Scheme**: AI suggests brand-appropriate colors
- **Section Arrangement**: Hero, features, testimonials, pricing, CTA
- **Refinement Loop**: Iterate with AI to perfect the template

### ⭐ Favorites & Collections
Organize templates:
- **Save Favorites**: Heart templates for quick access
- **Create Collections**: Group templates by project or client
- **Share Collections**: Send collection links to team members
- **Private Collections**: Keep your saved templates private

---

## Getting Started

### Browse Templates

1. **Access Library**: Click "Templates" in main navigation
2. **Filter by Category**: Use sidebar filters (Industry, Style, Use Case)
3. **Search**: Type keywords like "SaaS" or "minimal"
4. **Sort**: By popularity, newest, highest-rated, conversion rate

### Preview Template

1. **Click Template Card**: Opens full-screen preview
2. **Toggle Views**: Switch between desktop/tablet/mobile
3. **Read Details**: 
   - Template description
   - Included sections
   - Average conversion rate
   - Creator information
   - User reviews
4. **See Variants**: Some templates have color/style variations

### Apply Template

1. **Click "Use This Template"**
2. **Customize Options**:
   - Apply my brand colors (automatic)
   - Use my fonts (select from library)
   - Replace images (upload or generate with AI)
   - Add my content (manually or with AI)
3. **Name Your Page**: Give it a descriptive name
4. **Create**: Template applied to new landing page
5. **Edit**: Customize further in the editor

---

## Template Categories

### Industry Templates

#### SaaS & Software
- Product Launch Template (Modern)
- Feature Announcement (Bold)
- Free Trial Signup (Minimal)
- Platform Overview (Corporate)
- API Documentation (Technical)

**Use For**: Software products, B2B SaaS, developer tools

#### E-commerce & Retail
- Product Showcase (Grid Layout)
- Flash Sale (Urgency-Driven)
- New Collection Launch (Fashion)
- Limited Edition (Exclusive)
- Shop Opening (Grand Opening)

**Use For**: Online stores, product launches, seasonal sales

#### Real Estate
- Property Listing (Photo-Heavy)
- Open House Registration (Event)
- Agent Profile (Personal Brand)
- Neighborhood Guide (Information)
- Virtual Tour (Interactive)

**Use For**: Real estate agents, property management, home sales

#### Events & Conferences
- Conference Registration (Multi-Day)
- Webinar Signup (Single Session)
- Workshop Landing (Education)
- Networking Event (Community)
- Festival Tickets (Entertainment)

**Use For**: Event organizers, conference hosts, workshop leaders

#### Education & Courses
- Online Course Enrollment (Educational)
- Masterclass Signup (Premium)
- Free eBook Download (Lead Magnet)
- Certification Program (Professional)
- Coaching Services (Personal)

**Use For**: Course creators, educators, coaches, trainers

#### Healthcare & Wellness
- Clinic Services (Medical)
- Wellness Program (Holistic)
- Appointment Booking (Scheduling)
- Health Screening (Informational)
- Fitness Challenge (Engagement)

**Use For**: Healthcare providers, wellness centers, fitness trainers

#### Finance & Legal
- Financial Planning (Services)
- Investment Webinar (Educational)
- Legal Consultation (Professional)
- Insurance Quote (Comparison)
- Loan Application (Form-Heavy)

**Use For**: Financial advisors, law firms, insurance agencies

### Style Templates

#### Modern
- Clean lines, ample whitespace
- Sans-serif typography
- Subtle shadows and gradients
- Contemporary color palettes
- Minimalist iconography

#### Bold
- High contrast colors
- Large typography
- Dramatic imagery
- Strong CTAs
- Dynamic layouts

#### Minimal
- Maximum whitespace
- Simple typography
- Limited color palette (2-3 colors)
- Focused messaging
- Essential elements only

#### Corporate
- Professional tone
- Traditional layouts
- Conservative colors
- Trust-building elements
- Data-driven content

#### Creative
- Asymmetric layouts
- Unique typography
- Vibrant colors
- Artistic imagery
- Experimental design

### Use Case Templates

#### Lead Generation
- Email capture focus
- Multiple form placements
- Lead magnet emphasis
- Trust signals (testimonials, logos)
- Privacy reassurance

#### Product Launch
- Hero product showcase
- Feature highlights
- Pre-order/waitlist CTA
- Social proof
- Launch countdown

#### Webinar Registration
- Speaker credentials
- Agenda preview
- Date/time prominent
- Reminder signup
- Replay option

#### App Download
- App store badges prominent
- Screenshot carousel
- Feature benefits
- User testimonials
- QR code download

#### Newsletter Signup
- Value proposition clear
- Content preview
- Frequency information
- Privacy promise
- Example newsletter

---

## Customization Guide

### Brand Color Application

When you select "Apply my brand colors", the system:

1. **Extracts Current Palette**: 
   - Primary color from template
   - Secondary color
   - Accent colors
   - Background colors
   
2. **Maps to Your Brand**:
   - Your primary → Template primary
   - Your secondary → Template secondary
   - Generates complementary colors if needed
   
3. **Maintains Contrast**:
   - Ensures text readability
   - Adjusts opacity when necessary
   - Preserves visual hierarchy

```typescript
// Brand color mapping algorithm
const applyBrandColors = (template, brandColors) => {
  const mapping = {
    '--primary': brandColors.primary,
    '--secondary': brandColors.secondary,
    '--accent': brandColors.accent || generateAccent(brandColors.primary),
    '--background': brandColors.background || '#FFFFFF',
    '--text': ensureContrast(brandColors.primary, brandColors.background)
  }
  
  return applyColorMapping(template, mapping)
}
```

### Font Customization

Available font options:
- **Display Fonts**: Playfair Display, Montserrat, Raleway, Bebas Neue
- **Body Fonts**: Inter, Open Sans, Lato, Roboto, Source Sans Pro
- **Monospace**: Fira Code, Roboto Mono, Courier New

Font pairing suggestions provided:
- Playfair Display + Inter (Editorial)
- Montserrat + Open Sans (Modern)
- Bebas Neue + Roboto (Bold)

### Content Replacement

**Manual Replacement**:
1. Click any text element
2. Type your content
3. Format with toolbar (bold, italic, links)
4. Auto-saves changes

**AI-Powered Replacement**:
1. Click "Replace with AI"
2. Provide your offer description
3. AI generates content matching template style
4. Review and refine
5. Apply to page

### Image Replacement

**Upload Your Images**:
- Drag & drop or click to browse
- Auto-crops to template dimensions
- Suggests optimal image sizes
- Compresses for web performance

**Generate with AI**:
1. Click "Generate Image"
2. Describe what you need
3. AI creates matching hero image
4. Choose from 4 variations
5. Regenerate if needed

### Form Customization

**Edit Form Fields**:
- Add/remove fields
- Change field types (text, email, phone, select)
- Set required/optional
- Customize labels and placeholders
- Add validation rules

**Form Styling**:
- Match template aesthetic
- Inline or stacked layout
- Button position and size
- Success message customization

---

## Marketplace

### Selling Your Templates

#### Requirements
- **Pro Plan**: Marketplace access requires Pro subscription
- **Quality Standards**: Templates must pass review process
- **Originality**: Must be your own work, no copied designs
- **Documentation**: Include setup instructions
- **Support**: Respond to buyer questions within 48 hours

#### Upload Process

1. **Create Template**:
   - Design in editor
   - Test across devices
   - Add sample content
   
2. **Prepare Listing**:
   - Title: Descriptive and searchable
   - Description: Explain use case, included sections
   - Screenshots: Desktop + mobile previews
   - Tags: Industry, style, use case
   - Demo URL: Live preview link
   
3. **Set Pricing**:
   - **Free**: Exposure, build portfolio
   - **Paid**: $19 - $199 (you keep 70%)
   - **Licensing**:
     - Personal: Single-use, one project
     - Commercial: Unlimited client projects
     - Extended: Resale rights (rare)
     
4. **Submit for Review**:
   - Review within 48-72 hours
   - Feedback provided if rejected
   - Appeal process available

#### Creator Dashboard

Track your template performance:
- **Sales**: Total revenue, per-template breakdown
- **Downloads**: Free + paid download count
- **Ratings**: Average rating, review count
- **Views**: How often template is viewed
- **Conversion**: View-to-download rate

#### Revenue Sharing

```
Sale Price: $49
- Platform Fee (30%): $14.70
- Creator Earnings (70%): $34.30
- Payment Processing: ~$1.50
- Net to Creator: ~$32.80

Payout Schedule: Monthly (minimum $50 balance)
Payment Methods: Stripe Connect, PayPal
```

### Buying Templates

#### Free Templates
- Unlimited downloads
- Use in unlimited projects
- Attribution appreciated but not required
- Updates included

#### Paid Templates
- One-time purchase
- License determines usage
- Updates for 1 year included
- Support from creator

#### Licenses Explained

**Personal License ($19-49)**:
- Use for your own projects
- Cannot resell or redistribute
- Unlimited modifications
- No client work

**Commercial License ($49-149)**:
- Use for unlimited client projects
- Cannot resell template itself
- Full modification rights
- White-label allowed

**Extended License ($149-199)**:
- All Commercial rights
- Can resell as part of larger product
- Can create derivatives
- Rare, creator discretion

---

## Technical Implementation

### Template Schema

```typescript
interface Template {
  id: string
  creatorId: string
  name: string
  slug: string
  description: string
  category: 'saas' | 'ecommerce' | 'realestate' | 'events' | 'education' | 'healthcare' | 'finance'
  style: 'modern' | 'bold' | 'minimal' | 'corporate' | 'creative'
  useCase: 'lead_gen' | 'product_launch' | 'webinar' | 'app_download' | 'newsletter'
  
  // Template structure
  sections: Section[]
  colorScheme: ColorScheme
  typography: Typography
  
  // Metadata
  previewImage: string
  screenshots: string[]
  demoUrl?: string
  tags: string[]
  
  // Marketplace
  price: number           // 0 for free
  license: 'personal' | 'commercial' | 'extended'
  isPaid: boolean
  isApproved: boolean
  
  // Stats
  downloads: number
  rating: number
  reviewCount: number
  conversionRate?: number
  
  // Timestamps
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

interface Section {
  type: 'hero' | 'features' | 'testimonials' | 'pricing' | 'faq' | 'cta' | 'footer'
  layout: string          // Layout variant
  content: object         // Section-specific content structure
  styling: object         // CSS-in-JS styles
}

interface ColorScheme {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  [key: string]: string
}

interface Typography {
  displayFont: string
  bodyFont: string
  monoFont?: string
  fontSizes: object
  fontWeights: object
}
```

### Import Template Function

```typescript
import { blink } from '@/lib/blink'
import type { Template, LandingPage } from '@/types'

export async function importTemplate(
  templateId: string,
  userId: string,
  customization?: {
    brandColors?: ColorScheme
    fonts?: Typography
    content?: string    // AI prompt for content
    title?: string
  }
): Promise<LandingPage> {
  // 1. Fetch template
  const template = await blink.db.templates.get<Template>(templateId)
  
  if (!template) throw new Error('Template not found')
  
  // 2. Track download
  await blink.db.templateDownloads.create({
    templateId,
    userId,
    timestamp: new Date().toISOString()
  })
  
  // 3. Clone and customize
  const newPage: Partial<LandingPage> = {
    userId,
    title: customization?.title || `${template.name} - Copy`,
    offerDescription: '',
    status: 'draft',
    
    // Apply template structure
    ...cloneTemplateSections(template.sections),
    
    // Apply customization
    ...(customization?.brandColors && {
      colorScheme: customization.brandColors
    })
  }
  
  // 4. Generate content with AI if requested
  if (customization?.content) {
    const generated = await blink.ai.generateText({
      messages: [{
        role: 'user',
        content: `Generate landing page content for: ${customization.content}
        
        Match the style and structure of this template: ${template.description}
        Include sections: ${template.sections.map(s => s.type).join(', ')}`
      }],
      model: 'gpt-4.1'
    })
    
    newPage.generatedCopy = generated.text
    // Parse and apply to sections...
  }
  
  // 5. Create landing page
  const landingPage = await blink.db.landingPages.create(newPage)
  
  return landingPage as LandingPage
}
```

### Template Search & Filter

```typescript
export async function searchTemplates(options: {
  query?: string
  category?: string
  style?: string
  useCase?: string
  priceRange?: [number, number]
  sortBy?: 'popular' | 'newest' | 'rating' | 'conversion'
  page?: number
  limit?: number
}): Promise<{ templates: Template[], total: number }> {
  const filters: any = { isApproved: "1" }
  
  // Apply filters
  if (options.category) filters.category = options.category
  if (options.style) filters.style = options.style
  if (options.useCase) filters.useCase = options.useCase
  
  // Search in name/description
  // Note: This is simplified - actual implementation would use full-text search
  
  // Sort
  const orderBy = {
    popular: { downloads: 'desc' },
    newest: { createdAt: 'desc' },
    rating: { rating: 'desc' },
    conversion: { conversionRate: 'desc' }
  }[options.sortBy || 'popular']
  
  const templates = await blink.db.templates.list<Template>({
    where: filters,
    orderBy,
    limit: options.limit || 20,
    offset: ((options.page || 1) - 1) * (options.limit || 20)
  })
  
  const total = await blink.db.templates.count({ where: filters })
  
  return { templates, total }
}
```

---

## API Reference

### List Templates

```typescript
GET /api/templates

Query Parameters:
- category: string (optional)
- style: string (optional)
- useCase: string (optional)
- minPrice: number (optional)
- maxPrice: number (optional)
- sortBy: 'popular' | 'newest' | 'rating'
- page: number
- limit: number

Response:
{
  templates: Template[]
  total: number
  page: number
  pages: number
}
```

### Get Template Details

```typescript
GET /api/templates/:templateId

Response: Template
```

### Import Template

```typescript
POST /api/templates/:templateId/import

Body:
{
  title: string
  brandColors?: ColorScheme
  fonts?: Typography
  generateContent?: string
}

Response:
{
  landingPageId: string
  message: "Template imported successfully"
}
```

### Upload Template (Creator)

```typescript
POST /api/templates

Body: Template (without id, stats)

Response:
{
  id: string
  status: 'pending_review'
  message: "Template submitted for review"
}
```

### Update Template

```typescript
PATCH /api/templates/:templateId

Body: Partial<Template>

Response: Template
```

---

## Best Practices

### For Users

1. **Start with similar templates**: Choose templates matching your industry
2. **Customize don't rebuild**: Make targeted changes rather than complete redesign
3. **Test mobile view**: 60%+ traffic is mobile, ensure it looks great
4. **Maintain brand consistency**: Use your colors/fonts across all pages
5. **Learn from top templates**: Study high-rated templates for inspiration

### For Creators

1. **Focus on conversion**: Design for results, not just aesthetics
2. **Provide documentation**: Include setup guide and customization tips
3. **Test extensively**: Check all devices and browsers before submitting
4. **Price appropriately**: Research competitor prices, start lower to build reputation
5. **Respond to feedback**: Engage with buyers, improve based on reviews
6. **Update regularly**: Keep templates fresh with periodic updates

---

## FAQs

**Q: How many templates can I use?**  
A: Unlimited! All plans include access to free templates. Paid templates are one-time purchases.

**Q: Can I modify templates after importing?**  
A: Yes, full editing capabilities. Templates are starting points, customize freely.

**Q: Do I need to credit the template creator?**  
A: Not required for paid templates. Appreciated for free templates but not mandatory.

**Q: Can I sell pages made from templates?**  
A: With Commercial or Extended license, yes. Personal license is for your own projects only.

**Q: How often are new templates added?**  
A: Weekly! We aim for 4-5 new templates per week from our team and community creators.

**Q: Can I request a specific template?**  
A: Yes! Submit requests in the community forum. Popular requests prioritized.

**Q: What if a template I purchased gets updated?**  
A: You get free updates for 1 year. After that, minor updates are free, major revisions may require upgrade.

---

## Support

Need help with templates?

- **Template Issues**: support@ai-landing-genie.com
- **Creator Support**: creators@ai-landing-genie.com
- **Community Forum**: [community.ai-landing-genie.com/templates](https://community.ai-landing-genie.com/templates)
- **Template Requests**: [Request Template](https://ai-landing-genie.com/request-template)

---

**Last Updated**: December 21, 2025  
**Version**: 1.0.0 (Planning Phase)
