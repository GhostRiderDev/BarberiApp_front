import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isAlreadyExist } from "@/services/registerService";
import Swal from "sweetalert2";
import { useContext } from "react";
import { DataUserContext } from "@/views/RegisterUser";

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Nombre debe tener al menos 3 caracteres",
    })
    .max(50, {
      message: "Nombre debe tener menos de 50 caracteres",
    }),
  email: z.string().email({
    message: "Correo Electrónico inválido",
  }),
  phone: z
    .string()
    .min(10, { message: "Telefono debe tener al menos 10 digitos  " })
    .max(15, {
      message: "Telefono debe tener menos de 15 digitos",
    }),
});

interface ContactInfoFormProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagesLength: number;
}

const ContactInfoForm = ({
  page,
  setPage,
  pagesLength,
}: ContactInfoFormProps) => {
  const userDataContext = useContext(DataUserContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userDataContext.userData.name,
      email: userDataContext.userData.email,
      phone: userDataContext.userData.phone,
    },
    mode: "onBlur",
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const isRegistered = await isAlreadyExist(values.email);
    if (isRegistered) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este correo ya está registrado, intenta con otro",
      });
    } else {
      userDataContext.setUserData({
        ...userDataContext.userData,
        ...values,
      });
      setPage(page === pagesLength ? page : page + 1);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-1  w-full mx-auto"
      >
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full text-left gap-0 flex flex-col">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nombre"
                    {...field}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.target.value = e.target.value.replace(
                        /[^A-Za-z ]/g,
                        ""
                      );
                    }}
                    autoComplete="username"
                    className="w-full px-4 py-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </FormControl>
                <div className="h-4">
                  <FormMessage
                    className={`w-full text-center ${
                      form.formState.errors.name ? "visible" : "invisible"
                    }`}
                  />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full text-left gap-0 flex flex-col">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Correo Electrónico"
                    {...field}
                    type="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </FormControl>
                <div className="h-4">
                  <FormMessage
                    className={`w-full text-center ${
                      form.formState.errors.email ? "visible" : "invisible"
                    }`}
                  />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full text-left gap-0 flex flex-col">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Telefono"
                    {...field}
                    type="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </FormControl>
                <div className="h-4">
                  <FormMessage
                    className={`w-full text-center ${
                      form.formState.errors.phone ? "visible" : "invisible"
                    }`}
                  />
                </div>
              </FormItem>
            )}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3  text-white transition-all duration-300 bg-black rounded-md hover:scale-105"
        >
          Siguiente
        </button>
      </form>
    </Form>
  );
};

export default ContactInfoForm;
