import { ImSpinner2 as Spinner } from 'react-icons/im';

import React from 'react';

const Loading = () => {
	return (
		<div className="flex w-full items-center justify-center">
			<Spinner className="h-20 w-20 animate-spin text-red-800" />
		</div>
	);
};

export default Loading;
