import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTransactionStore } from '../store/useTransactionStore';
import { COLORS, FONTS, SHADOWS, BORDER } from '../constants/theme';

const MENU_ITEMS = [
  { id: 'kategori', label: 'Kelola Kategori Custom', icon: '🏷️', bgColor: COLORS.groupCampus },
  { id: 'pengingat', label: 'Pengingat Tagihan', icon: '⏰', bgColor: COLORS.groupFood },
  { id: 'tabungan', label: 'Target Tabungan', icon: '🎯', bgColor: COLORS.groupBoarding },
  { id: 'notifikasi', label: 'Notifikasi', icon: '🔔', bgColor: COLORS.groupPersonal },
  { id: 'export', label: 'Export Data', icon: '📤', bgColor: COLORS.statusIncome },
];

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const { db, loadTransactions } = useTransactionStore();

  const handleMenu = (label: string) => {
    Alert.alert('Segera hadir!', `Fitur "${label}" akan tersedia di versi berikutnya.`);
  };

  const handleReset = () => {
    Alert.alert(
      'Reset Data',
      'Semua data transaksi dan budget akan dihapus permanen. Lanjutkan?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            if (db) {
              try {
                await db.execAsync(`
                  DELETE FROM transactions;
                  DELETE FROM budgets;
                `);
                await loadTransactions();
                Alert.alert('Sukses', 'Semua data berhasil direset');
              } catch (err) {
                Alert.alert('Error', 'Gagal mereset database');
              }
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()} activeOpacity={0.8}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pengaturan</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenu(item.label)}
            activeOpacity={0.8}
          >
            <View style={[styles.menuIcon, { backgroundColor: item.bgColor }]}>
              <Text style={styles.menuEmoji}>{item.icon}</Text>
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        ))}

        {/* Reset Data Button */}
        <TouchableOpacity style={styles.resetItem} onPress={handleReset} activeOpacity={0.8}>
          <View style={styles.resetIcon}>
            <Text style={styles.resetIconText}>🗑️</Text>
          </View>
          <Text style={styles.resetLabel}>Reset Semua Data</Text>
        </TouchableOpacity>

        {/* App Info Footer */}
        <View style={styles.appInfoBox}>
          <Text style={styles.appInfoTitle}>Playful Pocket v1.0.0</Text>
          <Text style={styles.appInfoSubtitle}>Aplikasi Pengatur Keuangan Mahasiswa</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: COLORS.background,
    borderBottomWidth: BORDER.width,
    borderBottomColor: COLORS.uiStroke,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surfaceContainerHigh,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: COLORS.onSurface,
  },
  headerTitle: {
    color: COLORS.primary,
    ...FONTS.headlineLgMobile,
  },
  placeholder: {
    width: 40,
  },
  scroll: {
    padding: 20,
    gap: 12,
    paddingBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 14,
    ...SHADOWS.sticker,
  },
  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuEmoji: {
    fontSize: 20,
  },
  menuLabel: {
    color: COLORS.onSurface,
    flex: 1,
    ...FONTS.labelLg,
  },
  chevron: {
    fontSize: 24,
    color: COLORS.onSurfaceVariant,
  },
  resetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: COLORS.errorContainer,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 14,
    marginTop: 12,
    ...SHADOWS.sticker,
  },
  resetIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.error,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetIconText: {
    fontSize: 20,
  },
  resetLabel: {
    color: COLORS.error,
    flex: 1,
    ...FONTS.labelLg,
  },
  appInfoBox: {
    alignItems: 'center',
    marginTop: 24,
  },
  appInfoTitle: {
    color: COLORS.outline,
    ...FONTS.labelSm,
  },
  appInfoSubtitle: {
    color: COLORS.outline,
    fontSize: 11,
    marginTop: 2,
    opacity: 0.7,
  },
});
