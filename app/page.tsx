const CATEGORIES = [
  { name: 'Paseo', slug: 'paseo', image: 'https://d22fxaf9t8d39k.cloudfront.net/c4be7ce1f449bcc653a351082e0c4f61da3a5a788ea11d12347cb136d42b2ff662110.jpg' },
  { name: 'Descanso', slug: 'descanso', image: 'https://d22fxaf9t8d39k.cloudfront.net/8f0031ee6352ae6194f25a47f062e6c6e23ae0fe32837414a5f4147b92fc41ff62110.jpg' },
  { name: 'Identificación', slug: 'identificacion', image: 'https://d22fxaf9t8d39k.cloudfront.net/ce108a9b59cefbe9f1c46e695824e4a35457c44cd9b3c4c6960993a6a65f435962110.jpg' },
  { name: 'Comederos', slug: 'comedero', image: 'https://d22fxaf9t8d39k.cloudfront.net/ee28267db365b8dd276e5363f046a56399c0a240df3adec325f527acdeb9a61262110.jpg' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-stone-50/95 px-6 py-4 backdrop-blur">
        <span className="text-2xl font-extrabold tracking-tight">SOMOS OREJAS</span>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#categorias" className="hover:text-amber-700">Categorías</a>
          <a href="#nosotros" className="hover:text-amber-700">Nosotros</a>
          <a href="#contacto" className="hover:text-amber-700">Contacto</a>
          <a href="https://wa.me/5491130163088" target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-700 px-4 py-2 text-white hover:bg-amber-800">Consultar</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700">Hecho con amor</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">Accesorios de diseño para tu mejor amigo</h1>
          <p className="mb-8 text-lg text-stone-600">Confort, estilo y seguridad para los que más queremos. Paseo, descanso e identificación en un solo lugar.</p>
          <a href="https://www.somosorejas.com.ar/productos" className="inline-block rounded-full bg-amber-700 px-8 py-3 font-bold text-white hover:bg-amber-800">Ver colección</a>
        </div>
        <img
          src={CATEGORIES[0].image}
          alt="Pretal H Vainilla de Somos Orejas"
          className="w-full rounded-3xl bg-white object-cover shadow-xl"
        />
      </section>

      <section id="categorias" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-3xl font-extrabold">Nuestras categorías</h2>
          <p className="mb-10 text-stone-600">Todo lo que tu mascota necesita, con calidad y diseño.</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map(({ name, slug, image }) => (
              <a key={name} href={`https://www.somosorejas.com.ar/${slug}`} className="group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 transition hover:shadow-lg">
                <img src={image} alt={name} className="h-52 w-full bg-white object-cover transition group-hover:scale-105" />
                <div className="flex items-center justify-between p-4 font-bold">
                  {name}
                  <span className="text-amber-700">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
        {[
          ['3 cuotas', 'Pagá con todas tus tarjetas en 3 cuotas sin interés.'],
          ['10% por transferencia', 'Ahorrá pagando con transferencia bancaria.'],
          ['Envíos a todo el país', 'Recibí tus productos donde estés.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="text-stone-600">{text}</p>
          </div>
        ))}
      </section>

      <section id="contacto" className="bg-stone-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-3xl font-extrabold">¿Tenés un pet shop?</h2>
          <p className="mb-8 max-w-2xl text-stone-300">Trabajamos con revendedores. Consultanos por precios mayoristas y condiciones.</p>
          <a href="https://wa.me/5491130163088" className="inline-block rounded-full bg-white px-8 py-3 font-bold text-stone-900">Escribinos por WhatsApp</a>
        </div>
      </section>

      <footer className="px-6 py-10 text-sm text-stone-500">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p>© 2026 Somos Orejas · Ramos Mejía, Buenos Aires, Argentina</p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/somos_orejas" className="hover:text-amber-700">Instagram</a>
            <a href="https://www.facebook.com/somos.orejas" className="hover:text-amber-700">Facebook</a>
            <a href="mailto:orejasmascotas@outlook.es" className="hover:text-amber-700">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
