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
    const  [isViewerOlshopOpen,setIsViewerOlshopOpen] = useState(false);
    const  [isViewerBumdesOpen,setIsViewerBumdesOpen] = useState(false);
    const  [isViewerInventoriesOpen,setIsViewerInventoriesOpen] = useState(false);

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

    const images_olshop = [
        require("../../assets/images/portofolio/olshop-home.png"),
        require("../../assets/images/portofolio/olshop-product.png"),
        require("../../assets/images/portofolio/olshop-faq.png"),
        require("../../assets/images/portofolio/olshop-resi.png"),
        require("../../assets/images/portofolio/olshop-admin-product.png"),
        require("../../assets/images/portofolio/olshop-admin-resi.png"),
    ];

    const images_bumdes = [
        require("../../assets/images/portofolio/bumdes-login.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-dashboard.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-tabungan.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-tagihan.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-invoice.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-invoice-2.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-kredit.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-angsuran.png"),
        require("../../assets/images/portofolio/bumdes-bumdes-struktur.png"),
    ];

    const images_inventories = [
        require("../../assets/images/portofolio/inventories-2.jpg"),
        require("../../assets/images/portofolio/inventories-1.jpg"),
        require("../../assets/images/portofolio/inventories-6.jpg"),
        require("../../assets/images/portofolio/inventories-3.jpg"),
        require("../../assets/images/portofolio/inventories-4.jpg"),
        require("../../assets/images/portofolio/inventories-5.jpg"),
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

    const openImageOlshopViewer = () => {
        setIsViewerOlshopOpen(true);
    }

    const closeImageOlshopViewer = () => {
        setIsViewerOlshopOpen(false);
    }

    const openImageBumdesViewer = () => {
        setIsViewerBumdesOpen(true);
    }

    const closeImageBumdesViewer = () => {
        setIsViewerBumdesOpen(false);
    }

    const openImageInventoriesViewer = () => {
        setIsViewerInventoriesOpen(true);
    }

    const closeImageInventoriesViewer = () => {
        setIsViewerInventoriesOpen(false);
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
                                            src={require("../../assets/images/portofolio/inventories-2.jpg")}
                                            alt="INVENTORIES"
                                            onClick={() => openImageInventoriesViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">INVENTORIES</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text">Website ini merupakan website pembukuan barang . Terdiri dari fitur login, lupa password,  data barang , inventories kelas, master data , pengaturan website</p>
                                        </div>
                                        {isViewerInventoriesOpen && (
                                            <ImageViewer
                                                src={images_inventories}
                                                currentIndex={0}
                                                onClose={() => closeImageInventoriesViewer()}
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
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text">Website ini merupakan website company profile yang sekarang sudah dipakai oleh CV. MITRA TECHNOSAINS . Website ini terdiri dari tampilan company profile nya dan juga halaman admin</p>
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
                                            <p className="card-title text-center">MANAGEMENT KEGIATAN PERUSAHAAN</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
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
                                            alt="WEBSITE PENGIRIMAN DOKUMEN"
                                            onClick={() => openImageDocViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">PENGIRIMAN DOKUMEN</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text">Website ini merupakan website pengiriman dokumen antar instansi . Terdiri dari beberapa role yaitu administrator dan employee . Terdapat fitur department , subdepartment , employee , document , user dan system log</p>
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
                                            src={require("../../assets/images/portofolio/bumdes-bumdes-dashboard.png")}
                                            alt="BUMDES"
                                            onClick={() => openImageBumdesViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">BUMDES</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text">Website ini merupakan website Badan Usaha Milik Desa yang bertujuan untuk mengelola usaha dan guna memenuhi kebutuhan masyarakatnya . Terdapat fitur profil desa , struktur desa , tabungan , tagihan , kredit dan publikasi</p>
                                        </div>
                                        {isViewerBumdesOpen && (
                                            <ImageViewer
                                                src={images_bumdes}
                                                currentIndex={0}
                                                onClose={() => closeImageBumdesViewer()}
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
                                            alt="WEB PENGADUAN MASYARAKAT"
                                            onClick={() => openImagePengaduanViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">PENGADUAN MASYARAKAT</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text">Website ini merupakan website pengaduan untuk menghubungkan perangkat desa dengan masyarakatnya . Website ini terdiri dari 3 role yaitu administrator,perangkat desa,dan masyarakat . Selain fitur pengaduan juga terdapat fitur pengelolaan dana masuk dan dana keluar yang dapat dilihat di akun user masyarakat</p>
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
                                            src={require("../../assets/images/portofolio/olshop-product.png")}
                                            alt="WEBSITE SIMPLE OLSHOP"
                                            onClick={() => openImageOlshopViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">SIMPLE OLSHOP</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text">Website ini merupakan website toko online sederhana . Terdiri dari halaman online shop dan halaman adminya . Terdapat fitur kategori produk , produk , faq , resi , rekening bank , sosmed , testimonial , inbox , banner home dan setting website</p>
                                        </div>
                                        {isViewerOlshopOpen && (
                                            <ImageViewer
                                                src={images_olshop}
                                                currentIndex={0}
                                                onClose={() => closeImageOlshopViewer()}
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
                                            src={require("../../assets/images/portofolio/cbt-siswa.png")}
                                            alt="WEB CBT SMK"
                                            onClick={() => openImageCbtViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">CBT SMK</p>
                                            <p className="text-center framework"><small>Codeigniter 3</small></p>
                                            <p className="card-text">Website ini merupakan website untuk membantu guru dalam pelaksanaan ujian berbasis online.Website ini terdari dari 3 role yaitu administrator,guru,siswa . Siswa memasukkan token yang telah dibuat guru sebelum memulai ujian</p>
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
                                            <p className="card-title text-center">SCHOOL PROFIL</p>
                                            <p className="text-center framework"><small>Codeigniter 3</small></p>
                                            <p className="card-text">Website ini merupakan website profil sekolah . Website ini terdiri dari fitur blog , guru , pengumuman , agenda , download , galeri , informasi PPDB, dan pengaturan website</p>
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
                                            src={require("../../assets/images/portofolio/tas-admin.png")}
                                            alt="WEB TOKO ONLINE"
                                            onClick={() => openImageTasViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">TOKO ONLINE</p>
                                            <p className="text-center framework"><small>Codeigniter 3</small></p>
                                            <p className="card-text">Website ini merupakan website toko online . Web ini sudah menggunakan API rajaongkir untuk mendapatkan ongkir secara otomatis</p>
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