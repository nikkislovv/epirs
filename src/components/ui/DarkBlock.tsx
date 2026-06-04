export default function DarkBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-darkblock rounded-[28px] p-4 md:p-8 ${className}`}>
      {children}
    </div>
  )
}
