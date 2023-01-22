
import { Link } from 'react-router-dom';
import './Navbar.css';
function App() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VIT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Student</a>
          </li>
          {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </ul>
        <div class="avatar">
      <img src="https://picsum.photos/id/1011/500/500" class="avatar__image"/>
  </div>
      </div>
    </div>
  </nav>
  );
}

export default App;