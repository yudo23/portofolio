import React,{useState} from "react";
import NavbarScreen from "../../components/NavbarScreen";
import FooterScreen from "../../components/FooterScreen";
import ImageViewer from "react-simple-image-viewer";

const App = () => {

    const  [isViewerCbtOpen,setIsViewerCbtOpen] = useState(false);
    const  [isViewerTasOpen,setIsViewerTasOpen] = useState(false);
    const  [isViewerPengaduanOpen,setIsViewerPengaduanOpen] = useState(false);
    const  [isViewerKhinezOpen,setIsViewerKhinezOpen] = useState(false);
    const  [isViewerGreencityOpen,setIsViewerGreencityOpen] = useState(false);
    const  [isViewerDocOpen,setIsViewerDocOpen] = useState(false);
    const  [isViewerSchoolOpen,setIsViewerSchoolOpen] = useState(false);

    const images_cbt = [
        require("../../assets/images/portofolio/cbt-admin.png"),
        require("../../assets/images/portofolio/cbt-guru.png"),
        require("../../assets/images/portofolio/cbt-siswa.png"),
    ];

    const images_tas = [
        require("../../assets/images/portofolio/tas-admin.png"),
        require("../../assets/images/portofolio/tas.png"),
    ];

    const images_pengaduan = [
        require("../../assets/images/portofolio/login-desa.png"),
        require("../../assets/images/portofolio/dashboard_admin.png"),
        require("../../assets/images/portofolio/pengaduan_admin.png"),
        require("../../assets/images/portofolio/dashboard_user_pengaduan.png"),
        require("../../assets/images/portofolio/pengaduan_user.png"),
        require("../../assets/images/portofolio/user_pengaduan.png"),
        require("../../assets/images/portofolio/user_pengaduan_form.png"),
    ];

    const images_khinez = [
        require("../../assets/images/portofolio/khinez-fn-home.png"),
        require("../../assets/images/portofolio/khinez-bn-login.png"),
        require("../../assets/images/portofolio/khinez-bn-dashboard.png"),
        require("../../assets/images/portofolio/khinez-bn-product.png"),
    ];

    const images_greencity = [
        require("../../assets/images/portofolio/greencity-login.png"),
        require("../../assets/images/portofolio/greencity-admin-dashboard.png"),
        require("../../assets/images/portofolio/greencity-admin-plainning.png"),
        require("../../assets/images/portofolio/greencity-admin-plainning-2.png"),
        require("../../assets/images/portofolio/greencity-admin-kasbon.png"),
        require("../../assets/images/portofolio/greencity-admin-itemrequest.png"),
        require("../../assets/images/portofolio/greencity-admin-cuti.png"),
        require("../../assets/images/portofolio/greencity-admin-gaji.png"),
        require("../../assets/images/portofolio/greencity-admin-gaji-3.png"),
        require("../../assets/images/portofolio/greencity-admin-gaji-2.png"),
    ];

    const images_doc = [
        require("../../assets/images/portofolio/eazyDoc-login.png"),
        require("../../assets/images/portofolio/eazyDoc-admin-dashboard.png"),
        require("../../assets/images/portofolio/eazyDoc-admin-department.png"),
        require("../../assets/images/portofolio/eazyDoc-admin-docsend.png"),
        require("../../assets/images/portofolio/eazyDoc-employee-dashboard.png"),
        require("../../assets/images/portofolio/eazyDoc-employee-notif.png"),
    ];

    const images_school = [
        require("../../assets/images/portofolio/login-smp.png"),
        require("../../assets/images/portofolio/admin-smp.png"),
        require("../../assets/images/portofolio/user-smp.png"),
    ];

    const openImageCbtViewer = () => {
        setIsViewerCbtOpen(true);
    }

    const closeImageCbtViewer = () => {
        setIsViewerCbtOpen(false);
    }

    const openImageTasViewer = () => {
        setIsViewerTasOpen(true);
    }

    const closeImageTasViewer = () => {
        setIsViewerTasOpen(false);
    }

    const openImagePengaduanViewer = () => {
        setIsViewerPengaduanOpen(true);
    }

    const closeImagePengaduanViewer = () => {
        setIsViewerPengaduanOpen(false);
    }

    const openImageKhinezViewer = () => {
        setIsViewerKhinezOpen(true);
    }

    const closeImageKhinezViewer = () => {
        setIsViewerKhinezOpen(false);
    }

    const openImageGreencityViewer = () => {
        setIsViewerGreencityOpen(true);
    }

    const closeImageGreencityViewer = () => {
        setIsViewerGreencityOpen(false);
    }

    const openImageDocViewer = () => {
        setIsViewerDocOpen(true);
    }

    const closeImageDocViewer = () => {
        setIsViewerDocOpen(false);
    }

    const openImageSchoolViewer = () => {
        setIsViewerSchoolOpen(true);
    }

    const closeImageSchoolViewer = () => {
        setIsViewerSchoolOpen(false);
    }

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
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/cbt-siswa.png")}
                                            alt="WEB CBT SMK"
                                            onClick={() => openImageCbtViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">WEB CBT SMK</p>
                                            <p className="card-text">Website ini merupakan website untuk membantu guru dalam pelaksanaan ujian berbasis online.Website ini terdari dari 3 role yaitu administrator,guru,siswa</p>
                                        </div>
                                        {isViewerCbtOpen && (
                                            <ImageViewer
                                                src={images_cbt}
                                                currentIndex={0}
                                                onClose={() => closeImageCbtViewer()}
                                                disableScroll={false}
                                                backgroundStyle={{
                                                    backgroundColor : "rgba(0,0,0,0.9)"
                                                }}
                                                closeOnClickOutside={true}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/admin-smp.png")}
                                            alt="WEB SCHOOL PROFILE"
                                            onClick={() => openImageSchoolViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">WEB SCHOOL PROFILE</p>
                                            <p className="card-text">Website ini merupakan website profil sekolah</p>
                                        </div>
                                        {isViewerSchoolOpen && (
                                            <ImageViewer
                                                src={images_school}
                                                currentIndex={0}
                                                onClose={() => closeImageSchoolViewer()}
                                                disableScroll={false}
                                                backgroundStyle={{
                                                    backgroundColor : "rgba(0,0,0,0.9)"
                                                }}
                                                closeOnClickOutside={true}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/dashboard_admin.png")}
                                            alt="WEB PENGADUAN DESA"
                                            onClick={() => openImagePengaduanViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">WEB PENGADUAN DESA</p>
                                            <p className="card-text">Website ini merupakan website pengaduan untuk menghubungkan perangkat desa dengan masyarakatnya . Website ini terdiri dari 3 role yaitu administrator,perangkat desa,dan masyarakat</p>
                                        </div>
                                        {isViewerPengaduanOpen && (
                                            <ImageViewer
                                                src={images_pengaduan}
                                                currentIndex={0}
                                                onClose={() => closeImagePengaduanViewer()}
                                                disableScroll={false}
                                                backgroundStyle={{
                                                    backgroundColor : "rgba(0,0,0,0.9)"
                                                }}
                                                closeOnClickOutside={true}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/khinez-fn-home.png")}
                                            alt="COMPANY PROFILE KHINEZ"
                                            onClick={() => openImageKhinezViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">COMPANY PROFILE KHINEZ</p>
                                            <p className="card-text">Website ini merupakan website company profile yang sekarang sudah dipakai oleh CV. MITRA TECHNOSAINS</p>
                                        </div>
                                        {isViewerKhinezOpen && (
                                            <ImageViewer
                                                src={images_khinez}
                                                currentIndex={0}
                                                onClose={() => closeImageKhinezViewer()}
                                                disableScroll={false}
                                                backgroundStyle={{
                                                    backgroundColor : "rgba(0,0,0,0.9)"
                                                }}
                                                closeOnClickOutside={true}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/greencity-admin-dashboard.png")}
                                            alt="WEBSITE MANAGEMENT KEGIATAN PERUSAHAAN"
                                            onClick={() => openImageGreencityViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">WEBSITE MANAGEMENT KEGIATAN PERUSAHAAN</p>
                                            <p className="card-text">Website ini merupakan website management kegiatan disuatu perusahaan dan sudah dipakai oleh PT. GREENCITI TEKNOLOGI INDONESIA . Terdiri dari fitur manajemen plainning , kasbon , permintaan barang , dan penggajian . Terdiri dari beberapa role yaitu employee,purchasing,manager,general manager,direktur,owner, dan administrator</p>
                                        </div>
                                        {isViewerGreencityOpen && (
                                            <ImageViewer
                                                src={images_greencity}
                                                currentIndex={0}
                                                onClose={() => closeImageGreencityViewer()}
                                                disableScroll={false}
                                                backgroundStyle={{
                                                    backgroundColor : "rgba(0,0,0,0.9)"
                                                }}
                                                closeOnClickOutside={true}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/eazyDoc-admin-dashboard.png")}
                                            alt="WEBSITE PENGIRIMAN DOKUMEN ANTAR INSTANSI"
                                            onClick={() => openImageDocViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">WEBSITE PENGIRIMAN DOKUMEN ANTAR INSTANSI</p>
                                            <p className="card-text">Website ini merupakan website pengiriman dokumen antar instansi . Terdiri dari beberapa role yaitu administrator dan employee</p>
                                        </div>
                                        {isViewerDocOpen && (
                                            <ImageViewer
                                                src={images_doc}
                                                currentIndex={0}
                                                onClose={() => closeImageDocViewer()}
                                                disableScroll={false}
                                                backgroundStyle={{
                                                    backgroundColor : "rgba(0,0,0,0.9)"
                                                }}
                                                closeOnClickOutside={true}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/tas-admin.png")}
                                            alt="WEB TOKO ONLINE"
                                            onClick={() => openImageTasViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">WEB TOKO ONLINE</p>
                                            <p className="card-text">Website ini merupakan website toko online</p>
                                        </div>
                                        {isViewerTasOpen && (
                                            <ImageViewer
                                                src={images_tas}
                                                currentIndex={0}
                                                onClose={() => closeImageTasViewer()}
                                                disableScroll={false}
                                                backgroundStyle={{
                                                    backgroundColor : "rgba(0,0,0,0.9)"
                                                }}
                                                closeOnClickOutside={true}
                                            />
                                        )}
                                    </div>
                                </div>
                                
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