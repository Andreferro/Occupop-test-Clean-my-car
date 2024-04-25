import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormField, Input, Label } from 'semantic-ui-react';
import LOGO from '../../assets/logo.png';
import { useAuthDispatch } from '../../context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const dispatch = useAuthDispatch();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsEmailInvalid(!email);
    setIsPasswordInvalid(!password);

    if (!email || !password) return;

    // In a real application, this part is done in the backend and could return the user data
    if (email === 'joe@email.com' && password === '123456') {
      if (dispatch) {
        dispatch({
          type: 'login',
          data: { email, name: 'Joe'},
        });
      }
    } else {
      setIsEmailInvalid(true);
      setIsPasswordInvalid(true);  
    }
  }

  return (
    <div className="container container--background-primary-white">
      <div className="container__segment">
        <section>
          <img src={LOGO} alt="Clean My Car" />
          <span>
            India's first waterless car cleaning company
          </span>
        </section>

        <section>
          <Link className="section__link" to="/help">Need help?</Link>
          <h1>Log In</h1>

          <Form onSubmit={submit}>
            <FormField>
              <label htmlFor="email-input">Email</label>
              <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email-input"
                placeholder="joe@email.com"
              />
              {isEmailInvalid && (
                <Label basic color="red" pointing>
                  Invalid field
                </Label>
              )}
            </FormField>
            <FormField>
              <label htmlFor="password-input">Password</label>
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="password-input"
                placeholder="Enter your password"
                type="password"
              />
              {isPasswordInvalid && (
                <Label basic color="red" pointing>
                  Invalid field
                </Label>
              )}
            </FormField>

            <div className="form__link">
              <Link to="/forgot-password">forgot password?</Link>
            </div>

            <button
              className="form__button"
              type="submit"
            >
              Login
            </button>
          </Form>
        </section>
      </div>
    </div>
  );
}
