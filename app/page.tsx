import { MapPin } from "lucide-react"

const motorcycles = [
  {
    name: "Honda BIZ",
    cc: "125cc",
    image: "/biz.jpg",
    description: "Econômica e confiável para o dia a dia",
    features: ["Automática", "Baixo consumo"],
  },
  {
    name: "Honda BROS",
    cc: "160cc",
    image: "/bros.jpg",
    description: "Aventura e versatilidade em qualquer terreno",
    features: ["Trail", "Robusta"],
  },
  {
    name: "Honda TITAN",
    cc: "160cc",
    image: "/titan.jpg",
    description: "Potência e durabilidade comprovadas",
    features: ["Esportiva", "Ágil"],
  },
]

const waNumber1 = "5597981227805"
const waNumber2 = "5597984575014"
const waGenericMsg = encodeURIComponent("Olá, eu gostaria de saber quais são as motos disponíveis.")
const waLink1 = `https://wa.me/${waNumber1}?text=${waGenericMsg}`
const waLink2 = `https://wa.me/${waNumber2}?text=${waGenericMsg}`
const mapsLink = "https://maps.app.goo.gl/NxwtnCst1JSrD9Ad9"

function waLinkForMoto(name: string) {
  const msg = encodeURIComponent(`Olá, tenho interesse em alugar a ${name}.`)
  return `https://wa.me/${waNumber1}?text=${msg}`
}

