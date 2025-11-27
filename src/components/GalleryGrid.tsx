'use client';

import { BookOpen, Users, Trophy, Sparkles, Lightbulb, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const GalleryGrid = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280; // width of card (256px) + gap (24px)
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const images = [
    { 
      id: 1, 
      color: 'bg-blue-50', 
      iconColor: 'text-blue-600',
      label: 'Şagirdlər üçün dərs prosesi',
      icon: BookOpen,
    },
    { 
      id: 2, 
      color: 'bg-green-50', 
      iconColor: 'text-green-600',
      label: 'Uşaqlar üçün sınaq imtahanı',
      icon: Lightbulb,
    },
    { 
      id: 3, 
      color: 'bg-orange-50', 
      iconColor: 'text-orange-600',
      label: 'Məktəblilər üçün tədbirlər',
      icon: Sparkles,
    },
    { 
      id: 4, 
      color: 'bg-pink-50', 
      iconColor: 'text-pink-600',
      label: 'Uşaqlar üçün mükafatlandırma',
      icon: Trophy,
    },
    { 
      id: 5, 
      color: 'bg-purple-50', 
      iconColor: 'text-purple-600',
      label: 'Şagirdlərlə ekskursiya',
      icon: Users,
    },
    { 
      id: 6, 
      color: 'bg-indigo-50', 
      iconColor: 'text-indigo-600',
      label: 'Valideynlərlə görüşlər',
      icon: Heart,
    },
  ];

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 min-w-max">
          {images.map((img) => {
            const IconComponent = img.icon;
            return (
              <div 
                key={img.id} 
                className={`group flex-shrink-0 w-64 h-48 rounded-xl ${img.color} border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer`}
              >
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6">
                  {/* Icon */}
                  <div className={`mb-3 ${img.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-700 text-center">
                    {img.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full bg-white border border-gray-200 hover:border-primary hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow"
          aria-label="Sola keçid"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-white border border-gray-200 hover:border-primary hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow"
          aria-label="Sağa keçid"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default GalleryGrid;
