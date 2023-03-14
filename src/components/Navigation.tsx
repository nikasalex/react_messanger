import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-blue-900 items-center text-blue-100">
      <span className="font-bold">
        <Link to="/">My Messanger</Link>
      </span>

      <span>
        <Link to="/" className="mr-3">
          Sign in
        </Link>
        <Link to="/signup" className="mr-3">
          Sign up
        </Link>
        <Link to="/forgotpass">Forgot password</Link>
      </span>
    </nav>
  );
}
