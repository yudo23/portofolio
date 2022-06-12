import React,{useState} from "react";
import NavbarScreen from "../../components/NavbarScreen";
import FooterScreen from "../../components/FooterScreen";

const App = () => {

    return (
        <>
            <div className="portofolio">
                <div>
                    <NavbarScreen/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 portofolio-info">
                            <p>Portofolio</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 portofolio-content">
                            <div className="row">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterScreen/>
                </div>
            </div>
        </>
    )
}

export default App;