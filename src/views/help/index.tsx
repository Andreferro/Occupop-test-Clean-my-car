import { Link } from 'react-router-dom';

export default function HelpScreen() {
  return (
    <div className="container container--background-primary-white">
      <div className="container__segment--center--white">
        <div>
          <h1>Lorem Ipsum</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tellus a mauris volutpat semper. Fusce velit urna, auctor et lacinia vitae, vestibulum et risus.
            Vestibulum vehicula lacinia tortor, vel rhoncus justo elementum vehicula.
            Sed tincidunt, nibh sit amet ultricies auctor, quam dolor bibendum nibh, at lacinia metus felis eget turpis.
            Nunc convallis venenatis convallis. Maecenas elit lectus, hendrerit eget lobortis id, feugiat sit amet massa. Proin vel metus ornare, lacinia purus ac, volutpat mauris.
            Sed efficitur, purus non tristique maximus, lorem ligula convallis risus, eu blandit orci massa varius mauris. Suspendisse euismod, quam non cursus vehicula, magna libero varius felis, non consequat dui erat vehicula nibh.
            Vestibulum laoreet ex eget nunc consequat egestas. Vestibulum nec porta elit. Curabitur nec lectus non mi elementum facilisis et in ante. Phasellus felis lacus, molestie at aliquam sed, malesuada sit amet ante.
          </p>

          <p>
            Morbi eget mauris eu arcu rutrum sagittis. Etiam pulvinar purus at felis vestibulum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu neque mollis, varius ipsum vitae, dapibus ante.
            Nullam ut purus ac odio tristique aliquam. Maecenas vel dictum lorem. Vivamus quis leo sed ex mollis condimentum. Vivamus sollicitudin vitae ante eget hendrerit.
            Curabitur quis egestas lacus, nec placerat metus. Maecenas in gravida arcu. Etiam gravida euismod egestas.
          </p>

          <div className="help__links">
            <Link to="/forgot-password">
              Forgot password?
            </Link>
            <Link to="/">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
