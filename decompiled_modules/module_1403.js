// Module ID: 1403
// Function ID: 1405
// Dependencies: [1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424]
// Exports: getCategoryImage

// Module 1403
const require = globalThis.__r;

const obj5 = { campus: require("AssetRegistry"), spp: require("AssetRegistry"), alat_tulis: require("AssetRegistry"), transportasi: require("AssetRegistry"), praktikum: require("AssetRegistry"), sewa_kos: require("AssetRegistry"), air_minum: require("AssetRegistry"), internet: require("AssetRegistry"), laundry: require("AssetRegistry"), perlengkapan_mandi: require("AssetRegistry"), makan_harian: require("AssetRegistry"), jajan_kopi: require("AssetRegistry"), belanja_masak: require("AssetRegistry"), hiburan: require("AssetRegistry"), pakaian: require("AssetRegistry"), kesehatan: require("AssetRegistry"), sosial: require("AssetRegistry"), kos: require("AssetRegistry"), food: require("AssetRegistry"), personal: require("AssetRegistry"), organisasi: require("AssetRegistry") };
const items = [{ id: "campus", name: "Kampus", color: "#60A5FA", bgColor: "#E0F2FE", image: "campus" }, { id: "kos", name: "Kos", color: "#4ADE80", bgColor: "#DCFCE7", image: "kos" }, { id: "food", name: "Makan", color: "#FB923C", bgColor: "#FFEDD5", image: "food" }, { id: "personal", name: "Pribadi", color: "#A78BFA", bgColor: "#F3E8FF", image: "personal" }];
const items1 = [{ id: "spp", name: "SPP/UKT", group: "campus", icon: "school", color: "#60A5FA", image: "spp" }, { id: "alat_tulis", name: "Alat Tulis", group: "campus", icon: "edit", color: "#60A5FA", image: "alat_tulis" }, { id: "transportasi", name: "Transportasi", group: "campus", icon: "directions_bike", color: "#60A5FA", image: "transportasi" }, { id: "praktikum", name: "Praktikum", group: "campus", icon: "science", color: "#60A5FA", image: "praktikum" }, { id: "organisasi", name: "Organisasi", group: "campus", icon: "groups", color: "#60A5FA", image: "organisasi" }, { id: "sewa_kos", name: "Sewa Kos", group: "kos", icon: "key", color: "#4ADE80", image: "sewa_kos" }, { id: "air_minum", name: "Air Minum", group: "kos", icon: "water_drop", color: "#4ADE80", image: "air_minum" }, { id: "internet", name: "Internet", group: "kos", icon: "router", color: "#4ADE80", image: "internet" }, { id: "laundry", name: "Laundry", group: "kos", icon: "local_laundry_service", color: "#4ADE80", image: "laundry" }, { id: "perlengkapan_mandi", name: "Perlengkapan Mandi", group: "kos", icon: "soap", color: "#4ADE80", image: "perlengkapan_mandi" }, { id: "makan_harian", name: "Makan Harian", group: "food", icon: "restaurant", color: "#FB923C", image: "makan_harian" }, { id: "jajan_kopi", name: "Jajan/Kopi", group: "food", icon: "local_cafe", color: "#FB923C", image: "jajan_kopi" }, { id: "belanja_masak", name: "Belanja Masak", group: "food", icon: "shopping_cart", color: "#FB923C", image: "belanja_masak" }, { id: "pulsa_data", name: "Pulsa/Data", group: "personal", icon: "smartphone", color: "#A78BFA", image: "internet" }, { id: "hiburan", name: "Hiburan", group: "personal", icon: "headphones", color: "#A78BFA", image: "hiburan" }, { id: "pakaian", name: "Pakaian", group: "personal", icon: "checkroom", color: "#A78BFA", image: "pakaian" }, { id: "kesehatan", name: "Kesehatan", group: "personal", icon: "medical_services", color: "#A78BFA", image: "kesehatan" }, { id: "sosial", name: "Sosial", group: "personal", icon: "card_giftcard", color: "#A78BFA", image: "sosial" }];
const items2 = [{ id: "uang_bulanan", name: "Uang Bulanan", icon: "envelope", color: "#2DD4BF" }, { id: "beasiswa", name: "Beasiswa", icon: "school", color: "#2DD4BF" }, { id: "kerja_partime", name: "Kerja Part-time", icon: "work", color: "#2DD4BF" }, { id: "lainnya", name: "Lainnya", icon: "more_horiz", color: "#2DD4BF" }];

export const LOCAL_IMAGES = obj5;
export function getCategoryImage(image) {
  const tmp = image;
  if (tmp) {
    if (typeof image !== "number") {
      if (typeof image !== "object") {
        if (obj5[image]) {
          return obj5[image];
        } else {
          return { uri: image };
        }
      }
    }
    return image;
  } else {
    return null;
  }
}
export const CATEGORY_GROUPS = items;
export const CATEGORIES = items1;
export const INCOME_CATEGORIES = items2;
