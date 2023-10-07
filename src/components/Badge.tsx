export const Badge: React.FC<React.ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div {...props} className="text-md rounded-full bg-purple-600 px-3 py-1 tracking-tight text-white">
      {children}
    </div>
  );
};
