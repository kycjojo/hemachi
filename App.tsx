import React, { Suspense, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { COLORS } from './src/constants/theme';
import { migrateDatabase } from './src/database/migrateDatabase';
import { useTransactionStore } from './src/store/useTransactionStore';
import { useBudgetStore } from './src/store/useBudgetStore';
import { useForceUpdate } from './src/hooks/useForceUpdate';
import ForceUpdateModal from './src/components/ForceUpdateModal';
import AppNavigator from './src/navigation/MainTabs';

function LoadingScreen() {
  return <View style={styles.loading} />;
}

function NativeDbInitializer({ children }: { children: React.ReactNode }) {
  const db = useSQLiteContext();
  const setTransactionDb = useTransactionStore((s) => s.setDb);
  const setBudgetDb = useBudgetStore((s) => s.setDb);

  useEffect(() => {
    setTransactionDb(db);
    setBudgetDb(db);
  }, [db]);

  return <>{children}</>;
}

export default function App() {
  const { needsUpdate, updateUrl, updateMessage } = useForceUpdate();

  return (
    <SafeAreaProvider style={styles.root}>
      <StatusBar style="dark" />
      <ForceUpdateModal visible={needsUpdate} updateUrl={updateUrl} message={updateMessage} />
      <Suspense fallback={<LoadingScreen />}>
        <SQLiteProvider databaseName="playful_pocket.db" onInit={migrateDatabase} useSuspense>
          <NativeDbInitializer>
            <AppNavigator />
          </NativeDbInitializer>
        </SQLiteProvider>
      </Suspense>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});
