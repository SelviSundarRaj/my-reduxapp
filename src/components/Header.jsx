import '../css/form.css';

function Header() {

  return (
   <>
    <div className="homeNav">
        <img className="snapLogo" src="https://www.logo.wine/a/logo/Snapdeal/Snapdeal-White-Dark-Background-Logo.wine.svg" />
        <input type="search" placeholder="Search  products & brands" className="searchBox" />
        <label className="searchLetter"> <i className="fa fa-search" aria-hidden="true"></i>Search </label>
        <label className="cart"> Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i> </label>
        <label className="sign">  Sign in <i className="fa fa-user-circle" aria-hidden="true"></i> </label>
      </div>
   </>
  );
}
export default Header;
