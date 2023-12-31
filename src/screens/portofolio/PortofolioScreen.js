import React,{useState} from "react";
import NavbarScreen from "../../components/NavbarScreen";
import FooterScreen from "../../components/FooterScreen";
import ImageViewer from "react-simple-image-viewer";

const App = () => {
    const  [isViewerSitirtaOpen,setIsViewerSitirtaOpen] = useState(false);
    const  [isViewerPengaduanOpen,setIsViewerPengaduanOpen] = useState(false);
    const  [isViewerKhinezOpen,setIsViewerKhinezOpen] = useState(false);
    const  [isViewerGreencityOpen,setIsViewerGreencityOpen] = useState(false);
    const  [isViewerDocOpen,setIsViewerDocOpen] = useState(false);
    const  [isViewerSchoolOpen,setIsViewerSchoolOpen] = useState(false);
    const  [isViewerBumdesOpen,setIsViewerBumdesOpen] = useState(false);
    const  [isViewerInventoriesOpen,setIsViewerInventoriesOpen] = useState(false);
    const  [isViewerPosOpen,setIsViewerPosOpen] = useState(false);
    const  [isViewerProgressPemerintahanOpen,setIsViewerProgressPemerintahanOpen] = useState(false);
    const  [isViewerLZDeamourOpen,setIsViewerLZDeamourOpen] = useState(false);
    const  [isViewerHisanOpen,setIsViewerHisanOpen] = useState(false);
    const  [isViewerMultiecommerceOpen,setIsViewerMultiecommerceOpen] = useState(false);

    const images_sitirta = [
        require("../../assets/images/portofolio/Sitirta/Cek Tagihan.png"),
        require("../../assets/images/portofolio/Sitirta/Login.png"),
        require("../../assets/images/portofolio/Sitirta/Lupa Password.png"),
        require("../../assets/images/portofolio/Sitirta/Dashboard.png"),
        require("../../assets/images/portofolio/Sitirta/Pelanggan.png"),
        require("../../assets/images/portofolio/Sitirta/Pemakaian Import.png"),
        require("../../assets/images/portofolio/Sitirta/Pemakaian.png"),
        require("../../assets/images/portofolio/Sitirta/Pemakaian Import.png"),
        require("../../assets/images/portofolio/Sitirta/Tagihan.png"),
        require("../../assets/images/portofolio/Sitirta/Laporan Pendapatan.png"),
        require("../../assets/images/portofolio/Sitirta/Laporan Tahunan.png"),
        require("../../assets/images/portofolio/Sitirta/Laporan Pemutusan.png"),
        require("../../assets/images/portofolio/Sitirta/Laporan Tunggakan.png"),
        require("../../assets/images/portofolio/Sitirta/User.png"),
        require("../../assets/images/portofolio/Sitirta/User Tambah.png"),
        require("../../assets/images/portofolio/Sitirta/Notifikasi.png"),
        require("../../assets/images/portofolio/Sitirta/Perusahaan.png"),
        require("../../assets/images/portofolio/Sitirta/User.png"),
        require("../../assets/images/portofolio/Sitirta/User Tambah.png"),
        require("../../assets/images/portofolio/Sitirta/Pengaturan Dashboard.png"),
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
        require("../../assets/images/portofolio/Inventories/Dashboard.png"),
        require("../../assets/images/portofolio/Inventories/Login.png"),
        require("../../assets/images/portofolio/Inventories/Lupa Password.png"),
        require("../../assets/images/portofolio/Inventories/Buku Induk.png"),
        require("../../assets/images/portofolio/Inventories/Buku Induk Import.png"),
        require("../../assets/images/portofolio/Inventories/Kelas.png"),
        require("../../assets/images/portofolio/Inventories/Ruangan.png"),
        require("../../assets/images/portofolio/Inventories/Notifikasi.png"),
        require("../../assets/images/portofolio/Inventories/Pengaturan Dashboard.png"),
    ];

    const images_pos = [
        require("../../assets/images/portofolio/pointofsales/Login.jpg"),
        require("../../assets/images/portofolio/pointofsales/Lupa Password.jpg"),
        require("../../assets/images/portofolio/pointofsales/Dashboard.jpg"),
        require("../../assets/images/portofolio/pointofsales/User.jpg"),
        require("../../assets/images/portofolio/pointofsales/User Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Produk.jpg"),
        require("../../assets/images/portofolio/pointofsales/Produk Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales//Penjualan.jpg"),
        require("../../assets/images/portofolio/pointofsales/Order Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Doku Payment.jpg"),
        require("../../assets/images/portofolio/pointofsales/WA unpaid.jpg"),
        require("../../assets/images/portofolio/pointofsales/WA unpaid.jpg"),
        require("../../assets/images/portofolio/pointofsales/Winbox PPPOE.jpg"),
        require("../../assets/images/portofolio/pointofsales/Winbox PPPOE.jpg"),
        require("../../assets/images/portofolio/pointofsales/Bisnis.jpg"),
        require("../../assets/images/portofolio/pointofsales/Bisnis Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Akuntan.jpg"),
        require("../../assets/images/portofolio/pointofsales/Akuntan Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Inventaris.jpg"),
        require("../../assets/images/portofolio/pointofsales/Inventaris Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Pesan Siaran.jpg"),
        require("../../assets/images/portofolio/pointofsales/Pesan Siaran Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Rekening Pengguna.jpg"),
        require("../../assets/images/portofolio/pointofsales/Rekening Pengguna Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Laporan Pendapatan.jpg"),
        require("../../assets/images/portofolio/pointofsales/Laporan Order Mikrotik.jpg"),
        require("../../assets/images/portofolio/pointofsales/Bisnis.jpg"),
        require("../../assets/images/portofolio/pointofsales/Bisnis Tambah.jpg"),
        require("../../assets/images/portofolio/pointofsales/Pengaturan Dashboard.jpg"),
        require("../../assets/images/portofolio/pointofsales/Notifikasi.jpg"),
        require("../../assets/images/portofolio/pointofsales/Landing Page/Home.jpg"),
        require("../../assets/images/portofolio/pointofsales/Landing Page/Tentang Kami.jpg"),
        require("../../assets/images/portofolio/pointofsales/Landing Page/Hubungi Kami.jpg"),
        require("../../assets/images/portofolio/pointofsales/Landing Page/Cek Status Pesanan.jpg"),
    ];

    const images_progress_pemerintahan = [
        require("../../assets/images/portofolio/Progress Pemerintahan/Login.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Lupa Password.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Dashboard.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Kesepakatan Bersama.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Perjanjian Kerjasama.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Rencana Aksi.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Semua Statistik.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Statistik Keputusan Bersama.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Statistik Perjanjian Kerjasama.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Statisstik Renca Aksi.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Notifikasi.png"),
        require("../../assets/images/portofolio/Progress Pemerintahan/Pengaturan Dashboard.png"),
    ];

    const images_lzdeamour = [
        require("../../assets/images/portofolio/Lz Deamour/Login.png"),
        require("../../assets/images/portofolio/Lz Deamour/Lupa Password.png"),
        require("../../assets/images/portofolio/Lz Deamour/Dashboard.png"),
        require("../../assets/images/portofolio/Lz Deamour/Pelanggan.png"),
        require("../../assets/images/portofolio/Lz Deamour/Produk.png"),
        require("../../assets/images/portofolio/Lz Deamour/Pesanan.png"),
        require("../../assets/images/portofolio/Lz Deamour/Pesanan Tambah.png"),
        require("../../assets/images/portofolio/Lz Deamour/Laporan Pendapatan.png"),
        require("../../assets/images/portofolio/Lz Deamour/Notifikasi.png"),
        require("../../assets/images/portofolio/Lz Deamour/Pengaturan Dashboard.png"),
    ];

    const images_hisan = [
        require("../../assets/images/portofolio/Hisan NC/Mobile/Splash.png"),
        require("../../assets/images/portofolio/Hisan NC/Mobile/Login.png"),
        require("../../assets/images/portofolio/Hisan NC/Mobile/Lupa Password.png"),
        require("../../assets/images/portofolio/Hisan NC/Mobile/Alquran.png"),
        require("../../assets/images/portofolio/Hisan NC/Mobile/Doa.png"),
        require("../../assets/images/portofolio/Hisan NC/Login.png"),
        require("../../assets/images/portofolio/Hisan NC/Register.png"),
        require("../../assets/images/portofolio/Hisan NC/Verifikasi OTP.png"),
        require("../../assets/images/portofolio/Hisan NC/Dashboard.png"),
        require("../../assets/images/portofolio/Hisan NC/User.png"),
        require("../../assets/images/portofolio/Hisan NC/User Tambah.png"),
        require("../../assets/images/portofolio/Hisan NC/Cabang.png"),
        require("../../assets/images/portofolio/Hisan NC/Cabang Tambah.png"),
        require("../../assets/images/portofolio/Hisan NC/Notifikasi.png"),
    ];

    const images_multiecommerce = [
        require("../../assets/images/portofolio/Multiecommerce/Login.png"),
        require("../../assets/images/portofolio/Multiecommerce/Lupa Password.png"),
        require("../../assets/images/portofolio/Multiecommerce/Dashboard Customer.png"),
        require("../../assets/images/portofolio/Multiecommerce/Produk Lazada List.png"),
        require("../../assets/images/portofolio/Multiecommerce/Produk Lazada Tambaht.png"),
        require("../../assets/images/portofolio/Multiecommerce/Produk Shopee List.png"),
        require("../../assets/images/portofolio/Multiecommerce/Produk Shopee Tambah.png"),
        require("../../assets/images/portofolio/Multiecommerce/User.png"),
        require("../../assets/images/portofolio/Multiecommerce/User Tambah.png"),
        require("../../assets/images/portofolio/Multiecommerce/Notifikasi.png"),
        require("../../assets/images/portofolio/Multiecommerce/Pengaturan Dashboard.png"),
    ];

    const openImageSitirtaViewer = () => {
        setIsViewerSitirtaOpen(true);
    }

    const closeImageSitirtaViewer = () => {
        setIsViewerSitirtaOpen(false);
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

    const openImagePosViewer = () => {
        setIsViewerPosOpen(true);
    }

    const closeImagePosViewer = () => {
        setIsViewerPosOpen(false);
    }

    const openImageProgressPemerintahanViewer = () => {
        setIsViewerProgressPemerintahanOpen(true);
    }

    const closeImageProgressPemerintahanViewer = () => {
        setIsViewerProgressPemerintahanOpen(false);
    }

    const openImageLZDeamourViewer = () => {
        setIsViewerLZDeamourOpen(true);
    }

    const closeImageLZDeamourViewer = () => {
        setIsViewerLZDeamourOpen(false);
    }

    const openImageHisanViewer = () => {
        setIsViewerHisanOpen(true);
    }

    const closeImageHisanViewer = () => {
        setIsViewerHisanOpen(false);
    }
    
    const openImageMultiecommerceViewer = () => {
        setIsViewerMultiecommerceOpen(true);
    }

    const closeImageMultiecommerceViewer = () => {
        setIsViewerMultiecommerceOpen(false);
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
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-4 portofolio-container mb-2">
                                    <div className="card">
                                        <img 
                                            className="card-img-top" 
                                            src={require("../../assets/images/portofolio/Sitirta/Dashboard.png")}
                                            alt="Sitirta"
                                            onClick={() => openImageSitirtaViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">SITIRTA</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text text-center">Sitirta merupakan website yang digunakan oleh pengusaha air minum (HIPAM) dalam mengelola tagihan pelanggan perbulannya . Disediakan fitur import data pelanggan dan import data tagihan perbulannya tanpa harus menginput satu persatu . Selain itu terdapat fitur laporan tagihan dan tunggakan</p>
                                        </div>
                                        {isViewerSitirtaOpen && (
                                            <ImageViewer
                                                src={images_sitirta}
                                                currentIndex={0}
                                                onClose={() => closeImageSitirtaViewer()}
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
                                            src={require("../../assets/images/portofolio/Multiecommerce/Dashboard Customer.png")}
                                            alt="Multiecommerce"
                                            onClick={() => openImageMultiecommerceViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">MULTIECOMMERCE</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text text-center">Website ini digunakan untuk mengelola data produk dan pesanan yang terintegrasi dengan akun penjual di Shopee dan Lazada. Pengguna dapat mengelola menambahkan / mengubah data produk dan langsung terhubung dengan Shopee dan Lazada</p>
                                        </div>
                                        {isViewerMultiecommerceOpen && (
                                            <ImageViewer
                                                src={images_multiecommerce}
                                                currentIndex={0}
                                                onClose={() => closeImageMultiecommerceViewer()}
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
                                            src={require("../../assets/images/portofolio/pointofsales/Penjualan.jpg")}
                                            alt="POS"
                                            onClick={() => openImagePosViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">BHILLNEKA (POINT OF SALES)</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text text-center">Bhillneka merupakan website untuk mengelola penjualan. Pada web ini terintegrasi dengan mikrotik , payment gateway Doku dan notifikasi whatsapp sebagai pengingat tempo pembayaran. Selain untuk mikrotik, sistem pos ini dapat digunakan untuk produk seperti FNB</p>
                                        </div>
                                        {isViewerPosOpen && (
                                            <ImageViewer
                                                src={images_pos}
                                                currentIndex={0}
                                                onClose={() => closeImagePosViewer()}
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
                                            src={require("../../assets/images/portofolio/Progress Pemerintahan/Statistik Keputusan Bersama.png")}
                                            alt="Progress Sekber MPU"
                                            onClick={() => openImageProgressPemerintahanViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">PROGRESS SEKBER MPU</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text text-center">Website ini merupakan sistem informasi untuk mengelola data keputusan bersama , pernjanjian kerjasama, dan rencana aksi. Pengguna dapat melihat statistik berupa Donut Chart untuk melihat jumlah yang sudah tanda tangan dan yang belum. Sistem ini memiliki role pengguna Gubernur, Biro Pemerintahan, Sekretaris Daerah,dan Kepala Dinas.</p>
                                        </div>
                                        {isViewerProgressPemerintahanOpen && (
                                            <ImageViewer
                                                src={images_progress_pemerintahan}
                                                currentIndex={0}
                                                onClose={() => closeImageProgressPemerintahanViewer()}
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
                                            src={require("../../assets/images/portofolio/Hisan NC/User.png")}
                                            alt="Hisan"
                                            onClick={() => openImageHisanViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">HISAN NURUL CHOLIL</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text text-center">Website ini merupakan sistem informasi yang digunakan untuk mengelola data simpatisan dan alumni dari pondok pesantren Nurul Cholil.Alumni dan simpatisan dapat daftar secara mandiri maupun didaftarkan. Sistem ini terintegrasi dengan whatsapp gateway. Selain versi webnya, juga terdapat versi mobilenya juga.</p>
                                        </div>
                                        {isViewerHisanOpen && (
                                            <ImageViewer
                                                src={images_hisan}
                                                currentIndex={0}
                                                onClose={() => closeImageHisanViewer()}
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
                                            src={require("../../assets/images/portofolio/Lz Deamour/Dashboard.png")}
                                            alt="LZDeamour"
                                            onClick={() => openImageLZDeamourViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">LZDeamour</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text text-center">Website ini merupakan web yang digunakan brand LZDeamour untuk mengelola data pelanggan dan pesanan. Selain itu terdapat laporan untuk melihat rekap transaksi dari pembelian produk LZDeamour ini</p>
                                        </div>
                                        {isViewerLZDeamourOpen && (
                                            <ImageViewer
                                                src={images_lzdeamour}
                                                currentIndex={0}
                                                onClose={() => closeImageLZDeamourViewer()}
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
                                            src={require("../../assets/images/portofolio/Inventories/Buku Induk.png")}
                                            alt="INVENTORIES"
                                            onClick={() => openImageInventoriesViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">INVENTORIES</p>
                                            <p className="text-center framework"><small>Laravel</small></p>
                                            <p className="card-text text-center">Website ini merupakan website pembukuan barang . Terdiri dari fitur login, lupa password,  data barang , inventories kelas, master data , pengaturan website. Untuk mempercepat proses pembukuan, disediakan fitur import dari excel</p>
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
                                            <p className="card-text text-center">Website ini merupakan website company profile yang sekarang sudah dipakai oleh CV. MITRA TECHNOSAINS . Website ini terdiri dari tampilan company profile nya dan juga halaman admin</p>
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
                                            <p className="card-text text-center">Website ini merupakan website management kegiatan disuatu perusahaan dan sudah dipakai oleh PT. GREENCITI TEKNOLOGI INDONESIA . Terdiri dari fitur manajemen plainning , kasbon , permintaan barang , dan penggajian . Terdiri dari beberapa role yaitu employee,purchasing,manager,general manager,direktur,owner, dan administrator</p>
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
                                            <p className="card-text text-center">Website ini merupakan website pengiriman dokumen antar instansi . Terdiri dari beberapa role yaitu administrator dan employee . Terdapat fitur department , subdepartment , employee , document , user dan system log</p>
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
                                            <p className="card-text text-center">Website ini merupakan website Badan Usaha Milik Desa yang bertujuan untuk mengelola usaha dan guna memenuhi kebutuhan masyarakatnya . Terdapat fitur profil desa , struktur desa , tabungan , tagihan , kredit dan publikasi</p>
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
                                            <p className="card-text text-center">Website ini merupakan website pengaduan untuk menghubungkan perangkat desa dengan masyarakatnya . Website ini terdiri dari 3 role yaitu administrator,perangkat desa,dan masyarakat . Selain fitur pengaduan juga terdapat fitur pengelolaan dana masuk dan dana keluar yang dapat dilihat di akun user masyarakat</p>
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
                                            src={require("../../assets/images/portofolio/admin-smp.png")}
                                            alt="WEB SCHOOL PROFILE"
                                            onClick={() => openImageSchoolViewer()}
                                            
                                        />
                                        <div className="card-body">
                                            <p className="card-title text-center">SCHOOL PROFIL</p>
                                            <p className="text-center framework"><small>Codeigniter 3</small></p>
                                            <p className="card-text text-center">Website ini merupakan website profil sekolah . Website ini terdiri dari fitur blog , guru , pengumuman , agenda , download , galeri , informasi PPDB, dan pengaturan website</p>
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