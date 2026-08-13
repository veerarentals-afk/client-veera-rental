import React from 'react'
import { Button } from '@/components/ui/button'
import { Info, Search } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative rounded-xl m-2 h-fit pt-32 sm:pt-72 flex">
      <Image
        alt="Car"
        src="/steering_interior3.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 rounded-xl"
      />
      <div className="max-w-7xl mx-auto p-10 z-10 text-white w-full flex flex-col justify-end">
        <h1 className="text-5xl md:text-6xl font-bold">
          Drive your way with Veera Rentals
        </h1>
        <h4 className="mt-4 text-1xl md:text-3xl font-semibold text-white">
          Rent a car for your next trip
        </h4>
        <p className="max-w-lg mt-1 text-white/80 text-sm">
          Rent a car for your next trip, business, or leisure with Veera
          Rentals. We offer daily rentals, wedding cars, and airport pickup services.
        </p>
        <div className="max-w-lg mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 md:space-x-2 w-full md:w-auto">
          <Link href={"#about"}>
            <Button
              variant={"outline"}
              className="rounded-full gap-2 pl-6 pr-8 font-semibold w-full text-black"
            >
              <Info className="w-4 h-4" />
              Know more
            </Button>
          </Link>
          <Link href={"/vehicles"}>
          <Button
            variant={"secondary"}
            className="rounded-full gap-2 pl-6 pr-8 font-semibold w-full"
          >
            <Search className="w-4 h-4" />
            Explore our fleet
          </Button>
</Link>
        </div>
      </div>
    </section>
  );
}
