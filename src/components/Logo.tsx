/* eslint-disable @next/next/no-img-element */

export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <img src="/images/logo-full.png" alt="Status P-E Pte Ltd" className={className} />
  );
}
