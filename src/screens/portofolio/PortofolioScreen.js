import React, { useState } from "react";
import NavbarScreen from "../../components/NavbarScreen";
import FooterScreen from "../../components/FooterScreen";
import ImageViewer from "react-simple-image-viewer";

const App = () => {
  const [isViewerSitirtaOpen, setIsViewerSitirtaOpen] = useState(false);
  const [isViewerPengaduanOpen, setIsViewerPengaduanOpen] = useState(false);
  const [isViewerKhinezOpen, setIsViewerKhinezOpen] = useState(false);
  const [isViewerGreencityOpen, setIsViewerGreencityOpen] = useState(false);
  const [isViewerDocOpen, setIsViewerDocOpen] = useState(false);
  const [isViewerSchoolOpen, setIsViewerSchoolOpen] = useState(false);
  const [isViewerBumdesOpen, setIsViewerBumdesOpen] = useState(false);
  const [isViewerInventoriesOpen, setIsViewerInventoriesOpen] = useState(false);
  const [isViewerPosOpen, setIsViewerPosOpen] = useState(false);
  const [
    isViewerProgressPemerintahanOpen,
    setIsViewerProgressPemerintahanOpen,
  ] = useState(false);
  const [isViewerLZDeamourOpen, setIsViewerLZDeamourOpen] = useState(false);
  const [isViewerHisanOpen, setIsViewerHisanOpen] = useState(false);
  const [isViewerMultiecommerceOpen, setIsViewerMultiecommerceOpen] =
    useState(false);
  const [isViewerBillinOpen, setIsViewerBillinOpen] = useState(false);
  const [isViewerBookingEngineOpen, setIsViewerBookingEngineOpen] =
    useState(false);
  const [isViewerDayanaFoodOpen, setIsViewerDayanaFoodOpen] = useState(false);
  const [isViewerAuraUmrahOpen, setIsViewerAuraUmrahOpen] = useState(false);
  const [isViewerMzposOpen, setIsViewerMzposOpen] = useState(false);
  const [isViewerSatharOpen, setIsViewerSatharOpen] = useState(false);

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

  const images_billin = [
    require("../../assets/images/portofolio/Billin/auth-login.png"),
    require("../../assets/images/portofolio/Billin/auth-forgot-password.png"),
    require("../../assets/images/portofolio/Billin/dashboard.png"),
    require("../../assets/images/portofolio/Billin/check-ready-room.png"),
    require("../../assets/images/portofolio/Billin/room-index.png"),
    require("../../assets/images/portofolio/Billin/room-create.png"),
    require("../../assets/images/portofolio/Billin/order-index.png"),
    require("../../assets/images/portofolio/Billin/order-create.png"),
    require("../../assets/images/portofolio/Billin/order-print.png"),
    require("../../assets/images/portofolio/Billin/employee-attendance.png"),
    require("../../assets/images/portofolio/Billin/employee-attendance-create.png"),
    require("../../assets/images/portofolio/Billin/employee-salaries.png"),
    require("../../assets/images/portofolio/Billin/employee-salaries-create.png"),
    require("../../assets/images/portofolio/Billin/employee-leave.png"),
    require("../../assets/images/portofolio/Billin/employee-leave-create.png"),
    require("../../assets/images/portofolio/Billin/setting-general.png"),
    require("../../assets/images/portofolio/Billin/setting-notification.png"),
  ];

  const images_booking_engine = [
    require("../../assets/images/portofolio/Booking-Engine/auth-login.png"),
    require("../../assets/images/portofolio/Booking-Engine/auth-forgot-password.png"),
    require("../../assets/images/portofolio/Booking-Engine/dashboard.png"),
    require("../../assets/images/portofolio/Booking-Engine/dashboard-2.png"),
    require("../../assets/images/portofolio/Booking-Engine/room-index.png"),
    require("../../assets/images/portofolio/Booking-Engine/room-create.png"),
    require("../../assets/images/portofolio/Booking-Engine/order-index.png"),
    require("../../assets/images/portofolio/Booking-Engine/order-create.png"),
    require("../../assets/images/portofolio/Booking-Engine/order-create-2.png"),
    require("../../assets/images/portofolio/Booking-Engine/payment-stripe.png"),
    require("../../assets/images/portofolio/Booking-Engine/payment-midtrans.png"),
    require("../../assets/images/portofolio/Booking-Engine/order-print.png"),
    require("../../assets/images/portofolio/Booking-Engine/notification-order.png"),
    require("../../assets/images/portofolio/Booking-Engine/notification-room.png"),
    require("../../assets/images/portofolio/Booking-Engine/change-password.png"),
    require("../../assets/images/portofolio/Booking-Engine/setting-general.png"),
    require("../../assets/images/portofolio/Booking-Engine/setting-template-notification.png"),
  ];

  const images_dayana_food = [
    require("../../assets/images/portofolio/Dayana Food/0.png"),
    require("../../assets/images/portofolio/Dayana Food/1.png"),
    require("../../assets/images/portofolio/Dayana Food/2.png"),
    require("../../assets/images/portofolio/Dayana Food/3.png"),
    require("../../assets/images/portofolio/Dayana Food/4.png"),
    require("../../assets/images/portofolio/Dayana Food/5.png"),
    require("../../assets/images/portofolio/Dayana Food/6.png"),
    require("../../assets/images/portofolio/Dayana Food/7.png"),
    require("../../assets/images/portofolio/Dayana Food/8.png"),
    require("../../assets/images/portofolio/Dayana Food/9.png"),
    require("../../assets/images/portofolio/Dayana Food/10.png"),
    require("../../assets/images/portofolio/Dayana Food/11.png"),
    require("../../assets/images/portofolio/Dayana Food/12.png"),
    require("../../assets/images/portofolio/Dayana Food/13.png"),
    require("../../assets/images/portofolio/Dayana Food/14.png"),
    require("../../assets/images/portofolio/Dayana Food/15.png"),
    require("../../assets/images/portofolio/Dayana Food/16.png"),
    require("../../assets/images/portofolio/Dayana Food/17.png"),
    require("../../assets/images/portofolio/Dayana Food/18.png"),
    require("../../assets/images/portofolio/Dayana Food/19.png"),
    require("../../assets/images/portofolio/Dayana Food/20.png"),
    require("../../assets/images/portofolio/Dayana Food/21.png"),
  ];

  const images_aura_umrah = [
    require("../../assets/images/portofolio/Aura Umrah/0.png"),
    require("../../assets/images/portofolio/Aura Umrah/1.png"),
    require("../../assets/images/portofolio/Aura Umrah/2.png"),
    require("../../assets/images/portofolio/Aura Umrah/3.png"),
    require("../../assets/images/portofolio/Aura Umrah/4.png"),
    require("../../assets/images/portofolio/Aura Umrah/5.png"),
    require("../../assets/images/portofolio/Aura Umrah/6.png"),
    require("../../assets/images/portofolio/Aura Umrah/7.png"),
    require("../../assets/images/portofolio/Aura Umrah/8.png"),
    require("../../assets/images/portofolio/Aura Umrah/9.png"),
    require("../../assets/images/portofolio/Aura Umrah/10.png"),
    require("../../assets/images/portofolio/Aura Umrah/11.png"),
    require("../../assets/images/portofolio/Aura Umrah/12.png"),
    require("../../assets/images/portofolio/Aura Umrah/13.png"),
    require("../../assets/images/portofolio/Aura Umrah/14.png"),
    require("../../assets/images/portofolio/Aura Umrah/15.png"),
    require("../../assets/images/portofolio/Aura Umrah/16.png"),
    require("../../assets/images/portofolio/Aura Umrah/17.png"),
    require("../../assets/images/portofolio/Aura Umrah/18.png"),
    require("../../assets/images/portofolio/Aura Umrah/19.png"),
  ];

  const images_mzpos = [
    require("../../assets/images/portofolio/MZPOS/0.jpg"),
    require("../../assets/images/portofolio/MZPOS/1.jpg"),
    require("../../assets/images/portofolio/MZPOS/2.jpg"),
    require("../../assets/images/portofolio/MZPOS/3.jpg"),
    require("../../assets/images/portofolio/MZPOS/4.jpg"),
    require("../../assets/images/portofolio/MZPOS/5.jpg"),
    require("../../assets/images/portofolio/MZPOS/6.jpg"),
    require("../../assets/images/portofolio/MZPOS/7.jpg"),
    require("../../assets/images/portofolio/MZPOS/8.jpg"),
    require("../../assets/images/portofolio/MZPOS/9.jpg"),
    require("../../assets/images/portofolio/MZPOS/10.jpg"),
    require("../../assets/images/portofolio/MZPOS/11.jpg"),
    require("../../assets/images/portofolio/MZPOS/12.png"),
    require("../../assets/images/portofolio/MZPOS/13.png"),
    require("../../assets/images/portofolio/MZPOS/14.png"),
    require("../../assets/images/portofolio/MZPOS/15.png"),
    require("../../assets/images/portofolio/MZPOS/16.png"),
    require("../../assets/images/portofolio/MZPOS/17.png"),
    require("../../assets/images/portofolio/MZPOS/18.png"),
    require("../../assets/images/portofolio/MZPOS/19.png"),
  ];

  const images_sathar = [
    require("../../assets/images/portofolio/Sathar32/0.png"),
    require("../../assets/images/portofolio/Sathar32/1.png"),
    require("../../assets/images/portofolio/Sathar32/2.png"),
    require("../../assets/images/portofolio/Sathar32/3.png"),
    require("../../assets/images/portofolio/Sathar32/4.png"),
    require("../../assets/images/portofolio/Sathar32/5.png"),
    require("../../assets/images/portofolio/Sathar32/6.png"),
    require("../../assets/images/portofolio/Sathar32/7.png"),
    require("../../assets/images/portofolio/Sathar32/8.png"),
    require("../../assets/images/portofolio/Sathar32/9.png"),
    require("../../assets/images/portofolio/Sathar32/10.png"),
    require("../../assets/images/portofolio/Sathar32/11.png"),
    require("../../assets/images/portofolio/Sathar32/12.png"),
    require("../../assets/images/portofolio/Sathar32/13.png"),
    require("../../assets/images/portofolio/Sathar32/14.png"),
  ];

  const openImageSitirtaViewer = () => {
    setIsViewerSitirtaOpen(true);
  };

  const closeImageSitirtaViewer = () => {
    setIsViewerSitirtaOpen(false);
  };

  const openImagePengaduanViewer = () => {
    setIsViewerPengaduanOpen(true);
  };

  const closeImagePengaduanViewer = () => {
    setIsViewerPengaduanOpen(false);
  };

  const openImageKhinezViewer = () => {
    setIsViewerKhinezOpen(true);
  };

  const closeImageKhinezViewer = () => {
    setIsViewerKhinezOpen(false);
  };

  const openImageGreencityViewer = () => {
    setIsViewerGreencityOpen(true);
  };

  const closeImageGreencityViewer = () => {
    setIsViewerGreencityOpen(false);
  };

  const openImageDocViewer = () => {
    setIsViewerDocOpen(true);
  };

  const closeImageDocViewer = () => {
    setIsViewerDocOpen(false);
  };

  const openImageSchoolViewer = () => {
    setIsViewerSchoolOpen(true);
  };

  const closeImageSchoolViewer = () => {
    setIsViewerSchoolOpen(false);
  };

  const openImageBumdesViewer = () => {
    setIsViewerBumdesOpen(true);
  };

  const closeImageBumdesViewer = () => {
    setIsViewerBumdesOpen(false);
  };

  const openImageInventoriesViewer = () => {
    setIsViewerInventoriesOpen(true);
  };

  const closeImageInventoriesViewer = () => {
    setIsViewerInventoriesOpen(false);
  };

  const openImagePosViewer = () => {
    setIsViewerPosOpen(true);
  };

  const closeImagePosViewer = () => {
    setIsViewerPosOpen(false);
  };

  const openImageProgressPemerintahanViewer = () => {
    setIsViewerProgressPemerintahanOpen(true);
  };

  const closeImageProgressPemerintahanViewer = () => {
    setIsViewerProgressPemerintahanOpen(false);
  };

  const openImageLZDeamourViewer = () => {
    setIsViewerLZDeamourOpen(true);
  };

  const closeImageLZDeamourViewer = () => {
    setIsViewerLZDeamourOpen(false);
  };

  const openImageHisanViewer = () => {
    setIsViewerHisanOpen(true);
  };

  const closeImageHisanViewer = () => {
    setIsViewerHisanOpen(false);
  };

  const openImageMultiecommerceViewer = () => {
    setIsViewerMultiecommerceOpen(true);
  };

  const closeImageMultiecommerceViewer = () => {
    setIsViewerMultiecommerceOpen(false);
  };

  const openImageBillinViewer = () => {
    setIsViewerBillinOpen(true);
  };

  const closeImageBillinViewer = () => {
    setIsViewerBillinOpen(false);
  };

  const openImageBookingEngineViewer = () => {
    setIsViewerBookingEngineOpen(true);
  };

  const closeImageBookingEngineViewer = () => {
    setIsViewerBookingEngineOpen(false);
  };

  const openImageDayanaFoodViewer = () => {
    setIsViewerDayanaFoodOpen(true);
  };

  const closeImageDayanaFoodViewer = () => {
    setIsViewerDayanaFoodOpen(false);
  };

  const openImageAuraUmrahViewer = () => {
    setIsViewerAuraUmrahOpen(true);
  };

  const closeImageAuraUmrahViewer = () => {
    setIsViewerAuraUmrahOpen(false);
  };

  const openImageMzposViewer = () => {
    setIsViewerMzposOpen(true);
  };

  const closeImageMzposViewer = () => {
    setIsViewerMzposOpen(false);
  };

  const openImageSatharViewer = () => {
    setIsViewerSatharOpen(true);
  };

  const closeImageSatharViewer = () => {
    setIsViewerSatharOpen(false);
  };

  return (
    <>
      <div className="portofolio">
        <div>
          <NavbarScreen />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 portofolio-info">
              <p>PORTOFOLIO</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 portofolio-content">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4 portofolio-container mb-2">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={require("../../assets/images/portofolio/Billin/dashboard.png")}
                      alt="Billin"
                      onClick={() => openImageBillinViewer()}
                    />
                    <div className="card-body">
                      <p className="card-title text-center">BILLIN</p>
                      <p className="text-center framework">
                        <small>Next JS (Frontend) & Laravel (Backend)</small>
                      </p>
                      <p className="card-text text-center">
                        Billin is a hotel booking website that has PWA. This
                        website has features such as Rooms, Reservations,
                        Expenses, Reports, HR, Accounting, Reports, and
                        Settings. This website is integrated with Stripe,
                        Paypal, and Midtrans payment gateways. It is also
                        integrated with Push Notification and Whatsapp Gateway.
                        This web is a complex version of Booking Engine
                      </p>
                    </div>
                    {isViewerBillinOpen && (
                      <ImageViewer
                        src={images_billin}
                        currentIndex={0}
                        onClose={() => closeImageBillinViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      src={require("../../assets/images/portofolio/Booking-Engine/dashboard.png")}
                      alt="Booking Engine"
                      onClick={() => openImageBookingEngineViewer()}
                    />
                    <div className="card-body">
                      <p className="card-title text-center">Booking Engine</p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        Booking Engine is a hotel booking website. This website
                        has features such as Rooms, Reservations, Reports,
                        Accounting, and Settings. This website is integrated
                        with Stripe, Paypal, and Midtrans payment gateways. This
                        web is almost the same as Billin but made with Laravel
                        only and its features are simpler.
                      </p>
                    </div>
                    {isViewerBookingEngineOpen && (
                      <ImageViewer
                        src={images_booking_engine}
                        currentIndex={0}
                        onClose={() => closeImageBookingEngineViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      src={require("../../assets/images/portofolio/Dayana Food/1.png")}
                      alt="Dayana Food"
                      onClick={() => openImageDayanaFoodViewer()}
                    />
                    <div className="card-body">
                      <p className="card-title text-center">Dayana Food</p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        Dayana Food is a company-owned e-commerce site in
                        Singapore for online sales of food products. It features
                        a product catalog, shopping cart, order tracking, and a
                        dashboard to monitor orders. The system also supports
                        purchase orders, shopping recommendations to suppliers,
                        sales reports, and integrates with WhatsApp Gateway for
                        notifications and direct communication.
                      </p>
                    </div>
                    {isViewerDayanaFoodOpen && (
                      <ImageViewer
                        src={images_dayana_food}
                        currentIndex={0}
                        onClose={() => closeImageDayanaFoodViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      src={require("../../assets/images/portofolio/Aura Umrah/1.png")}
                      alt="Aura Umrah"
                      onClick={() => openImageAuraUmrahViewer()}
                    />
                    <div className="card-body">
                      <p className="card-title text-center">Aura Umrah</p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        Aura Umrah is a travel service website that provides
                        information and registration for Umrah and Hajj
                        programs. The site is designed to make it easier for
                        companies to manage pilgrim data, arrange departure
                        schedules, organize service packages, and monitor
                        administration efficiently through an integrated
                        dashboard.
                      </p>
                    </div>
                    {isViewerAuraUmrahOpen && (
                      <ImageViewer
                        src={images_aura_umrah}
                        currentIndex={0}
                        onClose={() => closeImageAuraUmrahViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      src={require("../../assets/images/portofolio/MZPOS/12.png")}
                      alt="MZPOS"
                      onClick={() => openImageMzposViewer()}
                    />
                    <div className="card-body">
                      <p className="card-title text-center">MZPOS</p>
                      <p className="text-center framework">
                        <small>
                          React Native (Mobile) & Laravel (Web + API)
                        </small>
                      </p>
                      <p className="card-text text-center">
                        MZPOS is a Point of Sale (POS) system available in
                        mobile and web versions, designed to facilitate the
                        management of sales transactions, stock items, and
                        financial reports. Equipped with a user-friendly cashier
                        interface, product management, and real-time transaction
                        recording. MZPOS also supports integration with receipt
                        printers and monthly sales reports.
                      </p>
                    </div>
                    {isViewerMzposOpen && (
                      <ImageViewer
                        src={images_mzpos}
                        currentIndex={0}
                        onClose={() => closeImageMzposViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      src={require("../../assets/images/portofolio/Sathar32/1.png")}
                      alt="Sathar"
                      onClick={() => openImageSatharViewer()}
                    />
                    <div className="card-body">
                      <p className="card-title text-center">Sathar32</p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        Sathar32 is a web platform that makes maintenance
                        monitoring easy. Equipped with status tracking, task
                        scheduling, and inventory management features, Sathar32
                        allows users to monitor progress in real-time and
                        generate reports to support decision-making.
                      </p>
                    </div>
                    {isViewerSatharOpen && (
                      <ImageViewer
                        src={images_sathar}
                        currentIndex={0}
                        onClose={() => closeImageSatharViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      src={require("../../assets/images/portofolio/Sitirta/Dashboard.png")}
                      alt="Sitirta"
                      onClick={() => openImageSitirtaViewer()}
                    />
                    <div className="card-body">
                      <p className="card-title text-center">SITIRTA</p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        Sitirta is a website used by drinking water
                        entrepreneurs (HIPAM) in managing monthly customer
                        bills. bills per month. It provides features to import
                        customer data and import monthly billing data without
                        having to input one by one. one by one. In addition,
                        there is a billing report feature and arrears report
                        features
                      </p>
                    </div>
                    {isViewerSitirtaOpen && (
                      <ImageViewer
                        src={images_sitirta}
                        currentIndex={0}
                        onClose={() => closeImageSitirtaViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is used to manage product and order data
                        that is integrated with seller accounts at Shopee and
                        Lazada. Users can manage add/change product data and
                        directly connect with Shopee and Lazada.
                      </p>
                    </div>
                    {isViewerMultiecommerceOpen && (
                      <ImageViewer
                        src={images_multiecommerce}
                        currentIndex={0}
                        onClose={() => closeImageMultiecommerceViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="card-title text-center">
                        BHILLNEKA (POINT OF SALES)
                      </p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        Bhillneka is a website for managing sales. On this web,
                        it is integrated with proxy, payment gateway Doku and
                        whatsapp notification as a reminder of the payment
                        payment due date. In addition to mikrotik, this postal
                        system can be used for products such as FNB
                      </p>
                    </div>
                    {isViewerPosOpen && (
                      <ImageViewer
                        src={images_pos}
                        currentIndex={0}
                        onClose={() => closeImagePosViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="card-title text-center">
                        PROGRESS SEKBER MPU
                      </p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is an information system for managing data
                        on joint decisions, cooperation agreements, and action
                        plans. Users can view statistics in the form of Donut
                        Chart to see the number of those who have signed and
                        those who have not. This system has user roles of
                        Governor, Government Bureau, Regional Secretary, and
                        Head of Service.
                      </p>
                    </div>
                    {isViewerProgressPemerintahanOpen && (
                      <ImageViewer
                        src={images_progress_pemerintahan}
                        currentIndex={0}
                        onClose={() => closeImageProgressPemerintahanViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="card-title text-center">
                        HISAN NURUL CHOLIL
                      </p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is an information system used to manage the
                        data of sympathizers and alumni of the Nurul Cholil
                        Nurul Cholil Islamic boarding school.alumni and
                        sympathizers can register independently or registered.
                        This system integrated with whatsapp gateway. In
                        addition to the web version, there is also a mobile
                        version as well.
                      </p>
                    </div>
                    {isViewerHisanOpen && (
                      <ImageViewer
                        src={images_hisan}
                        currentIndex={0}
                        onClose={() => closeImageHisanViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is a web that is used by the LZDeamour
                        brand to manage customer and order data. In addition
                        there is a report to see a recap of transactions from
                        purchase of this LZDeamour product
                      </p>
                    </div>
                    {isViewerLZDeamourOpen && (
                      <ImageViewer
                        src={images_lzdeamour}
                        currentIndex={0}
                        onClose={() => closeImageLZDeamourViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is a goods bookkeeping website. Consists of
                        login features, forgot password, item data, class
                        inventories, master data, website settings. To speed up
                        the bookkeeping process, a feature is provided import
                        from excel
                      </p>
                    </div>
                    {isViewerInventoriesOpen && (
                      <ImageViewer
                        src={images_inventories}
                        currentIndex={0}
                        onClose={() => closeImageInventoriesViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="card-title text-center">
                        COMPANY PROFILE KHINEZ
                      </p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is a company profile website that now used
                        by CV. MITRA TECHNOSAINS. This website consists of a
                        company profile display and also the admin page
                      </p>
                    </div>
                    {isViewerKhinezOpen && (
                      <ImageViewer
                        src={images_khinez}
                        currentIndex={0}
                        onClose={() => closeImageKhinezViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="card-title text-center">
                        MANAGEMENT KEGIATAN PERUSAHAAN
                      </p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is an activity management website
                        activities in a company and has been used by PT.
                        GREENCITI INDONESIA TECHNOLOGY. Consists of management
                        features management features: plainning, cashbills,
                        goods requests, and payroll. . Consists of several
                        roles, namely employee, purchasing, manager, general
                        manager, director, owner, and administrator
                      </p>
                    </div>
                    {isViewerGreencityOpen && (
                      <ImageViewer
                        src={images_greencity}
                        currentIndex={0}
                        onClose={() => closeImageGreencityViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="card-title text-center">
                        PENGIRIMAN DOKUMEN
                      </p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is a document delivery website between
                        agency. Consists of several roles, namely administrator
                        and employee. There are department features,
                        subdepartment, employee, document, user and system log.
                        log
                      </p>
                    </div>
                    {isViewerDocOpen && (
                      <ImageViewer
                        src={images_doc}
                        currentIndex={0}
                        onClose={() => closeImageDocViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is a Village-Owned Enterprise website which
                        aims to manage businesses and to meet the needs of the
                        community. There is a village profile feature, village
                        structure, savings, bills, credit and publications
                      </p>
                    </div>
                    {isViewerBumdesOpen && (
                      <ImageViewer
                        src={images_bumdes}
                        currentIndex={0}
                        onClose={() => closeImageBumdesViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
                      <p className="card-title text-center">
                        PENGADUAN MASYARAKAT
                      </p>
                      <p className="text-center framework">
                        <small>Laravel</small>
                      </p>
                      <p className="card-text text-center">
                        This website is a complaint website to connect village
                        officials with the community. This website consists of 3
                        roles, namely administrators, village officials, and the
                        community. In addition to the complaint feature, there
                        is also a feature of managing incoming funds and
                        outgoing funds that can be seen in the community user
                        account.
                      </p>
                    </div>
                    {isViewerPengaduanOpen && (
                      <ImageViewer
                        src={images_pengaduan}
                        currentIndex={0}
                        onClose={() => closeImagePengaduanViewer()}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: "rgba(0,0,0,0.9)",
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
          <FooterScreen />
        </div>
      </div>
    </>
  );
};

export default App;
