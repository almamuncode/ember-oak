import { SectionHeading } from './Sections';

export function FAQSection() {
  return (
    <section id="faq" className="section guest-section" aria-labelledby="faq-title">
      <div className="container">
        <div id="faq-title">
          <SectionHeading eyebrow="Before you pull up a chair" title="A few good questions." />
          <div className="guest-faq">
            {[
              {
                question: 'How do reservations work?',
                answer:
                  'Use Reserve a Table to try the reservation form. This portfolio demo validates your details locally, but does not send a reservation to a restaurant.',
              },
              {
                question: 'Can I explore vegetarian dishes?',
                answer:
                  'Yes. Open the menu and enable the vegetarian filter. You can combine it with a category and search term.',
              },
              {
                question: 'Where can I find ingredients?',
                answer:
                  'Open any dish from the menu to see its ingredient list and illustrative dietary labels. These labels are not allergen guarantees.',
              },
              {
                question: 'Can I plan a group dinner?',
                answer:
                  'Try the contact form with your date, guest count, and occasion. Contact submissions stay in this demo and do not book an event.',
              },
              {
                question: 'Is the location real?',
                answer:
                  'No. Ember & Oak and its Austin address are fictional; the map illustrates the design rather than providing travel directions.',
              },
            ].map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
