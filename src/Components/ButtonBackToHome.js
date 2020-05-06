import React from "react";

export const ButtonBackToHome = ({ children }) => (
	<button className="button is-info" onClick={_goBack}>
		{children}
	</button>
);
const _goBack = e => {
	window.history.back();
};
