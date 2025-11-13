# TurboTradeX Design Guidelines

## Design Approach: High-Performance Racing Fusion

**Reference Inspirations:**
- **F1 Racing Games**: F1 series telemetry displays, Gran Turismo UI precision
- **Crypto Exchanges**: Binance Pro real-time charts, Coinbase clean data presentation
- **Web3 Platforms**: OpenSea card grids, Uniswap glassmorphism effects
- **GameFi**: Zed Run racing mechanics, Axie Infinity economy visualization

**Core Design Principles:**
- **Velocity & Precision**: Sharp angles, diagonal elements suggesting speed and movement
- **High-Tech Transparency**: Glassmorphism overlays for data panels and cards
- **Real-Time Energy**: Pulsing animations, live data feeds, dynamic number updates
- **Premium Futurism**: Metallic gradients, neon accents, sleek geometric shapes

## Typography

**Font Families:**
- **Primary (Headings)**: Orbitron or Rajdhani - geometric, futuristic, racing-inspired
- **Secondary (Body/UI)**: Inter or Space Grotesk - clean, technical, highly readable
- **Data/Numbers**: JetBrains Mono - monospace for prices, stats, telemetry

**Hierarchy:**
- Hero Headlines: 4xl-6xl, bold weight, wide letter-spacing for impact
- Section Headers: 2xl-3xl, semibold, tight spacing
- Card Titles: lg-xl, medium weight
- Body Text: base-lg, regular weight, increased line-height (1.6-1.8)
- Data Labels: sm-base, uppercase, tracked spacing
- Live Stats: xl-2xl monospace, tabular numbers

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Tight elements: p-2, gap-2
- Standard spacing: p-4, p-6, gap-4
- Section padding: py-12, py-16, py-24
- Container gaps: gap-8, gap-12

**Grid Framework:**
- Hero: Full-viewport with asymmetric split (60/40 text/visual)
- Marketplace Cards: 3-column grid (lg:grid-cols-3 md:grid-cols-2)
- Dashboard Panels: 2-column split for race viewer + stats
- Feature Sections: Alternating 2-column layouts with diagonal dividers

## Component Library

### Navigation
- Floating header with glassmorphism backdrop blur
- Logo left, nav center, "Connect Wallet" CTA right with metallic border
- Mobile: Full-screen overlay with diagonal slide-in animation

### Hero Section
- Full-viewport diagonal split design
- Left: Bold headline + subtext + dual CTAs ("Start Trading" primary, "Watch Demo" secondary with glass effect)
- Right: Animated 3D car render or racing scene with motion trails
- Floating stats bar across bottom showing "Live Races: 24 | Active Traders: 12.5K | Volume: $2.3M"

### NFT Racer Cards
- Glassmorphic cards with sharp angular borders
- Top: 3D racer image with subtle hover lift + glow
- Mid: Racer name, rarity badge, performance stats (Speed/Control/Value)
- Bottom: Live price with up/down indicator + pulsing dot, "Trade Now" button
- Corner accent: Diagonal neon stripe

### Live Auction Feed
- Vertical scrolling feed panel with semi-transparent backdrop
- Each bid entry: Timestamp, racer thumbnail, bid amount, user address (truncated)
- Price changes animate with scale + glow pulse
- Top shows "LIVE" indicator with pulsing red dot

### Race Viewer Dashboard
- Main race visualization: Top 50% with track layout and car positions
- Bottom panels (3-column grid):
  - Left: Leaderboard with position changes
  - Center: Live telemetry (speed, sector times, tire wear as radial gauges)
  - Right: Real-time trading activity for racers in view

### How It Works Flow
- Horizontal timeline with 5 steps connected by diagonal animated lines
- Each step: Large icon, title, brief description in glass panel
- Icons show: Wallet → NFT → Race Flag → Chart → Trophy
- Full-width section with dark backdrop

### Tokenomics Visualization
- Center: Large circular token diagram showing distribution
- Surrounding panels: Staking calculator, rewards chart, utility breakdown
- Interactive hover states revealing detailed percentages

### Stats/Metrics Sections
- 4-column grid showcasing key numbers
- Each stat in glass panel: Large number (3xl), label below, subtle icon above
- Animated counter effect on scroll-into-view

### Roadmap
- Vertical timeline with alternating left/right milestone cards
- Each phase: Quarter label, features list, completion indicator
- Connecting line with neon glow running through center

### Footer
- 4-column grid: About, Products, Resources, Community
- Top border: Neon horizontal line
- Bottom: Social icons, legal links, "Built on Ethereum" badge

## Images

**Large Hero Image:** YES
- **Hero**: Full-viewport 3D rendered F1-style car with motion blur and neon trail effects, angled dramatically (provided via 3D render or high-quality racing game screenshot aesthetic)
- **Marketplace Cards**: Individual racer renders - sleek car models with team livery, presented on transparent backgrounds with subtle glow
- **Race Viewer**: Animated track layout with car position markers
- **Feature Sections**: Abstract tech backgrounds - circuit board patterns, blockchain network visualizations, speed lines
- **Team Section**: Professional portraits with futuristic border treatments

**Image Treatment:**
- All hero/background images have gradient overlays for text legibility
- NFT images include subtle scan-line effects
- Motion blur and neon glow on racing elements

## Key Visual Elements

**Glassmorphism:**
- All cards and panels use backdrop-blur with semi-transparent backgrounds
- Subtle borders with gradient effects
- Layered depth with multiple glass panels

**Geometric Accents:**
- Diagonal lines cutting across sections (15-20 degree angles)
- Hexagonal patterns in backgrounds
- Sharp corners with neon corner accents on interactive elements

**Data Visualization:**
- Line charts showing price fluctuations (subtle grid, glowing line)
- Radial gauges for performance metrics
- Real-time number tickers with tabular formatting

**Animations (Minimal but Impactful):**
- Pulsing glow on "LIVE" indicators
- Number count-up on stats
- Subtle float on card hover
- Smooth transitions on price changes
- Loading states: Racing flag wave or speedometer sweep

**Buttons:**
- Primary CTAs: Solid with metallic gradient, sharp corners
- Secondary: Glass effect with border, blurred background
- All buttons on images: backdrop-blur background, no additional hover states (component handles this)

**Responsive Strategy:**
- Desktop: Multi-column dashboards, side-by-side race + stats
- Tablet: 2-column grids, stacked dashboard panels
- Mobile: Single column, collapsible auction feed, swipeable racer cards

This design system creates a premium, high-energy Web3 racing experience that balances futuristic aesthetics with functional trading interfaces.