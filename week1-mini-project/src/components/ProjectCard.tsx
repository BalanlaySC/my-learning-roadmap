import React from 'react';

interface ProjectCardProps {
  title: string;
}

// 2. Define your functional component
//    Use React.FC<ComponentNameProps> for type safety if you have props.
//    If no props, you can use React.FC or just leave off the type annotation.
const ProjectCard: React.FC<ProjectCardProps> = () => {
  // You can declare state variables or other React Hooks here if needed:
  // const [someState, setSomeState] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Example content - replace with your actual component content */}
      <h2 className="text-2xl font-semibold text-gray-800">
        This is the ComponentName Component
      </h2>
      <p className="mt-2 text-gray-600">
        You can put your content and Tailwind CSS classes here.
      </p>
    </div>
  );
};

export default ProjectCard;