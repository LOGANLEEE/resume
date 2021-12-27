import { AppWrapper } from 'AppWrapper';
import { ForMobile } from 'containers/ForMobile';
import { ForPC } from 'containers/ForPC';
import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { CSSTransition } from 'react-transition-group';

/* todo 

entering animation

*/

function App() {
	const [reveal, setReveal] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setReveal(true);
		}, 500);
	}, []);
	return (
		<AppWrapper>
			<CSSTransition
				in={reveal}
				timeout={200}
				classNames='init'
				unmountOnExit
				onEnter={() => setReveal(true)}
				onExited={() => setReveal(false)}>
				<>
					<BrowserView>
						<ForPC />
					</BrowserView>
					<MobileView>
						<ForMobile />
					</MobileView>
				</>
			</CSSTransition>
		</AppWrapper>
	);
}

export default App;
