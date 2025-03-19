const images = [
  {
    url: "https://i.postimg.cc/NfNZ3MvJ/8.jpg",
    title: "Motor Parts"
  },
  {
    url: "https://i.postimg.cc/ydY42r89/10.jpg",
    title: "Motor Parts"
  },
  {
    url: "https://i.postimg.cc/SRmNvsbQ/7.jpg",
    title: "Vehicle Washing"
  }, 
  {
    url: "https://i.postimg.cc/K8TySMrG/1111.jpg",
    title: "Vehicle Washing"
  },
  {
    url: "https://i.postimg.cc/bwPc0M88/5.jpg",
    title: "Grocery Store"
  },
  {
    url: "https://i.postimg.cc/Bv6ZW66M/6.jpg",
    title: "Grocery Store"
  },
  {
    url: "https://i.postimg.cc/HLdVcBjP/321.jpg",
    title: "Fertilizers and Seeds"
  },
  {
    url: "https://i.postimg.cc/658mJkJV/978f85c9-2c20-4996-80b1-4643397477a1-1698842690336.jpg",
    title: "Fertilizers and Seeds"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Gallery</h2>
          <p className="text-lg text-gray-700">Explore our wide range of products and services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
