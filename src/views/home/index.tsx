import { useAuth, useAuthDispatch } from '../../context';

export default function HomeScreen() {
  const dispatch = useAuthDispatch();
  const user = useAuth();

  const { name, email } = user || {};

  function logout() {
    if (dispatch) {
      dispatch({
        type: 'logout',
        data: { email: '', name: '' },
      });
    }
  }

  return (
    <div className="container container--background-primary-white">
      <div className="container__segment--center--white">
        <h1>Hello {name}</h1>
        <h2>{email}</h2>

        <button
          onClick={logout}
          className="button--primary"
          type="submit"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
