import classNames from 'classnames';

type Props = {
  type ?: "button" | "submit" | "reset" | undefined; 
  variant?: 'default' | 'dark' | 'primary' | 'light';
  children: React.ReactNode;
};

const Button = ({ type = 'button', variant, children }: Props) => {
  let bgColor = 'text-black';
  if (variant === 'primary') bgColor = 'bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white';
  if (variant === 'dark') bgColor = 'bg-primaryDark text-white';
  if (variant === 'light') bgColor = 'bg-primaryLight text-white';
  return (
    <button
      type={type}
      className={classNames(
        'py-2 px-4 rounded-md font-bold',
        bgColor
      )}
    >
      {children}
    </button>
  );
};

export default Button;
