import { Navbar } from '@/app/components/appbar/navBar';
// import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from './components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Welcome />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
