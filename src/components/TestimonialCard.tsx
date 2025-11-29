import { Quote } from 'lucide-react';
import { Testimonial } from '@/data/stats';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-premium border border-gray-100 relative hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
      <Quote className="absolute top-4 left-4 text-blue-100 h-8 w-8 -z-0 opacity-50" />
      <div className="relative z-10">
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">&quot;{testimonial.content}&quot;</p>
        <div className="flex items-center pt-4 border-t border-gray-100">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm mr-3 shadow-md">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
            <p className="text-xs text-primary font-medium">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
