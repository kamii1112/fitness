import React from 'react';
import BarbellImage from '../Assets/Barbbell.png';
import DumbbellImage from '../Assets/Dumbbell.png';
import ZigzagImage from '../Assets/Zigzag.png';
import RopeImage from '../Assets/Rope.png';

export type EquipmentType = 'Barbell' | 'Dumbbell' | 'Zig-Zag Rod' | 'Jump Rope';

interface EquipmentProps {
    type: EquipmentType;
}


const equipmentImages: Record<EquipmentType, string> = {
    Barbell: BarbellImage,
    Dumbbell: DumbbellImage,
    'Zig-Zag Rod': ZigzagImage,
    'Jump Rope': RopeImage,
};

export const Equipment: React.FC<EquipmentProps> = ({ type }) => {
    return (
        <img src={equipmentImages[type]} alt={type}/>
    );
};
