import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTransactionStore } from '../store/useTransactionStore';
import { useBudgetStore } from '../store/useBudgetStore';
import { COLORS, FONTS, SHADOWS, BORDER } from '../constants/theme';
import { CATEGORY_GROUPS, getCategoryImage } from '../constants/categories';

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

function formatRupiah(num: number): string {
  return 'Rp ' + Math.abs(num).toLocaleString('id-ID');
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const {
    totalIncome,
    totalExpense,
    balance,
    recentTransactions,
    expenseByGroup,
    loadTransactions,
    currentMonth,
    currentYear,
  } = useTransactionStore();

  const { budgets, loadBudgets, getBudgetForGroup } = useBudgetStore();

  useEffect(() => {
    loadTransactions();
    loadBudgets();
  }, []);

  // Calculate budget health percentage
  let healthScore = 100;
  if (budgets.length > 0) {
    let totalScore = 0;
    let count = 0;
    budgets.forEach((b) => {
      if (b.amount > 0) {
        const spent = expenseByGroup[b.category_group] || 0;
        const remainingPct = Math.max(0, 100 - (spent / b.amount) * 100);
        totalScore += remainingPct;
        count += 1;
      }
    });
    if (count > 0) {
      healthScore = Math.round(totalScore / count);
    }
  }

  const monthLabel = `${MONTH_NAMES[currentMonth - 1]} ${currentYear}`;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.appTitle}>Playful Pocket</Text>
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => navigation.navigate('Settings')}
          activeOpacity={0.8}
        >
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.monthLabel}>{monthLabel}</Text>
          <Text style={styles.balanceLabel}>TOTAL SALDO</Text>
          <Text style={styles.balanceAmount}>{balance < 0 ? '-' : ''}{formatRupiah(balance)}</Text>

          <View style={styles.incomeExpenseRow}>
            <View style={styles.statPill}>
              <Text style={styles.statLabel}>Pemasukan</Text>
              <Text style={styles.statIncome}>+{formatRupiah(totalIncome)}</Text>
            </View>
            <View style={styles.statPill}>
              <Text style={styles.statLabel}>Pengeluaran</Text>
              <Text style={styles.statExpense}>-{formatRupiah(totalExpense)}</Text>
            </View>
          </View>
        </View>

        {/* Budget Health Card */}
        <View style={styles.healthCard}>
          <View style={styles.healthHeader}>
            <View>
              <Text style={styles.healthTitle}>Kesehatan Budget</Text>
              <Text style={styles.healthSubtitle}>
                {healthScore >= 70 ? 'Keuanganmu aman! Mantap 👍' : healthScore >= 40 ? 'Perhatikan pengeluaranmu ⚠️' : 'Budget menipis! Hemat dulu ya 🚨'}
              </Text>
            </View>
            <View style={[styles.healthBadge, { backgroundColor: healthScore >= 70 ? COLORS.statusIncome : healthScore >= 40 ? '#FBBF24' : COLORS.error }]}>
              <Text style={styles.healthScoreText}>{healthScore}%</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarBg}>
            {CATEGORY_GROUPS.map((group) => {
              const spent = expenseByGroup[group.id] || 0;
              const budget = getBudgetForGroup(group.id);
              const widthPct = budget > 0 ? Math.min(100, (spent / budget) * 100) : 0;
              return (
                <View
                  key={group.id}
                  style={[styles.progressFill, { width: `${widthPct / CATEGORY_GROUPS.length}%`, backgroundColor: group.color }]}
                />
              );
            })}
          </View>
        </View>

        {/* Category Expenses Overview */}
        <Text style={styles.sectionTitle}>Pengeluaran per Kategori</Text>
        <View style={styles.categoriesGrid}>
          {CATEGORY_GROUPS.map((group) => {
            const spent = expenseByGroup[group.id] || 0;
            const budget = getBudgetForGroup(group.id);
            return (
              <View key={group.id} style={[styles.categoryCard, { backgroundColor: group.bgColor }]}>
                <Image source={getCategoryImage(group.image)} style={styles.categoryCardImage} resizeMode="contain" />
                <View style={styles.categoryCardInfo}>
                  <Text style={styles.categoryCardName}>{group.name}</Text>
                  <Text style={styles.categoryCardSpent}>{formatRupiah(spent)}</Text>
                  <Text style={styles.categoryCardBudget}>
                    {budget > 0 ? `Target: ${formatRupiah(budget)}` : 'Belum di-set'}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Recent Transactions */}
        <Text style={styles.sectionTitle}>Transaksi Terbaru</Text>
        {recentTransactions.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyText}>Belum ada transaksi bulan ini</Text>
          </View>
        ) : (
          recentTransactions.map((tx) => (
            <View key={tx.id} style={styles.txItem}>
              <Image source={getCategoryImage(tx.category_image || 'personal')} style={styles.txImage} />
              <View style={styles.txInfo}>
                <Text style={styles.txName}>{tx.category_name}</Text>
                <Text style={styles.txNote}>{tx.note || tx.date}</Text>
              </View>
              <Text style={[styles.txAmount, { color: tx.type === 'income' ? COLORS.statusIncome : COLORS.onSurface }]}>
                {tx.type === 'income' ? '+' : '-'}{formatRupiah(tx.amount)}
              </Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  settingsBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.stickerSm,
  },
  settingsIcon: {
    fontSize: 20,
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  balanceCard: {
    backgroundColor: COLORS.primaryContainer,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 20,
    marginBottom: 16,
    ...SHADOWS.sticker,
  },
  monthLabel: {
    color: COLORS.onPrimaryContainer,
    opacity: 0.8,
    marginBottom: 4,
    ...FONTS.labelSm,
  },
  balanceLabel: {
    color: COLORS.onPrimaryContainer,
    opacity: 0.8,
    ...FONTS.labelSm,
  },
  balanceAmount: {
    color: COLORS.onPrimaryContainer,
    marginVertical: 4,
    ...FONTS.headlineLgMobile,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  statPill: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: BORDER.radius.lg,
  },
  statLabel: {
    color: COLORS.onPrimaryContainer,
    opacity: 0.9,
    ...FONTS.labelSm,
  },
  statIncome: {
    color: '#A7F3D0',
    marginTop: 2,
    ...FONTS.labelLg,
  },
  statExpense: {
    color: '#FECDD3',
    marginTop: 2,
    ...FONTS.labelLg,
  },
  healthCard: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 16,
    marginBottom: 16,
    ...SHADOWS.stickerSm,
  },
  healthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  healthTitle: {
    color: COLORS.onSurface,
    ...FONTS.labelLg,
  },
  healthSubtitle: {
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
    ...FONTS.labelSm,
  },
  healthBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: BORDER.radius.full,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
  },
  healthScoreText: {
    color: '#1E293B',
    fontWeight: '800',
    fontSize: 14,
  },
  progressBarBg: {
    height: 12,
    backgroundColor: COLORS.surfaceContainerHighest,
    borderRadius: BORDER.radius.full,
    borderWidth: 2,
    borderColor: COLORS.uiStroke,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  progressFill: {
    height: '100%',
  },
  sectionTitle: {
    color: COLORS.onSurface,
    ...FONTS.headlineSm,
    marginTop: 8,
    marginBottom: 12,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  categoryCard: {
    width: '48%',
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    ...SHADOWS.stickerSm,
  },
  categoryCardImage: {
    width: 40,
    height: 40,
  },
  categoryCardInfo: {
    flex: 1,
  },
  categoryCardName: {
    color: COLORS.onSurface,
    ...FONTS.labelSm,
  },
  categoryCardSpent: {
    color: COLORS.onSurface,
    ...FONTS.labelLg,
  },
  categoryCardBudget: {
    color: COLORS.outline,
    fontSize: 10,
  },
  txItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 12,
    marginBottom: 10,
    ...SHADOWS.stickerSm,
  },
  txImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
  },
  txInfo: {
    flex: 1,
  },
  txName: {
    color: COLORS.onSurface,
    ...FONTS.labelLg,
  },
  txNote: {
    color: COLORS.outline,
    ...FONTS.labelSm,
  },
  txAmount: {
    ...FONTS.labelLg,
  },
  emptyBox: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
  },
  emptyIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  emptyText: {
    color: COLORS.outline,
    textAlign: 'center',
    ...FONTS.bodyMd,
  },
});
