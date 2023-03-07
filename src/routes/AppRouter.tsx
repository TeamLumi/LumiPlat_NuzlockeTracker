import { Route, Routes } from 'react-router-dom';
import {
  About,
  Builder,
  Calculator,
  Changelog,
  Import,
  Pokestats,
  Report,
  Rules,
  Settings,
  Tracker,
} from 'components';
import { BadgePage } from 'components/Badges/elements';

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Tracker />
        }
      />
      <Route
        path="/rules"
        element={
          <Rules />
        }
      />
      <Route
        path="/stats"
        element={
          <Pokestats />
        }
      />
      <Route
        path="/builder"
        element={
          <Builder />
        }
      />
      <Route
        path="/calculator"
        element={
          <Calculator />
        }
      />
      <Route
        path="/settings"
        element={
          <Settings />
        }
      />
      <Route
        path="/report"
        element={
          <Report />
        }
      />
      <Route
        path="/changelog"
        element={
          <Changelog />
        }
      />
      <Route
        path="/about"
        element={
          <About />
        }
      />
      <Route
        path="/import"
        element={
          <Import />
        }
      />
      <Route
        path="/badgedetail/:game/:badge"
        element={
          <BadgePage />
        }
      />
    </Routes>
  );
}

export default AppRouter;
