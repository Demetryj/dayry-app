import { Items } from '../Items';
import { Comments } from '../Comments';
import './Section.css';

export const Section = () => {
  return (
    <section className="section">
      <Items />
      <Comments />
    </section>
  );
};
