import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  interest: z.string().min(1, { message: "Please select an area of interest" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    }
  });

  const submitContactForm = async (data: ContactFormValues) => {
    const response = await apiRequest("POST", "/api/contact", data);
    return response.json();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We will contact you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
      console.error("Contact form submission error:", error);
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="w-full px-4 py-2 border border-brand-mediumgray focus:border-brand-brown focus:outline-none transition duration-300" 
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
                <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email" 
                    className="w-full px-4 py-2 border border-brand-mediumgray focus:border-brand-brown focus:outline-none transition duration-300" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Phone Number</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="tel" 
                  className="w-full px-4 py-2 border border-brand-mediumgray focus:border-brand-brown focus:outline-none transition duration-300" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Area of Interest</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-2 border border-brand-mediumgray focus:border-brand-brown focus:outline-none transition duration-300">
                    <SelectValue placeholder="Please select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="residential">Residential Development</SelectItem>
                  <SelectItem value="commercial">Commercial Projects</SelectItem>
                  <SelectItem value="mixed-use">Mixed-Use Development</SelectItem>
                  <SelectItem value="partnership">Strategic Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Message</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  rows={4} 
                  className="w-full px-4 py-2 border border-brand-mediumgray focus:border-brand-brown focus:outline-none transition duration-300" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full px-8 py-3 bg-brand-brown text-white hover:bg-brand-brown/90 transition duration-300"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : 'Submit Inquiry'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
