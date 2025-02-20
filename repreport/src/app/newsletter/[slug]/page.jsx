import { notFound } from 'next/navigation';
import { newsletterData } from '../../../data/newslettersData';
import NewsletterInteractive from '../../../components/NewsletterInteractive';

export async function generateStaticParams() {
  return Object.keys(newsletterData).map((slug) => ({ slug }));
}

export default function NewsletterPage({ params }) {
  const { slug } = params;
  const newsletter = newsletterData[slug];

  if (!newsletter) {
    return notFound();
  }

  return <NewsletterInteractive newsletter={newsletter} />;
}
