const GalleryGrid = ({ images }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {images.map((image) => (
      <div key={image.src} className="overflow-hidden rounded-2xl shadow-soft">
        <img
          src={image.src}
          alt={image.alt}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

export default GalleryGrid;
