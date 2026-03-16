import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { HomeScreen } from './screens/HomeScreen';
import { MaximsScreen } from './screens/MaximsScreen';
import { MaximDetailScreen } from './screens/MaximDetailScreen';
import { PathsScreen } from './screens/PathsScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { TeachingDetailScreen } from './screens/TeachingDetailScreen';

export const App: React.FC = () => {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/maxims" element={<MaximsScreen />} />
        <Route path="/maxims/:number" element={<MaximDetailScreen />} />
        <Route path="/paths" element={<PathsScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/teaching/:id" element={<TeachingDetailScreen />} />
      </Routes>
      <TabBar />
    </div>
  );
};
