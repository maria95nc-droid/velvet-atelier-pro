import {
  Sparkles,
  Heart,
  MessageCircle,
  ChevronDown,
  Phone,
  ImageIcon,
  ShieldCheck,
  Stethoscope,
  Users,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import bridalFlatlayShoes from "@/assets/bridal-flatlay-shoes.jpg";
import detalleMaquillajeOjos from "@/assets/detalle-maquillaje-ojos.jpg";
import detalleOjosInvitada from "@/assets/detalle-ojos-invitada.jpg";
import isabelHeroBW from "@/assets/isabel-presentacion-blanco-negro.jpg";
import maquillajeContraluz from "@/assets/maquillaje-contraluz.jpg";
import maquillajeNoviaVestidoAzul from "@/assets/maquillaje-novia-vestido-azul.jpg";
import maquillajeInvitadaVerde from "@/assets/maquillaje-invitada-verde.jpg";
import maquillajeNoviaPerfil from "@/assets/maquillaje-novia-perfil.jpg";
import maquillajeNoviaPreparacion from "@/assets/maquillaje-novia-preparacion.jpg";
import noviaVeloMaquillaje from "@/assets/novia-velo-maquillaje.jpg";
import preparacionBodaHabitacion from "@/assets/preparacion-boda-habitacion.jpg";
import productsFlatlay from "@/assets/gallery-flatlay.jpg";
import resultadoMaquillajeInvitada from "@/assets/resultado-maquillaje-invitada.jpg";
import resultadoNoviaCeremonia from "@/assets/resultado-novia-ceremonia.jpg";
import resultadoNoviaExterior from "@/assets/resultado-novia-exterior.jpg";
import heroIsabelColorVestidoRojo from "@/assets/hero-isabel-color-vestido-rojo.jpg";
import galeriaMaria15 from "@/assets/galeria-maria-15.jpg";
import galeriaMaria17 from "@/assets/galeria-maria-17.jpg";
import galeriaNoviaVentanaIsabel from "@/assets/galeria-novia-ventana-isabel.jpg";
import galeriaNoviaRetoqueLabios from "@/assets/galeria-novia-retoque-labios.jpg";
import galeriaSarayMaquillajeLabios from "@/assets/galeria-saray-maquillaje-labios.jpg";
import galeriaSarayResultadoInvitada from "@/assets/galeria-saray-resultado-invitada.jpg";
import galeriaSarayRetoquePolvos from "@/assets/galeria-saray-retoque-polvos.jpg";
import servicioMaquillajeInvitadasEventos from "@/assets/servicio-maquillaje-invitadas-eventos.jpg";
import servicioMaquillajeNoviaCeremonia from "@/assets/servicio-maquillaje-novia-ceremonia.jpg";
import servicioPackInvitadaManicura from "@/assets/servicio-pack-invitada-manicura.jpg";
import servicioPruebaMaquillajeNovia from "@/assets/servicio-prueba-maquillaje-novia.jpg";

/* ===== CONFIG ===== */
const BRAND_NAME = "Isabel Agüera Jiménez";
const WHATSAPP_NUMBER = "34644139558";
const WHATSAPP_DISPLAY = "+34 644 13 95 58";
const SITE_URL = "https://isabelaguerajimenez.es";
const SITE_DISPLAY = "isabelaguerajimenez.es";
const defaultMessage =
  "Hola Isabel, me gustaría consultar disponibilidad para maquillaje de novia/invitada a domicilio. Fecha: ____. Ubicación: ____. Nº de personas: ____.";
const waLink = (message: string = defaultMessage) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido">
        <Hero />
        <TrustDifferential />
        <Services />
        <PricingNote />
        <AboutIsabel />
        <BridalAmbient />
        <Gallery />
        <GroupsService />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container-narrow flex items-center justify-between py-5">
        <a href="#top" className="font-serif text-base sm:text-lg tracking-wide text-foreground">
          {BRAND_NAME}
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8 text-sm text-foreground/80"
        >
          <a href="#servicios" className="hover:text-accent transition">
            Servicios
          </a>
          <a href="#sobre-mi" className="hover:text-accent transition">
            Sobre mí
          </a>
          <a href="#galeria" className="hover:text-accent transition">
            Galería
          </a>
          <a href="#proceso" className="hover:text-accent transition">
            Proceso
          </a>
          <a href="#faq" className="hover:text-accent transition">
            FAQ
          </a>
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground hover:bg-foreground hover:text-background transition"
        >
          WhatsApp
        </a>
        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          onClick={() => setIsOpen((current) => !current)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <nav
        id="menu-movil"
        aria-label="Navegación móvil"
        className={`${isOpen ? "flex" : "hidden"} md:hidden mx-5 flex-col rounded-2xl border border-border bg-background/95 p-3 shadow-[0_20px_60px_-30px_oklch(0.28_0.025_40_/_0.45)] backdrop-blur`}
      >
        {[
          ["Servicios", "#servicios"],
          ["Sobre mí", "#sobre-mi"],
          ["Galería", "#galeria"],
          ["Proceso", "#proceso"],
          ["FAQ", "#faq"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm hover:bg-secondary"
          >
            {label}
          </a>
        ))}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </nav>
    </header>
  );
}

