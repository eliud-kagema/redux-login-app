import authReducer, { login, logout } from '../../redux/slices/authSlice';

describe('authSlice', () => {
  const initialState = { isLoggedIn: false, user: null };

  it('should handle login', () => {
    const action = login({ email: 'test@example.com' });
    const state = authReducer(initialState, action);
    expect(state).toEqual({ isLoggedIn: true, user: { email: 'test@example.com' } });
  });

  it('should handle logout', () => {
    const loggedInState = { isLoggedIn: true, user: { email: 'test@example.com' } };
    const state = authReducer(loggedInState, logout());
    expect(state).toEqual(initialState);
  });
});
