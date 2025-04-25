import './App.css';
import MobileMenu from './components/MobileMenu';
import TeamMember from './components/TeamMember';
import ExternalLink from './components/Link'; // Import the new component
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MobileMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/team"
          element={
            <TeamMember
              name="Socaciu Serafim"
              role="CEO"
              passion="Informatica"
              socialLinks={[
                {
                  platform: 'Instagram',
                  link: 'https://www.instagram.com/serafim.socaciu/',
                  handle: '@serafim.socaciu',
                  iconSrc: './../public/images/insta.png',
                },
              ]}
              imageSrc="./../public/images/Serafim.png"
              linkToProfilePage="/profile"
            />
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      {/* Add the external link in the App or elsewhere */}
      <ExternalLink href="https://www.instagram.com/" text="Follow us on Instagram" />
    </div>
  );
}

function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function ProfilePage() {
  return <h1>Profile Page</h1>;
}

export default App;