/* ---------- HERO ---------- */
function HeroImageRotator() {
  const slides = [
    {
      src: isabelHeroBW,
      alt: "Retrato de presentación de Isabel Agüera Jiménez en blanco y negro.",
      position: "center 42%",
    },
    {
      src: heroIsabelColorVestidoRojo,
      alt: "Retrato luminoso de Isabel Agüera Jiménez como segunda imagen de presentación.",
      position: "center 38%",
    },
  ];

  const [active, setActive] = useState(0);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [reduceMotion, slides.length]);

  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-[0_40px_120px_-60px_oklch(0.28_0.025_40_/_0.6)]">
      {slides.map((slide, idx) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1200}
          height={1600}
          loading={idx === 0 ? "eager" : "lazy"}
          fetchPriority={idx === 0 ? "high" : "auto"}
          decoding="async"
          aria-hidden={idx !== active}
          style={{ objectPosition: slide.position }}
          className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform,filter] duration-[1400ms] ease-out ${
            idx === active ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.06] blur-[2px]"
          }`}
        />
      ))}

      <div className="absolute bottom-4 right-4 flex gap-1 rounded-full bg-background/70 backdrop-blur px-2 py-1 border border-border/70">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            aria-label={`Ver imagen de presentación ${idx + 1}`}
            aria-current={idx === active ? "true" : undefined}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full"
          >
            <span
              className={`h-1.5 rounded-full transition-all ${
                idx === active ? "w-6 bg-accent" : "w-1.5 bg-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-narrow pt-28 pb-16 md:pt-36 md:pb-28 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent-foreground/80">
            <span className="h-px w-8 bg-accent" />
            Maquillaje de novia en Oviedo
          </span>
          <p className="mt-6 font-serif text-2xl text-accent">Isabel Agüera Jiménez</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground">
            Maquillaje de novia e invitadas <em className="text-accent not-italic">a domicilio</em>{" "}
            en Oviedo.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Looks elegantes, naturales y duraderos para bodas, eventos y ocasiones especiales. Me
            desplazo a casa, hotel o lugar de preparación para que puedas vivir ese momento con
            calma, confianza y fiel a tu estilo, desde la prueba hasta el último retoque.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-foreground/70">
            Novias · Invitadas · Prueba previa · Oviedo y zona centro de Asturias
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-foreground transition shadow-[0_20px_60px_-30px_oklch(0.28_0.025_40)]"
            >
              <MessageCircle className="w-4 h-4" />
              Reservar prueba por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm tracking-wide hover:bg-secondary transition"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="md:col-span-6 order-1 md:order-2 relative">
          <HeroImageRotator />
          <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-background/95 backdrop-blur border border-border rounded-2xl px-5 py-4 shadow-[0_20px_60px_-30px_oklch(0.28_0.025_40_/_0.4)]">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-serif text-base leading-tight">
                Servicio de maquillaje a domicilio
              </p>
              <p className="text-xs text-muted-foreground">Novias, invitadas y eventos</p>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-40"
        style={{ background: "radial-gradient(closest-side, var(--champagne), transparent)" }}
      />
    </section>
  );
}

