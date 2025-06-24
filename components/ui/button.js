export function Button({ children, className = "", ...props }) {
  return (
    <button className={`bg-blue-600 text-white rounded-xl py-2 px-4 hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </button>
  );
}
