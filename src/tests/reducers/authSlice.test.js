import authReducer, { login, logout } from '../../redux/slices/authSlice';

describe('authSlice', () => {
  const initialState = { isAuthenticated: false, user: null }; // Match the actual initial state

  it('should handle login', () => {
    const action = login({ email: 'test@example.com' });
    const state = authReducer(initialState, action);
    expect(state).toEqual({ isAuthenticated: true, user: { email: 'test@example.com' } });
  });

  it('should handle logout', () => {
    const loggedInState = { isAuthenticated: true, user: { email: 'test@example.com' } };
    const state = authReducer(loggedInState, logout());
    expect(state).toEqual(initialState);
  });
});