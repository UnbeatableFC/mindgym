Read AGENTS.md first and follow it strictly.

Implement a 'User Preference' onboarding flow.

Create a usePreferencesStore in store/preferencesStore.ts using Zustand to manage the user's selected 'Content Category' (Tech, Business, Art, General). Persist this state using AsyncStorage. Store using Zustand with the modern `@react-native-async-storage/async-storage` package. Implement a conditional redirect logic that is if an authenticated user has not yet set a preference, force navigation to an onboarding selection screen. Prevent access to the home route ((tabs)/index) until a selection is made. Users can select more than one preference.
Create a simple selection component on the /onboarding file that matches the existing design aesthetic , so that users can select preference. Ensure the existing UI layout remains consistent.
Add a 'Reset Preferences' button to the home screen (only for development/testing) that clears the AsyncStorage key, allowing for quick testing of the onboarding redirect logic.

Keep the implementation simple, readable, and prioritize type safety.