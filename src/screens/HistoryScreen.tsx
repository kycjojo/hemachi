import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTransactionStore } from '../store/useTransactionStore';
import { COLORS, FONTS, SHADOWS, BORDER } from '../constants/theme';
import { getCategoryImage } from '../constants/categories';
import { Transaction } from '../types';

function formatRupiah(num: number): string {
  return 'Rp ' + Math.abs(num).toLocaleString('id-ID');
}

export default function HistoryScreen() {
  const insets = useSafeAreaInsets();
  const { transactions, loadTransactions, removeTransaction } = useTransactionStore();
  const [filter, setFilter] = useState<'all' | 'expense' | 'income'>('all');

  useEffect(() => {
    loadTransactions();
  }, []);

  const filtered = transactions.filter((t) => {
    if (filter === 'all') return true;
    return t.type === filter;
  });

  // Group by date
  const grouped: Record<string, Transaction[]> = {};
  filtered.forEach((t) => {
    if (!grouped[t.date]) {
      grouped[t.date] = [];
    }
    grouped[t.date].push(t);
  });

  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  const handleDelete = (tx: Transaction) => {
    Alert.alert(
      'Hapus Transaksi',
      `Yakin ingin menghapus transaksi "${tx.category_name}" (${formatRupiah(tx.amount)})?`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => removeTransaction(tx.id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.appTitle}>Riwayat Transaksi</Text>
      </View>

      {/* Filter Bar */}
      <View style={styles.filterBar}>
        {[
          { id: 'all', label: 'Semua' },
          { id: 'expense', label: 'Pengeluaran' },
          { id: 'income', label: 'Pemasukan' },
        ].map((f) => {
          const isActive = filter === f.id;
          return (
            <TouchableOpacity
              key={f.id}
              style={[styles.filterPill, isActive && styles.filterPillActive]}
              onPress={() => setFilter(f.id as any)}
              activeOpacity={0.8}
            >
              <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                {f.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Transactions List */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {sortedDates.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>📋</Text>
            <Text style={styles.emptyText}>Tidak ada riwayat transaksi</Text>
          </View>
        ) : (
          sortedDates.map((date) => (
            <View key={date} style={styles.dateGroup}>
              <Text style={styles.dateHeader}>{date}</Text>
              {grouped[date].map((tx) => (
                <TouchableOpacity
                  key={tx.id}
                  style={styles.txItem}
                  onLongPress={() => handleDelete(tx)}
                  activeOpacity={0.85}
                >
                  <Image source={getCategoryImage(tx.category_image || 'personal')} style={styles.txImage} />
                  <View style={styles.txInfo}>
                    <Text style={styles.txName}>{tx.category_name}</Text>
                    {tx.note ? <Text style={styles.txNote}>{tx.note}</Text> : null}
                  </View>
                  <View style={styles.txAmountWrap}>
                    <Text
                      style={[
                        styles.txAmount,
                        { color: tx.type === 'income' ? COLORS.statusIncome : COLORS.onSurface },
                      ]}
                    >
                      {tx.type === 'income' ? '+' : '-'}{formatRupiah(tx.amount)}
                    </Text>
                    <Text style={styles.deleteHint}>Tahan untuk hapus</Text>
                  </View>
                </TouchableOpacity>
              ))}
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
  filterBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surfaceContainerHigh,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER.radius.full,
    borderWidth: 1.5,
    borderColor: COLORS.uiStroke,
    backgroundColor: COLORS.surface,
  },
  filterPillActive: {
    backgroundColor: COLORS.primaryContainer,
  },
  filterText: {
    color: COLORS.onSurfaceVariant,
    ...FONTS.labelSm,
  },
  filterTextActive: {
    color: COLORS.onPrimaryContainer,
    fontWeight: '700',
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  dateGroup: {
    marginBottom: 16,
  },
  dateHeader: {
    color: COLORS.outline,
    ...FONTS.labelSm,
    marginBottom: 8,
    marginLeft: 4,
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
    marginBottom: 8,
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
    marginTop: 2,
  },
  txAmountWrap: {
    alignItems: 'flex-end',
  },
  txAmount: {
    ...FONTS.labelLg,
  },
  deleteHint: {
    fontSize: 9,
    color: COLORS.outline,
    marginTop: 2,
    opacity: 0.6,
  },
  emptyBox: {
    padding: 32,
    alignItems: 'center',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    marginTop: 20,
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