export default function LeoMotosLinktree() {
  return (
    <div className="min-h-screen bg-[#111110] font-sans">
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center justify-between px-14 py-[18px] border-b border-white/10 bg-[#111110]/90 sticky top-0 z-10">
        <div className="flex items-center gap-3.5">
          <img
            src="/logo-badge.jpg"
            alt="Leo Motos"
            className="w-[52px] h-[52px] object-cover rounded-full flex-none"
          />
          <div className="flex flex-col gap-[3px]">
            <div className="font-black text-[19px] leading-none text-white tracking-tight">LEO MOTOS</div>
            <div className="font-medium text-[10.5px] leading-none tracking-[0.2em] text-[#e01f10]">
              ALUGUEL DE MOTOS · TEFÉ, AM
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a href="#modelos" className="text-sm font-medium text-white/65 hover:text-white transition-colors">
            Modelos
          </a>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/65 hover:text-white transition-colors"
          >
            Localização
          </a>
          <a
            href={waLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e01f10] hover:bg-[#c31a0d] text-white text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero / mobile header */}
      <header className="px-[22px] py-[26px] md:px-14 md:py-16 border-b border-white/10">
        {/* mobile-only compact header */}
        <div className="md:hidden flex items-center gap-3">
          <img
            src="/logo-badge.jpg"
            alt="Leo Motos"
            className="w-[60px] h-[60px] object-cover rounded-full flex-none"
          />
          <div className="flex flex-col gap-0.5">
            <div className="font-medium text-xs tracking-[0.22em] text-[#e01f10]">TEFÉ · AM</div>
            <div className="font-black text-[26px] leading-none tracking-tight text-white">LEO MOTOS</div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <div className="hidden md:inline-flex items-center gap-[9px] border border-white/20 rounded-full px-3.5 py-2 mb-6">
              <span className="w-[7px] h-[7px] rounded-full bg-[#e01f10]" />
              <span className="text-xs font-medium tracking-[0.14em] text-[#cfcbc3]">MOTOS DISPONÍVEIS HOJE</span>
            </div>

            <h1 className="mt-5 md:mt-0 font-black text-[34px] md:text-[76px] leading-[1.02] md:leading-[0.96] tracking-tight text-white text-pretty">
              Aluguel fácil,
              <br />
              rápido e sem
              <br />
              <span className="text-[#e01f10]">complicação.</span>
            </h1>

            <p className="hidden md:block mt-6 max-w-[460px] text-lg leading-relaxed text-white/60">
              Honda BIZ, BROS e TITAN para alugar por dia, semana ou mês em Tefé. Reserva pelo WhatsApp, sem
              burocracia.
            </p>

            <div className="flex gap-2 mt-[18px] md:mt-7">
              <span className="text-xs md:text-[13px] font-semibold tracking-[0.06em] text-[#f5f3ee] px-[13px] md:px-4 py-[9px] md:py-[11px] border border-white/[.22] rounded-full">
                POR DIA
              </span>
              <span className="text-xs md:text-[13px] font-semibold tracking-[0.06em] text-[#f5f3ee] px-[13px] md:px-4 py-[9px] md:py-[11px] border border-white/[.22] rounded-full">
                POR SEMANA
              </span>
              <span className="text-xs md:text-[13px] font-semibold tracking-[0.06em] text-[#f5f3ee] px-[13px] md:px-4 py-[9px] md:py-[11px] border border-white/[.22] rounded-full">
                POR MÊS
              </span>
            </div>

            <div className="hidden md:flex gap-3 mt-[34px]">
              <a
                href={waLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#e01f10] hover:bg-[#c31a0d] px-6 py-[18px] rounded-[10px] transition-colors"
              >
                <span className="font-black text-base text-white">RESERVAR AGORA</span>
                <span className="font-semibold text-base text-white">→</span>
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-transparent border border-white/[.22] hover:border-white px-6 py-[18px] rounded-[10px] transition-colors"
              >
                <span className="font-semibold text-base text-white">Ver no mapa</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-[24px_-12px_24px_40px] bg-[#e01f10] rounded-2xl" />
            <div className="relative bg-[#f5f3ee] rounded-2xl px-5 py-[26px] flex items-center justify-center">
              <img src="/bros.jpg" alt="Honda BROS" className="w-full h-[380px] object-contain block" />
            </div>
            <div className="absolute left-[-8px] bottom-[26px] bg-[#111110] border border-white/[.14] rounded-xl px-[18px] py-3.5">
              <div className="text-[11px] font-medium tracking-[0.14em] text-white/50">EM DESTAQUE</div>
              <div className="font-black text-[17px] mt-2 text-white">
                HONDA BROS <span className="text-[#e01f10] font-semibold text-[13px]">160cc</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Models */}
      <section id="modelos" className="px-[22px] py-4 md:px-14 md:py-16">
        <div className="flex items-baseline justify-between pb-4 md:pb-[18px] border-b border-white/[.12]">
          <div className="text-xs md:text-[13px] font-medium tracking-[0.18em] md:tracking-[0.16em] text-white/50 md:text-white/45 uppercase">
            Modelos disponíveis
          </div>
          <div className="text-[13px] font-semibold text-[#e01f10] md:hidden">{motorcycles.length}</div>
          <div className="hidden md:block text-[13px] font-medium tracking-[0.16em] text-white/45">
            BIZ · BROS · TITAN
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-2.5 md:gap-5 mt-3 md:mt-6">
          {motorcycles.map((moto) => (
            <div
              key={moto.name}
              className="bg-[#1b1a19] border border-white/[.08] rounded-xl md:rounded-[14px] overflow-hidden flex flex-col"
            >
              <div className="bg-[#f5f3ee] px-1 py-2 md:p-3.5">
                <img
                  src={moto.image}
                  alt={moto.name}
                  className="w-full h-[132px] md:h-[200px] object-contain block"
                />
              </div>
              <div className="p-4 md:p-[22px] flex flex-col gap-2.5 md:gap-3 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-black text-xl md:text-2xl text-white uppercase">{moto.name}</span>
                  <span className="text-xs md:text-sm font-semibold text-[#e01f10]">{moto.cc}</span>
                </div>
                <p className="text-[13.5px] md:text-[15px] leading-relaxed text-white/60 flex-1">
                  {moto.description}
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {moto.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[11.5px] md:text-xs font-medium text-[#cfcbc3] bg-white/[.08] px-2.5 md:px-[11px] py-1.5 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={waLinkForMoto(moto.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between mt-1.5 pt-4 border-t border-white/10 hover:opacity-75 transition-opacity"
                >
                  <span className="text-sm font-semibold text-white">Alugar esta moto</span>
                  <span className="text-[15px] font-semibold text-[#e01f10]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile contact list */}
      <div className="md:hidden px-[22px] pt-1.5 pb-[26px] flex flex-col gap-2.5">
        <a
          href={waLink1}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 bg-[#e01f10] hover:bg-[#c31a0d] px-[18px] py-[17px] rounded-xl transition-colors"
        >
          <div>
            <div className="font-black text-base leading-tight text-white">FALAR NO WHATSAPP</div>
            <div className="text-[13px] font-medium text-white/80 mt-1">(97) 98122-7805</div>
          </div>
          <span className="text-lg font-semibold text-white">→</span>
        </a>
        <a
          href={waLink2}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 bg-[#1b1a19] border border-white/[.14] hover:border-white/40 px-[18px] py-[17px] rounded-xl transition-colors"
        >
          <div>
            <div className="font-black text-base leading-tight text-white">WHATSAPP 2</div>
            <div className="text-[13px] font-medium text-white/55 mt-1">(97) 98457-5014</div>
          </div>
          <span className="text-lg font-semibold text-white/50">→</span>
        </a>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 bg-[#1b1a19] border border-white/[.14] hover:border-white/40 px-[18px] py-[17px] rounded-xl transition-colors"
        >
          <div>
            <div className="font-black text-base leading-tight text-white">NOSSA LOCALIZAÇÃO</div>
            <div className="text-[13px] font-medium text-white/55 mt-1">Rua Monteiro de Souza, 262 — Centro</div>
          </div>
          <span className="text-lg font-semibold text-white/50">→</span>
        </a>
      </div>

      {/* Desktop location + contact */}
      <section className="hidden md:block px-14 pb-16">
        <div className="grid grid-cols-[1.15fr_.85fr] gap-5 items-stretch">
          <div className="bg-[#1b1a19] border border-white/[.08] rounded-[14px] overflow-hidden flex flex-col">
            <div className="flex-1 min-h-[230px] bg-[repeating-linear-gradient(135deg,#232220_0_10px,#1b1a19_10px_20px)] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white/30" />
            </div>
            <div className="flex items-center justify-between gap-5 px-6 py-[22px] border-t border-white/10">
              <div>
                <div className="text-[11px] font-medium tracking-[0.16em] text-white/45">ONDE ESTAMOS</div>
                <div className="font-black text-xl leading-tight mt-[9px] text-white">
                  Rua Monteiro de Souza, 262
                  <br />
                  Centro — Tefé, AM
                </div>
              </div>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none border border-white/[.22] hover:border-[#e01f10] rounded-lg px-[18px] py-3.5 text-sm font-semibold text-white transition-colors"
              >
                Abrir no Maps
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-[#e01f10] rounded-[14px] p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-medium tracking-[0.16em] text-white/75">WHATSAPP 1</div>
                <div className="font-black text-[30px] mt-3 text-white">(97) 98122-7805</div>
              </div>
              <a
                href={waLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[22px] bg-[#111110] hover:bg-black rounded-lg py-[15px] text-center text-[15px] font-semibold text-white transition-colors"
              >
                Enviar mensagem
              </a>
            </div>
            <div className="bg-[#1b1a19] border border-white/[.08] rounded-[14px] p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-medium tracking-[0.16em] text-white/45">WHATSAPP 2</div>
                <div className="font-black text-[30px] mt-3 text-white">(97) 98457-5014</div>
              </div>
              <a
                href={waLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[22px] border border-white/[.22] hover:border-white rounded-lg py-[15px] text-center text-[15px] font-semibold text-white transition-colors"
              >
                Enviar mensagem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-[22px] py-[26px] md:px-14 md:py-[30px] border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img
            src="/logo-badge.jpg"
            alt="Leo Motos"
            className="w-9 h-9 md:w-[38px] md:h-[38px] object-cover rounded-full"
          />
          <div className="text-xs leading-relaxed text-white/40 text-center md:text-left">
            LEO MOTOS · Aluguel de motos
            <br />
            Rua Monteiro de Souza, 262 — Centro, Tefé/AM
          </div>
        </div>
        <div className="hidden md:block text-xs text-white/30">Fácil · Rápido · Sem complicação</div>
      </footer>
    </div>
  )
}
