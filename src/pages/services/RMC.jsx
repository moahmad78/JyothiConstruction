import ServiceTemplate from '../../components/ServiceTemplate';
import { Truck, Users, Factory } from 'lucide-react';

const RMC = () => {
  const features = [
    {
      title: 'Advanced Infrastructure',
      description: 'Fully automated, high-capacity batching plants ensure consistent and optimal mixes for every pour.',
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: 'Skilled Workforce',
      description: 'Expert mix-design engineers constantly innovate to create durable, high-strength concrete formulations.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'In-House Production',
      description: 'By manufacturing our own Ready Mix Concrete, we maintain total control over the structural integrity of our buildings.',
      icon: <Factory className="w-6 h-6" />
    }
  ];

  return (
    <ServiceTemplate 
      title="Ready Mix Concrete"
      tagline="Precision Manufacturing"
      description="Experience Controlled Excellence with our high-capacity batching plants delivering premium-grade concrete with absolute Quality Assurance."
      features={features}
    />
  );
};

export default RMC;
