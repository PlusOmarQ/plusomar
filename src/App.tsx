import { Navbar } from '@/components/Navbar'
import { memo, useMemo } from 'react'

const App = memo(() => {
  const experiences = useMemo(() => [
    { title: "Digital Banking Manager", company: "National Bank of Kuwait", period: "Oct 2023 - Present" },
    { title: "Founder", company: "Lothan", period: "Mar 2025 - Present" },
    { title: "Advisory Board Member", company: "Odontyn", period: "May 2020 - Present" },
    { title: "Digital Transformation Manager", company: "Burgan Bank", period: "Dec 2022 - Oct 2023" },
    { title: "Product Owner", company: "Digital Group - Boubyan Bank", period: "Oct 2020 - Dec 2022" },
    { title: "Specialist", company: "Digital Group - Boubyan Bank", period: "Apr 2020 - Oct 2020" },
    { title: "Specialist", company: "Market Research & Digital Marketing - Boubyan Bank", period: "Jan 2020 - Apr 2020" },
    { title: "Senior Officer", company: "Market Research & Digital Marketing - Boubyan Bank", period: "Nov 2018 - Dec 2019" },
    { title: "Graphic Designer", company: "Marketing Communication - Boubyan Bank", period: "Jul 2016 - Nov 2018" },
    { title: "Freelancer", company: "", period: "2007 - Present" },
    { title: "Creative Director", company: "Marketeers Media", period: "Mar 2018 - Mar 2019" },
    { title: "Founder", company: "Bizkitpark Blog", period: "2007 - 2010" },
  ], [])

  const education = useMemo(() => [
    { title: "Executive Education, Accelerating Digital Transformation with Algorithmic Business Thinking", institution: "MIT Sloan School of Management", period: "Apr - May 2024" },
    { title: "Executive Education, Digital Business Strategy: Harnessing Our Digital Future", institution: "MIT Sloan School of Management", period: "Oct - Nov 2023" },
    { title: "Mastering Digital Marketing", institution: "London Business School", period: "Nov 2020" },
    { title: "Non-Degree classes", institution: "GUST", period: "2016" },
    { title: "Masters in Cybersecurity (Incomplete)", institution: "Missouri State University", period: "2016" },
    { title: "Computer Information Systems", institution: "Missouri State University", period: "2015 - 2010" },
    { title: "Apprentice", institution: "Arcanum", period: "2015 - 2014" },
    { title: "English Language Institute", institution: "University of Oklahoma", period: "2009" },
    { title: "English Language Institute", institution: "University of Maine", period: "2009" },
    { title: "High School", institution: "Anglo Arab Bilingual Academy", period: "2008" },
  ], [])

  const certifications = useMemo(() => [
    "Google Analytics Individual Qualification - Google (May 2021 - May 2022)",
    "Advanced Google Analytics - Google (May 2021 - May 2024)",
    "Google Analytics for Beginners - Google (Apr 2021 - Apr 2024)",
    "Fundamentals of Digital Marketing - Google (Feb 2020)",
    "Talent Hackathon - Boubyan Bank (Apr 2019)",
    "Next Generation Digital Marketing - Glen Gilmore (Nov 2018)",
    "KFAS Design Sprint Bootcamp - Sprint Valley",
    "20 Rules for Visuals Communication - LinkedIn Learning (Apr 2021)",
    "Agile Product Owner Role: Foundations - LinkedIn Learning (Apr 2021)",
    "Agile Product Owner Role: Techniques - LinkedIn Learning (Apr 2021)",
    "Product Management Tips - LinkedIn Learning (Apr 2021)",
    "Google Universal Analytics Essential Training 2020 - LinkedIn Learning (Apr 2021)",
    "Visual Thinking for Business Workshop - WorkVisual Institute",
    "Finalist list - Photographer's Forum",
    "PL/SQL by Example - Amarnath Redd - Udemy",
    "Open Water Dive license - DiVentures",
    "Introduction to Scripting in Unity for Artists - CGSociety"
  ], [])

  const interests = useMemo(() => [
    "Technology", "Video Games", "Photography", "Sports", "Science", "Traveling", "Hiking", "Design"
  ], [])

  const favorites = useMemo(() => ({
    music: ["Tool", "Rishloo", "Riverside", "A Perfect Circle"],
    games: ["Mass Effect (ALL of them)", "Legend of Zelda games", "Assassins Creed ( from the 1st till Revelations)", "Red Dead Redemption", "Pokémon Games", "Sonic the Hedgehog"],
    movies: ["Avatar", "Forrest Gump", "Interstellar"],
    tvShows: ["Cheers", "Frasier", "Firefly", "X-Files", "Seinfeld", "Friends", "Everybody Loves Raymond", "Sherlock", "Mr.Robot", "Cosmos"],
    anime: ["Great Teacher Onizuka", "Hunter X Hunter", "Full Metal Alchemist", "Monster"],
    books: ["The Element - Sir Ken Robinson", "Customers For Life - Carl Sewel", "The Alchemist - Paulo Coelho", "The Martian - Andy Weir", "Ready Player One - Ernest Cline", "Sapiens - Yuval Noah Harari", "Scrum - Jeff Sutherland"]
  }), [])

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#212121' }}>
      <Navbar />
      <main className="pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="text-center py-6 sm:py-12 pt-6 sm:pt-10 pb-0">
          {/* SVG Logo */}
          <div className="mx-auto mb-6 sm:mb-8 flex items-center justify-center" style={{ width: '60px', height: '60px' }}>
            <img 
              src="./logo.svg" 
              alt="Plusomar Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Main Studio Image */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-8 px-2 sm:px-4">
            <img 
              src="./memyselfi.webp" 
              alt="Omar's Studio"
              className="w-full object-cover mb-2"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Quote and Bio Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 pt-4 pb-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 text-center leading-tight">
            "Omar, Who is he?" - Yoda
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 text-gray-300">
            Born and Raised in Kuwait, Lived in the USA for 7 years where I managed to graduate from Missouri State University with a bachelors degree in Computer Information Systems. Currently working in one of the leading banks in Kuwait. I'm a guy who enjoys technology, traveling and shooting photos.
          </p>

          {/* La Cueva Ventana Image */}
          <a href="https://plusomar.smugmug.com/Portfolio/i-hncj63G/A" target="_blank" rel="noopener noreferrer" className="block mb-12">
            <img 
              src="https://photos.smugmug.com/Portfolio/i-hncj63G/0/KgCbQxBhdDdTQJwWM2qLRPDfDN3mmxmk4hv3prvm5/L/omarcave-EditFinal-L.jpg" 
              alt="La Cueva Ventana"
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
              loading="lazy"
              decoding="async"
            />
          </a>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 pt-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b border-gray-700 pb-3 sm:pb-4">Experience</h2>
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 pl-3 sm:pl-6" style={{ borderColor: '#d26249' }}>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h3>
                {exp.company && <p className="text-sm sm:text-base text-gray-300">{exp.company}</p>}
                <p className="text-gray-400 text-xs sm:text-sm">{exp.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b border-gray-700 pb-3 sm:pb-4">Education</h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 pl-3 sm:pl-6" style={{ borderColor: '#d26249' }}>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{edu.institution}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b border-gray-700 pb-3 sm:pb-4">Certifications/Training</h2>
          <ul className="space-y-2 sm:space-y-3">
            {certifications.map((cert, index) => (
              <li key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                <span className="break-words">{cert}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Conferences Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b border-gray-700 pb-3 sm:pb-4">Conferences</h2>
          <ul className="space-y-2 sm:space-y-3">
            <li className="text-sm sm:text-base text-gray-300 flex items-start">
              <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
              Google I/O 2015
            </li>
            <li className="text-sm sm:text-base text-gray-300 flex items-start">
              <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
              Google Photographers Conference 2012
            </li>
          </ul>
        </section>

        {/* Languages Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b border-gray-700 pb-3 sm:pb-4">Languages</h2>
          <ul className="space-y-2 sm:space-y-3">
            <li className="text-sm sm:text-base text-gray-300 flex items-start">
              <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
              <strong>Arabic</strong> (Native)
            </li>
            <li className="text-sm sm:text-base text-gray-300 flex items-start">
              <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
              <strong>English</strong> (Fluent)
            </li>
            <li className="text-sm sm:text-base text-gray-300 flex items-start">
              <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
              <strong>Japanese</strong> (Beginner)
            </li>
          </ul>
        </section>

        {/* Interests Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b border-gray-700 pb-3 sm:pb-4">Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                <span className="break-words">{interest}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Random Stuff Section */}
        <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-b border-gray-700 pb-3 sm:pb-4">Random Stuff</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#d26249' }}>Favorite music:</h3>
              <ul className="space-y-1 sm:space-y-2">
                {favorites.music.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                    <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#d26249' }}>Favorite games:</h3>
              <ul className="space-y-1 sm:space-y-2">
                {favorites.games.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                    <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#d26249' }}>Favorite movies:</h3>
              <ul className="space-y-1 sm:space-y-2">
                {favorites.movies.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                    <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#d26249' }}>Favorite TV shows:</h3>
              <ul className="space-y-1 sm:space-y-2">
                {favorites.tvShows.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                    <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#d26249' }}>Favorite anime:</h3>
              <ul className="space-y-1 sm:space-y-2">
                {favorites.anime.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                    <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#d26249' }}>Favorite books:</h3>
              <ul className="space-y-1 sm:space-y-2">
                {favorites.books.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-300 flex items-start">
                    <span className="mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0" style={{ color: '#d26249' }}>•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


      </main>
    </div>
  )
})

App.displayName = 'App'

export default App
