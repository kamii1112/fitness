import React from 'react';
import BenchTricepDipsImage from '../Assets/Exercises/man-doing-bench-tricep-dips-flat-illustration-isolated-on-white-background-vector-removebg-preview.png';
import DoubleCrunchesImage from '../Assets/Exercises/man-doing-double-crunches-abdominals-exercise-flat-illustration-isolated-on-white-background-vector-removebg-preview.png';
import DumbbellFlatBenchPressImage from '../Assets/Exercises/man-doing-dumbbell-flat-bench-press-chest-exercise-flat-illustration-isolated-on-white-background-vector-removebg-preview.png';
import DumbbellWalkingLungesImage from '../Assets/Exercises/man-doing-dumbbell-walking-lunges-exercise-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';
import EzBarbellCurlImage from '../Assets/Exercises/man-doing-ez-barbell-curl-flat-illustration-isolated-on-different-layers-workout-character-free-vector-removebg-preview.png';
import FlatBenchDumbbellFlyImage from '../Assets/Exercises/man-doing-flat-bench-dumbbell-fly-exercise-top-view-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';
import PlankImage from '../Assets/Exercises/man-doing-plank-abdominals-exercise-flat-illustration-isolated-on-white-background-vector-removebg-preview.png';
import RussianTwistsImage from '../Assets/Exercises/man-doing-russian-twists-exercise-flat-illustration-isolated-on-white-background-vector-removebg-preview.png';
import SeatedDumbbellOverheadPressImage from '../Assets/Exercises/man-doing-seated-dumbbell-overhead-shoulder-press-top-body-workout-upper-body-exercises-flat-illustration-isolated-on-white-background-vector-removebg-preview.png';
import SingleArmBentOverRowImage from '../Assets/Exercises/man-doing-single-arm-bent-over-row-exercise-flat-illustration-isolated-on-white-background-workout-character-set-free-vector-removebg-preview.png';
import StandingDumbbellCalfRaisesImage from '../Assets/Exercises/man-doing-standing-dumbbell-calf-raises-exercise-flat-illustration-isolated-on-white-background-workout-character-set-vector-removebg-preview.png';
import ShoulderShrugsImage from '../Assets/Exercises/sports-silhouettes-workout-man-in-shorts-doing-sport-shoulder-shrugs-with-weight-barbell-holding-vector-removebg-preview.png';
import BarbellDeadliftsImage1 from '../Assets/Exercises/woman-doing-barbell-deadlifts-exercise-flat-illustration-isolated-on-white-background-vector-1-removebg-preview.png';
import BarbellDeadliftsImage2 from '../Assets/Exercises/woman-doing-barbell-deadlifts-exercise-flat-illustration-isolated-on-white-background-vector-1-removebg-preview-1.png';
import CloseGripOverhandBarbellBenchPressImage from '../Assets/Exercises/woman-doing-close-grip-overhand-barbell-bench-press-exercise-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';
import DumbbellBicepHammerCurlsImage from '../Assets/Exercises/woman-doing-dumbbell-bicep-hammer-curls-flat-illustration-isolated-on-different-layer-workout-character-free-vector-removebg-preview.png';
import DumbbellTricepsExtensionImage from '../Assets/Exercises/woman-doing-dumbbell-triceps-extension-exercise-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';
import ExerciseImageSrc from '../Assets/Exercises/woman-doing-exercise-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';
import FrontShoulderSingleDumbbellRaisesImage1 from '../Assets/Exercises/woman-doing-forward-front-shoulder-single-dumbbell-raises-exercise-flat-illustration-isolated-on-white-background-free-vector (1) 1.png';
import FrontShoulderSingleDumbbellRaisesImage2 from '../Assets/Exercises/woman-doing-forward-front-shoulder-single-dumbbell-raises-exercise-flat-illustration-isolated-on-white-background-free-vector (1).png';
import InclineDumbbellBenchPressImage from '../Assets/Exercises/woman-doing-incline-dumbbell-bench-press-exercise-flat-illustration-isolated-on-white-background-workout-character-vector-removebg-preview.png';
import JumpRopeSkippingImage from '../Assets/Exercises/woman-doing-jump-rope-skipping-cardio-exercise-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';
import LateralSideShoulderDumbbellRaisesImage from '../Assets/Exercises/woman-doing-lateral-side-shoulder-dumbbell-raises-power-partials-exercise-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';
import SquatWithBarbellImage from '../Assets/Exercises/woman-doing-squat-with-barbell-exercise-flat-illustration-isolated-on-white-background-free-vector-removebg-preview.png';

