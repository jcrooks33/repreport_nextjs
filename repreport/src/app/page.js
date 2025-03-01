// app/page.js
import Signup from '../components/signup';
import About from '../components/about';
import Newsletters from '@/components/newsletters';
import HomepageBills from '@/components/HomepageBills';
import { billsData } from '@/data/billsData'; // Adjust the import path as needed
import WhyRepReport from '@/components/WhyRepReport';

// Just an example array of objects – in reality, you might fetch this from a server
const newsletterData = [
  {
    slug: 'midnight-agent-raul-gonzalez-acts',
    title: 'Midnight Rules Relief and Agent Raul Gonzalez Officer Safety Acts',
    date: '2/14/25'
  },
  {
    slug: 'china-paperwork-acts',
    title: 'China Exchange Rate Transparency and Protect Small Businesses from Excessive Paperwork Acts of 2025',
    date: '2/11/25'
  },
  {
    slug: 'fentanyl-energy-acts',
    title: 'HALT Fentanyl and Protecting American Energy Production Acts',
    date: '2/7/25'
  },
  {
    slug: 'nutria-alaska-acts',
    title: 'Alaska and Nutria Acts',
    date: '2/5/25'
  },
  {
    slug: 'ohia-forests-abortion-acts',
    title: 'Ohia, Forests, and Abortion Survivors Protection Acts',
    date: '1/29/25'
  },
  {
    slug: 'laken-protection-illegitimate-acts',
    title: 'Laken Riley, Protection of Women, and Illegitimate Court Counteraction Acts',
    date: '1/22/25'
  },
  {
    slug: 'american-relief-act',
    title: 'The American Relief Act and more',
    date: '1/17/25'
  }
  
  // Add more here as you release more newsletters
];
export default function HomePage() {
  return (
    <>
      <Signup />
      <About />
      <HomepageBills bills={billsData}/>
      <Newsletters newsletters={newsletterData} />
      <WhyRepReport/>
    </>
  );
}
