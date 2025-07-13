"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Phone, MapPin, MessageCircle, Calendar, Bike } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";


const motorcycles = [
  {
    name: "Honda BIZ",
    image: "/biz.jpg",
    description: "Econômica e confiável para o dia a dia",
    features: ["125cc", "Automática", "Baixo consumo"],
  },
  {
    name: "Honda BROS",
    image: "/bros.jpg",
    description: "Aventura e versatilidade em qualquer terreno",
    features: ["160cc", "Trail", "Robusta"],
  },
  {
    name: "Honda TITAN",
    image: "/titan.jpg",
    description: "Potência e durabilidade comprovadas",
    features: ["160cc", "Esportiva", "Ágil"],
  },
]


const links = [
  {
    title: "WhatsApp 1",
    subtitle: "(97) 98122-7805",
    icon: FaWhatsapp,
    href: "https://wa.me/5597981227805?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20as%20motos%20dispon%C3%ADveis",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "WhatsApp 2",
    subtitle: "(97) 98457-5014",
    icon: FaWhatsapp,
    href: "https://wa.me/5597984575014?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20as%20motos%20dispon%C3%ADveis",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Nossa Localização",
    subtitle: "Rua Monteiro de Souza, 262 - Centro",
    icon: MapPin,
    href: "https://maps.app.goo.gl/NxwtnCst1JSrD9Ad9",
    color: "bg-red-500 hover:bg-red-600",
  },
  // {
  //   title: "Agendar Visita",
  //   subtitle: "Conheça nossas motos pessoalmente",
  //   icon: Calendar,
  //   href: "https://wa.me/5597981227805?text=Olá! Gostaria de agendar uma visita para conhecer as motos disponíveis.",
  //   color: "bg-blue-500 hover:bg-blue-600",
  // },
]

export default function LeoMotosLinktree() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Bike className="h-12 w-12 mr-3" />
            <h1 className="text-3xl font-bold">LEO MOTOS</h1>
          </div>
          <p className="text-red-100 text-lg font-medium">ALUGUEL FÁCIL, RÁPIDO E SEM COMPLICAÇÃO</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-red-500 px-3 py-1 rounded-full">Por Dia</span>
            <span className="bg-red-500 px-3 py-1 rounded-full">Por Semana</span>
            <span className="bg-red-500 px-3 py-1 rounded-full">Por Mês</span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Motorcycle Carousel */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="bg-red-600 text-white p-4 text-center">
              <h2 className="text-xl font-bold">MODELOS DISPONÍVEIS</h2>
              <p className="text-red-100 text-sm">BIZ • BROS • TITAN</p>
            </div>

            <div className="p-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {motorcycles.map((moto, index) => (
                    <CarouselItem key={index}>
                      <div className="text-center space-y-3">
                        <img
                          src={moto.image || "/placeholder.svg"}
                          alt={moto.name}
                          className="w-full h-56 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-bold text-gray-800">{moto.name}</h3>
                        <p className="text-gray-600 text-sm">{moto.description}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {moto.features.map((feature, idx) => (
                            <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </CardContent>
        </Card>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <Button
              key={index}
              asChild
              className={`w-full h-auto p-4 ${link.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center space-x-4">
                  <link.icon className="h-6 w-6 flex-shrink-0" />
                  <div className="text-left flex-1">
                    <div className="font-semibold text-base">{link.title}</div>
                    <div className="text-sm opacity-90">{link.subtitle}</div>
                  </div>
                </div>
              </a>
            </Button>
          ))}
        </div>

        {/* Quick Contact */}
        {/* <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Fale Conosco Agora!</h3>
            <p className="text-green-100 text-sm mb-4">Tire suas dúvidas e faça sua reserva pelo WhatsApp</p>
            <div className="space-y-2">
              <Button asChild variant="secondary" className="w-full bg-white text-green-600 hover:bg-green-50">
                <a href="https://wa.me/5597981227805?text=Olá! Gostaria de alugar uma moto. Podem me ajudar?">
                  <Phone className="h-4 w-4 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </CardContent>
        </Card> */}

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm py-4">
          <p className="font-medium">LEO MOTOS</p>
          <p>Rua Monteiro de Souza, 262 - Centro</p>
          <p className="mt-2 text-xs">Aluguel de motos • Fácil • Rápido • Sem complicação</p>
        </div>
      </div>
    </div>
  )
}
