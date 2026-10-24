import { CategoryGroup, CategoryItem, IncomeCategoryItem } from '../types';

export const LOCAL_IMAGES: Record<string, any> = {
  campus: require('../../assets/campus.png'),
  spp: require('../../assets/spp.png'),
  alat_tulis: require('../../assets/alat_tulis.png'),
  transportasi: require('../../assets/transportasi.png'),
  praktikum: require('../../assets/praktikum.png'),
  sewa_kos: require('../../assets/sewa_kos.png'),
  air_minum: require('../../assets/air_minum.png'),
  internet: require('../../assets/internet.png'),
  laundry: require('../../assets/laundry.png'),
  perlengkapan_mandi: require('../../assets/perlengkapan_mandi.png'),
  makan_harian: require('../../assets/makan_harian.png'),
  jajan_kopi: require('../../assets/jajan_kopi.png'),
  belanja_masak: require('../../assets/belanja_masak.png'),
  hiburan: require('../../assets/hiburan.png'),
  pakaian: require('../../assets/pakaian.png'),
  kesehatan: require('../../assets/kesehatan.png'),
  sosial: require('../../assets/sosial.png'),
  kos: require('../../assets/kos.png'),
  food: require('../../assets/makanan.png'),
  personal: require('../../assets/pribadi.png'),
  organisasi: require('../../assets/organisasi.png'),
};

export function getCategoryImage(image: string | number | null | undefined): any {
  if (!image) return null;
  if (typeof image === 'string') {
    if (LOCAL_IMAGES[image]) return LOCAL_IMAGES[image];
    return { uri: image };
  }
  return image;
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  { id: "campus", name: "Kampus", color: "#60A5FA", bgColor: "#E0F2FE", image: "campus" },
  { id: "kos", name: "Kos", color: "#4ADE80", bgColor: "#DCFCE7", image: "kos" },
  { id: "food", name: "Makan", color: "#FB923C", bgColor: "#FFEDD5", image: "food" },
  { id: "personal", name: "Pribadi", color: "#A78BFA", bgColor: "#F3E8FF", image: "personal" },
];

export const CATEGORIES: CategoryItem[] = [
  { id: "spp", name: "SPP/UKT", group: "campus", icon: "school", color: "#60A5FA", image: "spp" },
  { id: "alat_tulis", name: "Alat Tulis", group: "campus", icon: "edit", color: "#60A5FA", image: "alat_tulis" },
  { id: "transportasi", name: "Transportasi", group: "campus", icon: "directions-bike", color: "#60A5FA", image: "transportasi" },
  { id: "praktikum", name: "Praktikum", group: "campus", icon: "science", color: "#60A5FA", image: "praktikum" },
  { id: "organisasi", name: "Organisasi", group: "campus", icon: "groups", color: "#60A5FA", image: "organisasi" },
  { id: "sewa_kos", name: "Sewa Kos", group: "kos", icon: "vpn-key", color: "#4ADE80", image: "sewa_kos" },
  { id: "air_minum", name: "Air Minum", group: "kos", icon: "water-drop", color: "#4ADE80", image: "air_minum" },
  { id: "internet", name: "Internet", group: "kos", icon: "router", color: "#4ADE80", image: "internet" },
  { id: "laundry", name: "Laundry", group: "kos", icon: "local-laundry-service", color: "#4ADE80", image: "laundry" },
  { id: "perlengkapan_mandi", name: "Perlengkapan Mandi", group: "kos", icon: "soap", color: "#4ADE80", image: "perlengkapan_mandi" },
  { id: "makan_harian", name: "Makan Harian", group: "food", icon: "restaurant", color: "#FB923C", image: "makan_harian" },
  { id: "jajan_kopi", name: "Jajan/Kopi", group: "food", icon: "local-cafe", color: "#FB923C", image: "jajan_kopi" },
  { id: "belanja_masak", name: "Belanja Masak", group: "food", icon: "shopping-cart", color: "#FB923C", image: "belanja_masak" },
  { id: "pulsa_data", name: "Pulsa/Data", group: "personal", icon: "smartphone", color: "#A78BFA", image: "internet" },
  { id: "hiburan", name: "Hiburan", group: "personal", icon: "headphones", color: "#A78BFA", image: "hiburan" },
  { id: "pakaian", name: "Pakaian", group: "personal", icon: "checkroom", color: "#A78BFA", image: "pakaian" },
  { id: "kesehatan", name: "Kesehatan", group: "personal", icon: "medical-services", color: "#A78BFA", image: "kesehatan" },
  { id: "sosial", name: "Sosial", group: "personal", icon: "card-giftcard", color: "#A78BFA", image: "sosial" },
];

export const INCOME_CATEGORIES: IncomeCategoryItem[] = [
  { id: "uang_bulanan", name: "Uang Bulanan", icon: "mail", color: "#2DD4BF" },
  { id: "beasiswa", name: "Beasiswa", icon: "school", color: "#2DD4BF" },
  { id: "kerja_partime", name: "Kerja Part-time", icon: "work", color: "#2DD4BF" },
  { id: "lainnya", name: "Lainnya", icon: "more-horiz", color: "#2DD4BF" },
];
