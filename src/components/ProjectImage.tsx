import React from 'react';

interface ProjectImageProps {
  imageUrl: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Project Image" />;
};

export default ProjectImage;