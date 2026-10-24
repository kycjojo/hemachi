# 🎒 Playful Pocket - Student Finance App

> Aplikasi pencatat keuangan mahasiswa dengan desain *neo-brutalism sticker aesthetic*, penyimpanan lokal cepat *offline-first* menggunakan SQLite, dan pemantauan anggaran per kategori.

---

## 📲 Download & Coba Aplikasi (Android APK)

Anda bisa langsung mengunduh dan menguji file APK yang siap di-install di HP Android:

👉 **[Download PlayfulPocket-v1.0.0.apk (71.6 MB)](./apk/PlayfulPocket-v1.0.0.apk?raw=true)**

### Cara Instalasi di HP Android:
1. Unduh file `PlayfulPocket-v1.0.0.apk` dari link di atas ke smartphone Anda.
2. Buka file APK yang telah diunduh.
3. Jika muncul notifikasi keamanan *"Install unknown apps"* atau *"Izinkan dari sumber ini"*, aktifkan izin instalasi untuk browser/file manager Anda.
4. Tekan **Install** dan buka aplikasi!

---

## ✨ Fitur Utama

- **💰 Dashboard Saldo & Finansial:** Pantau total saldo, arus pemasukan, dan pengeluaran bulanan dalam sekejap.
- **🏷️ Kategori Khusus Mahasiswa:**
  - 🎓 **Kampus:** SPP/UKT, Alat Tulis, Transportasi, Praktikum, Organisasi
  - 🏠 **Kos:** Sewa Kos, Air Minum, Internet, Laundry, Perlengkapan Mandi
  - 🍜 **Makan:** Makan Harian, Jajan/Kopi, Belanja Masak
  - 🎧 **Pribadi:** Pulsa/Data, Hiburan, Pakaian, Kesehatan, Sosial
- **👛 Budget Planner:** Atur batas anggaran bulanan per kategori dan pantau persentase pemakaian melalui kartu interaktif.
- **📋 Riwayat & Filter Transaksi:** Lihat semua catatan keuangan yang dikelompokkan berdasarkan tanggal, serta filter pengeluaran atau pemasukan.
- **📊 Laporan & Tips Hemat:** Analitik visual pengeluaran bulanan disertai tips otomatis untuk kategori dengan pengeluaran terbesar.
- **⚡ Offline-First (SQLite WAL):** Data tersimpan aman di perangkat tanpa memerlukan koneksi internet.
- **🚀 Remote Maintenance / Force Update:** Dilengkapi modal pemberitahuan otomatis jika aplikasi membutuhkan update.

---

## 🛠️ Menjalankan Source Code (Development)

Pastikan Anda telah menginstal **Node.js (v18+)** di komputer Anda.

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/kycjojo/hemachi.git
   cd hemachi
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npx expo start
   ```

4. **Buka di perangkat:**
   - Scan QR code menggunakan aplikasi **Expo Go** di Android.
   - Atau tekan tombol `a` untuk membuka di Android Emulator.

---

## 📁 Struktur Kode

```text
├── App.tsx                     # Entry point (SQLiteProvider, SafeArea, ForceUpdateModal)
├── app.json                    # Konfigurasi nama, icon, splash Expo
├── package.json                # Dependensi React Native & library
├── babel.config.js             # Konfigurasi Babel
├── tsconfig.json               # Konfigurasi TypeScript
├── apk/
│   └── PlayfulPocket-v1.0.0.apk # File APK rilis yang siap di-install
├── assets/                     # 28 aset gambar asli (ikon kategori, logo, splash)
└── src/
    ├── constants/              # theme.ts & categories.ts
    ├── database/               # migrateDatabase.ts, transactionDb.ts, budgetDb.ts
    ├── store/                  # useTransactionStore.ts & useBudgetStore.ts (Zustand)
    ├── hooks/                  # useForceUpdate.ts (remote version check)
    ├── components/             # ForceUpdateModal.tsx
    ├── navigation/             # MainTabs.tsx & AppNavigator
    └── screens/                # HomeScreen, HistoryScreen, AddTransactionScreen, BudgetScreen, ReportScreen, SettingsScreen
```

---

## 📄 Lisensi
Dilisensikan di bawah lisensi MIT.
