import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function App() {
	return (
		<>
			<BrowserView>
				<h1>This is rendered only in browser</h1>
			</BrowserView>
			<MobileView>
				<h1>This is rendered only on mobile</h1>
			</MobileView>
		</>
	);
}

export default App;
