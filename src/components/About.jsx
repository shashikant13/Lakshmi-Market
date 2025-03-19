export default function About() {
  return (
    <section id="about" className="py-20 bg-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Lakshmi Market</h2>
            <p className="text-lg text-gray-700 mb-6">
              Located in the heart of Chhapra Bahas Dubey Tola, Lakshmi Market has been serving the community with quality products and services for years. We take pride in offering a comprehensive range of motor parts, vehicle services, and daily essentials all under one roof.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our commitment to customer satisfaction, competitive pricing, and quality products has made us a trusted name in the region. Whether you need vehicle spare parts, professional washing services, or daily groceries, we're here to serve you with excellence.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-800">1000+</h3>
                <p className="text-gray-700">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-800">500+</h3>
                <p className="text-gray-700">Products</p>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img 
              src="https://i.postimg.cc/7hWgHhyB/about.jpg"
              alt="Store front"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
