const UnstyledButton = ({ onClick, className, children, ...props }) => {
	return (
		<button onClick={onClick} className={`flex items-center justify-center ${className}`} {...props}>
			{children}
		</button>
	);
};

export default UnstyledButton;
