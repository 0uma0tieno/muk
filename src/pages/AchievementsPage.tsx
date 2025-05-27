import React from 'react';
import SectionWrapper from '../components/SectionWrapper'; // Adjusted path
import { MOCK_ACHIEVEMENTS } from '../constants'; // Adjusted path
import { AchievementItem } from '../types'; // Adjusted path
import { TrophyIcon, UserCircleIcon, CalendarDaysIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button'; // Added Button import

const AchievementCard: React.FC<{ achievement: AchievementItem }> = ({ achievement }) => {
  return (
    <div id={achievement.id} className="bg-white dark:bg-mukesa-gray-dark rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {achievement.imageUrl && (
        <div className="w-full h-56 bg-gray-200 dark:bg-mukesa-black">
          <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-mukesa-red mb-2"> {/* mukesa-red should be visible on both light/dark card BG */}
          <TrophyIcon className="h-5 w-5 mr-2" />
          <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue">{achievement.title}</h3>
        </div>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
          <UserCircleIcon className="h-4 w-4 mr-1" />
          <span>{achievement.achievedBy}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
          <CalendarDaysIcon className="h-4 w-4 mr-1" />
          <span>{achievement.date}</span>
        </div>
        <p className="text-gray-700 dark:text-mukesa-gray-text text-base mb-4 flex-grow line-clamp-4">{achievement.description}</p>
        {achievement.detailsLink && (
          <div className="mt-auto pt-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.open(achievement.detailsLink, '_blank')}
              className="w-full border-mukesa-red text-mukesa-red hover:bg-mukesa-red hover:text-white dark:border-mukesa-red dark:text-mukesa-red dark:hover:bg-mukesa-red dark:hover:text-white"
              aria-label={`Learn more about ${achievement.title}`}
            >
              Learn More <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 inline" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const AchievementsPage: React.FC = () => {
  return (
    <SectionWrapper title="Student Achievements" subtitle="Celebrating the successes and milestones of MUKESA members.">
      {MOCK_ACHIEVEMENTS.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ACHIEVEMENTS.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-700 dark:text-mukesa-gray-text py-10">
          No achievements to display at the moment. Our students are always working on something great!
        </p>
      )}
    </SectionWrapper>
  );
};

export default AchievementsPage;