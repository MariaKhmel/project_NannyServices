// bugsnag.js
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';

// Initialize Bugsnag
Bugsnag.start({
  apiKey: '06cbef00e810fbbce732932e3abfdb68', // Replace with your Bugsnag API key
  plugins: [new BugsnagPluginReact()],
});

export default Bugsnag;