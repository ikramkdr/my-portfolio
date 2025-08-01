export function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl px-4 py-2 font-bold transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
