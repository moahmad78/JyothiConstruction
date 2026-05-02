import ServiceTemplate from '../../components/ServiceTemplate';
import { Box, Users, Factory } from 'lucide-react';

const Blocks = () => {
  const features = [
    {
      title: 'Advanced Infrastructure',
      description: 'Automated block manufacturing units engineered to produce massive volumes without compromising density or shape.',
      icon: <Box className="w-6 h-6" />
    },
    {
      title: 'Skilled Workforce',
      description: 'Dedicated quality assurance teams inspect every batch for strength, uniformity, and finish.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'In-House Production',
      description: 'Internal block production guarantees a steady, reliable supply chain for all our building envelopes and partition walls.',
      icon: <Factory className="w-6 h-6" />
    }
  ];

  return (
    <ServiceTemplate 
      title="Concrete Blocks"
      tagline="Building Solid Walls"
      description="High-density, structurally superior concrete blocks designed to offer maximum durability and thermal efficiency."
      features={features}
    />
  );
};

export default Blocks;
