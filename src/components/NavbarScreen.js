import {
    Link,
    NavLink
} from "react-router-dom";
const App = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink tag={Link} className="nav-link" to="/" activeClassName="active">Homes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} className="nav-link" to="/about">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink tag={Link} className="nav-link" to="/portofolio">Portofolio</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right ms-auto mt-lg-0">
                        <li className="nav-item">
                            <NavLink tag={Link} className="nav-link" to="/contact">Contact Me</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default App;