
import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper'; // Adjusted path
import Button from '../components/Button'; // Adjusted path
import { MOCK_EVENTS, MOCK_NEWS, MOCK_PROJECTS } from '../constants'; // Adjusted path
import { EventItem, NewsArticle, ProjectItem, EventType } from '../types'; // Adjusted path, Added EventType
import { ArrowRightIcon, CalendarDaysIcon, NewspaperIcon, LightBulbIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => (
  <div className="relative bg-mukesa-gray-dark py-20 md:py-32 text-white rounded-lg shadow-2xl overflow-hidden mb-16"> {/* Changed bg-mukesa-bg-alt to bg-mukesa-gray-dark */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-60" 
      style={{ backgroundImage: 'url("/images/multimedia.png")' }}
    ></div>
    {/* Changed via-mukesa-text/80 to via-mukesa-black/80 */}
    <div className="absolute inset-0 bg-gradient-to-br from-mukesa-blue/70 via-mukesa-black/80 to-mukesa-red/50"></div> 
    <div className="container mx-auto px-6 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
         Welcome to <span className="text-mukesa-blue" style={{ textShadow: '-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF, -0.5px -0.5px 0 #FFF, 0.5px -0.5px 0 #FFF, -0.5px 0.5px 0 #FFF, 0.5px 0.5px 0 #FFF' }}>MUKESA</span>
      </h1>
      {/* text-gray-200 is fine for always-dark hero section */}
      <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"> 
        Empowering the next generation of engineers at Multimedia University of Kenya. Discover, Innovate, Lead.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Button size="lg" variant="primary" onClick={() => window.location.hash = '/register'}>
          Join MUKESA Today <ArrowRightIcon className="h-5 w-5 inline ml-2" />
        </Button>
        {/* Specific styling for hero button (always on dark background) */}
        <Button size="lg" variant="outline" onClick={() => window.location.hash = '/events'} className="border-mukesa-red text-mukesa-red hover:bg-mukesa-red hover:text-white">
          Explore Events
        </Button>
      </div>
    </div>
  </div>
);

const MiniCard: React.FC<{item: EventItem | NewsArticle | ProjectItem, type: 'event' | 'news' | 'project'}> = ({ item, type }) => {
  let icon;
  // Icons text-mukesa-blue should be visible on both light/dark card backgrounds.
  if (type === 'event') icon = <CalendarDaysIcon className="h-8 w-8 text-mukesa-blue mb-2" />;
  else if (type === 'news') icon = <NewspaperIcon className="h-8 w-8 text-mukesa-blue mb-2" />;
  else icon = <LightBulbIcon className="h-8 w-8 text-mukesa-blue mb-2" />;

  return (
    // Changed bg-mukesa-bg to bg-white dark:bg-mukesa-gray-dark
    <Link to={type === 'event' ? `/events#${item.id}` : type === 'news' ? `/news#${item.id}` : `/projects#${item.id}`} className="block bg-white dark:bg-mukesa-gray-dark p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      {icon}
      {/* Added dark:text-mukesa-blue */}
      <h3 className="text-xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-2">{item.title}</h3>
      {/* Changed text-mukesa-text-muted to text-gray-600 dark:text-mukesa-gray-text */}
      <p className="text-sm text-gray-600 dark:text-mukesa-gray-text line-clamp-3">{type === 'event' ? (item as EventItem).description : type === 'news' ? (item as NewsArticle).summary : (item as ProjectItem).description}</p>
      {/* Added dark:text-mukesa-red */}
      <span className="mt-3 inline-block text-mukesa-red dark:text-mukesa-red hover:underline text-sm">
        Learn More <ArrowRightIcon className="h-4 w-4 inline" />
      </span>
    </Link>
  );
};

const HomePage: React.FC = () => {
  // Changed filter to use EventType.UPCOMING
  const featuredEvents = MOCK_EVENTS.filter(e => e.type === EventType.UPCOMING).slice(0, 2);
  const latestNews = MOCK_NEWS.slice(0, 2);
  const featuredProject = MOCK_PROJECTS.slice(0,1)[0];

  return (
    <div>
      <HeroSection />

      <SectionWrapper title="What is MUKESA?" subtitle="Your hub for engineering excellence, innovation, and community at Multimedia University of Kenya.">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="bg-white dark:bg-mukesa-gray-dark p-6 rounded-lg shadow-md">
            <AcademicCapIcon className="h-12 w-12 text-mukesa-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-2">Skill Development</h3>
            <p className="text-gray-600 dark:text-mukesa-gray-text">Workshops, seminars, and hands-on projects to enhance your technical and soft skills.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white dark:bg-mukesa-gray-dark p-6 rounded-lg shadow-md">
            <UsersIcon className="h-12 w-12 text-mukesa-red mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mukesa-red dark:text-mukesa-red mb-2">Networking</h3>
            <p className="text-gray-600 dark:text-mukesa-gray-text">Connect with peers, faculty, alumni, and industry professionals.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white dark:bg-mukesa-gray-dark p-6 rounded-lg shadow-md">
            <LightBulbIcon className="h-12 w-12 text-mukesa-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-mukesa-gray-text">A platform to showcase your innovative projects and research.</p>
          </div>
        </div>
      </SectionWrapper>

      {featuredEvents.length > 0 && (
        <SectionWrapper title="Upcoming Events" subtitle="Don't miss out on our exciting upcoming activities.">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredEvents.map(event => <MiniCard key={event.id} item={event} type="event" />)}
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" onClick={() => window.location.hash = '/events'}>
              View All Events <ArrowRightIcon className="h-5 w-5 inline ml-2" />
            </Button>
          </div>
        </SectionWrapper>
      )}

      {latestNews.length > 0 && (
         <SectionWrapper title="Latest News & Trends" subtitle="Stay updated with the latest in the world of engineering.">
         <div className="grid md:grid-cols-2 gap-8">
           {latestNews.map(news => <MiniCard key={news.id} item={news} type="news" />)}
         </div>
         <div className="text-center mt-8">
           <Button variant="primary" onClick={() => window.location.hash = '/news'}>
             Read More News <ArrowRightIcon className="h-5 w-5 inline ml-2" />
           </Button>
         </div>
       </SectionWrapper>
      )}

      {featuredProject && (
        <SectionWrapper title="Featured Project" subtitle="Check out innovative work from our talented students.">
            <div className="max-w-2xl mx-auto">
                 <MiniCard item={featuredProject} type="project" />
            </div>
           <div className="text-center mt-8">
           <Button variant="secondary" onClick={() => window.location.hash = '/projects'}>
             Explore All Projects <ArrowRightIcon className="h-5 w-5 inline ml-2" />
           </Button>
         </div>
        </SectionWrapper>
      )}

    </div>
  );
};

export default HomePage;
