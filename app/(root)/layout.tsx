import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="w-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
