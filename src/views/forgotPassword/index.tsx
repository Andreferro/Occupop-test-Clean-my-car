import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormField, Input, Label } from 'semantic-ui-react';
import LOGO from '../../assets/logo.png';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [message, setMessage] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsEmailInvalid(!email);

    if (!email) return;

    if (email === 'joe@email.com') {
      setMessage('Verify your email to set a new password.');
    } else {
      setIsEmailInvalid(true);
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
          <h1>Reset Password</h1>

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

            {message && <div className="form__message">{message}</div>}

            <button
              className="form__button"
              type="submit"
            >
              Send recovery email
            </button>

            <div className="form__link--login">
              <Link to="/">
                Log In
              </Link>
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
}
