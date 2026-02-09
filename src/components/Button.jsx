const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const styles =
    variant === 'secondary'
      ? 'border border-accent text-accent hover:bg-accent hover:text-cream'
      : 'bg-accent text-cream hover:bg-secondary hover:text-neutral';

  if (href) {
    return (
      <a className={`${base} ${styles} ${className}`} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
