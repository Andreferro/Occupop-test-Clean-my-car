import { ReactElement, useReducer } from 'react';
import { AuthType } from './types';
import authReducer from './reducer';
import { AuthContext, AuthDispatchContext } from '.';

const initialState: AuthType = {
  email: '',
  name: '',
};

export function AuthProvider({ children }: { children: ReactElement }) {
  const [auth, dispatch] = useReducer(
    authReducer,
    initialState
  );

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
