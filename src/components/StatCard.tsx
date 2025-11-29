interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-premium border border-gray-100 text-center hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
