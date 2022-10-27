const PrimaryButton = ({ children, href, ...props }) => {
	const className = 'transiton rounded-sm bg-red-700 py-2 px-4 font-poppins text-sm font-medium text-white duration-300 hover:bg-red-800';

	if (href) {
		return (
			<a href={href} {...props} className={className}>
				{children}
			</a>
		);
	}

	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export default PrimaryButton;
