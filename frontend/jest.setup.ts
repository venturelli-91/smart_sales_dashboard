import "@testing-library/jest-dom";

// Mock Next.js router
jest.mock("next/router", () => ({
	useRouter: jest.fn(() => ({
		query: {},
		pathname: "/",
		push: jest.fn(),
		replace: jest.fn(),
		reload: jest.fn(),
		back: jest.fn(),
		prefetch: jest.fn(),
		beforePopState: jest.fn(),
		events: {
			on: jest.fn(),
			off: jest.fn(),
			emit: jest.fn(),
		},
		isFallback: false,
	})),
}));

// Mock next/navigation for App Router
jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			push: jest.fn(),
			replace: jest.fn(),
			prefetch: jest.fn(),
			back: jest.fn(),
			forward: jest.fn(),
			refresh: jest.fn(),
		};
	},
	usePathname() {
		return "/";
	},
	useSearchParams() {
		return new URLSearchParams();
	},
}));
