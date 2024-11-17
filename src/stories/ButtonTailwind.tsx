export interface ButtonTailwindProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: "small" | "medium" | "large";
	/** Button contents */
	label: string;
	/** Optional click handler */
	onClick?: () => void;
}

/** Primary UI component for user interaction */
export const ButtonTailwind = ({
	primary = false,
	size = "medium",
	backgroundColor,
	label,
	...props
}: ButtonTailwindProps) => {
	const mode = primary
		? "bg-blue-500 dark:bg-blue-600"
		: "bg-orange-500 dark:bg-orange-600";
	return (
		<button
			type="button"
			className={["storybook-button", `storybook-button--${size}`, mode].join(
				" ",
			)}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
