
import './Features.css';
import svgImage1 from "../../images/brand-1.jpg";
import svgImage2 from "../../images/brand-2.jpg";
import svgImage3 from "../../images/brand-3.jpg";
function Features() {
  const features = [
    {
      id: 1,
      title: 'Top Brands',
      description: 'Shop from your favorite designers.',
      image: svgImage1
    },
    {
      id: 2,
      title: 'Exclusive Collections',
      description: 'Limited-edition items, just for you.',
      image: svgImage2
    },
    {
      id: 3,
      title: 'Personalized Recommendations',
      description: 'Discover products based on your style.',
      image: svgImage3
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <h3>{feature.title}</h3>
            <img src={feature.image} alt={feature.title} />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
