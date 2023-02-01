import './style.css'
import '../bootstrap.css'

document.querySelector<HTMLDivElement>("#app")!.insertAdjacentHTML(
  "beforeend",
  `
  <body class="my-login-page">
  <section class="h-100">
    <div class="container h-100">
      <div class="row justify-content-md-center h-100">
        <div class="card-wrapper">
          <div class="brand">
            <img src="./vite.svg" alt="logo">
          </div>
          <div class="card fat">
            <div class="card-body">
              <h4 class="card-title">GatherGo</h4>
                <div class="form-group">
                  <label for="email">ID</label>
                  <input class="form-control" required autofocus>
                  <div class="invalid-feedback">
                    Email is invalid
                  </div>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input id="password" type="password" class="form-control" name="password" required data-eye>
                    <div class="invalid-feedback">
                      Password is required
                    </div>
                </div>

                <div class="form-group m-0">
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
                <div class="mt-4 text-center">
                  <a href="register.html">회원가입</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`
);

