import { SectionHeading } from './Sections';

export function GroupPlanning() {
  return (
    <section
      id="group-planning"
      className="section guest-section"
      aria-labelledby="group-planning-title"
    >
      <div className="container">
        <div id="group-planning-title">
          <SectionHeading
            eyebrow="A gathering starts with an idea"
            title="Tell us about your table."
            text="Use these prompts when trying the contact form above."
          />
          <div className="guest-cards">
            {[
              {
                title: 'The occasion',
                text: 'Tell us what you are celebrating and the feeling you have in mind.',
              },
              {
                title: 'The people',
                text: 'Include your estimated guest count and any dietary questions you want to discuss.',
              },
              {
                title: 'The timing',
                text: 'Share your preferred date, time, and any flexibility. This demo does not confirm availability or send event requests.',
              },
            ].map((item) => (
              <article className="guest-card" key={item.title}>
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
