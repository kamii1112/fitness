type Exercise = {
    name: string;
    sets?: number;
    reps?: string | number;
    duration?: string;
    equipment: string[];
};

type WorkoutCategory = {
    exercises: Exercise[];
    numberOfExercises: number;
    duration: string;
    calorieCount: string;
    equipmentRequired: string[];
};

type WorkoutData = { [key: string]: WorkoutCategory };

const workoutData: WorkoutData = {
    'Chest & Triceps': {
        exercises: [
            { name: 'Flat Bench Press (Barbell)', sets: 4, reps: '8-12', equipment: ['Barbell', 'Bench'] },
            { name: 'Dumbbell Flys (Flat Bench)', sets: 3, reps: 10, equipment: ['Dumbbells', 'Bench'] },
            { name: 'Close-Grip Bench Press (Zig-Zag Rod)', sets: 3, reps: '8-12', equipment: ['Zig-Zag Rod', 'Bench'] },
            { name: 'Overhead Triceps Extension (Dumbbell)', sets: 3, reps: 10, equipment: ['Dumbbell'] },
            { name: 'Dips (Use Two Benches or Stable Surface)', sets: 3, reps: 12, equipment: ['Benches'] },
            { name: 'Plank Hold', sets: 3, duration: '45 sec', equipment: [] },
            { name: 'HIIT Cardio (Jump Rope or High Knees)', duration: '10-12 min', equipment: ['Jump Rope'] },
        ],
        numberOfExercises: 7,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Bench', 'Dumbbells', 'Zig-Zag Rod', 'Benches', 'Jump Rope'],
    },
    'Back & Biceps': {
        exercises: [
            { name: 'Bent-Over Barbell Row', sets: 4, reps: '8-12', equipment: ['Barbell'] },
            { name: 'Dumbbell Row (Each Side)', sets: 3, reps: 10, equipment: ['Dumbbell'] },
            { name: 'Zig-Zag Rod Bicep Curl', sets: 4, reps: '10-12', equipment: ['Zig-Zag Rod'] },
            { name: 'Dumbbell Hammer Curl', sets: 3, reps: 10, equipment: ['Dumbbell'] },
            { name: 'Reverse Crunches', sets: 3, reps: 15, equipment: [] },
            { name: 'Jump Rope or Fast Jogging', duration: '12 min', equipment: ['Jump Rope'] },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Dumbbell', 'Zig-Zag Rod', 'Jump Rope'],
    },
    'Legs & Abs': {
        exercises: [
            { name: 'Barbell Squats', sets: 4, reps: 10, equipment: ['Barbell'] },
            { name: 'Dumbbell Lunges', sets: 3, reps: '10 (each leg)', equipment: ['Dumbbells'] },
            { name: 'Romanian Deadlift (Barbell)', sets: 3, reps: 8, equipment: ['Barbell'] },
            { name: 'Calf Raises (Dumbbell in Hand)', sets: 3, reps: 15, equipment: ['Dumbbells'] },
            { name: 'Leg Raises + Bicycle Crunches', sets: 3, reps: 15, equipment: [] },
            { name: 'Jump Rope or Sprint Intervals', duration: '12 min', equipment: ['Jump Rope'] },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Dumbbells', 'Jump Rope'],
    },
    'Shoulders & Traps': {
        exercises: [
            { name: 'Seated Dumbbell Shoulder Press', sets: 4, reps: 10, equipment: ['Dumbbells', 'Bench'] },
            { name: 'Lateral Raises (Dumbbell)', sets: 3, reps: 12, equipment: ['Dumbbells'] },
            { name: 'Front Raises (Dumbbell)', sets: 3, reps: 12, equipment: ['Dumbbells'] },
            { name: 'Barbell Shrugs (For Traps)', sets: 3, reps: 15, equipment: ['Barbell'] },
            { name: 'Russian Twists (For Core & Abs)', sets: 3, reps: 20, equipment: [] },
            { name: 'Jump Rope or Running (Fat Burn)', duration: '12 min', equipment: ['Jump Rope'] },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Dumbbells', 'Bench', 'Barbell', 'Jump Rope'],
    },
    'Chest, Triceps & Core': {
        exercises: [
            { name: 'Flat Bench Dumbbell Press', sets: 4, reps: 10, equipment: ['Dumbbells', 'Bench'] },
            { name: 'Incline Dumbbell Press (Use a Support)', sets: 3, reps: 10, equipment: ['Dumbbells', 'Bench'] },
            { name: 'Close-Grip Bench Press (Zig-Zag Rod)', sets: 3, reps: 8, equipment: ['Zig-Zag Rod', 'Bench'] },
            { name: 'Overhead Dumbbell Triceps Extension', sets: 3, reps: 10, equipment: ['Dumbbell'] },
            { name: 'Hanging Leg Raises or Crunches', sets: 3, reps: 15, equipment: [] },
            { name: 'Jump Rope or Burpees', duration: '10 min', equipment: ['Jump Rope'] },
        ],
        numberOfExercises: 6,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Dumbbells', 'Bench', 'Zig-Zag Rod', 'Jump Rope'],
    },
    'Full Body & Cardio Focus': {
        exercises: [
            { name: 'Deadlifts (Barbell or Dumbbell)', sets: 3, reps: 8, equipment: ['Barbell', 'Dumbbells'] },
            { name: 'Squats + Shoulder Press (Dumbbell)', sets: 3, reps: 10, equipment: ['Dumbbells'] },
            { name: 'Dumbbell Snatch (Explosive Power)', sets: 3, reps: 8, equipment: ['Dumbbells'] },
            { name: 'Jump Rope + Sprints', duration: '15 min (Fat Burn)', equipment: ['Jump Rope'] },
            { name: 'Plank (Hold as long as possible)', sets: 3, equipment: [] },
        ],
        numberOfExercises: 5,
        duration: '45',
        calorieCount: '300',
        equipmentRequired: ['Barbell', 'Dumbbells', 'Jump Rope'],
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
