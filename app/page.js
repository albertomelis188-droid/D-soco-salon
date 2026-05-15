
export default function Home() {
  const services = [
    "Cabello",
    "Cejas",
    "Barbería",
    "Tintado",
    "Queratina",
    "Permanentes",
    "Peinados",
    "Highlights",
  ];

  return (
   <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="text-center py-20 px-6">
       <h1 className="text-6xl font-bold text-pink-400 mb-6">
          De Soco Alta Calidad
        </h1>

        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Salón de Belleza profesional con servicios de cabello, barbería,
          queratina, highlights y peinados modernos.
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/12035452239"
            className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Servicios
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl p-8 shadow-lg"
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center px-6">
        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          Contacto
        </h2>

        <p className="text-xl mb-3">(203) 545-2239</p>
        <p className="text-xl mb-3">64 Maplewood Ave</p>
        <p className="text-xl">Instagram & Facebook: Montes Soco</p>
      </section>
    </main>
  );
}
