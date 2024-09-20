import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { RiImageAddFill } from "react-icons/ri";

interface FromRegisterBarberProps {
  formRef?: React.RefObject<HTMLFormElement>;
}
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const formSchema = z
  .object({
    nameComplete: z.string().min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    }),
    email: z.string().email({
      message: "El email no es válido",
    }),
    pass: z.string().regex(passwordRegex, {
      message:
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un carácter especial",
    }),
    confirmPass: z.string(),
    phone: z.string().min(10, {
      message: "El teléfono debe tener al menos 10 caracteres",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.pass !== data.confirmPass) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPass"],
        message: "Las contraseñas no coinciden",
      });
    }
  });

const FromRegisterBarber = ({ formRef }: FromRegisterBarberProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameComplete: "",
      email: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    console.log("Selected file:", selectedFile);
    // Aquí puedes manejar el envío del formulario junto con el archivo
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 pt-[80px] mx-4 "
      >
        <div className="flex flex-col">
          <div className="font-bold text-lg">Perfil</div>
          <div className="text-gray-500 text-lg">
            Configura el perfil de tu empleado
          </div>
        </div>
        <div className="flex flex-col md:gap-20 gap-10 md:flex-row">
          <FormItem className="w-full">
            <FormControl>
              <div className="relative w-32 h-32">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="w-32 h-32 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Selected"
                        className="rounded-full w-32 h-32 object-cover"
                      />
                    ) : (
                      <RiImageAddFill className="text-gray-400 text-4xl" />
                    )}
                  </div>
                </label>
              </div>
            </FormControl>
          </FormItem>
          <FormField
            name="nameComplete"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre completo" {...field} />
                </FormControl>
                <FormDescription>
                  El nombre completo del barbero.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:gap-20 gap-10 md:flex-row">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>El email del barbero.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="Teléfono" {...field} />
                </FormControl>
                <FormDescription>El teléfono del barbero.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:gap-20 gap-10 pb-[46px] md:flex-row">
          <FormField
            name="pass"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Contraseña" {...field} />
                </FormControl>
                <FormDescription>
                  La contraseña debe tener al menos 8 caracteres, una letra
                  mayúscula, una letra minúscula y un carácter especial.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPass"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Confirmar Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirmar contraseña"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Confirma la contraseña.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default FromRegisterBarber;
