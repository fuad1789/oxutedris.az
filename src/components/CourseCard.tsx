import Link from 'next/link';
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-primary uppercase tracking-wide">
            {course.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-2 text-secondary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users size={16} className="mr-2 text-secondary" />
            <span>{course.method}</span>
          </div>
        </div>

        <div className="space-y-1 mb-6">
          {course.benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircle size={14} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <Link
          href={`/courses`}
          className="w-full block text-center bg-gray-50 hover:bg-primary hover:text-white text-primary font-semibold py-3 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-primary"
        >
          Ətraflı Bax
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
