export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} bg-brand-500 rounded-full flex items-center justify-center group-hover:bg-brand-400 transition-colors`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5C7 5 10 5 12 5C14 5 17 5 17 8C17 11 14 11 12 11C10 11 7 11 7 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 19C17 19 14 19 12 19C10 19 7 19 7 16C7 13 10 13 12 13C14 13 17 13 17 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
