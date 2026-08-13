import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface Service {
    title: string;
    description: string;
}
const services: Service[] = [
    {
        title: 'Well-Maintained Cars',
        description: 'Each vehicle is thoroughly inspected, clean, and in excellent condition to ensure your safety and driving pleasure.',
    },
    {
        title: 'Customer-Centric Approach',
        description: 'We prioritize your comfort and satisfaction by offering personalized services and attentive customer care.',
    },
    {
        title: 'Flexible Plans',
        description: 'Flexible rental options designed to suit a range of travel and transportation needs.',
    },
    {
        title: 'Diverse Vehicle Fleet',
        description: 'From fuel-efficient cars for everyday commutes to premium options for luxury experiences, we have a wide selection of vehicles to suit every requirement.',
    },
]

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto sm:px-6 lg:px-6 p-10">
      <div className="text-sm">About Us</div>
      <div>
        <h2 className="text-4xl font-medium mt-4">
          We combine over a decade of experience with a passion <span className='text-gray-500'>for delivering
          top-quality automotive services.</span>
        </h2>
      </div>
      <div className='lg:hidden'>
        <Image
          src={"/black_lexus.png"}
          alt="yellow car"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-[#F2C165] transition-colors">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
    </section>
  );
}
