"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  roleType: z.string().min(1, "Please select a role type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Replace with EmailJS or Resend integration
    console.log("Contact form submission:", data);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold tracking-tight leading-[1.5] md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {contact.subtext}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-muted hover:text-accent-hover transition-colors"
            >
              <Mail className="h-5 w-5 text-accent" />
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted hover:text-accent-hover transition-colors"
            >
              <Linkedin className="h-5 w-5 text-accent" />
              LinkedIn Profile
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg border border-border bg-surface p-6 space-y-4"
            noValidate
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                className="mt-1.5"
                {...register("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="mt-1.5"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Your company (optional)"
                className="mt-1.5"
                {...register("company")}
              />
            </div>

            <div>
              <Label htmlFor="roleType">Role Type</Label>
              <Select onValueChange={(v) => setValue("roleType", v)}>
                <SelectTrigger id="roleType" className="mt-1.5">
                  <SelectValue placeholder="Select role type" />
                </SelectTrigger>
                <SelectContent>
                  {contact.roleTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.roleType && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.roleType.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about the opportunity..."
                className="mt-1.5"
                {...register("message")}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : submitted ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
