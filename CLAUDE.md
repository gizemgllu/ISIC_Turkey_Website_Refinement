# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website redesign project for ISIC Turkey (International Student Identity Card), redesigned in the style of ISIC Portugal. The site is built with vanilla HTML, CSS, and JavaScript - no frameworks or build tools required.

## Running the Website Locally

### Primary Method (Python Server)
```bash
# Start the server (automatically opens browser)
python server.py
# or
python3 server.py

# Access at: http://localhost:8000
```

The server includes CORS headers for development and auto-opens the browser.

### Alternative Methods
```bash
# Python's built-in HTTP server
python -m http.server 8000

# If port 8000 is in use, try another port
python -m http.server 8080
```

## File Structure

```
web/
├── index.html                    # Main homepage
├── firsatlar.html               # Opportunities/Discounts page
├── blog-yazilari.html           # Blog posts listing page
├── blog-post.html               # Individual blog post template
├── deneyim-yazilari.html        # Student experiences page
├── styles.css                   # Global styles (37k+ lines)
├── script.js                    # Global JavaScript functionality
├── server.py                    # Development server
└── ISIC_Turkey_Redesign_Instructions.md  # Design specifications
```

## Architecture and Design System

### Color Palette
The site uses ISIC Turkey's official colors defined as CSS variables:
- **Primary**: `#40b8b8` (Teal/Turquoise)
- **Secondary**: `#feef00` (Yellow - accent color)
- **Dark**: `#006666` (Dark teal)
- **Light**: `#f5f5f5` (Light grey - backgrounds)

These are used consistently throughout for buttons, headers, and interactive elements.

### Typography
- **Font Family**: Roboto (primary), Lato (secondary)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 900 (Black)
- **Font Sizes**: Responsive scaling with mobile breakpoints
  - H1: 48px (desktop) → smaller on mobile
  - Body: 16px base

### Component Architecture

The site uses reusable component patterns:

1. **Hero Slider** (index.html)
   - Multi-slide carousel with 5+ slides
   - Auto-advance every 5 seconds
   - Manual navigation (arrows + dots)
   - Ken Burns-style zoom effects
   - Managed by `initSlider()` in script.js

2. **Tab System** (Card types: ISIC, ITIC, IYTC)
   - Tab-based content switching
   - Shows different card types with descriptions
   - Managed by `initTabs()` in script.js

3. **Header Navigation**
   - Fixed top bar with contact info
   - Main navigation with dropdowns
   - Search functionality
   - Language selector (TR/EN)
   - Mobile hamburger menu
   - Sticky header on scroll

4. **Card Layouts**
   - Opportunity cards (firsatlar.html)
   - Blog post cards (blog-yazilari.html)
   - Experience cards (deneyim-yazilari.html)
   - All use similar grid structures with hover effects

### JavaScript Modules (script.js)

The JavaScript is organized into initialization functions:
- `initSlider()` - Hero carousel functionality
- `initTabs()` - Tab switching for card types
- `initMobileMenu()` - Hamburger menu toggle
- `initSmoothScrolling()` - Smooth anchor scrolling
- `initHeaderScroll()` - Sticky header behavior
- `initDropdowns()` - Navigation dropdown menus
- `initFormHandling()` - Form submissions
- `initScrollAnimations()` - Scroll-triggered animations
- `initLanguageSelector()` - Language switching
- `initSearch()` - Search functionality
- `handleHashOnLoad()` - Deep linking to sections

All functions are called on `DOMContentLoaded`.

## Responsive Design

The site uses mobile-first responsive breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 960px - 1199px
- **Mobile Large**: 640px - 959px
- **Mobile Small**: 320px - 639px

Mobile menu switches to hamburger navigation below 960px.

## Key Features

### Multi-page Structure
- **index.html**: Homepage with slider, card types, features
- **firsatlar.html**: Discounts organized by category (travel, education, shopping, etc.)
- **blog-yazilari.html**: Blog listing with sidebar (categories, popular posts, tags)
- **deneyim-yazilari.html**: Student testimonials with statistics and highlight cards
- **blog-post.html**: Template for individual blog articles

### Interactive Elements
- Auto-rotating hero slider with manual controls
- Tab-based content switching
- Dropdown menus in navigation
- Search functionality (header)
- Form validation and loading states
- Smooth scrolling navigation
- Hover animations on cards and buttons

### Design Pattern: ISIC Portugal Style
The entire redesign follows ISIC Portugal's modern, clean aesthetic:
- Large hero sections with prominent CTAs
- Card-based layouts for content
- Gradient backgrounds and glassmorphism effects
- Consistent spacing and typography
- Category-based content organization

## Content Management

### Adding New Content

**New Blog Post:**
1. Content goes in blog-yazilari.html as a new `.blog-card`
2. Use existing card structure with category badge, image, title, excerpt
3. Link to blog-post.html with appropriate content

**New Opportunity/Discount:**
1. Add to firsatlar.html in appropriate category section
2. Use `.opportunity-card` structure with logo, description, discount badge

**New Student Experience:**
1. Add to deneyim-yazilari.html as new `.experience-card`
2. Include student photo, name, location, testimonial, and highlight tags

### Updating Slider Content
Edit the `.slide` divs in index.html hero section. Each slide should have:
- Background image
- Heading text
- Description
- CTA button

Update the dots array in `initSlider()` if changing slide count.

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses modern CSS (Grid, Flexbox) and ES6 JavaScript.

## Design Reference

The ISIC_Turkey_Redesign_Instructions.md file contains detailed design specifications, including:
- Complete color palette and typography rules
- Button style variations
- Content structure for all pages
- Exact copy for hero sections and CTAs
- Category systems for opportunities, blog posts, and experiences

Refer to this file when making design changes to maintain consistency with the ISIC Portugal style guide.
