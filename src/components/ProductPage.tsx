import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import PortfolioShowcase from "@/components/PortfolioShowcase"; // Импортируем наш новый блок

export default function ProductPage({ product }: { product: any }) {
  return (
    <main className="bg-[#fcfaf7]">
      <Header />
      
      {/* Hero секция... */}
      
      {/* Интегрируем наше портфолио как блок */}
      <PortfolioShowcase />

      {/* Оставшиеся секции (Инженерия, Заявка и т.д.) */}
      <section id="request">
        <ContactForm />
      </section>
    </main>
  );
}
