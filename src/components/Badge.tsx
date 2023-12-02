export const Badge: React.FC<React.ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div {...props} className="rounded-full bg-violet-600 px-3 py-1 text-sm tracking-tight text-white sm:text-base">
      {children}
    </div>
  );
};
