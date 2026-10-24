import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTransactionStore } from '../store/useTransactionStore';
import { COLORS, FONTS, SHADOWS, BORDER } from '../constants/theme';
import { CATEGORY_GROUPS, getCategoryImage } from '../constants/categories';

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

function formatRupiah(num: number): string {
  return 'Rp ' + Math.abs(num).toLocaleString('id-ID');
}

export default function ReportScreen() {
  const insets = useSafeAreaInsets();
  const { totalIncome, totalExpense, expenseByGroup, currentMonth, currentYear, loadTransactions } = useTransactionStore();

  useEffect(() => {
    loadTransactions();
  }, []);

  const balance = totalIncome - totalExpense;
  const monthLabel = `${MONTH_NAMES[currentMonth - 1]} ${currentYear}`;

  // Sort groups by highest expense
  const sortedExpenses = Object.entries(expenseByGroup)
    .map(([groupId, amount]) => {
      const groupInfo = CATEGORY_GROUPS.find((g) => g.id === groupId);
      return {
        id: groupId,
        name: groupInfo?.name || groupId,
        color: groupInfo?.color || COLORS.primary,
        bgColor: groupInfo?.bgColor || COLORS.surface,
        image: groupInfo?.image || 'personal',
        amount,
        percentage: totalExpense > 0 ? Math.round((amount / totalExpense) * 100) : 0,
      };
    })
    .sort((a, b) => b.amount - a.amount);

  const topCategory = sortedExpenses.find((e) => e.amount > 0);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.appTitle}>Laporan Keuangan</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={styles.monthTitle}>{monthLabel}</Text>

        {/* Tip / Insight Banner */}
        <View style={styles.insightBanner}>
          <Text style={styles.insightText}>
            {topCategory
              ? `Pengeluaran terbesar bulan ini di kategori "${topCategory.name}" (${topCategory.percentage}%). Coba evaluasi dan kurangi pengeluaran di sana! 💡`
              : 'Mulai catat pengeluaranmu untuk mendapat tips hemat! 💡'}
          </Text>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, { backgroundColor: `${COLORS.statusIncome}22` }]}>
            <Text style={styles.summaryLabel}>Total Masuk</Text>
            <Text style={[styles.summaryAmount, { color: COLORS.statusIncome }]}>
              +{formatRupiah(totalIncome)}
            </Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: `${COLORS.error}22` }]}>
            <Text style={styles.summaryLabel}>Total Keluar</Text>
            <Text style={[styles.summaryAmount, { color: COLORS.error }]}>
              -{formatRupiah(totalExpense)}
            </Text>
          </View>
        </View>

        {/* Net Savings Card */}
        <View style={styles.netCard}>
          <Text style={styles.netLabel}>Sisa Saldo Bulan Ini</Text>
          <Text style={[styles.netAmount, { color: balance >= 0 ? COLORS.statusIncome : COLORS.error }]}>
            {balance < 0 ? '-' : '+'}{formatRupiah(balance)}
          </Text>
        </View>

        {/* Breakdown by Category */}
        <Text style={styles.sectionTitle}>Rincian per Kategori</Text>
        {sortedExpenses.length === 0 || totalExpense === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>📊</Text>
            <Text style={styles.emptyText}>Belum ada pengeluaran tercatat bulan ini</Text>
          </View>
        ) : (
          sortedExpenses.map((item) => (
            <View key={item.id} style={styles.breakdownCard}>
              <View style={styles.breakdownHeader}>
                <Image source={getCategoryImage(item.image)} style={styles.breakdownImg} resizeMode="contain" />
                <View style={styles.breakdownInfo}>
                  <Text style={styles.breakdownName}>{item.name}</Text>
                  <Text style={styles.breakdownPct}>{item.percentage}% dari total</Text>
                </View>
                <Text style={styles.breakdownAmount}>{formatRupiah(item.amount)}</Text>
              </View>
              {/* Progress Bar */}
              <View style={styles.progressBg}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${item.percentage}%`, backgroundColor: item.color },
                  ]}
                />
              </View>
            </View>
          ))
        )}
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
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: COLORS.background,
    borderBottomWidth: BORDER.width,
    borderBottomColor: COLORS.uiStroke,
  },
  appTitle: {
    color: COLORS.primary,
    ...FONTS.headlineLgMobile,
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  monthTitle: {
    ...FONTS.headlineSm,
    color: COLORS.onSurface,
    marginBottom: 12,
  },
  insightBanner: {
    backgroundColor: COLORS.uiPaper,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 14,
    marginBottom: 16,
    ...SHADOWS.stickerSm,
  },
  insightText: {
    color: COLORS.onSurface,
    ...FONTS.bodyMd,
    lineHeight: 22,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  summaryCard: {
    flex: 1,
    padding: 14,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    ...SHADOWS.stickerSm,
  },
  summaryLabel: {
    color: COLORS.onSurfaceVariant,
    ...FONTS.labelSm,
    marginBottom: 4,
  },
  summaryAmount: {
    ...FONTS.headlineSm,
  },
  netCard: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 16,
    marginBottom: 20,
    ...SHADOWS.stickerSm,
  },
  netLabel: {
    color: COLORS.outline,
    ...FONTS.labelSm,
    marginBottom: 4,
  },
  netAmount: {
    ...FONTS.headlineLgMobile,
  },
  sectionTitle: {
    color: COLORS.onSurface,
    ...FONTS.headlineSm,
    marginBottom: 12,
  },
  breakdownCard: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 14,
    marginBottom: 10,
    ...SHADOWS.stickerSm,
  },
  breakdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  breakdownImg: {
    width: 36,
    height: 36,
  },
  breakdownInfo: {
    flex: 1,
  },
  breakdownName: {
    color: COLORS.onSurface,
    ...FONTS.labelLg,
  },
  breakdownPct: {
    color: COLORS.outline,
    ...FONTS.labelSm,
    marginTop: 2,
  },
  breakdownAmount: {
    ...FONTS.labelLg,
    color: COLORS.onSurface,
  },
  progressBg: {
    height: 8,
    backgroundColor: COLORS.surfaceContainerHighest,
    borderRadius: BORDER.radius.full,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
  emptyBox: {
    padding: 32,
    alignItems: 'center',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
  },
  emptyIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  emptyText: {
    color: COLORS.outline,
    textAlign: 'center',
    ...FONTS.bodyMd,
  },
});
