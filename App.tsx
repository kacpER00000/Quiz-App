import 'react-native-gesture-handler';

import RootNavigator from './src/navigation/root_navigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { getJSON, setJSON } from './src/storage/storage';
import Terms from './src/screens/terms_screen';

const TERMS_ACCEPTED_KEY = "quiz.termsAccepted";

export default function App() {

  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    hasAcceptedTerms()
      .then((value) => setAccepted(value))
      .catch(() => setAccepted(false))
  }, [accepted])

  const hasAcceptedTerms = (): Promise<boolean | null> => {
    return getJSON(TERMS_ACCEPTED_KEY);
  }

  const accept = () => {
    setJSON(TERMS_ACCEPTED_KEY, true);
    setAccepted(true);
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} edges={['top','bottom','left','right']}>
        {accepted ? <RootNavigator/> : <Terms onAccept={accept} />}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

