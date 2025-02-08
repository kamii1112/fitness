import { EquipmentType } from './Equipment';
import { ExerciseType } from './ExerciseImage';

type Exercise = {
  name: string;
  sets?: number;
  reps?: string | number;
  duration?: string;
  equipment: string[];
  image: ExerciseType;
  id: string;
};

type WorkoutCategory = {
  exercises: Exercise[];
  numberOfExercises: number;
  duration: string;
  calorieCount: string;
  equipmentRequired: EquipmentType[];
};

[
  'flat-bench-press-barbell',
  'dumbbell-flys-flat-bench',
  'close-grip-bench-press-zig-zag-rod',
  'overhead-triceps-extension-dumbbell',
  'dips-two-benches',
  'plank-hold',
  'hiit-cardio-jump-rope-high-knees',

  'bent-over-barbell-row',
  'dumbbell-row-each-side',
  'zig-zag-rod-bicep-curl',
  'dumbbell-hammer-curl',
  'reverse-crunches',
  'jump-rope-fast-jogging',
  'barbell-squats',
  'dumbbell-lunges',
  'romanian-deadlift-barbell',
  'calf-raises-dumbbell',
  'leg-raises-bicycle-crunches',
  'jump-rope-sprint-intervals',
  'seated-dumbbell-shoulder-press',
  'lateral-raises-dumbbell',
  'front-raises-dumbbell',
  'barbell-shrugs',
  'russian-twists',
  'jump-rope-running',
  'deadlifts-barbell-dumbbell',
  'squats-shoulder-press-dumbbell',
  'dumbbell-snatch',
  'jump-rope-sprints',
];

type WorkoutData = { [key: string]: WorkoutCategory };

