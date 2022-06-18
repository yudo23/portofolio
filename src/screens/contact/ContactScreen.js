import NavbarScreen from "../../components/NavbarScreen";
import FooterScreen from "../../components/FooterScreen";

const App = () => {
    return (
        <>
            <div className="contact">
                <div>
                    <NavbarScreen/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 contact-info">
                            <p>Contact Me</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 contact-content">
                            <div className="detail">
                                <p>
                                    <i className="fa fa-home icon"></i> Jln.Klengkeng RT02 RW02 , Desa Tambakasri , Kec.Tajinan , Kab.Malang , 65172
                                </p>
                            </div>
                            <div className="detail">
                                <p>
                                    <i className="fa fa-whatsapp icon"></i> 089506383344 (Phone)
                                </p>
                            </div>
                            <div className="detail">
                                <p>
                                    <i className="fa fa-whatsapp icon"></i> 085769782106 (Whatsapp)
                                </p>
                            </div>
                            <div className="detail">
                                <p>
                                    <i className="fa fa-envelope icon"></i> yudo.dendy23@gmail.com
                                </p>
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