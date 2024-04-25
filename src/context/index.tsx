import { createContext, useContext } from 'react';
import { AuthDispatchType, AuthType } from './types';

export const AuthContext = createContext<AuthType | null>(null);
export const AuthDispatchContext = createContext<React.Dispatch<AuthDispatchType> | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatchContext);
}
