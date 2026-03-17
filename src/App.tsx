import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { HomeScreen } from './screens/HomeScreen';
import { MaximsScreen } from './screens/MaximsScreen';
import { MaximDetailScreen } from './screens/MaximDetailScreen';
import { PathsScreen } from './screens/PathsScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { TeachingDetailScreen } from './screens/TeachingDetailScreen';

export const App: React.FC = () => {
  const location = useLocation();
  const isWelcome = location.pathname === '/' || location.pathname === '';

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/today" element={<HomeScreen />} />
        <Route path="/maxims" element={<MaximsScreen />} />
        <Route path="/maxims/:number" element={<MaximDetailScreen />} />
        <Route path="/paths" element={<PathsScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/teaching/:id" element={<TeachingDetailScreen />} />
      </Routes>
      {!isWelcome && <TabBar />}
    </div>
  );
};
