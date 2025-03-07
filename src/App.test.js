/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReserveFormInfo from './components/ReserveForm/ReserveFormInfo';

// --- Mock react-router-dom ---
import { useNavigate } from 'react-router-dom';
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(), // Create a fresh mock function for useNavigate
  };
});

// --- Mock the custom useSubmit hook ---
import useSubmit from './hooks/useSubmit';
jest.mock('./hooks/useSubmit', () => ({
  __esModule: true,
  default: jest.fn(), // We'll override its implementation per test
}));

describe('ReserveFormInfo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

//1: first test

  test('renders all form fields', () => {
    // For this test, we want no response so the navigation effect doesn’t run.
    useSubmit.mockImplementation(() => ({
      submit: jest.fn(),
      response: null,
      isLoading: false,
    }));

    render(
      <BrowserRouter>
        <ReserveFormInfo setFormData={() => {}} />
      </BrowserRouter>
    );

    // Check that each field is rendered
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/special request/i)).toBeInTheDocument();
  });

//2 :second test

  test('successful form submission calls setFormData and navigates to /confirm', async () => {
    // Configure the useNavigate mock to return a local mock function.
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    // For submission, we simulate a successful response.
    useSubmit.mockImplementation(() => ({
      submit: jest.fn(),
      response: { type: 'success' },
      isLoading: false,
    }));

    const setFormDataMock = jest.fn();

    render(
      <BrowserRouter>
        <ReserveFormInfo setFormData={setFormDataMock} />
      </BrowserRouter>
    );

    // Fill in the form fields with valid data.
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '2-4' },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2025-03-07' },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: 'Dinner: 7-8' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    // For input type number, the value is parsed as a number.
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/special request/i), {
      target: { value: 'No special request' },
    });

    // Submit the form.
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

    // Wait for Formik's async submission and the useEffect to trigger.
    await waitFor(() => {
      expect(setFormDataMock).toHaveBeenCalledWith({
        guests: '2-4',
        date: '2025-03-07',
        time: 'Dinner: 7-8',
        occasion: 'Birthday',
        fullName: 'John Doe',
        email: 'john@example.com',
        phoneNumber: 1234567890, // Expect a number here.
        request: 'No special request',
      });
      expect(navigateMock).toHaveBeenCalledWith('/confirm');
    });
  });
});
