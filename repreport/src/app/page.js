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
    slug: 'research-security-accountability-DHS-act',
    title: 'Research Security and Accountability in DHS Act',
    date: '3/10/25',
  },
          {
    slug: 'pandemic-unemployment-fraud-enforcement-act',
    title: 'Pandemic Unemployment Fraud Enforcement Act',
    date: '3/11/25',
          },
    {
    slug: 'full-year-cont-approp-ext-act-2025',
    title: 'Full-Year Continuing Appropriations and Extensions Act, 2025',
    date: '3/11/25',
    },
    {
    slug: 'emerging-innovative-border-tech-act',
    title: 'Emerging Innovative Border Technologies Act',
    date: '3/10/25',
    },
      {
    slug: 'censuring-rep-al-greene',
    title: 'Censuring Representative Al Green of Texas',
    date: '3/6/25',
  },
  {
    slug: 'mail-traffic-deaths-reporting-act',
    title: 'Mail Traffic Deaths Reporting Act of 2025',
    date: '3/3/25',
  },
    {
    slug: 'safe-and-smart-fed-purchasing-act',
    title: 'Safe and Smart Federal Purchasing Act',
    date: '3/3/25',
  },

  {
    slug: 'doe-sba-rural-medal-budget-acts',
    title: 'DOE and SBA Research, Rural Small Business Resilience, Medal of Honor, and 2025 Congressional Budget Acts',
    date: '2/27/25',
  },
  {
    slug: 'small-businesses-fraud-and-advocacy-acts',
    title: 'Assisting Small Businesses Not Fraudsters, Small Business Advocacy Improvements, and SPUR Acts',
    date: '2/25/25',
  },
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