// Import all exercise images

export type ExerciseType = 
    | 'Bench Tricep Dips'
    | 'Double Crunches'
    | 'Dumbbell Flat Bench Press'
    | 'Dumbbell Walking Lunges'
    | 'Ez Barbell Curl'
    | 'Flat Bench Dumbbell Fly'
    | 'Plank'
    | 'Russian Twists'
    | 'Seated Dumbbell Overhead Press'
    | 'Single Arm Bent Over Row'
    | 'Standing Dumbbell Calf Raises'
    | 'Shoulder Shrugs'
    | 'Barbell Deadlifts 1'
    | 'Barbell Deadlifts 2'
    | 'Close Grip Overhand Barbell Bench Press'
    | 'Dumbbell Bicep Hammer Curls'
    | 'Dumbbell Triceps Extension'
    | 'Exercise'
    | 'Front Shoulder Single Dumbbell Raises 1'
    | 'Front Shoulder Single Dumbbell Raises 2'
    | 'Incline Dumbbell Bench Press'
    | 'Jump Rope Skipping'
    | 'Lateral Side Shoulder Dumbbell Raises'
    | 'Squat With Barbell';

interface ExerciseProps {
    type: ExerciseType;
    size: 'sm' | 'lg';
}


const exerciseImages: Record<ExerciseType, string> = {
    'Bench Tricep Dips': BenchTricepDipsImage,
    'Double Crunches': DoubleCrunchesImage,
    'Dumbbell Flat Bench Press': DumbbellFlatBenchPressImage,
    'Dumbbell Walking Lunges': DumbbellWalkingLungesImage,
    'Ez Barbell Curl': EzBarbellCurlImage,
    'Flat Bench Dumbbell Fly': FlatBenchDumbbellFlyImage,
    'Plank': PlankImage,
    'Russian Twists': RussianTwistsImage,
    'Seated Dumbbell Overhead Press': SeatedDumbbellOverheadPressImage,
    'Single Arm Bent Over Row': SingleArmBentOverRowImage,
    'Standing Dumbbell Calf Raises': StandingDumbbellCalfRaisesImage,
    'Shoulder Shrugs': ShoulderShrugsImage,
    'Barbell Deadlifts 1': BarbellDeadliftsImage1,
    'Barbell Deadlifts 2': BarbellDeadliftsImage2,
    'Close Grip Overhand Barbell Bench Press': CloseGripOverhandBarbellBenchPressImage,
    'Dumbbell Bicep Hammer Curls': DumbbellBicepHammerCurlsImage,
    'Dumbbell Triceps Extension': DumbbellTricepsExtensionImage,
    'Exercise': ExerciseImageSrc,
    'Front Shoulder Single Dumbbell Raises 1': FrontShoulderSingleDumbbellRaisesImage1,
    'Front Shoulder Single Dumbbell Raises 2': FrontShoulderSingleDumbbellRaisesImage2,
    'Incline Dumbbell Bench Press': InclineDumbbellBenchPressImage,
    'Jump Rope Skipping': JumpRopeSkippingImage,
    'Lateral Side Shoulder Dumbbell Raises': LateralSideShoulderDumbbellRaisesImage,
    'Squat With Barbell': SquatWithBarbellImage,
};

export const ExerciseImage: React.FC<ExerciseProps> = ({ type, size }) => {
    const dimensions = size === 'sm' ? 'w-[70px] h-[70px] bg-[#F7F8F8] rounded-xl' : 'w-[250px] h-[250px] bg-[#F7F8F8] rounded-xl p-2';
    return (
        <img src={exerciseImages[type]} alt={type} className={`${dimensions} rounded-[20px] mr-2`} />
    );
};