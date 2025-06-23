const BikeImage = () => {
  return (
    <div className="relative">
      <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center"
          alt="Stern Bicycle"
          className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
        STERN 2024
      </div>
    </div>
  );
};

export default BikeImage;
