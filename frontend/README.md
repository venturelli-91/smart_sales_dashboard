# Sales Management Dashboard

A modern and interactive dashboard for sales management, developed with Next.js, React, and TypeScript.

## 📸 Preview

<div align="center">
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%201.png" alt="Dashboard Preview 1" width="400" height="225" />
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%202.png" alt="Dashboard Preview 2" width="400" height="225" />
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%203.png" alt="Dashboard Preview 3" width="400" height="225" />
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%204.png" alt="Dashboard Preview 4" width="400" height="225" />
</div>

## 🚀 Features

- **Sales Overview**
  - Informative cards with key metrics
  - Trend indicators (up/down)
  - Currency values formatted in R$

- **Interactive Charts**
  - Sales evolution by year
  - Historical average ticket
  - Responsive visualizations

- **Seller Ranking**
  - Table sorted by revenue
  - Target percentage indicators
  - Visual status by performance

- **Data Export**
  - Excel export of chart data
  - Seller ranking export
  - Multiple sheets in Excel file

## 🛠️ Technologies Used

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Flowbite-764ABC?style=for-the-badge&logo=flowbite&logoColor=white" alt="Flowbite" />
  <img src="https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=recharts&logoColor=white" alt="Recharts" />
  <img src="https://img.shields.io/badge/XLSX-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" alt="XLSX" />
  <img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
</div>

## 📦 Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Access the project at:

```
http://localhost:3000
```

## 🎨 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── tools/         # Utilities and specific components
│   ├── stores/        # State management
│   └── pages/         # Application pages
├── public/            # Static files
└── package.json       # Dependencies and scripts
```

## 🔧 Main Components

- **Dashboard**: Main page with all components
- **GeneralSales**: Sales overview card
- **AchievementPercentage**: Target achievement card
- **MediumTicket**: Average ticket card
- **SalesEvolutionChart**: Sales evolution chart
- **TicketChart**: Average ticket chart
- **RankingTable**: Seller ranking table
- **ExportExcel**: Excel export components

## 📊 Data and State

The project uses Zustand for state management, focusing on:

- Seller data
- Currency value formatting
- Performance indicator calculation

## 🎯 Next Steps

- [ ] Implement period filters
- [ ] Add more data visualizations
- [ ] Improve responsiveness
- [ ] Add automated tests

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Open issues
2. Suggest improvements
3. Submit pull requests

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

Aurélio Venturelli
