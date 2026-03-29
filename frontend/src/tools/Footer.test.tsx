import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import { FOOTER_URLS, FOOTER_COMPANY } from "../constants/footer";

describe("Footer Component", () => {
	// Mock window.open
	const mockOpen = jest.fn();
	window.open = mockOpen;

	beforeEach(() => {
		mockOpen.mockClear();
	});

	it("renders company name", () => {
		render(<Footer />);
		expect(screen.getByText(FOOTER_COMPANY.name)).toBeInTheDocument();
	});

	it("renders company year", () => {
		render(<Footer />);
		expect(
			screen.getByText(new RegExp(FOOTER_COMPANY.year.toString())),
		).toBeInTheDocument();
	});

	it("renders contact link", () => {
		render(<Footer />);
		const contactLinks = screen.getAllByText("Contato");
		expect(contactLinks.length).toBeGreaterThan(0);
	});

	it("has 4 social media buttons", () => {
		const { container } = render(<Footer />);
		const buttons = container.querySelectorAll("button");
		// At least 4 buttons for social links
		expect(buttons.length).toBeGreaterThanOrEqual(4);
	});

	it("has LinkedIn button with correct aria-label", () => {
		render(<Footer />);
		const linkedinButton = screen.getByLabelText(/LinkedIn/i);
		expect(linkedinButton).toBeInTheDocument();
	});

	it("has GitHub button with correct aria-label", () => {
		render(<Footer />);
		const githubButton = screen.getByLabelText(/GitHub/i);
		expect(githubButton).toBeInTheDocument();
	});

	it("has WhatsApp button with correct aria-label", () => {
		render(<Footer />);
		const whatsappButton = screen.getByLabelText(/WhatsApp/i);
		expect(whatsappButton).toBeInTheDocument();
	});

	it("has Instagram button with correct aria-label", () => {
		render(<Footer />);
		const instagramButton = screen.getByLabelText(/Instagram/i);
		expect(instagramButton).toBeInTheDocument();
	});

	it("opens LinkedIn URL when LinkedIn button clicked", () => {
		render(<Footer />);
		const linkedinButton = screen.getByLabelText(/LinkedIn/i);
		fireEvent.click(linkedinButton);
		expect(mockOpen).toHaveBeenCalledWith(
			FOOTER_URLS.social.linkedin,
			"_blank",
		);
	});

	it("opens GitHub URL when GitHub button clicked", () => {
		render(<Footer />);
		const githubButton = screen.getByLabelText(/GitHub/i);
		fireEvent.click(githubButton);
		expect(mockOpen).toHaveBeenCalledWith(FOOTER_URLS.social.github, "_blank");
	});

	it("opens WhatsApp URL when WhatsApp button clicked", () => {
		render(<Footer />);
		const whatsappButton = screen.getByLabelText(/WhatsApp/i);
		fireEvent.click(whatsappButton);
		expect(mockOpen).toHaveBeenCalledWith(
			FOOTER_URLS.social.whatsapp,
			"_blank",
		);
	});

	it("opens Instagram URL when Instagram button clicked", () => {
		render(<Footer />);
		const instagramButton = screen.getByLabelText(/Instagram/i);
		fireEvent.click(instagramButton);
		expect(mockOpen).toHaveBeenCalledWith(
			FOOTER_URLS.social.instagram,
			"_blank",
		);
	});

	it("has dark mode support", () => {
		const { container } = render(<Footer />);
		const footer = container.querySelector("footer");
		expect(footer?.className).toMatch(/dark:bg-slate-900/);
		expect(footer?.className).toMatch(/dark:border-slate-700/);
	});

	it("has gradient background style", () => {
		const { container } = render(<Footer />);
		const footer = container.querySelector("footer") as HTMLElement;
		expect(footer?.style.background).toMatch(/linear-gradient/);
	});

	it("social buttons have proper styling", () => {
		const { container } = render(<Footer />);
		const buttons = container.querySelectorAll("button");
		expect(buttons.length).toBeGreaterThan(0);
		buttons.forEach((button) => {
			expect(button.className).toMatch(/transition-colors/);
		});
	});

	it("renders all footer content correctly", () => {
		const { container } = render(<Footer />);
		expect(container).toBeInTheDocument();
		expect(screen.getByText(FOOTER_COMPANY.name)).toBeInTheDocument();
	});

	it("has container class for footer", () => {
		const { container } = render(<Footer />);
		const footer = container.querySelector("footer");
		expect(footer).toBeInTheDocument();
	});
});
