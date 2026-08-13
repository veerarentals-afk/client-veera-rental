"use client";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  selectedPackage: z.string().min(1, "Please select a package."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [message, setMessage] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedPackage: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  async function onSubmit(userDetails: FormData) {
    setMessage("Loading...");
    try {
      const response = await axios.post("/api/contact", userDetails);

      if (response.status === 200) {
        setMessage("We will get back to you soon!");
        console.log("Email sent successfully:", response.data);
      } else {
        setMessage("Failed! Please directly email or call.");
        console.error("Failed to send email:", response.data);
      }
    } catch (error: unknown) {
      setMessage("Failed! Please directly email or call.");

      if (axios.isAxiosError(error)) {
        // If the error is from Axios, log the response or message
        console.error(
          "Error submitting contact form:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        // Handle a standard JavaScript Error
        console.error("Error submitting contact form:", error.message);
      } else {
        // Handle unexpected error types
        console.error("Unexpected error:", error);
      }
    }
  }
  return (
    <section id="contact" className="text-white body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=53/24 Jutland Way, Epping VIC 3076, Australia&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
        ></iframe>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 px-5 py-24 flex">
        <Card className="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md text-white">
          <CardTitle className="text-white text-2xl font-semibold title-font mb-5">
            Let us contact you
          </CardTitle>
          <CardDescription className="text-gray-200">
            Get in touch with us for any inquiries about our services or to book
            a rental.
          </CardDescription>
          <CardContent className="p-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="selectedPackage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Package</FormLabel>
                      <FormControl>
                        <div className="border border-white rounded-md">
                          <select
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="border-white bg-black text-white p-2 rounded w-full"
                          >
                            <option value="" disabled>
                              Select a package
                            </option>
                            <option value="Daily Rentals">Daily Rentals</option>
                            {/* <option value="Private Rentals">
                              Private Rentals
                            </option> */}
                            {/* <option value="Rent-to-Own">Rent-to-Own</option> */}
                            {/* <option value="Rideshare Rentals">
                              Rideshare Rentals
                            </option> */}
                            <option value="Mechanical Services">
                              Mechanical Services
                            </option>
                          </select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-white bg-black text-white p-2 rounded"
                          placeholder="John"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-white bg-black text-white p-2 rounded"
                          placeholder="Doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="border-white bg-black text-white p-2 rounded"
                          placeholder="example@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          className="border-white bg-black text-white p-2 rounded"
                          placeholder="1234567890"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="border-white bg-black text-white p-2 rounded"
                          placeholder="Your message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={"secondary"}
                      type="submit"
                      className="w-full py-2 px-4"
                    >
                      Send message
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{message}</DialogTitle>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
