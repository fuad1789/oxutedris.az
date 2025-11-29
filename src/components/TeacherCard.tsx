import Image from 'next/image';
import { Teacher } from '@/data/teachers';

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-premium border border-gray-100 hover:shadow-premium-lg transition-all duration-300 group hover:-translate-y-1">
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        <Image 
          src={teacher.image} 
          alt={teacher.name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{teacher.name}</h3>
        <p className="text-primary text-sm font-medium mb-3">{teacher.subject}</p>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{teacher.bio}</p>
        <div className="pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500 font-medium">{teacher.experience} müəllim təcrübəsi</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
