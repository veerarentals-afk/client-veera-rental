import { Nav } from "@/types";
import { Wrench, Car, PenToolIcon as Tool, Gauge, Battery, Shield } from "lucide-react"

export const navs : Nav[] = [
  { name: "Home", link: "/" },
  { name: "Mechanical Services", link: "/mechanical" },
  { name: "About", link: "/#about" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/#contact" },
];

export const mechanical_services = [
  {
    icon: Car,
    title: "Log Book Service",
    description:
      "Full suite of servicing options for both new and old vehicles with high-quality fluids and lubricants.",
  },
  {
    icon: Tool,
    title: "Major Car Service",
    description: "Comprehensive service to improve vehicle performance and extend its lifetime.",
  },
  {
    icon: Wrench,
    title: "Minor Car Service",
    description: "Regular maintenance including brake inspection, battery testing, and fluid replacements.",
  },
  {
    icon: Gauge,
    title: "Computer Diagnostics",
    description: "Advanced computer diagnostics to detect and resolve potential issues.",
  },
  {
    icon: Battery,
    title: "Auto Electrical",
    description: "Complete electrical system diagnosis and repair services.",
  },
  {
    icon: Shield,
    title: "Warranty Service",
    description: "Maintain your manufacturer's warranty with our certified service center.",
  },
]

export const contactInfo = {
  phoneNumber: '+61466877527',
  address: '53/24 Jutland Way, Epping VIC 3076, Australia',
  emailId: 'veerarentals@gmail.com'
}

export const services = [
          {
            title: "Daily Rentals",
            href: "/vehicles",
            description:
              "Perfect for short trips, business errands, or weekend getaways, our daily rentals provide a convenient solution with flexible terms. Enjoy a wide range of well-maintained vehicles without the hassle of long-term commitments.",
          },
          {
            title: "Wedding Cars",
            href: "/vehicles",
            description: "Arrive in style with our luxury wedding car services, featuring Lexus and a wide range of premium vehicles. Make your special day unforgettable with elegance and comfort.",
          },
          {
            title: "Airport Pickup",
            href: "/vehicles",
            description: "Convenient and reliable airport pickup services to make your journey to and from the airport easy and stress-free.",
          },
          {
            title: "Mechanical Services/Automotive",
            href: "/services/mechanical",
            description: "We provide top-quality mechanical and automotive services, ensuring your vehicles are well-maintained, safe, and running smoothly. Our expert team specializes in repairs, servicing, and diagnostics for all vehicle types.",
          }
]
