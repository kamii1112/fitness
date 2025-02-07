import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-[#130F26] text-white px-4 py-1 rounded-[40px] bg-custom-gradient"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
