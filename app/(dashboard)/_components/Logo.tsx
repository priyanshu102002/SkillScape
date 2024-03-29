import Image from "next/image";
import React from "react";

const Logo = () => {
	return (
		<div>
			<Image src="/logo.svg" alt="Logo" width={130} height={130} />
		</div>
	);
};

export default Logo;
