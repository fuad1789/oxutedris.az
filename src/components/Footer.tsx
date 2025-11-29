import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Oxu Tədris Mərkəzi</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Uğura aparan düzgün təhsil. Təcrübəli müəllimlər və müasir tədris metodları ilə xidmətinizdəyik.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Keçidlər</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Kurslar
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Müəllimlər
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Populyar Kurslar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Abituriyent hazırlığı
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Buraxılış imtahanı
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                  İngilis dili
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Məntiq
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Əlaqə</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Bakı şəhəri, Həzi Aslanov rayonu, Rübail İsgəndərov 15</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone size={18} className="flex-shrink-0" />
                <span>+994 55 143 65 47</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@oxutedris.az</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Oxu Tədris Mərkəzi. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
