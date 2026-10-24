import React, { useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, BackHandler, Linking } from 'react-native';
import { COLORS, FONTS, SHADOWS, BORDER } from '../constants/theme';

interface ForceUpdateModalProps {
  visible: boolean;
  updateUrl?: string;
  message?: string;
}

export default function ForceUpdateModal({ visible, updateUrl, message }: ForceUpdateModalProps) {
  useEffect(() => {
    if (visible) {
      const sub = BackHandler.addEventListener('hardwareBackPress', () => true);
      return () => sub.remove();
    }
  }, [visible]);

  const defaultMsg =
    message ||
    'Versi baru Playful Pocket sudah tersedia. Update sekarang untuk mendapatkan fitur terbaru dan perbaikan keamanan!';

  const handleUpdate = () => {
    if (updateUrl) {
      Linking.openURL(updateUrl);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={() => {}}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconWrap}>
            <Text style={styles.icon}>🚀</Text>
          </View>
          <Text style={styles.title}>Update Diperlukan!</Text>
          <Text style={styles.subtitle}>{defaultMsg}</Text>
          <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate} activeOpacity={0.85}>
            <Text style={styles.updateBtnText}>Update Sekarang</Text>
          </TouchableOpacity>
          <Text style={styles.note}>App tidak dapat digunakan sampai update selesai</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER.radius.xl,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    padding: 28,
    alignItems: 'center',
    width: '100%',
    ...SHADOWS.sticker,
  },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.primaryContainer,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    ...SHADOWS.stickerSm,
  },
  icon: {
    fontSize: 36,
  },
  title: {
    color: COLORS.onSurface,
    textAlign: 'center',
    marginBottom: 8,
    ...FONTS.headlineLgMobile,
  },
  subtitle: {
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
    ...FONTS.bodyMd,
  },
  updateBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER.radius.full,
    borderWidth: BORDER.width,
    borderColor: COLORS.uiStroke,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
    ...SHADOWS.stickerSm,
  },
  updateBtnText: {
    color: COLORS.onPrimaryContainer,
    fontSize: 16,
    ...FONTS.labelLg,
  },
  note: {
    color: COLORS.outline,
    textAlign: 'center',
    opacity: 0.8,
    ...FONTS.labelSm,
  },
});
