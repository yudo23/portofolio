import NavbarScreen from "../../components/NavbarScreen";
import FooterScreen from "../../components/FooterScreen";
import {
    Link
} from "react-router-dom";

const App = () => {
    return (
        <>
            <div className="myBg">
                <NavbarScreen/>
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
                <div className="container big">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <div className="big-title">
                                <p className="big-title-hello">Hello , </p>
                                <p className="big-title-name">I'am Yudo Dendy Andriansyah</p>
                                <p className="big-title-hello">FULLSTACK DEVELOPER</p>
                                <div className="d-flex align-item-center mt-3 big-btn">
                                    <Link className="btn-custom-primary" to="/about">
                                        ABOUT ME
                                    </Link>
                                    <Link className="btn-custom-white" to="/portofolio">
                                        GET PORTOFOLIO
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <div className="big-background">
                                <img
                                    className="big-background-img"
                                    src={require("../../assets/images/background.png")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <FooterScreen/>
            </div>
        </>
    )
}

export default App;