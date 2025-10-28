import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Home from '../pages/home';
import { MemoryRouter } from 'react-router-dom';


describe ('Componente de card', () => {
    test('exibe as informações do veículo corretamente', () => {
    render(
    <MemoryRouter>
    <Home  />
    </MemoryRouter>)
    ;

    expect(screen.getByText(/BEM-VINDO/i)).toBeInTheDocument();
  });
})