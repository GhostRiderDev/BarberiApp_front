import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface IService {
  titulo: string;
  descripcion: string;
  image: string;
}

const servicesData: IService[] = [
  {
    titulo: "Búsqueda de Barberías",
    descripcion: "Encuentra las mejores barberías cerca de ti.",
    image: "/map.jpg",
  },
  {
    titulo: "Reserva de Citas",
    descripcion: "Reserva tu cita con los mejores barberos.",
    image: "/appointment.jpg",
  },
  {
    titulo: "Gestión de Barberos",
    descripcion:
      "Los barberos pueden organizar sus turnos, cliente y disponibilidad.",
    image: "/user-management.jpg",
  },
  {
    titulo: "Opciones de Pago",
    descripcion:
      "Paga de manera fácil y segura con banca digital o en efectivo cuando reserves tu turno.",
    image: "/payments.jpg",
  },
];

const Services = () => {
  return (
    <div className="py-8 bg-gray-100 md:p-4">
      <h1 className="mb-2 text-3xl font-bold text-center">
        Nuestros Servicios
      </h1>
      <div className="grid grid-cols-1 gap-4 my-5 md:grid-cols-2 md:mx-auto md:w-1/2 md:gap-10">
        {servicesData.map((service, index) => (
          <Card key={index} className="flex flex-col justify-around">
            <CardHeader className="pt-2 pb-1">
              <CardTitle className="text-lg text-center text-pretty">
                {service.titulo}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-2">
              <p className="text-sm text-center">{service.descripcion}</p>
              <img
                src={service.image}
                alt={service.titulo}
                className="w-40 h-40 mt-2 md:w-auto rounded-xl"
                loading="lazy"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
