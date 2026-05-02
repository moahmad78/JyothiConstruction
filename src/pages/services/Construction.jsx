import ServiceTemplate from '../../components/ServiceTemplate';
import { Building2, Users, Factory } from 'lucide-react';

const Construction = () => {
  const features = [
    {
      title: 'Advanced Infrastructure',
      description: 'Equipped with state-of-the-art machinery capable of executing mega-scale residential, industrial, and commercial projects.',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: 'Skilled Workforce',
      description: 'Our dedicated team of architects, engineers, and project managers ensures precision at every stage of the lifecycle.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'In-House Production',
      description: 'Self-reliant raw material sourcing eliminates third-party bottlenecks, guaranteeing strict adherence to timelines.',
      icon: <Factory className="w-6 h-6" />
    }
  ];

  return (
    <ServiceTemplate 
      title="Construction Services"
      tagline="Building The Future"
      description="From groundbreaking luxury villas to massive industrial hubs, we deliver end-to-end construction excellence driven by decades of engineering expertise."
      features={features}
    />
  );
};

export default Construction;
