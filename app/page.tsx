export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[100dvh] bg-white px-8">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-black text-center">
        Precision<br />Engineering.
      </h1>
      <div className="mt-12 flex flex-col items-center space-y-2">
        <p className="text-[10px] tracking-[0.5em] uppercase font-bold">Lume Global Core</p>
        <div className="w-48 h-[1px] bg-black opacity-20"></div>
        <p className="text-[8px] tracking-[0.3em] uppercase opacity-40">Status: Online // Node_London_Active</p>
      </div>
    </main>
  );
}
