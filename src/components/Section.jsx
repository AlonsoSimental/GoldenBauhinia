import Container from './Container.jsx';

const Section = ({ children, className = '', id }) => (
  <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export default Section;
