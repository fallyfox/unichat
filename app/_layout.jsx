import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from '../confiq/auth-context';

function RootLayoutNav() {
  const { user } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Check if the user is currently in the (tabs) group
    const inTabsGroup = segments[0] === '(tabs)';

    if (!user && inTabsGroup) {
      // If NOT logged in and trying to access tabs, redirect to sign-up
      router.replace('/(auth)/sign-up');
    } else if (user && !inTabsGroup) {
      // If logged in and NOT in tabs, redirect to discussions
      router.replace('/(tabs)/discussions');
    } else {
      router.replace('/(auth)/sign-up');
    }
  }, [user, segments]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
