import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Alert, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTransactionStore } from '../store/useTransactionStore';
import { COLORS, FONTS, SHADOWS, BORDER } from '../constants/theme';
import { CATEGORY_GROUPS, CATEGORIES, INCOME_CATEGORIES, getCategoryImage } from '../constants/categories';

export default function AddTransactionScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const { addTransaction } = useTransactionStore();

  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [selectedGroup, setSelectedGroup] = useState<string | null>('food');
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [amountStr, setAmountStr] = useState<string>('0');
  const [note, setNote] = useState<string>('');
  const [date, setDate] = useState<string>(() => new Date().toISOString().split('T')[0]);

  const handleNumpad = (val: string) => {
    if (val === 'backspace') {
      if (amountStr.length <= 1) {
        setAmountStr('0');
      } else {
        setAmountStr(amountStr.slice(0, -1));
      }
    } else if (val === '000') {
      if (amountStr !== '0' && amountStr.length < 9) {
        setAmountStr(amountStr + '000');
      }
    } else {
      if (amountStr === '0') {
        setAmountStr(val);
      } else if (amountStr.length < 10) {
        setAmountStr(amountStr + val);
      }
    }
  };

  const handleSave = async () => {
    const amount = parseInt(amountStr, 10);
    if (!amount || amount <= 0) {
      Alert.alert('Perhatian', 'Masukkan nominal transaksi yang valid');
      return;
    }

    if (!selectedCategory) {
      Alert.alert('Perhatian', 'Pilih kategori transaksi');
      return;
    }

    try {
      await addTransaction({
        type,
        amount,
        category_id: selectedCategory.id,
        category_name: selectedCategory.name,
        category_group: type === 'expense' ? (selectedCategory.group || selectedGroup || 'personal') : 'income',
        category_image: selectedCategory.image || '',
        note: note.trim(),
        date,
      });

      // Reset & go back
      setAmountStr('0');
      setNote('');
      setSelectedCategory(null);
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert('Error', 'Gagal menyimpan transaksi');
    }
  };

  const subCategories = type === 'expense' && selectedGroup
    ? CATEGORIES.filter((c) => c.group === selectedGroup)
    : [];

  const displayAmount = parseInt(amountStr, 10).toLocaleString('id-ID');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.appTitle}>Catat Transaksi</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* Type Toggle */}
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[styles.toggleBtn, type === 'expense' && styles.toggleExpenseActive]}
            onPress={() => {
              setType('expense');
              setSelectedCategory(null);
            }}
            activeOpacity={0.8}
          >
            <Text style={[styles.toggleText, type === 'expense' && styles.toggleTextActive]}>
              Pengeluaran
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, type === 'income' && styles.toggleIncomeActive]}
            onPress={() => {
              setType('income');
              setSelectedCategory(null);
            }}
            activeOpacity={0.8}
          >
            <Text style={[styles.toggleText, type === 'income' && styles.toggleTextActive]}>
              Pemasukan
            </Text>
          </TouchableOpacity>
        </View>

        {/* Amount Display */}
        <View style={styles.amountCard}>
          <Text style={styles.amountLabel}>Nominal</Text>
          <Text style={[styles.amountValue, { color: type === 'income' ? COLORS.statusIncome : COLORS.primary }]}>
            Rp {displayAmount}
          </Text>
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Pilih Kategori</Text>
        {type === 'expense' ? (
          <>
            {/* Group Pills */}
            <View style={styles.groupPillsRow}>
              {CATEGORY_GROUPS.map((g) => {
                const isSelected = selectedGroup === g.id;
                return (
                  <TouchableOpacity
                    key={g.id}
                    style={[styles.groupPill, isSelected && { backgroundColor: g.color }]}
                    onPress={() => {
                      setSelectedGroup(g.id);
                      setSelectedCategory(null);
                    }}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.groupPillText, isSelected && styles.groupPillTextActive]}>
                      {g.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Sub-category Grid */}
            <View style={styles.categoryGrid}>
              {subCategories.map((c) => {
                const isSelected = selectedCategory?.id === c.id;
                return (
                  <TouchableOpacity
                    key={c.id}
                    style={[styles.categoryBtn, isSelected && styles.categoryBtnActive]}
                    onPress={() => setSelectedCategory(c)}
                    activeOpacity={0.8}
                  >
                    <Image source={getCategoryImage(c.image)} style={styles.categoryImg} />
                    <Text style={[styles.categoryName, isSelected && styles.categoryNameActive]}>
                      {c.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        ) : (
          /* Income Categories */
          <View style={styles.categoryGrid}>
            {INCOME_CATEGORIES.map((c) => {
              const isSelected = selectedCategory?.id === c.id;
              return (
                <TouchableOpacity
                  key={c.id}
                  style={[styles.categoryBtn, isSelected && styles.categoryBtnActive]}
                  onPress={() => setSelectedCategory(c)}
                  activeOpacity={0.8}
                >
                  <View style={[styles.incomeIconCircle, { backgroundColor: c.color }]}>
                    <Text style={styles.incomeIconText}>💰</Text>
                  </View>
                  <Text style={[styles.categoryName, isSelected && styles.categoryNameActive]}>
                    {c.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* Note Input */}
        <Text style={styles.sectionTitle}>Catatan (Opsional)</Text>
        <TextInput
          style={styles.noteInput}
          placeholder="Tulis catatan transaksi..."
          placeholderTextColor={COLORS.outline}
          value={note}
          onChangeText={setNote}
        />

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
                  onPress={() => handleNumpad(btn)}
                  activeOpacity={0.75}
                >
                  <Text style={styles.numpadBtnText}>{btn === 'backspace' ? '⌫' : btn}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave} activeOpacity={0.85}>
          <Text style={styles.saveBtnText}>Simpan Transaksi</Text>
        </TouchableOpacity>
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
  toggleRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceContainerHigh,
    borderRadius: BORDER.radius.full,
    padding: 4,
    borderWidth: 2,
    borderColor: COLORS.uiStroke,
    marginBottom: 16,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: BORDER.radius.full,
  },
  toggleExpenseActive: {
    backgroundColor: COLORS.error,
  },
  toggleIncomeActive: {
    backgroundColor: COLORS.statusIncome,
  },
  toggleText: {
    color: COLORS.onSurfaceVariant,
    ...FONTS.labelLg,
  },
  toggleTextActive: {
    color: '#ffffff',
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
  },
  sectionTitle: {
    color: COLORS.onSurface,
    ...FONTS.labelLg,
    marginBottom: 8,
    marginTop: 4,
  },
  groupPillsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  groupPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: BORDER.radius.full,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
    backgroundColor: COLORS.surface,
  },
  groupPillText: {
    color: COLORS.onSurface,
    ...FONTS.labelSm,
  },
  groupPillTextActive: {
    color: '#ffffff',
    fontWeight: '700',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  categoryBtn: {
    width: '31%',
    alignItems: 'center',
    padding: 10,
    borderRadius: BORDER.radius.lg,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
    backgroundColor: COLORS.surfaceContainerLowest,
  },
  categoryBtnActive: {
    backgroundColor: COLORS.primaryFixed,
    borderColor: COLORS.primary,
    borderWidth: 2,
    ...SHADOWS.stickerSm,
  },
  categoryImg: {
    width: 36,
    height: 36,
    marginBottom: 4,
  },
  categoryName: {
    color: COLORS.onSurface,
    fontSize: 11,
    textAlign: 'center',
  },
  categoryNameActive: {
    fontWeight: '700',
    color: COLORS.primary,
  },
  incomeIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  incomeIconText: {
    fontSize: 18,
  },
  noteInput: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: BORDER.radius.lg,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: COLORS.onSurface,
    ...FONTS.bodyMd,
    marginBottom: 16,
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
