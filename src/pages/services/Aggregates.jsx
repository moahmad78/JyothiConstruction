import ServiceTemplate from '../../components/ServiceTemplate';
import { Layers, Users, Factory } from 'lucide-react';

const Aggregates = () => {
  const features = [
    {
      title: 'Advanced Infrastructure',
      description: 'Our heavy-duty crushing plants efficiently process vast quantities of stone with meticulous precision.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'Skilled Workforce',
      description: 'Expert geologists and site operators ensure only the highest-quality raw materials are extracted and refined.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'In-House Production',
      description: 'By producing our own aggregates, we secure the foundational quality of all our construction and concrete projects.',
      icon: <Factory className="w-6 h-6" />
    }
  ];

  return (
    <ServiceTemplate 
      title="Aggregates & Crushing"
      tagline="The Foundation of Quality"
      description="Sourcing and refining premium aggregates that form the unbreakable backbone of modern infrastructure."
      features={features}
    />
  );
};

export default Aggregates;
