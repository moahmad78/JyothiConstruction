import ServiceTemplate from '../../components/ServiceTemplate';
import { Wrench, Users, Factory } from 'lucide-react';

const Fabrication = () => {
  const features = [
    {
      title: 'Advanced Infrastructure',
      description: 'Modern welding workshops equipped with the latest machinery to handle complex steel and metal fabrication.',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'Skilled Workforce',
      description: 'Certified welders and structural engineers ensure every joint and frame meets the highest safety standards.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'In-House Production',
      description: 'Complete internal fabrication capabilities mean no waiting on external workshops, drastically reducing lead times.',
      icon: <Factory className="w-6 h-6" />
    }
  ];

  return (
    <ServiceTemplate 
      title="Fabrication Works"
      tagline="Precision Engineering"
      description="Custom structural and engineering solutions forged with exact precision for a diverse range of construction needs."
      features={features}
    />
  );
};

export default Fabrication;
