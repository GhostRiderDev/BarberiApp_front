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
    image: "public/map.jpg",
  },
  {
    titulo: "Reserva de Citas",
    descripcion: "Reserva tu cita con los mejores barberos.",
    image: "public/appointment.jpg",
  },
  {
    titulo: "Gestión de Barberos",
    descripcion:
      "Los barberos pueden organizar sus turnos, cliente y disponibilidad.",
    image: "public/user-management.jpg",
  },
  {
    titulo: "Opciones de Pago",
    descripcion:
      "Paga de manera fácil y segura con banca digital o en efectivo cuando reserves tu turno.",
    image: "public/payments.jpg",
  },
];

const Services = () => {
  return (
    <div className="p-8 md:p-4 mb-20 bg-gray-100">
      <h1 className="text-3xl text-center my-2 font-bold">
        Nuestros Servicios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto md:w-1/2 gap-4 md:gap-10">
        {servicesData.map((service, index) => (
          <Card key={index} className="flex flex-col justify-around">
            <CardHeader className="pb-1 pt-2">
              <CardTitle className="text-pretty text-center text-lg">
                {service.titulo}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 flex flex-col items-center justify-center">
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
