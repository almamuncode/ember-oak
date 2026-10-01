import { SectionHeading } from './Sections';

export function KitchenCraft() {
  return (
    <section
      id="kitchen-craft"
      className="section guest-section"
      aria-labelledby="kitchen-craft-title"
    >
      <div className="container">
        <div id="kitchen-craft-title">
          <SectionHeading
            eyebrow="From spark to plate"
            title="The rhythm of our kitchen."
            text="Three simple ideas behind the Ember & Oak story."
          />
          <div className="guest-cards">
            {[
              {
                title: 'Start with the ingredients.',
                text: 'Our fictional kitchen takes its cue from seasonal produce and familiar flavors.',
              },
              {
                title: 'Give the fire time.',
                text: 'Oak, heat, and patience inspire the char and smoky depth at the heart of our menu.',
              },
              {
                title: 'Finish with care.',
                text: 'A bright sauce, a fresh herb, a final detail: small touches bring the plate together.',
              },
            ].map((item, index) => (
              <article className="guest-card" key={item.title}>
                <span className="guest-step">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
