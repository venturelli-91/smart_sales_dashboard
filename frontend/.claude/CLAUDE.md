# Smart Sales Dashboard - Code Guidelines

## Project Overview
Sales management dashboard built with Next.js, React 19, Tailwind CSS, and Recharts. Displays KPI cards, sales charts, and a seller ranking table with Excel export functionality.

## Tech Stack
- **Framework**: Next.js 15.2.4
- **Frontend**: React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, PostCSS
- **UI Components**: Flowbite React
- **State**: Zustand 5.0.3
- **Charts**: Recharts 2.15.2, react-google-charts 5.2.1
- **Data Export**: XLSX 0.18.5
- **Icons**: react-icons 5.5.0

## Directory Structure
```
smart_sales_dashboard/frontend/src/
├── components/        # Feature-specific components
│   ├── Dashboard.tsx             # Main layout orchestrator
│   ├── CompleteMenu.tsx          # Menu wrapper
│   ├── GeneralSales.tsx          # KPI card (sales overview)
│   ├── AchievementPercentage.tsx # KPI card (goal achievement)
│   ├── MediumTicket.tsx          # KPI card (average ticket)
│   ├── RankingTable.tsx          # Seller ranking table
│   └── ExportExcel.tsx           # Generic Excel export
├── tools/             # Reusable UI tools and charts
│   ├── GenericCards.tsx          # KPI card component
│   ├── MenuBar.tsx               # Header with filters
│   ├── SalesEvolutionChart.tsx   # Bar chart (sales by year)
│   ├── TicketChart.tsx           # Bar chart (ticket by year)
│   ├── ChartsExportExcel.tsx     # Multi-sheet Excel export
│   ├── RankingExportExcel.tsx    # Generic export (generic)
│   ├── PieGraphics.tsx           # Pie chart (unused/incomplete)
│   └── Footer.tsx                # Social links footer
├── stores/            # Zustand state management
│   └── tableStore.ts             # Seller data, formatting, status logic
├── pages/
│   ├── index.tsx                 # Home page entry point
│   ├── _app.tsx                  # Next.js app wrapper
│   ├── _document.tsx             # HTML document template
│   └── api/hello.ts              # Unused API route
└── styles/
    └── globals.css               # Global styles
```

## Key Patterns & Conventions

### State Management
- **Zustand store** (`tableStore.ts`): Centralizes seller data and utility functions
  - Contains initial hardcoded seller data
  - Provides `formatCurrency()` for BRL formatting
  - Provides `getMetaStatusType()` for badge status ("success" | "warning" | "failure")

### Component Composition
- **KPI Cards**: GeneralSales, AchievementPercentage, MediumTicket all use GenericCard with different props
- **Charts**: SalesEvolutionChart and TicketChart follow similar structure (ResponsiveContainer + BarChart)
- **Export**: RankingExportExcel is generic; ChartsExportExcel and ExportExcel are specific implementations

### Styling
- Tailwind CSS for layout and responsive design
- Inline `style` props for dynamic colors and sizing (should consolidate to constants)
- Custom SVG wave divider in MenuBar
- Color scheme: Purple primary (rgb(76, 29, 149)), green/red accents

### Data Formatting
- Currency: `new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })`
- Year data hardcoded in chart components (SalesEvolutionChart, TicketChart)
- No API integration; all data mocked in stores and components

## Recent Refactoring (Completed)
✅ **KPI cards**: GeneralSales, AchievementPercentage, MediumTicket consolidated into `KPI_CARDS` config
✅ **Theme constants**: Colors extracted to `constants/theme.ts`
✅ **Chart data**: Sales and ticket data extracted to `constants/chartData.ts`
✅ **Chart imports**: Simplified SalesEvolutionChart and TicketChart to use shared data
✅ **Menu wrapper**: CompleteMenu removed from index.tsx; now uses MenuBar directly
✅ **Export functions**: ChartsExportExcel refactored to accept generic multi-sheet config
✅ **ExportExcel**: Genericized to match RankingExportExcel pattern with full TypeScript support

## Deprecated Components (Safe to Remove)
- `components/GeneralSales.tsx` – replaced by `KPI_CARDS` config
- `components/AchievementPercentage.tsx` – replaced by `KPI_CARDS` config
- `components/MediumTicket.tsx` – replaced by `KPI_CARDS` config
- `components/CompleteMenu.tsx` – wrapper removed; use MenuBar directly

## Commit Convention
- Style: Conventional Commits (feat, fix, refactor, etc.)
- Language: English
- Example: `refactor: consolidate KPI cards into configurable component`

## Testing & Build
- **Linting**: `npm run lint` (ESLint)
- **Build**: `npm run build` (Next.js)
- **Dev**: `npm run dev` (Next.js dev server)
- No unit tests currently; focus on integration testing when needed

## Performance Considerations
- Charts use `ResponsiveContainer` for responsive sizing
- Data is mocked; real API integration should implement caching
- Menu and Footer are stateless; no unnecessary re-renders
- Zustand store is minimal; consider memoization if store grows

## Color Palette
- **Primary**: rgb(76, 29, 149) – Purple
- **Sales KPI**: #32CD32 – Lime Green
- **Goal KPI**: #000080 – Navy
- **Ticket KPI**: #FA8072 – Salmon
- **Export Button**: bg-amber-700
- **Table Header**: bg-purple-900

## Known Issues / TODOs
- [ ] PieGraphics component is incomplete (no data structure, sizing issues)
- [ ] MenuBar filters (year/month selects) are non-functional
- [ ] No API integration; data is hardcoded
- [ ] Footer URLs hardcoded (LinkedIn, GitHub, WhatsApp, Instagram)
- [ ] No error handling for Excel export failures
- [ ] Accessibility: icons need aria-labels, links need proper href

## Development Workflow
1. Component changes go in `components/` or `tools/` based on reusability
2. Shared state goes in `stores/` (Zustand)
3. Keep components small and focused
4. Use Tailwind for responsive design; minimize inline styles
5. Export utility functions from `tools/` for reuse across components
