import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <title>My Portfolio</title>
      </div>
      <div>
        <header>
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <h2>About Me</h2>
            <p>Write a brief introduction about yourself.</p>
          </section>
          <section>
            <h2>Portfolio</h2>
            <div className="grid">
              <div className="item">
                <a href="#">
                  <img src="https://via.placeholder.com/400x300" alt="Project Name" />
                  <h3>Project Name</h3>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="https://via.placeholder.com/400x300" alt="Project Name" />
                  <h3>Project Name</h3>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="https://via.placeholder.com/400x300" alt="Project Name" />
                  <h3>Project Name</h3>
                </a>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 My Portfolio</p>
        </footer>
      </div>
    </div>
  )
}

export default App