/* ---------- TRUST DIFFERENTIAL ---------- */
function TrustDifferential() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Cuidado de la piel e higiene",
      text: "Su experiencia en la Clínica Dermatológica Sánchez del Río aporta una forma de trabajar ordenada, limpia y muy atenta a la piel.",
    },
    {
      icon: Stethoscope,
      title: "Formación sanitaria",
      text: "Su formación como auxiliar de enfermería suma criterio, delicadeza y responsabilidad en el trato con cada clienta.",
    },
    {
      icon: Heart,
      title: "Resultado elegante y personalizado",
      text: "Cada maquillaje, manicura o pedicura se adapta al estilo, la piel, la ocasión y las necesidades de cada clienta.",
    },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">
            Diferencial
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
            Belleza, piel e higiene: el detalle que marca la diferencia.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Isabel combina estética, experiencia sanitaria y atención personalizada para ofrecer un
            servicio de belleza más cuidadoso. Su formación como auxiliar de enfermería y su paso
            por un entorno dermatológico de referencia en Oviedo aportan una mirada delicada hacia
            la piel, la higiene y el bienestar de cada clienta.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 md:gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-background border border-border p-6 hover:border-accent/50 transition"
            >
              <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                <it.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="mt-4 font-serif text-xl leading-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
type Service = {
  title: string;
  copy: string;
  price: string;
  cta: string;
  message: string;
  image: string | null;
  imageAlt?: string;
};

