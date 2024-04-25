export type AuthType = {
  email: string;
  name: string;
}

export type AuthDispatchType = {
  type: 'login' | 'logout',
  data: AuthType
}