const workoutData: WorkoutData = {
    'Chest & Triceps': {
        exercises: [
            {
                name: 'Flat Bench Press (Barbell)',
                sets: 4,
                reps: '8-12',
                equipment: ['Barbell', 'Bench'],
                image: 'Barbell Deadlifts 2',
                id: 'flat-bench-press-barbell',
            },
            {
                name: 'Dumbbell Flys (Flat Bench)',
                sets: 3,
                reps: 10,
                equipment: ['Dumbbells', 'Bench'],
                image: 'Flat Bench Dumbbell Fly',
                id: 'dumbbell-flys-flat-bench',
            },
            {
                name: 'Close-Grip Bench Press (Zig-Zag Rod)',
                sets: 3,
                reps: '8-12',
                equipment: ['Zig-Zag Rod', 'Bench'],
                image: 'Close Grip Overhand Barbell Bench Press',
                id: 'close-grip-bench-press-zig-zag-rod',
            },
            {
                name: 'Overhead Triceps Extension (Dumbbell)',
                sets: 3,
                reps: 10,
                equipment: ['Dumbbell'],
                image: 'Dumbbell Triceps Extension',
                id: 'overhead-triceps-extension-dumbbell',
            },
            {
                name: 'Dips (Use Two Benches or Stable Surface)',
                sets: 3,
                reps: 12,
                equipment: ['Benches'],
                image: 'Bench Tricep Dips',
                id: 'dips-two-benches',
            },
            {
                name: 'Plank Hold',
                sets: 3,
                duration: '45 sec',
                equipment: [],
                image: 'Plank',
                id: 'plank-hold',
            },
            {
                name: 'HIIT Cardio (Jump Rope or High Knees)',
                duration: '10-12 min',
                equipment: ['Jump Rope'],
                image: 'Jump Rope Skipping',
                id: 'hiit-cardio-jump-rope-high-knees',
            },
        ],
        numberOfExercises: 7,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Zig-Zag Rod', 'Jump Rope'],
    },
    'Back & Biceps': {
        exercises: [
            {
                name: 'Bent-Over Barbell Row',
                sets: 4,
                reps: '8-12',
                equipment: ['Barbell'],
                image: 'Barbell Deadlifts 2',
                id: 'bent-over-barbell-row',
            },
            {
                name: 'Dumbbell Row (Each Side)',
                sets: 3,
                reps: 10,
                equipment: ['Dumbbell'],
                image: 'Single Arm Bent Over Row',
                id: 'dumbbell-row-each-side',
            },
            {
                name: 'Zig-Zag Rod Bicep Curl',
                sets: 4,
                reps: '10-12',
                equipment: ['Zig-Zag Rod'],
                image: 'Ez Barbell Curl',
                id: 'zig-zag-rod-bicep-curl',
            },
            {
                name: 'Dumbbell Hammer Curl',
                sets: 3,
                reps: 10,
                equipment: ['Dumbbell'],
                image: 'Dumbbell Bicep Hammer Curls',
                id: 'dumbbell-hammer-curl',
            },
            {
                name: 'Reverse Crunches',
                sets: 3,
                reps: 15,
                equipment: [],
                image: 'Double Crunches',
                id: 'reverse-crunches',
            },
            {
                name: 'Jump Rope or Fast Jogging',
                duration: '12 min',
                equipment: ['Jump Rope'],
                image: 'Jump Rope Skipping',
                id: 'jump-rope-fast-jogging',
            },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Dumbbell', 'Zig-Zag Rod', 'Jump Rope'],
    },
    'Legs & Abs': {
        exercises: [
            {
                name: 'Barbell Squats',
                sets: 4,
                reps: 10,
                equipment: ['Barbell'],
                image: 'Squat With Barbell',
                id: 'barbell-squats',
            },
            {
                name: 'Dumbbell Lunges',
                sets: 3,
                reps: '10 (each leg)',
                equipment: ['Dumbbells'],
                image: 'Dumbbell Walking Lunges',
                id: 'dumbbell-lunges',
            },
            {
                name: 'Romanian Deadlift (Barbell)',
                sets: 3,
                reps: 8,
                equipment: ['Barbell'],
                image: 'Barbell Deadlifts 1',
                id: 'romanian-deadlift-barbell',
            },
            {
                name: 'Calf Raises (Dumbbell in Hand)',
                sets: 3,
                reps: 15,
                equipment: ['Dumbbells'],
                image: 'Standing Dumbbell Calf Raises',
                id: 'calf-raises-dumbbell',
            },
            {
                name: 'Leg Raises + Bicycle Crunches',
                sets: 3,
                reps: 15,
                equipment: [],
                image: 'Double Crunches',
                id: 'leg-raises-bicycle-crunches',
            },
            {
                name: 'Jump Rope or Sprint Intervals',
                duration: '12 min',
                equipment: ['Jump Rope'],
                image: 'Jump Rope Skipping',
                id: 'jump-rope-sprint-intervals',
            },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Dumbbell', 'Jump Rope'],
    },
    'Shoulders & Traps': {
        exercises: [
            {
                name: 'Seated Dumbbell Shoulder Press',
                sets: 4,
                reps: 10,
                equipment: ['Dumbbells', 'Bench'],
                image: 'Seated Dumbbell Overhead Press',
                id: 'seated-dumbbell-shoulder-press',
            },
            {
                name: 'Lateral Raises (Dumbbell)',
                sets: 3,
                reps: 12,
                equipment: ['Dumbbells'],
                image: 'Lateral Side Shoulder Dumbbell Raises',
                id: 'lateral-raises-dumbbell',
            },
            {
                name: 'Front Raises (Dumbbell)',
                sets: 3,
                reps: 12,
                equipment: ['Dumbbells'],
                image: 'Front Shoulder Single Dumbbell Raises 1',
                id: 'front-raises-dumbbell',
            },
            {
                name: 'Barbell Shrugs (For Traps)',
                sets: 3,
                reps: 15,
                equipment: ['Barbell'],
                image: 'Shoulder Shrugs',
                id: 'barbell-shrugs',
            },
            {
                name: 'Russian Twists (For Core & Abs)',
                sets: 3,
                reps: 20,
                equipment: [],
                image: 'Russian Twists',
                id: 'russian-twists',
            },
            {
                name: 'Jump Rope or Running (Fat Burn)',
                duration: '12 min',
                equipment: ['Jump Rope'],
                image: 'Jump Rope Skipping',
                id: 'jump-rope-running',
            },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Dumbbell', 'Barbell', 'Jump Rope'],
    },
    'Chest, Triceps & Core': {
        exercises: [
            {
                name: 'Flat Bench Dumbbell Press',
                sets: 4,
                reps: 10,
                equipment: ['Dumbbells', 'Bench'],
                image: 'Dumbbell Flat Bench Press',
                id: 'flat-bench-dumbbell-press',
            },
            {
                name: 'Incline Dumbbell Press (Use a Support)',
                sets: 3,
                reps: 10,
                equipment: ['Dumbbells', 'Bench'],
                image: 'Incline Dumbbell Bench Press',
                id: 'incline-dumbbell-press',
            },
            {
                name: 'Close-Grip Bench Press (Zig-Zag Rod)',
                sets: 3,
                reps: 8,
                equipment: ['Zig-Zag Rod', 'Bench'],
                image: 'Close Grip Overhand Barbell Bench Press',
                id: 'close-grip-bench-press-zig-zag-rod',
            },
            {
                name: 'Overhead Dumbbell Triceps Extension',
                sets: 3,
                reps: 10,
                equipment: ['Dumbbell'],
                image: 'Dumbbell Triceps Extension',
                id: 'overhead-dumbbell-triceps-extension',
            },
            {
                name: 'Hanging Leg Raises or Crunches',
                sets: 3,
                reps: 15,
                equipment: [],
                image: 'Double Crunches',
                id: 'hanging-leg-raises-crunches',
            },
            {
                name: 'Jump Rope or Burpees',
                duration: '10 min',
                equipment: ['Jump Rope'],
                image: 'Jump Rope Skipping',
                id: 'jump-rope-burpees',
            },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Dumbbell', 'Zig-Zag Rod', 'Jump Rope'],
    },
    'Full Body & Cardio Focus': {
        exercises: [
            {
                name: 'Deadlifts (Barbell or Dumbbell)',
                sets: 3,
                reps: 8,
                equipment: ['Barbell', 'Dumbbells'],
                image: 'Barbell Deadlifts 1',
                id: 'deadlifts-barbell-dumbbell',
            },
            {
                name: 'Squats + Shoulder Press (Dumbbell)',
                sets: 3,
                reps: 10,
                equipment: ['Dumbbells'],
                image: 'Squat With Barbell',
                id: 'squats-shoulder-press-dumbbell',
            },
            {
                name: 'Dumbbell Snatch (Explosive Power)',
                sets: 3,
                reps: 8,
                equipment: ['Dumbbells'],
                image: 'Exercise',
                id: 'dumbbell-snatch',
            },
            {
                name: 'Jump Rope + Sprints',
                duration: '15 min (Fat Burn)',
                equipment: ['Jump Rope'],
                image: 'Jump Rope Skipping',
                id: 'jump-rope-sprints',
            },
            {
                name: 'Plank (Hold as long as possible)',
                sets: 3,
                equipment: [],
                image: 'Plank',
                id: 'plank-hold',
            },
        ],
        numberOfExercises: 5,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Dumbbell', 'Jump Rope'],
    },
};

const workoutHeadings = Object.keys(workoutData).map(key => ({
  name: key,
  numberOfExercises: workoutData[key].numberOfExercises,
  duration: workoutData[key].duration,
  calorieCount: workoutData[key].calorieCount,
  equipmentRequired: workoutData[key].equipmentRequired,
}));

export { workoutData, workoutHeadings };
