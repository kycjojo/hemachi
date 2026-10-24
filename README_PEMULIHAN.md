# 🎒 Playful Pocket - Source Code Recovery Report

Proyek ini berhasil dipulihkan secara penuh dari file APK (`app-release.apk` dan `app-debug.apk`) menggunakan decompiler Hermes Bytecode dan ekstraksi aset Android ARSC.

## 📁 Struktur Pemulihan Proyek

### 1. Modul & Komponen Sumber (`decompiled_modules/`)
Semua kode logika, UI, database, dan state management berhasil diekstrak utuh:

| File Decompile | Komponen Asli | Deskripsi |
|---|---|---|
| `module_1075.js` | `App.tsx` | Entry point utama aplikasi, inisialisasi SQLiteProvider & ForceUpdateModal |
| `module_1119.js` | `navigation/MainTabs.tsx` | Navigasi Bottom Tabs (Home, History, Catat Transaksi, Budget, Report, Settings) |
| `module_1389.js` | `constants/theme.ts` | Design system: `COLORS` (Neo-brutalism/sticker palette), `FONTS`, `SHADOWS`, `BORDER` |
| `module_1390.js` | `screens/HomeScreen.tsx` | Dashboard utama: Total Saldo, ringkasan pengeluaran, kartu kategori |
| `module_1391.js` | `store/useTransactionStore.ts` | Zustand store untuk transaksi harian & kalkulasi saldo |
| `1395_insertTransaction.js` | `database/transactionDb.ts` | Query SQLite DAO untuk tabel transaksi (`insert`, `delete`, `select`) |
| `1396_webInsertTransaction.js` | `database/webStorage.ts` | Fallback storage untuk web platform |
| `module_1401.js` | `store/useBudgetStore.ts` | Zustand store untuk alokasi budget per bulan |
| `1402_upsertBudget.js` | `database/budgetDb.ts` | Query SQLite DAO untuk tabel budget |
| `module_1403.js` | `constants/categories.ts` | Konfigurasi kategori (`Kampus`, `Kos`, `Makan`, `Pribadi`) & fungsi `getCategoryImage` |
| `module_1425.js` | `screens/HistoryScreen.tsx` | Layar riwayat transaksi (Filter: Semua, Pemasukan, Pengeluaran) |
| `module_1426.js` | `screens/AddTransactionScreen.tsx` | Form tambah transaksi baru (Input nominal, tanggal, kategori, catatan) |
| `module_1427.js` | `screens/BudgetScreen.tsx` | Layar pengaturan dan monitoring batas anggaran bulanan |
| `module_1428.js` | `screens/ReportScreen.tsx` | Layar analitik & grafik pengeluaran berdasarkan kategori |
| `module_1429.js` | `screens/SettingsScreen.tsx` | Layar menu pengaturan aplikasi |
| `1430_migrateDatabase.js` | `database/migrateDatabase.ts` | Skema database SQLite (`PRAGMA journal_mode = WAL`, tabel `transactions` & `budgets`) |
| `1431_react.js` | `hooks/useForceUpdate.ts` | Hook pemeriksaan versi aplikasi dari remote gist GitHub |
| `module_1432.js` | `components/ForceUpdateModal.tsx` | Modal pop-up update aplikasi jika sedang maintenance |

### 2. File Aset Media (`assets/`)
Sebanyak 28 aset gambar asli (1024x1024 dan 1254x1254) berhasil dicocokkan dari `resources.arsc` dan dipulihkan:
- Ikon Kategori: `campus.png`, `spp.png`, `alat_tulis.png`, `transportasi.png`, `praktikum.png`, `organisasi.png`, `sewa_kos.png`, `air_minum.png`, `internet.png`, `laundry.png`, `perlengkapan_mandi.png`, `makan_harian.png`, `jajan_kopi.png`, `belanja_masak.png`, `hiburan.png`, `pakaian.png`, `kesehatan.png`, `sosial.png`, dll.
- Ikon Aplikasi: `icon.png`, `android-icon-foreground.png`, `android-icon-background.png`, `android-icon-monochrome.png`, `splash.png`, `favicon.png`.

### 3. Konfigurasi Proyek
- `app.json`: Konfigurasi nama aplikasi ("Playful Pocket"), package (`com.anonymous.studentfinanceapp`), tema warna, dan plugin.
- `package.json`: Daftar dependencies Expo, React Native, React Navigation, dan Zustand.
