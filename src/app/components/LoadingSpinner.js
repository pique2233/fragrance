//LoadingSpinner.js
'use client';

export default function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-amber-500 ${
          sizeClasses[size] || sizeClasses.md
        }`}
      />
    </div>
  );
}