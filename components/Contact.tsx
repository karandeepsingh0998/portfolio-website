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

const WEB3FORMS_ACCESS_KEY = "8cae94c7-9434-4193-a7e6-cdb9e3141237";

export function Contact() {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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
    setSubmitError(false);
    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New portfolio inquiry from ${data.name}`);
      formData.append("from_name", data.name);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("company", data.company ?? "");
      formData.append("role_type", data.roleType);
      formData.append("message", data.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message || "Submission failed");

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setSubmitError(true);
    }
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
            {submitError && (
              <p className="text-xs text-red-400">
                Something went wrong sending your message. Please try again or
                email me directly at {contact.email}.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
