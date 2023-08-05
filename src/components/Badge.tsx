export const Badge: React.FC<React.ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div {...props} className="rounded-full bg-blue-500 px-3 py-1 hover:bg-blue-300">
      {children}
    </div>
  );
};
