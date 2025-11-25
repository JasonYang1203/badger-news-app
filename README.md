Badger News — React Native Mobile News Application

Badger News is a cross-platform mobile news application built with React Native and Expo. 
It allows users to browse university-related news, open detailed articles, and customize display preferences through a clean, tab-based interface.

This project was completed as part of the CS 571 Mobile Development course at the University of Wisconsin–Madison.

------------------------------------------------------------
🚀 Features
------------------------------------------------------------
- Two-tab navigation built with React Navigation (News & Preferences)
- News feed screen displaying article previews in a card layout
- Article detail screen showing full story content
- User preferences screen for customizing reading experience
- Shared preference state using React Context (BadgerPreferencesContext)
- Responsive UI optimized for mobile displays
- Reusable components for consistent design and maintainability

------------------------------------------------------------
🧰 Tech Stack
------------------------------------------------------------
- React Native (Expo)
- React Navigation
- JavaScript (ES6+)
- React Native Paper
- Expo toolchain (iOS / Android / Web)

------------------------------------------------------------
📁 Project Structure
------------------------------------------------------------
App.js
  Entry point that sets up navigation and context provider.

src/components/BadgerNews.jsx
  Top-level logic for news rendering and article navigation.

src/components/BadgerNewsItemCard.jsx
  Reusable UI card for showing individual news items.

src/components/BadgerPreferencesContext.jsx
  Shared state context for storing user reading preferences.

src/components/navigation/BadgerTabs.jsx
  Tab navigator for switching between News and Preferences.

src/components/navigation/BadgerNewsStack.jsx
  Stack navigator for navigating between News Feed and Article screens.

src/components/screens/BadgerNewsScreen.jsx
  Screen for listing news items.

src/components/screens/BadgerArticleScreen.jsx
  Screen for displaying full article content.

src/components/screens/BadgerPreferencesScreen.jsx
  Screen for allowing users to customize display settings.

assets/
  Icons and splash screen resources for Expo.

_figures/
  Screenshots and images used for documentation.

------------------------------------------------------------
🛠️ Running the App
------------------------------------------------------------
1. Install Node.js, npm, and Expo CLI.

2. Clone the repository:
   git clone https://github.com/JasonYang1203/badger-news-mobile.git
   cd badger-news-mobile

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

5. Choose where to run:
   - Press "i" for iOS Simulator
   - Press "a" for Android Emulator
   - Press "w" for Web Preview
   - Or scan the QR code using the Expo Go mobile app

------------------------------------------------------------
👨‍💻 My Role & Contributions
------------------------------------------------------------
I implemented:
- The entire navigation structure (tabs + stack navigation)
- Screens for news feed, article detail, and preferences
- Reusable components such as BadgerNewsItemCard
- Shared state management using React Context
- UI styling and component layout for mobile devices
- Logic for handling user preferences and article navigation

This project demonstrates my ability to build a polished, multi-screen mobile application using React Native, manage shared state, design UI components, and structure a scalable mobile interface.

------------------------------------------------------------
📚 Learning Outcomes
------------------------------------------------------------
Through this project, I strengthened my understanding of:
- Cross-platform mobile development using React Native and Expo
- Tab and stack navigation patterns
- UI component reuse and design consistency
- Shared state management with React Context
- End-to-end mobile application structure and debugging

------------------------------------------------------------
📄 License
------------------------------------------------------------
MIT License
