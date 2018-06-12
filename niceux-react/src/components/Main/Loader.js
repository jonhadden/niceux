import React from 'react';
import Loading from 'react-loading-components';
 
const Loader = () => (
	<div className="loader">
		<Loading type='oval' width={40} height={40} fill='#1286bf' />
	</div>
);
 
export default Loader;