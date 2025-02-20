// app/page.js
import Signup from '../components/signup';
import About from '../components/about';
import Newsletters from '@/components/newsletters';

export default function HomePage() {
  return (
    <>
      <Signup />
      <About />
      <Newsletters/>
    </>
  );
}
