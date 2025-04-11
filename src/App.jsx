function App() {

  return (
    <>
      {/*header*/}
      <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <i class="fa-solid fa-location-dot fa-2xl"  style={{color: "#74C0CF"}}
        ></i>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2">Home</a></li>
        <li><a href="#" className="nav-link px-2">Destination</a></li>
        <li><a href="#" className="nav-link px-2">Team</a></li>
        <li><a href="#" className="nav-link px-2">Contact</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Register</button>
      </div>
    </header>
    <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Jelajahi Dunia dengan Pengalaman Traveling yang Tak Terlupakan</h1>
<p class="lead">Segera rencanakan petualangan Anda dan temukan destinasi menakjubkan di seluruh dunia dengan situs kami. Dapatkan tips perjalanan, panduan destinasi, dan penawaran terbaik untuk membuat perjalanan Anda lebih mudah dan menyenangkan. Bergabunglah dengan komunitas traveler kami dan mulailah petualangan Anda hari ini!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Go</button>
 </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
    	<img class="rounded-lg-3" src="https://picsum.photos/720/" alt="" width="720"/>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default App
