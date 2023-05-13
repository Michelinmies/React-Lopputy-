import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Products📦</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Products</Link>
          </li>
          <li>
            <Link href='/new-product'>Add Product</Link>
          </li>
          <li>
            <Link href='/api/auth/login'>Login</Link>
          </li>
          <li>
            <Link href='/api/auth/logout'>Logout</Link>
          </li>
          <li>
            <Link href='/api/auth/me'>Profile</Link>
          </li>
        

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
