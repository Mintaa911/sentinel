'use client'
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import FileUploadComponent from "@/components/file-upload";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  start: z.string().min(1, "Please select a start time"),
  message: z.string().min(1, "Message is required"),
  files: z
    .array(z.any())
    .min(1, "Please upload a file")
    .refine(
      (files) => files.every((file) => typeof file.preview === 'string'),
      { message: "Each file must have a preview" }
    ),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      start: "",
      message: "",
      files: [],
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    alert("Form submitted!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left Section */}
        <div className="lg:w-[80%] flex flex-col justify-between gap-4">
          <div>
            <p className="text-sm text-[#0C7792] mb-2">Get in touch</p>
            <h1 className="text-4xl font-bold mb-4">Contact Sentinel</h1>
            <p className="text-sm  mb-6">
              To discuss a project or submit a custom synthesis request, please fill in the details below and include an image of your target; general inquiries are also welcome.<br /><br />We look forward to helping you!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-between text-sm">
              <div>
                <div className="font-bold mb-1">Contact Us</div>
                <div className="">info@sentinelstandards.com</div>
              </div>
              <div>
                <div className="font-bold mb-1">Our Location</div>
                <div className="">111 Riverbend Road<br />Athens, GA 30602<br />USA</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg w-full aspect-[4/3] bg-gray-900">
            <Image
              src="/assets/contact.png"
              alt="Hand holding flask"
              width={400}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>

        </div>
        {/* Right Section (Form) */}
        <div className="flex-1 bg-[#F8F9FA] rounded-xl shadow-xl p-8 flex flex-col">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1 text-gray-900">Let's Talk</h2>
            <p className="text-gray-500 text-sm">Fill out the form and we'll get back to you as soon as possible</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="!text-gray-800">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
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
                      <FormLabel className="!text-gray-800">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!text-gray-800">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!text-gray-800">Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="start"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!text-gray-800">When do you want to start your project?</FormLabel>
                    <FormControl>
                      <select
                        className="w-full h-9 rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-xs focus-visible:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-200 outline-none text-gray-900"
                        {...field}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option>Immediately</option>
                        <option>Within 1 month</option>
                        <option>1-3 months</option>
                        <option>3+ months</option>
                      </select>
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
                    <FormLabel className="!text-gray-800">Message</FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Please enter your message"
                        className="w-full min-h-[90px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-xs focus-visible:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-200 outline-none text-gray-900"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="files"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FileUploadComponent
                        label="Upload File"
                        files={field.value}
                        setFiles={field.onChange}
                        maxFiles={1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-2 bg-[#0C7792] hover:bg-[#0C7792]/80 text-white text-base font-semibold py-2 rounded-md shadow-md">
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="bg-[#04313C] rounded-xl py-16 space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E6F7FA]">Frequently Asked Questions</h2>
        <div className="space-y-4 w-[80%] mx-auto">
          <Accordion type="single" collapsible defaultValue="1">
            <AccordionItem value="0" className="bg-white rounded-xl shadow-lg overflow-hidden border-0 mb-2">
              <AccordionTrigger className="px-6 py-5 text-lg md:text-xl font-semibold">
                Are the standards available as individual structures, or are they pooled?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-500 text-base md:text-lg">
                {/* No answer provided in screenshot */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="1" className="bg-white rounded-xl shadow-lg overflow-hidden border-0 mb-2">
              <AccordionTrigger className="px-6 py-5 text-lg md:text-xl font-semibold">
                How do you confirm the purity and isotopic enrichment of each structure?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-500 text-base md:text-lg">
                All compounds were synthesized using a panel of human glycosyltransferases. The advantage of human glycosyltransferases over their bacterial counterparts is that they do not have off-target activity, i.e., a monosaccharide is added to an acceptor at a single location. After a target has been prepared, it was purified using multi-dimensional chromatography, specifically C18 and HILIC. Incorporation of the six 13C atoms was confirmed via high-resolution mass (Bruker Solarix XR FTICR or Bruker Impact II Q-TOF) and 13C NMR. Glycoform purity was interrogated using LC-MS analysis of a procainamide labeled derivative.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2" className="bg-white rounded-xl shadow-lg overflow-hidden border-0 mb-2">
              <AccordionTrigger className="px-6 py-5 text-lg md:text-xl font-semibold">
                I have a need for a standard not listed on your site. Can I submit it for consideration?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-500 text-base md:text-lg">
                {/* No answer provided in screenshot */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3" className="bg-white rounded-xl shadow-lg overflow-hidden border-0 mb-2">
              <AccordionTrigger className="px-6 py-5 text-lg md:text-xl font-semibold">
                Do you sell standards in quantities larger than 10 μg?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-500 text-base md:text-lg">
                {/* No answer provided in screenshot */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4" className="bg-white rounded-xl shadow-lg overflow-hidden border-0 mb-2">
              <AccordionTrigger className="px-6 py-5 text-lg md:text-xl font-semibold">
                Does Sentinel collaborate with academic partners?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-500 text-base md:text-lg">
                {/* No answer provided in screenshot */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5" className="bg-white rounded-xl shadow-lg overflow-hidden border-0 mb-2">
              <AccordionTrigger className="px-6 py-5 text-lg md:text-xl font-semibold">
                What custom synthesis services does Sentinel offer?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-500 text-base md:text-lg">
                {/* No answer provided in screenshot */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}