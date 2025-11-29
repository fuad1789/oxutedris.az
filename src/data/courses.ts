export interface Course {
  id: string;
  title: string;
  description: string;
  method: string;
  duration: string;
  teacher: string;
  benefits: string[];
  category: 'abituriyent' | 'buraxilis' | 'language' | 'logic' | 'school';
  ageGroup?: string;
  priceRange?: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Abituriyent hazırlığı',
    description: '11-ci sinif şagirdləri üçün ali məktəblərə qəbul hazırlığı. Təcrübəli müəllimlər və uşaq psixologiyasına uyğun metodlarla.',
    method: 'Əyani və Online',
    duration: '10 ay',
    teacher: 'Peşəkar müəllim heyəti',
    benefits: ['Həftəlik sınaqlar', 'Valideynlə əlaqə', 'Kiçik qruplar', 'Psixoloji dəstək'],
    category: 'abituriyent',
    ageGroup: '11-ci sinif',
    priceRange: '60–120 AZN',
  },
  {
    id: '2',
    title: 'Buraxılış imtahanı hazırlığı',
    description: '9-cu və 11-ci sinif şagirdləri üçün buraxılış imtahanlarına xüsusi hazırlıq. Oyun elementli və interaktiv dərslər.',
    method: 'Qrup dərsləri',
    duration: '9 ay',
    teacher: 'İxtisaslaşmış müəllimlər',
    benefits: ['DİM proqramı', 'Sınaq imtahanları', 'Psixoloji dəstək', 'Kiçik qruplar'],
    category: 'buraxilis',
    ageGroup: '9-cu və 11-ci sinif',
    priceRange: '60–120 AZN',
  },
  {
    id: '3',
    title: 'Uşaqlar üçün İngilis dili',
    description: '6-16 yaş arası uşaqlar üçün İngilis dili. Yaş qruplarına görə bölünmüş, oyun və danışıq fəaliyyətləri ilə zəngin dərslər.',
    method: 'Fərdi və Qrup',
    duration: 'Səviyyə üzrə 3 ay',
    teacher: 'Leyla Məmmədova',
    benefits: ['Yaş qruplarına görə', 'Oyun elementli', 'Uşaqlar üçün materiallar', 'İnteraktiv dərslər'],
    category: 'language',
    ageGroup: '6-16 yaş',
    priceRange: '60–120 AZN',
  },
  {
    id: '4',
    title: 'Riyaziyyat hazırlığı',
    description: '5-9-cu sinif şagirdləri üçün riyaziyyatın təkmilləşdirilməsi. Maraqlı və interaktiv dərslər, ev tapşırıqlarına kömək.',
    method: 'Kiçik qruplar',
    duration: 'Davamlı',
    teacher: 'Aysel Həsənova',
    benefits: ['Ev tapşırıqlarına kömək', 'Oyun elementli', 'Sinif qruplarına görə', 'İnteraktiv dərslər'],
    category: 'school',
    ageGroup: '5-9-cu sinif',
    priceRange: '60–120 AZN',
  },
  {
    id: '5',
    title: 'Məktəbəqədər hazırlıq',
    description: 'Məktəbə hazırlıq üçün əsas bacarıqların inkişafı. Uşaqlar üçün oyun əsaslı və interaktiv dərslər.',
    method: 'Kiçik qruplar',
    duration: 'Davamlı',
    teacher: 'Peşəkar müəllim heyəti',
    benefits: ['Oyun əsaslı dərslər', 'Uşaqlar üçün materiallar', 'Psixoloq dəstəyi', 'Kiçik qruplar'],
    category: 'school',
    ageGroup: '5-6 yaş',
    priceRange: '60–120 AZN',
  },
];