function Services() {
  const services: Service[] = [
    {
      title: "Maquillaje para novias",
      copy: "Maquillaje profesional de larga duración para novias que buscan un acabado elegante, natural y fotogénico, con preparación cuidadosa de la piel.",
      price: "Desde 300 €",
      cta: "Consultar pack novia",
      message:
        "Hola Isabel, me gustaría consultar el pack de maquillaje para novia. Fecha de la boda: ____. Lugar: ____.",
      image: servicioMaquillajeNoviaCeremonia,
      imageAlt: "Novia con maquillaje terminado y resultado elegante en el día de su boda.",
    },
    {
      title: "Prueba de maquillaje de novia o invitada",
      copy: "Sesión previa para conocernos, definir piel, tonos, intensidad y estilo, y decidir con tranquilidad antes de reservar el servicio para la boda o el evento.",
      price: "Consultar",
      cta: "Reservar prueba",
      message:
        "Hola Isabel, me gustaría consultar disponibilidad para una prueba de maquillaje (novia/invitada). Fecha del evento: ____. Lugar: ____.",
      image: servicioPruebaMaquillajeNovia,
      imageAlt:
        "Prueba de maquillaje con Isabel Agüera Jiménez antes del día de la boda o del evento.",
    },
    {
      title: "Maquillaje para invitadas y eventos",
      copy: "Maquillaje para bodas, comuniones, cenas, graduaciones, sesiones de fotos y eventos especiales, adaptado a tu estilo.",
      price: "Desde 75 €",
      cta: "Reservar maquillaje",
      message:
        "Hola Isabel, me gustaría reservar maquillaje de invitada o evento. Fecha: ____. Lugar: ____. Nº de personas: ____.",
      image: servicioMaquillajeInvitadasEventos,
      imageAlt: "Resultado de maquillaje para invitada o evento con acabado luminoso.",
    },
    {
      title: "Manicura semipermanente",
      copy: "Manicura semipermanente a domicilio para el día a día o para ocasiones especiales. Solo esmaltado: 30 €. Completa: 40 €, con tratamiento de manos (exfoliación, hidratación y masaje).",
      price: "Desde 30 €",
      cta: "Reservar manicura",
      message:
        "Hola Isabel, me gustaría reservar una manicura semipermanente a domicilio. Fecha: ____. Zona: ____.",
      image: productsFlatlay,
      imageAlt: "Esmaltes y productos de uñas para manicura semipermanente a domicilio.",
    },
    {
      title: "Pedicura semipermanente",
      copy: "Pedicura semipermanente cómoda y elegante para eventos, viajes o cuidado personal. Solo esmaltado: 35 €. Completa: 45 €, con tratamiento de pies (exfoliación, hidratación y masaje).",
      price: "Desde 35 €",
      cta: "Consultar disponibilidad",
      message:
        "Hola Isabel, me gustaría consultar disponibilidad para una pedicura semipermanente. Fecha: ____.",
      image: productsFlatlay,
      imageAlt:
        "Productos de belleza, brochas y esmaltes para manicura y pedicura semipermanente a domicilio.",
    },
    {
      title: "Pack novia beauty",
      copy: "Pack completo para llegar a la boda con la piel preparada y sin preocupaciones: estudio de piel y recomendación de productos adecuados para ti, preparación de la piel en los días previos, depilación y maquillaje de novia a domicilio el gran día.",
      price: "Desde 350 €",
      cta: "Pedir presupuesto",
      message:
        "Hola Isabel, me gustaría un presupuesto para el pack novia beauty. Fecha de la boda: ____. Lugar: ____.",
      image: bridalFlatlayShoes,
      imageAlt: "Detalle de preparación de novia con ramo y zapatos antes de la boda.",
    },
    {
      title: "Pack invitada · maquillaje + manicura",
      copy: "Una opción completa para invitadas que quieren maquillaje y manicura en un mismo servicio.",
      price: "Desde 105 €",
      cta: "Pedir presupuesto",
      message:
        "Hola Isabel, me gustaría un presupuesto para el pack invitada (maquillaje + manicura). Fecha: ____. Lugar: ____.",
      image: servicioPackInvitadaManicura,
      imageAlt: "Pack de maquillaje y manicura para invitada con estética limpia y elegante.",
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Servicios</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            Maquillaje para novias, invitadas y eventos.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Maquillaje profesional a domicilio como servicio principal, con manicura y pedicura como
            complementos para completar el look de novia o invitada.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-3xl bg-background border border-border overflow-hidden hover:border-accent/40 transition shadow-[0_20px_60px_-50px_oklch(0.28_0.025_40_/_0.5)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-muted">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.imageAlt ?? s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-accent-foreground/70">
                      Foto próximamente
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 p-6 md:p-7">
                <h3 className="font-serif text-xl md:text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.copy}
                </p>
                <p className="mt-5 font-serif text-lg text-accent">{s.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  El precio puede variar según el domicilio.
                </p>
                <a
                  href={waLink(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm hover:bg-foreground transition self-start"
                >
                  <MessageCircle className="w-4 h-4" />
                  {s.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING NOTE ---------- */
function PricingNote() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-border bg-secondary/40 px-6 md:px-8 py-7">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Los precios son orientativos y pueden variar según desplazamiento, fecha, número de
            personas, prueba previa y necesidades concretas. Para recibir una propuesta ajustada,
            envía la fecha, ubicación, horario aproximado y número de personas.
          </p>
          <a
            href={waLink(
              "Hola Isabel, me gustaría solicitar un presupuesto. Fecha: ____. Ubicación: ____. Servicios: ____.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-foreground transition whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar presupuesto por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ISABEL SLIDER ---------- */
function IsabelSlider() {
  const slides = [
    {
      src: preparacionBodaHabitacion,
      alt: "Preparación de maquillaje de boda en habitación con material profesional.",
    },
    {
      src: maquillajeNoviaPerfil,
      alt: "Isabel Agüera Jiménez retocando el maquillaje de una novia.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const goTo = useCallback(
    (idx: number) => {
      setCurrent((idx + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (reduceMotion) return;
    timerRef.current = setTimeout(() => goTo(current + 1), 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, goTo, reduceMotion]);

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_120px_-60px_oklch(0.28_0.025_40_/_0.6)]">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.alt}
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
            aria-hidden={idx !== current}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Arrow controls */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Imagen siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Ir a imagen ${idx + 1}`}
            aria-current={idx === current ? "true" : undefined}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full"
          >
            <span
              className={`h-2 rounded-full transition-all ${
                idx === current ? "w-5 bg-accent" : "w-2 bg-accent/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- ABOUT ISABEL (fusionada con SkinCare, con slider) ---------- */
function AboutIsabel() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-narrow grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">
            Conoce a Isabel
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            Belleza profesional con una mirada cuidadosa hacia la piel.
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            Soy Isabel Agüera Jiménez, profesional de estética especializada en maquillaje para
            novias, invitadas y eventos, además de manicura y pedicura semipermanente a domicilio.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mi experiencia como auxiliar de enfermería y mi paso por la Clínica Dermatológica
            Sánchez del Río en Oviedo me han enseñado la importancia de trabajar con higiene,
            delicadeza y atención a la piel. Por eso, cada servicio está pensado para que te sientas
            cómoda, segura y fiel a tu estilo, con un resultado elegante y un trato cercano y
            personalizado.
          </p>

          <ul className="mt-7 space-y-2">
            {[
              "Auxiliar de enfermería",
              "Experiencia en entorno dermatológico",
              "Belleza a domicilio con cuidado e higiene",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm hover:bg-foreground transition"
          >
            <MessageCircle className="w-4 h-4" />
            Reservar prueba por WhatsApp
          </a>
        </div>

        <div className="md:col-span-6 order-1 md:order-2">
          <IsabelSlider />
        </div>
      </div>
    </section>
  );
}

/* ---------- BRIDAL AMBIENT ---------- */
function BridalAmbient() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 30%, var(--champagne), transparent 70%), radial-gradient(50% 50% at 15% 80%, var(--rose), transparent 70%)",
        }}
      />
      <div className="container-narrow relative text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Bridal</p>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
          Una experiencia pensada para momentos especiales.
        </h2>
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
          Cada boda y evento tiene su propio ritmo. Isabel te acompaña con un servicio a domicilio
          pensado para que puedas prepararte con calma, cuidando piel, tonos, horarios y retoques en
          un ambiente cómodo y personalizado.
        </p>
        <a
          href={waLink(
            "Hola Isabel, me gustaría preparar mi boda/evento contigo. Fecha: ____. Lugar: ____.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm hover:bg-foreground transition"
        >
          <MessageCircle className="w-4 h-4" />
          Preparar mi boda con Isabel
        </a>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
type GalleryItem = { label: string; src: string | null; alt?: string; position?: string };

const galleryItems: GalleryItem[] = [
  {
    label: "Novia preparada",
    src: galeriaMaria17,
    alt: "Novia con vestido blanco y velo durante la preparación del día de la boda.",
  },
  {
    label: "Preparación de novia en casa",
    src: galeriaMaria15,
    alt: "Isabel Agüera Jiménez ayudando a una novia durante la preparación.",
  },
  {
    label: "Preparación junto a la ventana",
    src: galeriaNoviaVentanaIsabel,
    alt: "Isabel Agüera Jiménez acompañando a una novia durante la preparación junto a la ventana.",
    position: "center center",
  },
  {
    label: "Retoque de labios de novia",
    src: galeriaNoviaRetoqueLabios,
    alt: "Isabel Agüera Jiménez retocando el maquillaje de labios de una novia antes de la boda.",
    position: "center center",
  },
  {
    label: "Preparación de invitada",
    src: galeriaSarayMaquillajeLabios,
    alt: "Isabel Agüera Jiménez maquillando los labios de una invitada durante la preparación de una boda.",
    position: "center center",
  },
  {
    label: "Resultado invitada natural",
    src: galeriaSarayResultadoInvitada,
    alt: "Invitada sonriendo con maquillaje terminado y acabado luminoso.",
    position: "center center",
  },
  {
    label: "Retoque final de maquillaje",
    src: galeriaSarayRetoquePolvos,
    alt: "Isabel Agüera Jiménez realizando un retoque final de maquillaje a una invitada.",
    position: "40% center",
  },
  {
    label: "Maquillaje de novia · vestido azul",
    src: maquillajeNoviaVestidoAzul,
    alt: "Isabel Agüera Jiménez maquillando a una novia mientras lleva vestido azul.",
  },
  {
    label: "Maquillaje de novia",
    src: noviaVeloMaquillaje,
    alt: "Isabel Agüera Jiménez maquillando a una novia con velo.",
  },
  {
    label: "Preparación de novia",
    src: maquillajeNoviaPreparacion,
    alt: "Preparación de maquillaje de novia a domicilio.",
  },
  {
    label: "Maquillaje para invitada",
    src: maquillajeInvitadaVerde,
    alt: "Isabel Agüera Jiménez maquillando a una invitada de boda.",
  },
  {
    label: "Detalle de ojos",
    src: detalleMaquillajeOjos,
    alt: "Detalle de maquillaje de ojos durante un servicio a domicilio.",
  },
  {
    label: "Preparación bridal",
    src: preparacionBodaHabitacion,
    alt: "Escena de preparación de boda con material de maquillaje.",
  },
  {
    label: "Maquillaje luminoso",
    src: maquillajeNoviaPerfil,
    alt: "Maquillaje de novia con luz natural.",
  },
  {
    label: "Resultado invitada",
    src: resultadoMaquillajeInvitada,
    alt: "Resultado de maquillaje elegante para invitada.",
  },
  {
    label: "Resultado novia en ceremonia",
    src: resultadoNoviaCeremonia,
    alt: "Resultado de maquillaje de novia en ceremonia.",
  },
  {
    label: "Resultado novia exterior",
    src: resultadoNoviaExterior,
    alt: "Resultado de maquillaje de novia en exterior.",
  },
  {
    label: "Maquillaje a contraluz",
    src: maquillajeContraluz,
    alt: "Isabel Agüera Jiménez realizando maquillaje a domicilio junto a una ventana.",
  },
  {
    label: "Detalle de ojos invitada",
    src: detalleOjosInvitada,
    alt: "Detalle de maquillaje de ojos para invitada.",
  },
];

const INITIAL_GALLERY_ITEMS = 9;

function Gallery() {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const visibleGalleryItems = showAllGallery
    ? galleryItems
    : galleryItems.slice(0, INITIAL_GALLERY_ITEMS);
  const hiddenGalleryItems = galleryItems.length - INITIAL_GALLERY_ITEMS;

  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Galería</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            Galería de trabajos
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Una selección de trabajos y momentos reales: preparación de novia, invitadas, resultado
            final y ambiente bridal. Para que la página cargue ligera, primero se muestra una
            selección y puedes desplegar la galería completa con un clic.
          </p>
        </div>

        <div
          id="galeria-trabajos"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {visibleGalleryItems.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_60px_-40px_oklch(0.28_0.025_40_/_0.5)] hover:shadow-[0_30px_80px_-40px_oklch(0.28_0.025_40_/_0.55)] transition"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt ?? item.label}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: item.position ?? "center center" }}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-secondary/60 via-background to-muted">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-accent-foreground/70">
                    Foto pendiente de subir
                  </p>
                  <p className="mt-2 font-serif text-base leading-snug text-foreground/85">
                    {item.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {hiddenGalleryItems > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllGallery((current) => !current)}
              aria-expanded={showAllGallery}
              aria-controls="galeria-trabajos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background px-6 py-3 text-sm tracking-wide hover:bg-secondary transition"
            >
              {showAllGallery
                ? "Ver selección reducida"
                : `Ver galería completa (${hiddenGalleryItems} fotos más)`}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showAllGallery ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- GROUPS SERVICE ---------- */
function GroupsService() {
  return (
    <section className="pb-4">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-border bg-background px-6 md:px-8 py-7">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <div className="max-w-2xl">
              <h3 className="font-serif text-xl md:text-2xl leading-tight">
                Servicio para novia, madre e invitadas
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                Si varias personas se preparan en la misma casa, hotel o finca, Isabel puede
                organizar horarios de maquillaje para la novia, madre, hermanas o invitadas,
                manteniendo una experiencia tranquila y bien coordinada.
              </p>
            </div>
          </div>
          <a
            href={waLink(
              "Hola Isabel, me gustaría consultar maquillaje para novia y varias invitadas. Fecha: ____. Lugar: ____. Nº personas: ____.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm hover:bg-secondary transition whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar grupo de invitadas
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { n: "01", t: "Escribe por WhatsApp", d: "Indica fecha, ubicación y servicio que necesitas." },
    {
      n: "02",
      t: "Recibe una propuesta personalizada",
      d: "Isabel revisa disponibilidad, desplazamiento y necesidades concretas.",
    },
    { n: "03", t: "Confirma la cita", d: "Se bloquea la fecha y se acuerdan los detalles." },
    {
      n: "04",
      t: "Disfruta del servicio a domicilio",
      d: "Isabel se desplaza con el material necesario para realizar el servicio con calma e higiene.",
    },
  ];
  return (
    <section id="proceso" className="py-20 md:py-24 bg-secondary/30">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Proceso</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            Cómo reservar tu cita
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-background border border-border p-6 h-full">
              <span className="font-serif text-3xl text-accent">{s.n}</span>
              <h3 className="mt-4 font-serif text-lg leading-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "¿Trabajas a domicilio?",
      a: "Sí, Isabel realiza servicios a domicilio en Oviedo y zona centro de Asturias. Puede desplazarse a casa, hotel, finca o lugar de preparación. Para otros puntos, se valora el desplazamiento.",
    },
    {
      q: "¿Con cuánta antelación debo reservar para una boda?",
      a: "Lo ideal es consultar disponibilidad cuanto antes, especialmente en temporada alta de bodas.",
    },
    {
      q: "¿Haces prueba de maquillaje para novia?",
      a: "Sí, se puede incluir prueba previa para definir estilo, tonos y acabado.",
    },
    {
      q: "¿Puedes maquillar a varias invitadas el mismo día?",
      a: "Sí, siempre que el horario lo permita. Lo ideal es indicar cuántas personas sois, la hora de salida y el lugar de preparación para organizar bien los tiempos.",
    },
    {
      q: "¿El maquillaje está pensado para fotos y muchas horas?",
      a: "Sí. El objetivo es un acabado favorecedor, duradero y cómodo para fotografía, emoción, ceremonia y celebración.",
    },
    {
      q: "¿La manicura es solo para bodas?",
      a: "No. La manicura semipermanente también está disponible como servicio habitual.",
    },
    {
      q: "¿Haces uñas de gel o acrílicas?",
      a: "No. El servicio se centra en manicura semipermanente y cuidado de uñas.",
    },
    {
      q: "¿Qué aporta tu experiencia como auxiliar de enfermería?",
      a: "Aporta una forma de trabajar más cuidadosa, higiénica y atenta a la piel, sin que esto sustituya servicios médicos o dermatológicos.",
    },
    {
      q: "¿Cómo puedo reservar?",
      a: "Escribiendo por WhatsApp con fecha, ubicación y servicio que necesitas.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container-narrow grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
            Preguntas frecuentes.
          </h2>
          <p className="mt-5 text-muted-foreground text-sm">
            ¿No encuentras tu respuesta? Escríbeme directamente por WhatsApp.
          </p>
        </div>
        <div className="md:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-respuesta-${i}`}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left group cursor-pointer"
                  >
                    <span className="font-serif text-lg md:text-xl">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-accent shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p
                      id={`faq-respuesta-${i}`}
                      className="pb-6 pr-10 text-muted-foreground leading-relaxed"
                    >
                      {f.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground px-6 md:px-16 py-16 md:py-24 text-center">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-30"
            style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }}
          />
          <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60 relative">
            Reserva
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight relative">
            Consulta disponibilidad para tu fecha.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-primary-foreground/75 relative">
            Cuéntale a Isabel la fecha, ubicación, horario y número de personas para recibir una
            propuesta personalizada para tu boda, evento o servicio beauty a domicilio.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center relative">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm hover:opacity-90 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-4 text-sm hover:bg-primary-foreground/10 transition"
            >
              Ver servicios
            </a>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60 relative">
            Respuesta por WhatsApp · Servicio a domicilio en Oviedo y zona centro de Asturias.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container-narrow grid md:grid-cols-2 gap-10">
        <div>
          <p className="font-serif text-xl">{BRAND_NAME}</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
            Maquillaje para novias, invitadas y eventos. Manicura y pedicura semipermanente como
            complemento beauty a domicilio.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Oviedo y zona centro de Asturias</p>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Contacto</p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm hover:text-accent transition md:justify-end"
          >
            <Phone className="w-4 h-4 text-accent" />
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
          <a
            href={SITE_URL}
            className="mt-3 block text-sm text-muted-foreground hover:text-accent transition"
          >
            Web: {SITE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="container-narrow mt-12 pt-6 border-t border-border text-xs text-muted-foreground text-center">
        © 2026 {BRAND_NAME}. Todos los derechos reservados.
      </div>
    </footer>
  );
}

/* ---------- FLOATING WHATSAPP ---------- */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-4 pr-5 py-3 text-sm shadow-[0_20px_60px_-20px_oklch(0.28_0.025_40_/_0.6)] hover:bg-foreground transition"
    >
      <MessageCircle className="w-5 h-5 text-accent" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return reduceMotion;
}
