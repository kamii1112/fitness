interface Exercise {
    name: string;
    sets: number;
    reps: number;
}

interface Meal {
    name: string;
    grams: number;
    time: string;
}

interface DailyData {
    date: string;
    exercisesDone: boolean[];
    waterIntakeLiters: number;
    sleepHours: number;
    skipReason?: string;
    remarks?: string;
    exerciseTimings: { from: string; to: string };
    exerciseDurationHours: number;
    meals: Meal[];
    wentToOffice: boolean;
    exercises: Exercise[];
}

const data: DailyData[] = [
    {
        date: "2023-10-01",
        exercisesDone: [true, true, false, true, false, true, true],
        waterIntakeLiters: 2.5,
        sleepHours: 7,
        skipReason: "Felt tired",
        remarks: "Good day overall",
        exerciseTimings: { from: "06:00", to: "07:30" },
        exerciseDurationHours: 1.5,
        meals: [
            { name: "Breakfast", grams: 300, time: "08:00" },
            { name: "Lunch", grams: 500, time: "12:30" },
            { name: "Dinner", grams: 400, time: "19:00" },
        ],
        wentToOffice: true,
        exercises: [
            { name: "Push-ups", sets: 3, reps: 15 },
            { name: "Squats", sets: 3, reps: 20 },
        ],
    },
    {
        date: "2023-10-02",
        exercisesDone: [true, true, true, true, true, true, true],
        waterIntakeLiters: 3,
        sleepHours: 8,
        exerciseTimings: { from: "06:00", to: "07:00" },
        exerciseDurationHours: 1,
        meals: [
            { name: "Breakfast", grams: 350, time: "08:00" },
            { name: "Lunch", grams: 550, time: "12:30" },
            { name: "Dinner", grams: 450, time: "19:00" },
        ],
        wentToOffice: false,
        exercises: [
            { name: "Running", sets: 1, reps: 1 },
            { name: "Plank", sets: 3, reps: 1 },
        ],
    },
    {
        date: "2023-10-03",
        exercisesDone: [false, false, false, false, false, false, false],
        waterIntakeLiters: 1.5,
        sleepHours: 6,
        skipReason: "Busy with work",
        remarks: "Need to manage time better",
        exerciseTimings: { from: "N/A", to: "N/A" },
        exerciseDurationHours: 0,
        meals: [
            { name: "Breakfast", grams: 300, time: "08:00" },
            { name: "Lunch", grams: 500, time: "12:30" },
            { name: "Dinner", grams: 400, time: "19:00" },
        ],
        wentToOffice: true,
        exercises: [],
    },
    {
        date: "2023-10-04",
        exercisesDone: [true, true, true, true, true, true, true],
        waterIntakeLiters: 2.8,
        sleepHours: 7.5,
        remarks: "Felt energetic",
        exerciseTimings: { from: "06:00", to: "07:30" },
        exerciseDurationHours: 1.5,
        meals: [
            { name: "Breakfast", grams: 320, time: "08:00" },
            { name: "Lunch", grams: 520, time: "12:30" },
            { name: "Dinner", grams: 420, time: "19:00" },
        ],
        wentToOffice: true,
        exercises: [
            { name: "Pull-ups", sets: 3, reps: 10 },
            { name: "Lunges", sets: 3, reps: 15 },
        ],
    },
    {
        date: "2023-10-05",
        exercisesDone: [true, false, true, false, true, false, true],
        waterIntakeLiters: 2.2,
        sleepHours: 6.5,
        skipReason: "Had a meeting",
        remarks: "Managed to do some exercises",
        exerciseTimings: { from: "06:30", to: "07:30" },
        exerciseDurationHours: 1,
        meals: [
            { name: "Breakfast", grams: 310, time: "08:00" },
            { name: "Lunch", grams: 510, time: "12:30" },
            { name: "Dinner", grams: 410, time: "19:00" },
        ],
        wentToOffice: true,
        exercises: [
            { name: "Sit-ups", sets: 3, reps: 20 },
            { name: "Bicep Curls", sets: 3, reps: 15 },
        ],
    },
];

export default data;