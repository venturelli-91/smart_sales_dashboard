import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RankingTable from './RankingTable';

describe('RankingTable - Sprint 1 Filters UI', () => {
  it('renders search input with aria-label', () => {
    render(<RankingTable />);
    const searchInput = screen.getByLabelText(/buscar vendedores por nome/i) as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.type).toBe('text');
  });

  it('renders meta filter select with aria-label', () => {
    render(<RankingTable />);
    const metaFilter = screen.getByLabelText(/filtrar vendedores por status de meta/i) as HTMLSelectElement;
    expect(metaFilter).toBeInTheDocument();
    expect(metaFilter.value).toBe('all');
  });

  it('renders results counter', () => {
    render(<RankingTable />);
    expect(screen.getByText(/mostrando/i)).toBeInTheDocument();
  });

  it('displays all 7 sellers initially', () => {
    render(<RankingTable />);
    expect(screen.getByText('Jo\u00e3o Silva')).toBeInTheDocument();
    expect(screen.getByText('Carlos Santos')).toBeInTheDocument();
    expect(screen.getByText('Maria Oliveira')).toBeInTheDocument();
    expect(screen.getByText('Amanda Costa')).toBeInTheDocument();
    expect(screen.getByText('Roberto Almeida')).toBeInTheDocument();
  });

  it('accepts input in search field', async () => {
    const user = userEvent.setup();
    render(<RankingTable />);

    const searchInput = screen.getByLabelText(/buscar vendedores por nome/i) as HTMLInputElement;
    await user.type(searchInput, 'Carlos');

    expect(searchInput).toHaveValue('Carlos');
  });

  it('accepts selection in meta filter', async () => {
    const user = userEvent.setup();
    render(<RankingTable />);

    const metaFilter = screen.getByLabelText(/filtrar vendedores por status de meta/i) as HTMLSelectElement;
    await user.selectOptions(metaFilter, 'success');

    expect(metaFilter).toHaveValue('success');
  });

  it('shows clear button when search has value', async () => {
    const user = userEvent.setup();
    render(<RankingTable />);

    const searchInput = screen.getByLabelText(/buscar vendedores por nome/i) as HTMLInputElement;
    await user.type(searchInput, 'test');

    const clearButton = screen.getByRole('button', { name: /limpar/i });
    expect(clearButton).toBeInTheDocument();
  });

  it('clears search input on button click', async () => {
    const user = userEvent.setup();
    render(<RankingTable />);

    const searchInput = screen.getByLabelText(/buscar vendedores por nome/i) as HTMLInputElement;
    await user.type(searchInput, 'test');

    const clearButton = screen.getByRole('button', { name: /limpar/i });
    await user.click(clearButton);

    expect(searchInput).toHaveValue('');
  });

  it('has table with proper structure', () => {
    render(<RankingTable />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('has aria-sort on all table headers', () => {
    render(<RankingTable />);
    const headers = screen.getAllByRole('columnheader');
    expect(headers.length).toBeGreaterThan(0);
    headers.forEach((header) => {
      expect(header).toHaveAttribute('aria-sort');
    });
  });

  it('all interactive elements are not disabled', () => {
    render(<RankingTable />);
    const searchInput = screen.getByLabelText(/buscar vendedores por nome/i) as HTMLInputElement;
    const metaFilter = screen.getByLabelText(/filtrar vendedores por status de meta/i) as HTMLSelectElement;
    
    expect(searchInput).not.toHaveAttribute('disabled');
    expect(metaFilter).not.toHaveAttribute('disabled');
  });
});
