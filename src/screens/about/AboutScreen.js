import NavbarScreen from "../../components/NavbarScreen";
import FooterScreen from "../../components/FooterScreen";

const App = () => {
  return (
    <>
      <div className="about">
        <div>
          <NavbarScreen />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 about-info">
              <p>ABOUT ME</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 about-content">
              <div className="row">
                <div className="col-lg-6 biodata">
                  <p className="title mb-5">About Me</p>
                  <div className="biodata-container">
                    <p className="biodata-name">Nama Lengkap</p>
                    <p className="biodata-value">Yudo Dendy Andriansyah</p>
                  </div>
                  <div className="biodata-container">
                    <p className="biodata-name">Jenis Kelamin</p>
                    <p className="biodata-value">Laki-Laki</p>
                  </div>
                  <div className="biodata-container">
                    <p className="biodata-name">Tempat , Tanggal Lahir</p>
                    <p className="biodata-value">Depok, 29 September 2001</p>
                  </div>
                  <div className="biodata-container">
                    <p className="biodata-name">Status</p>
                    <p className="biodata-value">Belum Menikah</p>
                  </div>
                  <div className="biodata-container">
                    <p className="biodata-name">Whatsapp</p>
                    <p className="biodata-value"><a href='https://api.whatsapp.com/send/?phone=6289506383344&text&app_absent=0' target="_blank">089506383344</a></p>
                  </div>
                  <div className="biodata-container">
                    <p className="biodata-name">Alamat</p>
                    <p className="biodata-value">
                      Malang, Jawa Timur
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 pendidikan">
                  <p className="title mb-5">Education</p>
                  <div className="pendidikan-container">
                    <p>
                      <i className="fa fa-university icon"></i> UNIVERSITAS NEGERI MALANG{" "}
                      <span className="lulus">(2021 - 2025)</span>
                    </p>
                    <p>
                      <i className="fa fa-university icon"></i> SMKN 04 MALANG -
                      RPL <span className="lulus">(LULUS)</span>
                    </p>
                    <p>
                      <i className="fa fa-university icon"></i> SMPN 01 BULULAWANG
                      01 <span className="lulus">(LULUS)</span>
                    </p>
                    <p>
                      <i className="fa fa-university icon"></i> SDN TAMBAKASRI
                      01 <span className="lulus">(LULUS)</span>
                    </p>
                    <p>
                      <i className="fa fa-university icon"></i> TK TAMBAKASRI 01{" "}
                      <span className="lulus">(LULUS)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-6 skill">
                  <p className="title mb-5">Kemampuan</p>
                  <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/html.png")}
                          alt="HTML"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">HTML</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/css.png")}
                          alt="CSS"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">CSS</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/js.png")}
                          alt="JAVASCRIPT"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">JAVASCRIPT</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/bootstrap.png")}
                          alt="BOOTSTRAP"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">BOOTSTRAP</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/jquery.png")}
                          alt="JQUERY"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">JQUERY</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/php.png")}
                          alt="PHP"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">PHP</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/mysql.png")}
                          alt="MYSQL"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">MYSQL</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/codeigniter.png")}
                          alt="CODEIGNITER 3"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">CODEIGNITER 3</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/laravel.png")}
                          alt="LARAVEL"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">LARAVEL</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/react.png")}
                          alt="REACT JS"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">REACT JS</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/next-js.png")}
                          alt="NEXT JS"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">NEXT JS</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/react-native.png")}
                          alt="REACT NATIVE"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">REACT NATIVE</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/node.png")}
                          alt="NODE JS"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">NODE JS</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/api.png")}
                          alt="REST API"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">REST API</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/github.png")}
                          alt="GITHUB"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">GITHUB</h7>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12 mb-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={require("../../assets/images/skill/git.png")}
                          alt="GIT"
                        />
                        <div className="card-body text-center">
                          <h7 className="card-title">GIT</h7>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pengalaman">
                  <p className="title mb-5">Pengalaman Kerja</p>
                  <div className="pengalaman-container">
                    <p>
                      <i className="fa fa-building icon"></i>
                      <b> Web Developer</b> - Freelance{" "}
                      <span className="tahun">
                        (Januari 2024 – Sekarang)
                      </span>
                    </p>
                    <p>
                      <i className="fa fa-building icon"></i>
                      <b> Web Developer</b> - PT Vokasi Indonesia Sejahtera{" "}
                      <span className="tahun">
                        (Malang ,10 Juli 2022 – 29 Desember 2023)
                      </span>
                    </p>
                    <p>
                      <i className="fa fa-building icon"></i>
                      <b> Web Developer</b> - PT Vokasi Indonesia Sejahtera{" "}
                      <span className="tahun">
                        (Malang ,29 September 2020 – 31 Mei 2021)
                      </span>
                    </p>
                    <p>
                      <i className="fa fa-building icon"></i>
                      <b> Magang Backend Programmer</b> - PT Universal Big Data{" "}
                      <span className="tahun">
                        (Malang , 28 November 2018 – 16 Juni 2019)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FooterScreen />
        </div>
      </div>
    </>
  );
};

export default App;
