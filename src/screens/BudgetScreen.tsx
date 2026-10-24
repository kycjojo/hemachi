import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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

export default function BudgetScreen() {
  const insets = useSafeAreaInsets();
  const { expenseByGroup, currentMonth, currentYear, loadTransactions, setMonth: setTxMonth } = useTransactionStore();
  const { budgets, loadBudgets, setBudget, getBudgetForGroup, setMonth: setBudgetMonth } = useBudgetStore();

  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [budgetStr, setBudgetStr] = useState<string>('0');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    loadTransactions();
    loadBudgets();
  }, []);

  const handlePrevMonth = async () => {
    let m = currentMonth - 1;
    let y = currentYear;
    if (m < 1) {
      m = 12;
      y -= 1;
    }
    await setTxMonth(m, y);
    await setBudgetMonth(m, y);
  };

  const handleNextMonth = async () => {
    let m = currentMonth + 1;
    let y = currentYear;
    if (m > 12) {
      m = 1;
      y += 1;
    }
    await setTxMonth(m, y);
    await setBudgetMonth(m, y);
  };

  const handleOpenEdit = (groupId: string) => {
    const current = getBudgetForGroup(groupId);
    setSelectedGroup(groupId);
    setBudgetStr(current > 0 ? current.toString() : '0');
    setIsEditing(true);
  };

  const handleNumInput = (val: string) => {
    if (val === 'backspace') {
      if (budgetStr.length <= 1) {
        setBudgetStr('0');
      } else {
        setBudgetStr(budgetStr.slice(0, -1));
      }
    } else if (val === '000') {
      if (budgetStr !== '0' && budgetStr.length < 9) {
        setBudgetStr(budgetStr + '000');
      }
    } else {
      if (budgetStr === '0') {
        setBudgetStr(val);
      } else if (budgetStr.length < 10) {
        setBudgetStr(budgetStr + val);
      }
    }
  };

  const handleSaveBudget = async () => {
    if (!selectedGroup) return;
    const amount = parseInt(budgetStr, 10);
    await setBudget(selectedGroup, amount);
    setIsEditing(false);
    setSelectedGroup(null);
  };

  // If in Edit Mode:
  if (isEditing && selectedGroup) {
    const groupInfo = CATEGORY_GROUPS.find((g) => g.id === selectedGroup);
    const displayAmount = parseInt(budgetStr, 10).toLocaleString('id-ID');

    return (
      <View style={styles.container}>
        <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
          <TouchableOpacity onPress={() => setIsEditing(false)} activeOpacity={0.8}>
            <Text style={styles.backBtn}>← Batal</Text>
          </TouchableOpacity>
          <Text style={styles.appTitle}>Set Budget</Text>
          <View style={{ width: 60 }} />
        </View>

        <View style={styles.editBody}>
          {groupInfo ? (
            <View style={[styles.groupBadge, { backgroundColor: groupInfo.color }]}>
              <Image source={getCategoryImage(groupInfo.image)} style={styles.badgeImage} resizeMode="contain" />
              <Text style={styles.badgeText}>{groupInfo.name}</Text>
            </View>
          ) : null}

          <View style={styles.amountCard}>
            <Text style={styles.amountLabel}>Target Anggaran Bulanan</Text>
            <Text style={styles.amountValue}>Rp {displayAmount}</Text>
          </View>

          {/* Numpad */}
          <View style={styles.numpad}>
            {[
              ['1', '2', '3'],
              ['4', '5', '6'],
              ['7', '8', '9'],
              ['000', '0', 'backspace'],
            ].map((row, rIdx) => (
              <View key={rIdx} style={styles.numpadRow}>
                {row.map((btn) => (
                  <TouchableOpacity
                    key={btn}
                    style={styles.numpadBtn}
                    onPress={() => handleNumInput(btn)}
                    activeOpacity={0.75}
                  >
                    <Text style={styles.numpadBtnText}>{btn === 'backspace' ? '⌫' : btn}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.saveBtn} onPress={handleSaveBudget} activeOpacity={0.85}>
            <Text style={styles.saveBtnText}>Simpan Budget</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Normal Budget Overview Mode:
  const totalAllocated = budgets.reduce((sum, b) => sum + b.amount, 0);
  const totalSpent = Object.values(expenseByGroup).reduce((sum, v) => sum + v, 0);
  const monthName = MONTH_NAMES[currentMonth - 1];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.appTitle}>Budget Bulanan</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Month Selector */}
        <View style={styles.monthSelector}>
          <TouchableOpacity style={styles.monthArrowBtn} onPress={handlePrevMonth} activeOpacity={0.8}>
            <Text style={styles.arrowText}>◀</Text>
          </TouchableOpacity>
          <Text style={styles.currentMonthText}>{monthName} {currentYear}</Text>
          <TouchableOpacity style={styles.monthArrowBtn} onPress={handleNextMonth} activeOpacity={0.8}>
            <Text style={styles.arrowText}>▶</Text>
          </TouchableOpacity>
        </View>

        {/* Overview Banner */}
        <View style={styles.overviewCard}>
          <View>
            <Text style={styles.overviewLabel}>Total Alokasi Budget</Text>
            <Text style={styles.overviewValue}>{formatRupiah(totalAllocated)}</Text>
          </View>
          <View style={styles.overviewDivider} />
          <View>
            <Text style={styles.overviewLabel}>Terpakai</Text>
            <Text style={[styles.overviewValue, { color: totalSpent > totalAllocated && totalAllocated > 0 ? COLORS.error : COLORS.onSurface }]}>
              {formatRupiah(totalSpent)}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Budget per Kategori</Text>
        <Text style={styles.sectionSubtitle}>Ketuk kartu untuk mengatur target anggaran</Text>

        {CATEGORY_GROUPS.map((group) => {
          const budget = getBudgetForGroup(group.id);
          const spent = expenseByGroup[group.id] || 0;
          const pct = budget > 0 ? Math.min(100, Math.round((spent / budget) * 100)) : 0;
          const isOver = budget > 0 && spent > budget;

          return (
            <TouchableOpacity
              key={group.id}
              style={[styles.budgetCard, { borderLeftColor: group.color }]}
              onPress={() => handleOpenEdit(group.id)}
              activeOpacity={0.85}
            >
              <View style={styles.budgetCardHeader}>
                <Image source={getCategoryImage(group.image)} style={styles.cardGroupImg} resizeMode="contain" />
                <View style={styles.cardGroupInfo}>
                  <Text style={styles.cardGroupName}>{group.name}</Text>
                  <Text style={styles.cardGroupSpent}>
                    Terpakai: {formatRupiah(spent)} {budget > 0 ? `dari ${formatRupiah(budget)}` : ''}
                  </Text>
                </View>
                <View style={[styles.pctBadge, { backgroundColor: isOver ? COLORS.errorContainer : group.bgColor }]}>
                  <Text style={[styles.pctText, { color: isOver ? COLORS.error : COLORS.onSurface }]}>
                    {budget > 0 ? `${pct}%` : 'Set +'}
                  </Text>
                </View>
              </View>

              {/* Progress Bar */}
              <View style={styles.progressBg}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${pct}%`,
                      backgroundColor: isOver ? COLORS.error : group.color,
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          );
        })}
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
  backBtn: {
    color: COLORS.primary,
    ...FONTS.labelLg,
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 8,
    marginBottom: 16,
    ...SHADOWS.stickerSm,
  },
  monthArrowBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 16,
    color: COLORS.onSurface,
  },
  currentMonthText: {
    ...FONTS.headlineSm,
    color: COLORS.onSurface,
  },
  overviewCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryFixed,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 16,
    marginBottom: 20,
    ...SHADOWS.sticker,
  },
  overviewLabel: {
    color: COLORS.onSurfaceVariant,
    ...FONTS.labelSm,
  },
  overviewValue: {
    ...FONTS.headlineSm,
    color: COLORS.onSurface,
    marginTop: 4,
  },
  overviewDivider: {
    width: 2,
    backgroundColor: COLORS.uiStroke,
    marginHorizontal: 16,
  },
  sectionTitle: {
    color: COLORS.onSurface,
    ...FONTS.headlineSm,
  },
  sectionSubtitle: {
    color: COLORS.outline,
    ...FONTS.labelSm,
    marginBottom: 12,
    marginTop: 2,
  },
  budgetCard: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderLeftWidth: 8,
    borderColor: COLORS.uiStroke,
    padding: 16,
    marginBottom: 12,
    ...SHADOWS.stickerSm,
  },
  budgetCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  cardGroupImg: {
    width: 44,
    height: 44,
  },
  cardGroupInfo: {
    flex: 1,
  },
  cardGroupName: {
    color: COLORS.onSurface,
    ...FONTS.labelLg,
  },
  cardGroupSpent: {
    color: COLORS.outline,
    ...FONTS.labelSm,
    marginTop: 2,
  },
  pctBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BORDER.radius.full,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
  },
  pctText: {
    fontWeight: '700',
    fontSize: 12,
  },
  progressBg: {
    height: 10,
    backgroundColor: COLORS.surfaceContainerHighest,
    borderRadius: BORDER.radius.full,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
  editBody: {
    padding: 20,
    flex: 1,
  },
  groupBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER.radius.full,
    borderWidth: 2,
    borderColor: COLORS.uiStroke,
    alignSelf: 'center',
    marginBottom: 16,
  },
  badgeImage: {
    width: 28,
    height: 28,
  },
  badgeText: {
    color: '#ffffff',
    ...FONTS.labelLg,
  },
  amountCard: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    ...SHADOWS.stickerSm,
  },
  amountLabel: {
    color: COLORS.outline,
    ...FONTS.labelSm,
    marginBottom: 4,
  },
  amountValue: {
    ...FONTS.headlineLg,
    color: COLORS.primary,
  },
  numpad: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 8,
    gap: 8,
    marginBottom: 20,
    ...SHADOWS.stickerSm,
  },
  numpadRow: {
    flexDirection: 'row',
    gap: 8,
  },
  numpadBtn: {
    flex: 1,
    height: 48,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER.radius.md,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numpadBtnText: {
    color: COLORS.onSurface,
    fontSize: 18,
    fontWeight: '700',
  },
  saveBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER.radius.full,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    paddingVertical: 14,
    alignItems: 'center',
    ...SHADOWS.sticker,
  },
  saveBtnText: {
    color: COLORS.onPrimary,
    ...FONTS.headlineSm,
  },
});
