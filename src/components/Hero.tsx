import Link from 'next/link';
import { ArrowRight, Star, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-[#003366] text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[80px]"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-yellow-400/10 blur-[60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Qeydiyyat davam edir
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Gələcəyini <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Bizimlə Qur
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed">
              Oxu Tədris Mərkəzi — məktəb yaşlı uşaqlar üçün (1-9-cu sinif) peşəkar təhsil mərkəzi. Uşaqlarınızın gələcəyini bizimlə qurun, valideynlər üçün rahatlıq və əminlik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group bg-yellow-400 text-[#003366] font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2"
              >
                Qeydiyyatdan Keç
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Kurslarımızla Tanış Ol
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">98%</span>
                <span className="text-sm text-blue-200">Qəbul Nəticəsi</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">15+</span>
                <span className="text-sm text-blue-200">İllik Təcrübə</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">1000+</span>
                <span className="text-sm text-blue-200">Məzun</span>
              </div>
            </div>
            <p className="text-sm text-blue-200 mt-4 pt-4 border-t border-white/10">
              * Məktəb yaşlı şagirdlərimizin nəticələri
            </p>
          </div>

          {/* Visual Content */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-300">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Uşaqların İnkişafı</h3>
                  <p className="text-sm text-blue-100">Hər uşağın fərdi inkişafını izləyir və dəstəkləyirik.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-300">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Valideynlə Əlaqə</h3>
                  <p className="text-sm text-blue-100">Aylıq hesabatlar və valideynlərlə daimi əlaqə.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-300">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Təhlükəsiz Mühit</h3>
                  <p className="text-sm text-blue-100">Uşaqlar üçün nəzarətli və təhlükəsiz öyrənmə mühiti.</p>
                </div>
                {/* Abstract decorative box */}
                <div className="h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-80 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                   <span className="text-4xl font-bold text-white">OXU</span>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
