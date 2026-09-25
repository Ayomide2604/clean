export default function TopBar() {
  return (
    <div className="top-bar-area d-none d-lg-block">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7 col-md-12">
            <ul className="top-bar-information">
              <li>
                <i className="ri-mail-line"></i>
                <a href="mailto:780propertycleaners@gmail.com">780propertycleaners@gmail.com</a>
              </li>
              <li>
                <i className="ri-phone-line"></i>
                <a href="tel:7808519719">780-851-9719</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-5 col-md-12">
            <ul className="top-bar-action-list">
              <li><a href="https://www.facebook.com/780propertycleaners" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a></li>
              <li><a href="https://www.instagram.com/780propertycleaners" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}