const Card = ({ title, description, className = '' }) => (
  <div className={`rounded-2xl bg-cream/90 p-6 shadow-soft ${className}`}>
    <h3 className="text-xl font-semibold text-neutral">{title}</h3>
    <p className="mt-3 text-sm text-neutral/80">{description}</p>
  </div>
);

export default Card;
