import { AppWrapper } from 'AppWrapper';
import { ForMobile } from 'containers/ForMobile';
import { ForPC } from 'containers/ForPC';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

/* todo 

entering animation

*/

function App() {
	return (
		<AppWrapper>
			<BrowserView>
				<ForPC />
			</BrowserView>
			<MobileView>
				<ForMobile />
			</MobileView>
		</AppWrapper>
	);
}

export default App;
