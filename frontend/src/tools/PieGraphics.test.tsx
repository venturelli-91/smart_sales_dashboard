import { render, screen } from '@testing-library/react';
import PieGraphics from './PieGraphics';

// Mock Recharts to avoid rendering complex SVG in tests
jest.mock('recharts', () => {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const React = require('react');
	return {
		...jest.requireActual('recharts'),
		ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
		PieChart: ({ children }: { children: React.ReactNode }) => <div data-testid="pie-chart">{children}</div>,
		Pie: () => <div data-testid="pie" />,
		Cell: () => <div />,
		Legend: () => <div data-testid="legend" />,
		Tooltip: () => <div />,
	};
});

describe('PieGraphics Component', () => {
	it('renders with default title', () => {
		render(<PieGraphics />);
		expect(screen.getByText('Distribuição de Vendas')).toBeInTheDocument();
	});

	it('renders with custom title when provided', () => {
		render(<PieGraphics title="Custom Title" />);
		expect(screen.getByText('Custom Title')).toBeInTheDocument();
	});

	it('has proper chart card styling', () => {
		const { container } = render(<PieGraphics />);
		const cardDiv = container.firstChild as HTMLElement;
		expect(cardDiv).toHaveClass('rounded-2xl');
		expect(cardDiv).toHaveClass('shadow-sm');
	});

	it('has dark mode support', () => {
		const { container } = render(<PieGraphics />);
		const cardDiv = container.firstChild as HTMLElement;
		expect(cardDiv?.className).toMatch(/dark:bg-slate-800/);
	});

	it('has accent bar before title', () => {
		const { container } = render(<PieGraphics />);
		const accentBar = container.querySelector('.w-1.h-5.rounded-full.bg-violet-500');
		expect(accentBar).toBeInTheDocument();
	});

	it('renders pie chart element', () => {
		render(<PieGraphics />);
		const pieChart = screen.getByTestId('pie-chart');
		expect(pieChart).toBeInTheDocument();
	});

	it('displays legend by default', () => {
		render(<PieGraphics />);
		const legend = screen.getByTestId('legend');
		expect(legend).toBeInTheDocument();
	});

	it('accepts custom height prop', () => {
		render(<PieGraphics height={400} />);
		expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
	});

	it('accepts custom data prop', () => {
		const customData = [
			{ name: 'Test 1', value: 50 },
			{ name: 'Test 2', value: 30 },
		];
		render(<PieGraphics data={customData} />);
		expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
	});

	it('has proper accessibility heading', () => {
		render(<PieGraphics />);
		const heading = screen.getByText('Distribuição de Vendas');
		expect(heading).toBeInTheDocument();
		expect(heading.className).toMatch(/text-base/);
	});
});
