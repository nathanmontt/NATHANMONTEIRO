function Button({ onClick, isActive, children, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
        isActive 
          ? 'bg-white/30 text-white' 
          : 'bg-black/20 text-(--text-color) hover:bg-black/30'
      } ${className}`}
    >
      {children}
    </button>
  )
}

export default Button