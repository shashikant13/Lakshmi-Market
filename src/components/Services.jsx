
import { Car, ShoppingBag, Droplets, Package } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: "Motor Parts & Spares",
    description: "Wide range of genuine motor parts and accessories at competitive prices for all vehicle types."
  },
  {
    icon: Droplets,
    title: "Vehicle Washing",
    description: "Professional vehicle washing services with modern equipment and skilled staff."
  },
  {
    icon: ShoppingBag,
    title: "Kirana Store",
    description: "Fresh groceries, daily essentials, and beverages available at reasonable prices."
  },
  {
    icon: Package,
    title: "Fertilizer & Seeds",
    description: "High-quality fertilizers and seeds to boost your agricultural productivity."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">Comprehensive solutions for all your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-800 mb-4">
                <service.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
