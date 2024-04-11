export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center">20% off if you buy it now.</div>
      {children}
    </div>
  );
}
