import { AuthDispatchType, AuthType } from './types';

export default function authReducer(_authState: AuthType, action: AuthDispatchType) {
  switch (action.type) {
    case 'login': {
      const { email, name } = action.data;

      localStorage.setItem('user', JSON.stringify({ email, name }));

      return { email, name };
    }
    case 'logout': {
      localStorage.removeItem('user');

      return { email: '', name: '' };
    }
  }
}
