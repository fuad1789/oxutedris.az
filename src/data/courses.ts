export interface Course {
  id: string;
  title: string;
  description: string;
  method: string;
  duration: string;
  teacher: string;
  benefits: string[];
  category: 'abituriyent' | 'buraxilis' | 'language' | 'logic' | 'school';
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Abituriyent Hazırlığı',
    description: '11-ci sinif şagirdləri üçün ali məktəblərə qəbul hazırlığı. Təcrübəli müəllimlər və uşaq psixologiyasına uyğun metodlarla.',
    method: 'Əyani və Online',
    duration: '10 ay',
    teacher: 'Peşəkar müəllim heyəti',
    benefits: ['Həftəlik sınaqlar', 'Valideynlə əlaqə', 'Kiçik qruplar'],
    category: 'abituriyent',
  },
  {
    id: '2',
    title: 'Buraxılış İmtahanı Hazırlığı',
    description: '9-cu və 11-ci sinif şagirdləri üçün buraxılış imtahanlarına xüsusi hazırlıq. Oyun elementli və interaktiv dərslər.',
    method: 'Qrup dərsləri',
    duration: '9 ay',
    teacher: 'İxtisaslaşmış müəllimlər',
    benefits: ['DİM proqramı', 'Sınaq imtahanları', 'Psixoloji dəstək'],
    category: 'buraxilis',
  },
  {
    id: '3',
    title: 'Uşaqlar üçün İngilis Dili',
    description: '6-16 yaş arası uşaqlar üçün İngilis dili. Yaş qruplarına görə bölünmüş, oyun və danışıq fəaliyyətləri ilə zəngin dərslər.',
    method: 'Fərdi və Qrup',
    duration: 'Səviyyə üzrə 3 ay',
    teacher: 'Leyla Məmmədova',
    benefits: ['Yaş qruplarına görə', 'Oyun elementli', 'Uşaqlar üçün materiallar'],
    category: 'language',
  },
  {
    id: '4',
    title: 'Məntiq Hazırlığı',
    description: 'Məktəb olimpiadaları və imtahanları üçün məntiq dərsləri. 7-11-ci sinif şagirdləri üçün uyğun metodlarla.',
    method: 'Əyani',
    duration: '3-6 ay',
    teacher: 'Rəşad Əliyev',
    benefits: ['Sadə izahatlar', 'Sınaqlar', 'Uşaqlar üçün material'],
    category: 'logic',
  },
  {
    id: '5',
    title: 'Riyaziyyat (Məktəblilər üçün)',
    description: '5-9-cu sinif şagirdləri üçün riyaziyyatın təkmilləşdirilməsi. Maraqlı və interaktiv dərslər, ev tapşırıqlarına kömək.',
    method: 'Kiçik qruplar',
    duration: 'Davamlı',
    teacher: 'Aysel Həsənova',
    benefits: ['Ev tapşırıqlarına kömək', 'Oyun elementli', 'Sinif qruplarına görə'],
    category: 'school',
  },
];
