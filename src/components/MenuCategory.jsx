const MenuCategory = ({ items }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => (
      <article key={item.label} className="rounded-2xl bg-cream p-5 shadow-soft">
        <img
          src={item.image}
          alt={item.label}
          className="h-40 w-full rounded-xl object-cover"
          loading="lazy"
        />
        <h3 className="mt-4 text-lg font-semibold text-neutral">{item.label}</h3>
        <p className="mt-2 text-sm text-neutral/80">{item.description}</p>
      </article>
    ))}
  </div>
);

export default MenuCategory;
