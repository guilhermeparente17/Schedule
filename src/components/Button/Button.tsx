import classNames from 'classnames';

type Props = {
  variant?: 'default' | 'dark' | 'primary' | 'light';
  children: React.ReactNode;
};

const Button = ({ variant, children }: Props) => {
  let bgColor = 'text-black';
  if (variant === 'primary') bgColor = 'bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white';
  if (variant === 'dark') bgColor = 'bg-primaryDark text-white';
  if (variant === 'light') bgColor = 'bg-primaryLight text-white';
  return (
    <button
      className={classNames(
        'py-2 px-4 rounded-md font-bold text-white',
        bgColor
      )}
    >
      {children}
    </button>
  );
};

export default Button;