import { createRoot } from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/container.min.css';
import 'semantic-ui-css/components/dropdown.min.css';
import 'semantic-ui-css/components/checkbox.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/modal.min.css';
import 'semantic-ui-css/components/menu.min.css';
import 'semantic-ui-css/components/popup.min.css';
import 'semantic-ui-css/components/tab.min.css';
import 'semantic-ui-css/components/input.min.css';
import 'semantic-ui-css/components/dimmer.min.css';
import 'semantic-ui-css/components/segment.min.css';
import 'semantic-ui-css/components/search.min.css';
import 'semantic-ui-css/components/label.min.css';
import 'semantic-ui-css/components/item.min.css';
import 'semantic-ui-css/components/transition.min.css';
import 'semantic-ui-css/components/reset.min.css';
import 'semantic-ui-css/components/sidebar.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import { UpdateSW } from 'components';
import 'assets/styles/pokemon.css';
import 'assets/styles/item.css';
import App from './App';
import './i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <UpdateSW />
  </>
);

serviceWorkerRegistration.register({
  onInit: (registration) => window.setServiceWorker(registration),
  onUpdate: (registration) => window.setServiceWorker(registration),
});
