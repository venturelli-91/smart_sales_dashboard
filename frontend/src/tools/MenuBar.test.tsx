import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuBar from './MenuBar';

describe('MenuBar - Sprint 1 Filter Controls', () => {
  it('renders year select with aria-label', () => {
    render(<MenuBar />);
    const yearSelect = screen.getByLabelText(/selecionar ano para filtrar dados/i) as HTMLSelectElement;
    expect(yearSelect).toBeInTheDocument();
    expect(yearSelect.value).toBe('2025');
  });

  it('renders month select with aria-label', () => {
    render(<MenuBar />);
    const monthSelect = screen.getByLabelText(/selecionar m\u00eas para filtrar dados/i) as HTMLSelectElement;
    expect(monthSelect).toBeInTheDocument();
    expect(monthSelect.value).toBe('4');
  });

  it('renders filter button with aria-label', () => {
    render(<MenuBar />);
    const filterButton = screen.getByRole('button', { name: /aplicar filtros/i });
    expect(filterButton).toBeInTheDocument();
  });

  it('renders profile button with aria-label', () => {
    render(<MenuBar />);
    const profileButton = screen.getByRole('button', { name: /menu de perfil/i });
    expect(profileButton).toBeInTheDocument();
  });

  it('displays dashboard icon with aria-label', () => {
    render(<MenuBar />);
    const icon = screen.getByRole('img', { name: /dashboard icon/i });
    expect(icon).toBeInTheDocument();
  });

  it('displays current month and year in header', () => {
    render(<MenuBar />);
    const monthElements = screen.queryAllByText('Abril');
    const yearElements = screen.queryAllByText('2025');
    expect(monthElements.length).toBeGreaterThan(0);
    expect(yearElements.length).toBeGreaterThan(0);
  });

  it('changes displayed month when month select changes', async () => {
    const user = userEvent.setup();
    render(<MenuBar />);

    const monthSelect = screen.getByLabelText(/selecionar m\u00eas para filtrar dados/i) as HTMLSelectElement;
    await user.selectOptions(monthSelect, '3');
    expect(monthSelect.value).toBe('3');

    await waitFor(() => {
      const marcoElements = screen.queryAllByText('Mar\u00e7o');
      expect(marcoElements.length).toBeGreaterThan(0);
    });
  });

  it('changes displayed year when year select changes', async () => {
    const user = userEvent.setup();
    render(<MenuBar />);

    const yearSelect = screen.getByLabelText(/selecionar ano para filtrar dados/i) as HTMLSelectElement;
    await user.selectOptions(yearSelect, '2024');
    expect(yearSelect.value).toBe('2024');

    await waitFor(() => {
      const yearElements = screen.queryAllByText('2024');
      expect(yearElements.length).toBeGreaterThan(0);
    });
  });

  it('has title attributes on buttons for tooltip support', () => {
    render(<MenuBar />);
    const filterButton = screen.getByRole('button', { name: /aplicar filtros/i });
    expect(filterButton).toHaveAttribute('title', 'Aplicar filtros');

    const profileButton = screen.getByRole('button', { name: /menu de perfil/i });
    expect(profileButton).toHaveAttribute('title', 'Perfil do usu\u00e1rio');
  });

  it('has proper keyboard navigation', () => {
    render(<MenuBar />);
    const yearSelect = screen.getByLabelText(/selecionar ano para filtrar dados/i) as HTMLSelectElement;
    const monthSelect = screen.getByLabelText(/selecionar m\u00eas para filtrar dados/i) as HTMLSelectElement;
    expect(yearSelect).not.toHaveAttribute('disabled');
    expect(monthSelect).not.toHaveAttribute('disabled');
  });
});
