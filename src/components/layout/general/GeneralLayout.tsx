export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-center">
      <section className="container w-full flex">{children}</section>
    </main>
  );
}
