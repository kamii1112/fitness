// /d:/Projects/FITNESS/React-typescript-tailwind-boilerplate/src/Data/ExerciseData.tsx

import { ExerciseType } from './ExerciseImage';

export interface Exercise {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  caloriesBurned: number;
  videoUrl: string;
  image: ExerciseType;
  description: string;
  steps: {
    stepNumber: number;
    title: string;
    instruction: string;
  }[];
}

export const ExercisesData: Exercise[] = [
  {
    id: 'flat-bench-press-barbell',
    name: 'Flat Bench Press (Barbell)',
    difficulty: 'Medium',
    caloriesBurned: 250, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/flat-bench-press-video',
    image: 'Barbell Deadlifts 2',
    description:
      'The Flat Bench Press (Barbell) is a fundamental compound exercise that targets the chest, shoulders, and triceps. It is widely used for building upper body strength and muscle mass.',
    steps: [
      {
        stepNumber: 1,
        title: 'Setup the Bench',
        instruction:
          'Lie down on a flat bench with your feet firmly on the ground and your back flat against the pad.',
      },
      {
        stepNumber: 2,
        title: 'Grip the Barbell',
        instruction:
          'Grip the barbell slightly wider than shoulder-width apart with your palms facing forward.',
      },
      {
        stepNumber: 3,
        title: 'Unrack the Bar',
        instruction:
          'Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.',
      },
      {
        stepNumber: 4,
        title: 'Lower the Bar',
        instruction:
          'Slowly lower the barbell to your chest, keeping your elbows at about a 45-degree angle.',
      },
      {
        stepNumber: 5,
        title: 'Press Up',
        instruction:
          'Push the barbell back up to the starting position by extending your arms, keeping control of the movement.',
      },
      {
        stepNumber: 6,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions while maintaining proper form.',
      },
      {
        stepNumber: 7,
        title: 'Rack the Bar',
        instruction:
          'Carefully return the barbell to the rack once you complete your set.',
      },
    ],
  },
  {
    id: 'dumbbell-flys-flat-bench',
    name: 'Dumbbell Flys (Flat Bench)',
    difficulty: 'Medium',
    caloriesBurned: 220, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/dumbbell-flys-video',
    image: 'Flat Bench Dumbbell Fly',
    description:
      'Dumbbell Flys (Flat Bench) is an isolation exercise that targets the chest muscles, helping to improve chest definition and flexibility while minimizing triceps engagement.',
    steps: [
      {
        stepNumber: 1,
        title: 'Set Up the Bench',
        instruction:
          'Lie down on a flat bench with a dumbbell in each hand, resting on your thighs.',
      },
      {
        stepNumber: 2,
        title: 'Get Into Position',
        instruction:
          'Use your legs to help lift the dumbbells and position them above your chest with a slight bend in your elbows.',
      },
      {
        stepNumber: 3,
        title: 'Lower the Dumbbells',
        instruction:
          'Slowly lower the dumbbells in a wide arc, keeping a slight bend in your elbows to avoid strain.',
      },
      {
        stepNumber: 4,
        title: 'Stretch the Chest',
        instruction:
          'Lower the weights until you feel a deep stretch in your chest, ensuring control throughout the movement.',
      },
      {
        stepNumber: 5,
        title: 'Raise the Dumbbells',
        instruction:
          'Bring the dumbbells back up in the same arc motion, squeezing your chest muscles at the top.',
      },
      {
        stepNumber: 6,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions while maintaining good form.',
      },
      {
        stepNumber: 7,
        title: 'Finish Safely',
        instruction:
          'Once finished, carefully lower the dumbbells to your thighs before placing them on the ground.',
      },
    ],
  },
  {
    id: 'close-grip-bench-press-zig-zag-rod',
    name: 'Close-Grip Bench Press (Zig-Zag Rod)',
    difficulty: 'Medium',
    caloriesBurned: 240, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/close-grip-bench-press-video',
    image: 'Close Grip Overhand Barbell Bench Press',
    description:
      'The Close-Grip Bench Press (Zig-Zag Rod) is a compound exercise that primarily targets the triceps while also engaging the chest and shoulders. The zig-zag (EZ) bar provides a more ergonomic grip, reducing wrist strain.',
    steps: [
      {
        stepNumber: 1,
        title: 'Set Up the Bench',
        instruction:
          'Lie on a flat bench with your feet planted firmly on the ground and the EZ bar (zig-zag rod) racked above you.',
      },
      {
        stepNumber: 2,
        title: 'Grip the Bar',
        instruction:
          'Grip the bar with your hands placed shoulder-width apart or slightly narrower, ensuring your wrists stay in a neutral position.',
      },
      {
        stepNumber: 3,
        title: 'Unrack the Bar',
        instruction:
          'Carefully lift the bar off the rack and hold it directly above your chest with arms fully extended.',
      },
      {
        stepNumber: 4,
        title: 'Lower the Bar',
        instruction:
          'Slowly lower the barbell toward your lower chest while keeping your elbows close to your body to engage the triceps.',
      },
      {
        stepNumber: 5,
        title: 'Press Up',
        instruction:
          'Push the bar back up to the starting position by extending your arms and squeezing your triceps at the top.',
      },
      {
        stepNumber: 6,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions while maintaining a controlled movement and proper form.',
      },
      {
        stepNumber: 7,
        title: 'Rack the Bar',
        instruction:
          'Once finished, carefully return the bar to the rack before releasing your grip.',
      },
    ],
  },
  {
    id: 'overhead-triceps-extension-dumbbell',
    name: 'Overhead Triceps Extension (Dumbbell)',
    difficulty: 'Medium',
    caloriesBurned: 200, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/overhead-triceps-extension-video',
    image: 'Dumbbell Triceps Extension',
    description:
      'The Overhead Triceps Extension (Dumbbell) is an isolation exercise that targets the triceps. It helps build arm strength and muscle definition while improving flexibility.',
    steps: [
      {
        stepNumber: 1,
        title: 'Choose a Dumbbell',
        instruction:
          'Select a dumbbell with a comfortable weight and hold it with both hands by the handle.',
      },
      {
        stepNumber: 2,
        title: 'Position Yourself',
        instruction:
          'Stand or sit upright with your feet shoulder-width apart and raise the dumbbell overhead with both hands.',
      },
      {
        stepNumber: 3,
        title: 'Grip the Dumbbell',
        instruction:
          'Hold the dumbbell with your palms facing up, keeping your elbows close to your head.',
      },
      {
        stepNumber: 4,
        title: 'Lower the Dumbbell',
        instruction:
          'Slowly lower the dumbbell behind your head by bending your elbows while keeping your upper arms stationary.',
      },
      {
        stepNumber: 5,
        title: 'Stretch and Engage',
        instruction:
          'Lower the weight until you feel a stretch in your triceps, but avoid overextending your elbows.',
      },
      {
        stepNumber: 6,
        title: 'Press Up',
        instruction:
          'Extend your arms and push the dumbbell back to the starting position while squeezing your triceps.',
      },
      {
        stepNumber: 7,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions while maintaining control and proper form.',
      },
      {
        stepNumber: 8,
        title: 'Finish Safely',
        instruction:
          'Carefully bring the dumbbell down in front of you before setting it on the ground.',
      },
    ],
  },
  {
    id: 'dips-two-benches',
    name: 'Dips (Use Two Benches or Stable Surface)',
    difficulty: 'Medium',
    caloriesBurned: 260, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/dips-two-benches-video',
    image: 'Bench Tricep Dips',
    description:
      'Dips using two benches or a stable surface are an effective bodyweight exercise that primarily targets the triceps, chest, and shoulders, improving upper body strength and endurance.',
    steps: [
      {
        stepNumber: 1,
        title: 'Position the Benches',
        instruction:
          'Place two benches parallel to each other, ensuring they are stable and positioned at a comfortable distance apart.',
      },
      {
        stepNumber: 2,
        title: 'Sit on the Edge',
        instruction:
          'Sit on the edge of one bench and place your hands beside your hips with fingers gripping the edge.',
      },
      {
        stepNumber: 3,
        title: 'Extend Your Legs',
        instruction:
          'Place your heels on the opposite bench, keeping your legs extended and hips slightly off the bench.',
      },
      {
        stepNumber: 4,
        title: 'Lower Your Body',
        instruction:
          'Slowly lower yourself by bending your elbows until your upper arms are parallel to the ground.',
      },
      {
        stepNumber: 5,
        title: 'Push Back Up',
        instruction:
          'Press through your palms and extend your arms to return to the starting position, keeping your movements controlled.',
      },
      {
        stepNumber: 6,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions while maintaining proper form and control.',
      },
      {
        stepNumber: 7,
        title: 'Finish Safely',
        instruction:
          'After completing your set, carefully bring your feet back to the ground and stand up slowly.',
      },
    ],
  },
  {
    id: 'plank-hold',
    name: 'Plank Hold',
    difficulty: 'Medium',
    caloriesBurned: 180, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/plank-hold-video',
    image: 'Plank',
    description:
      'The Plank Hold is a core-strengthening exercise that engages the abs, lower back, shoulders, and glutes. It improves stability, posture, and endurance.',
    steps: [
      {
        stepNumber: 1,
        title: 'Get into Position',
        instruction:
          'Lie face down on the floor and position your elbows directly under your shoulders.',
      },
      {
        stepNumber: 2,
        title: 'Lift Your Body',
        instruction:
          'Engage your core and lift your body off the ground, supporting yourself on your forearms and toes.',
      },
      {
        stepNumber: 3,
        title: 'Maintain a Straight Line',
        instruction:
          'Keep your body in a straight line from head to heels, avoiding sagging or arching your back.',
      },
      {
        stepNumber: 4,
        title: 'Engage Your Core',
        instruction:
          'Tighten your abdominal muscles, squeeze your glutes, and hold the position without movement.',
      },
      {
        stepNumber: 5,
        title: 'Breathe Steadily',
        instruction:
          'Take slow, controlled breaths while maintaining your position.',
      },
      {
        stepNumber: 6,
        title: 'Hold for Time',
        instruction:
          'Hold the plank for the desired duration, aiming for 30 seconds to 1 minute or more as you progress.',
      },
      {
        stepNumber: 7,
        title: 'Finish Safely',
        instruction:
          'Gently lower your knees to the ground and relax to complete the exercise.',
      },
    ],
  },
  {
    id: 'hiit-cardio-jump-rope-high-knees',
    name: 'HIIT Cardio (Jump Rope or High Knees)',
    difficulty: 'Hard',
    caloriesBurned: 400, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/hiit-cardio-video',
    image: 'Jump Rope Skipping',

    description:
      'HIIT Cardio using Jump Rope or High Knees is an intense workout that boosts cardiovascular endurance, burns calories, and improves agility. It involves alternating between short bursts of maximum effort and brief recovery periods.',
    steps: [
      {
        stepNumber: 1,
        title: 'Warm-Up',
        instruction:
          'Start with light jogging or dynamic stretches for 2-3 minutes to prepare your muscles and joints.',
      },
      {
        stepNumber: 2,
        title: 'Choose Your Exercise',
        instruction:
          'Decide between using a jump rope or performing high knees based on your preference and equipment availability.',
      },
      {
        stepNumber: 3,
        title: 'Start the First Interval',
        instruction:
          'Perform jump rope skips or high knees at maximum intensity for 30-45 seconds.',
      },
      {
        stepNumber: 4,
        title: 'Rest Period',
        instruction:
          'Rest or perform light movements (such as walking in place) for 15-30 seconds to recover.',
      },
      {
        stepNumber: 5,
        title: 'Repeat the Cycle',
        instruction:
          'Repeat the high-intensity interval followed by rest for 10-20 rounds, depending on your fitness level.',
      },
      {
        stepNumber: 6,
        title: 'Maintain Proper Form',
        instruction:
          'For jump rope, keep your elbows close to your body and use wrist motion to spin the rope. For high knees, drive your knees up to waist level and pump your arms.',
      },
      {
        stepNumber: 7,
        title: 'Cool Down',
        instruction:
          'After completing all rounds, perform light jogging or stretching for 2-3 minutes to bring your heart rate down.',
      },
    ],
  },
  {
    id: 'bent-over-barbell-row',
    name: 'Bent-Over Barbell Row',
    difficulty: 'Medium',
    caloriesBurned: 280, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/bent-over-barbell-row-video',
    image: 'Barbell Deadlifts 2',

    description:
      'The Bent-Over Barbell Row is a compound exercise that targets the upper and lower back, rear delts, and biceps. It helps improve posture, grip strength, and overall pulling power.',
    steps: [
      {
        stepNumber: 1,
        title: 'Set Up the Barbell',
        instruction:
          'Load the barbell with an appropriate weight and stand with your feet shoulder-width apart.',
      },
      {
        stepNumber: 2,
        title: 'Grip the Bar',
        instruction:
          'Bend at the hips and knees slightly, then grab the barbell with an overhand grip, hands slightly wider than shoulder-width apart.',
      },
      {
        stepNumber: 3,
        title: 'Get Into Position',
        instruction:
          'Hinge forward at the hips, keeping your back straight and chest up, with the bar hanging at knee level.',
      },
      {
        stepNumber: 4,
        title: 'Pull the Barbell',
        instruction:
          'Engage your back and pull the barbell towards your lower ribcage, squeezing your shoulder blades together.',
      },
      {
        stepNumber: 5,
        title: 'Lower the Barbell',
        instruction:
          'Slowly lower the bar back to the starting position while maintaining control and keeping your back straight.',
      },
      {
        stepNumber: 6,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions while maintaining proper form and control.',
      },
      {
        stepNumber: 7,
        title: 'Finish Safely',
        instruction:
          'After completing your set, carefully lower the barbell to the ground or a rack before standing up straight.',
      },
    ],
  },
  {
    id: 'dumbbell-row-each-side',
    name: 'Dumbbell Row (Each Side)',
    difficulty: 'Medium',
    caloriesBurned: 230, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/dumbbell-row-video',
    image: 'Single Arm Bent Over Row',

    description:
      'The Dumbbell Row is a unilateral exercise that targets the upper back, lats, and biceps while improving core stability and posture.',
    steps: [
      {
        stepNumber: 1,
        title: 'Set Up',
        instruction:
          'Place one knee and hand on a bench for support while holding a dumbbell in the opposite hand.',
      },
      {
        stepNumber: 2,
        title: 'Grip the Dumbbell',
        instruction:
          'Keep your back straight and let the dumbbell hang naturally with your arm fully extended.',
      },
      {
        stepNumber: 3,
        title: 'Row the Dumbbell',
        instruction:
          'Pull the dumbbell towards your torso, keeping your elbow close to your body and squeezing your shoulder blade.',
      },
      {
        stepNumber: 4,
        title: 'Lower the Weight',
        instruction:
          'Slowly lower the dumbbell back to the starting position while maintaining control.',
      },
      {
        stepNumber: 5,
        title: 'Repeat',
        instruction:
          'Perform the desired repetitions, then switch sides and repeat the movement.',
      },
    ],
  },
  {
    id: 'zig-zag-rod-bicep-curl',
    name: 'Zig-Zag Rod Bicep Curl',
    difficulty: 'Medium',
    caloriesBurned: 200, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/zig-zag-rod-bicep-curl-video',
    image: 'Ez Barbell Curl',
    description:
      'The Zig-Zag Rod Bicep Curl (EZ Bar Curl) is a biceps-focused exercise that reduces wrist strain while effectively building arm strength and size.',
    steps: [
      {
        stepNumber: 1,
        title: 'Grip the EZ Bar',
        instruction:
          'Stand upright and hold the EZ bar with a shoulder-width underhand grip.',
      },
      {
        stepNumber: 2,
        title: 'Keep Proper Posture',
        instruction:
          'Keep your elbows close to your torso and maintain a slight bend in your knees.',
      },
      {
        stepNumber: 3,
        title: 'Curl the Bar',
        instruction:
          'Lift the bar towards your shoulders by contracting your biceps, keeping your wrists stable.',
      },
      {
        stepNumber: 4,
        title: 'Squeeze at the Top',
        instruction:
          'Hold for a second at the top of the movement, squeezing your biceps for maximum engagement.',
      },
      {
        stepNumber: 5,
        title: 'Lower the Bar',
        instruction:
          'Slowly lower the bar back to the starting position with control.',
      },
      {
        stepNumber: 6,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions without using momentum.',
      },
    ],
  },
  {
    id: 'dumbbell-hammer-curl',
    name: 'Dumbbell Hammer Curl',
    difficulty: 'Medium',
    caloriesBurned: 210, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/dumbbell-hammer-curl-video',
    image: 'Dumbbell Bicep Hammer Curls',

    description:
      'The Dumbbell Hammer Curl is a biceps and forearm exercise that emphasizes the brachialis muscle, promoting overall arm thickness.',
    steps: [
      {
        stepNumber: 1,
        title: 'Hold the Dumbbells',
        instruction:
          'Stand with a dumbbell in each hand, palms facing your torso in a neutral grip.',
      },
      {
        stepNumber: 2,
        title: 'Keep Your Posture',
        instruction:
          'Keep your elbows close to your body and your back straight throughout the movement.',
      },
      {
        stepNumber: 3,
        title: 'Curl the Dumbbells',
        instruction:
          'Lift both dumbbells towards your shoulders while maintaining a neutral grip.',
      },
      {
        stepNumber: 4,
        title: 'Pause and Squeeze',
        instruction: 'Hold at the top for a second, squeezing your biceps.',
      },
      {
        stepNumber: 5,
        title: 'Lower the Dumbbells',
        instruction:
          'Slowly lower the dumbbells back to the starting position with control.',
      },
      {
        stepNumber: 6,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions without swinging the weights.',
      },
    ],
  },
  {
    id: 'reverse-crunches',
    name: 'Reverse Crunches',
    difficulty: 'Medium',
    caloriesBurned: 180, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/reverse-crunches-video',
    image: 'Double Crunches',
    description:
      'Reverse Crunches are a core exercise that targets the lower abs, helping to strengthen and tone the abdominal muscles while reducing strain on the neck and back.',
    steps: [
      {
        stepNumber: 1,
        title: 'Lie on Your Back',
        instruction:
          'Lie flat on the floor with your arms at your sides and knees bent.',
      },
      {
        stepNumber: 2,
        title: 'Lift Your Legs',
        instruction:
          'Raise your legs so your thighs are perpendicular to the floor and knees are bent at 90 degrees.',
      },
      {
        stepNumber: 3,
        title: 'Curl Your Hips',
        instruction:
          'Engage your core and lift your hips off the ground, bringing your knees toward your chest.',
      },
      {
        stepNumber: 4,
        title: 'Lower Back Down',
        instruction:
          'Slowly lower your hips back to the starting position while maintaining control.',
      },
      {
        stepNumber: 5,
        title: 'Repeat',
        instruction:
          'Perform the desired number of repetitions, focusing on controlled movements.',
      },
    ],
  },
  {
    id: 'jump-rope-fast-jogging',
    name: 'Jump Rope or Fast Jogging',
    difficulty: 'Hard',
    caloriesBurned: 350, // Approximate value per 30 mins
    videoUrl: 'https://www.example.com/jump-rope-fast-jogging-video',
    image: 'Jump Rope Skipping',

    description:
      'Jump Rope and Fast Jogging are high-intensity cardiovascular exercises that improve endurance, agility, and calorie burn while engaging multiple muscle groups.',
    steps: [
      {
        stepNumber: 1,
        title: 'Choose Your Exercise',
        instruction:
          'Decide between jump rope or fast jogging based on your fitness level and preference.',
      },
      {
        stepNumber: 2,
        title: 'Warm-Up',
        instruction:
          'Start with light jogging or dynamic stretches for 2-3 minutes to prepare your muscles.',
      },
      {
        stepNumber: 3,
        title: 'Start the Movement',
        instruction:
          'For jump rope, maintain a steady rhythm and use wrist motion. For jogging, maintain a fast pace with short, controlled strides.',
      },
      {
        stepNumber: 4,
        title: 'Maintain a Consistent Pace',
        instruction:
          'Keep your core engaged and stay light on your feet to minimize impact.',
      },
      {
        stepNumber: 5,
        title: 'Cool Down',
        instruction:
          'After completing your session, walk for 2-3 minutes and stretch to prevent stiffness.',
      },
    ],
  },
  {
    id: 'barbell-squats',
    name: 'Barbell Squats',
    difficulty: 'Hard',
    caloriesBurned: 350,
    videoUrl: 'https://www.example.com/barbell-squats-video',
    image: 'Squat With Barbell',

    description:
      'Barbell Squats are a fundamental compound movement that targets the quads, hamstrings, glutes, and core, improving lower body strength and power.',
    steps: [
      {
        stepNumber: 1,
        title: 'Set Up the Bar',
        instruction:
          'Place the barbell on a squat rack at shoulder height and load it with an appropriate weight.',
      },
      {
        stepNumber: 2,
        title: 'Position Yourself',
        instruction:
          'Step under the bar, positioning it across your upper back, and grip it slightly wider than shoulder-width.',
      },
      {
        stepNumber: 3,
        title: 'Unrack the Bar',
        instruction:
          'Lift the bar off the rack and take a step back while keeping your feet shoulder-width apart.',
      },
      {
        stepNumber: 4,
        title: 'Lower into the Squat',
        instruction:
          'Bend your knees and hips to lower yourself until your thighs are parallel to the ground, keeping your chest up.',
      },
      {
        stepNumber: 5,
        title: 'Drive Back Up',
        instruction:
          'Push through your heels to return to the starting position while keeping your core engaged.',
      },
    ],
  },
  {
    id: 'dumbbell-lunges',
    name: 'Dumbbell Lunges',
    difficulty: 'Medium',
    caloriesBurned: 300,
    videoUrl: 'https://www.example.com/dumbbell-lunges-video',
    image: 'Dumbbell Walking Lunges',

    description:
      'Dumbbell Lunges strengthen the quadriceps, hamstrings, and glutes while improving balance and coordination.',
    steps: [
      {
        stepNumber: 1,
        title: 'Hold the Dumbbells',
        instruction:
          'Stand upright with a dumbbell in each hand at your sides.',
      },
      {
        stepNumber: 2,
        title: 'Step Forward',
        instruction:
          'Take a big step forward with one leg, lowering your back knee towards the ground.',
      },
      {
        stepNumber: 3,
        title: 'Push Back Up',
        instruction:
          'Press through your front foot to return to the starting position and repeat with the other leg.',
      },
    ],
  },
  {
    id: 'romanian-deadlift-barbell',
    name: 'Romanian Deadlift (Barbell)',
    difficulty: 'Medium',
    caloriesBurned: 280,
    videoUrl: 'https://www.example.com/romanian-deadlift-video',
    image: 'Barbell Deadlifts 1',

    description:
      'Romanian Deadlifts target the hamstrings, glutes, and lower back while improving posterior chain strength.',
    steps: [
      {
        stepNumber: 1,
        title: 'Grip the Barbell',
        instruction:
          'Stand with feet hip-width apart and hold the barbell with an overhand grip at thigh level.',
      },
      {
        stepNumber: 2,
        title: 'Hinge at the Hips',
        instruction:
          'Lower the barbell by pushing your hips back, keeping a slight bend in your knees.',
      },
      {
        stepNumber: 3,
        title: 'Stretch and Lift',
        instruction:
          'Lower until you feel a stretch in your hamstrings, then drive your hips forward to return to standing.',
      },
    ],
  },
  {
    id: 'calf-raises-dumbbell',
    name: 'Calf Raises (Dumbbell in Hand)',
    difficulty: 'Easy',
    caloriesBurned: 180,
    videoUrl: 'https://www.example.com/calf-raises-video',
    image: 'Standing Dumbbell Calf Raises',

    description:
      'Calf Raises help strengthen and define the calf muscles, improving lower leg endurance and stability.',
    steps: [
      {
        stepNumber: 1,
        title: 'Hold the Dumbbell',
        instruction:
          'Stand upright with a dumbbell in one or both hands at your sides.',
      },
      {
        stepNumber: 2,
        title: 'Raise Your Heels',
        instruction:
          'Lift your heels off the ground, rising onto the balls of your feet.',
      },
      {
        stepNumber: 3,
        title: 'Lower Back Down',
        instruction: 'Slowly lower your heels back to the starting position.',
      },
    ],
  },
  {
    id: 'leg-raises-bicycle-crunches',
    name: 'Leg Raises + Bicycle Crunches',
    difficulty: 'Medium',
    caloriesBurned: 220,
    videoUrl: 'https://www.example.com/leg-raises-bicycle-crunches-video',
    image: 'Double Crunches',

    description:
      'A combination of Leg Raises and Bicycle Crunches strengthens the lower abs and obliques, enhancing core stability.',
    steps: [
      {
        stepNumber: 1,
        title: 'Lie Down',
        instruction:
          'Lie flat on your back with your hands under your lower back for support.',
      },
      {
        stepNumber: 2,
        title: 'Perform Leg Raises',
        instruction:
          'Lift both legs off the ground and slowly lower them without touching the floor.',
      },
      {
        stepNumber: 3,
        title: 'Transition to Bicycle Crunches',
        instruction:
          'Immediately begin alternating knee-to-elbow crunches in a cycling motion.',
      },
    ],
  },
  {
    id: 'jump-rope-sprint-intervals',
    name: 'Jump Rope or Sprint Intervals',
    difficulty: 'Hard',
    caloriesBurned: 400,
    videoUrl: 'https://www.example.com/jump-rope-sprint-intervals-video',
    image: 'Jump Rope Skipping',

    description:
      'Jump Rope and Sprint Intervals are high-intensity cardio exercises that improve endurance, burn calories, and enhance agility.',
    steps: [
      {
        stepNumber: 1,
        title: 'Warm-Up',
        instruction: 'Start with light jogging or stretching for 2-3 minutes.',
      },
      {
        stepNumber: 2,
        title: 'Choose Your Exercise',
        instruction:
          'Decide between jump rope or sprinting based on your preference.',
      },
      {
        stepNumber: 3,
        title: 'Perform Intervals',
        instruction:
          'Sprint or jump rope at maximum intensity for 30-45 seconds, then rest for 15-30 seconds.',
      },
      {
        stepNumber: 4,
        title: 'Repeat the Cycle',
        instruction:
          'Continue alternating high-intensity effort with rest for 10-20 rounds.',
      },
    ],
  },
  {
    id: 'seated-dumbbell-shoulder-press',
    name: 'Seated Dumbbell Shoulder Press',
    difficulty: 'Medium',
    caloriesBurned: 250,
    videoUrl: 'https://www.example.com/seated-dumbbell-shoulder-press-video',
    image: 'Seated Dumbbell Overhead Press',

    description:
      'The Seated Dumbbell Shoulder Press strengthens the shoulders, triceps, and upper chest, improving overall upper-body strength.',
    steps: [
      {
        stepNumber: 1,
        title: 'Sit and Grip',
        instruction:
          'Sit on a bench with back support, holding dumbbells at shoulder height with palms facing forward.',
      },
      {
        stepNumber: 2,
        title: 'Press Up',
        instruction:
          'Extend your arms upward until the dumbbells are fully overhead without locking your elbows.',
      },
      {
        stepNumber: 3,
        title: 'Lower with Control',
        instruction:
          'Slowly lower the dumbbells back to shoulder height and repeat.',
      },
    ],
  },
  {
    id: 'lateral-raises-dumbbell',
    name: 'Lateral Raises (Dumbbell)',
    difficulty: 'Medium',
    caloriesBurned: 200,
    videoUrl: 'https://www.example.com/lateral-raises-video',
    image: 'Lateral Side Shoulder Dumbbell Raises',
    description:
      'Lateral Raises are an isolation exercise that targets the shoulders, enhancing width and muscle definition.',
    steps: [
      {
        stepNumber: 1,
        title: 'Stand Upright',
        instruction:
          'Hold a dumbbell in each hand with arms relaxed at your sides.',
      },
      {
        stepNumber: 2,
        title: 'Raise to Shoulder Level',
        instruction:
          'Lift both arms outward until they are parallel to the floor, keeping a slight bend in the elbows.',
      },
      {
        stepNumber: 3,
        title: 'Lower Slowly',
        instruction:
          'Lower the dumbbells back to the starting position with control.',
      },
    ],
  },
  {
    id: 'front-raises-dumbbell',
    name: 'Front Raises (Dumbbell)',
    difficulty: 'Medium',
    caloriesBurned: 190,
    videoUrl: 'https://www.example.com/front-raises-video',
    image: 'Front Shoulder Single Dumbbell Raises 1',
    description:
      'Front Raises work the anterior deltoids, improving shoulder strength and definition.',
    steps: [
      {
        stepNumber: 1,
        title: 'Hold the Dumbbells',
        instruction:
          'Stand upright, holding dumbbells in front of your thighs with palms facing down.',
      },
      {
        stepNumber: 2,
        title: 'Raise to Shoulder Height',
        instruction:
          'Lift the dumbbells straight in front of you until they reach shoulder level.',
      },
      {
        stepNumber: 3,
        title: 'Lower with Control',
        instruction: 'Slowly return the dumbbells to the starting position.',
      },
    ],
  },
  {
    id: 'barbell-shrugs',
    name: 'Barbell Shrugs (For Traps)',
    difficulty: 'Medium',
    caloriesBurned: 220,
    videoUrl: 'https://www.example.com/barbell-shrugs-video',
    image: 'Shoulder Shrugs',

    description:
      'Barbell Shrugs target the trapezius muscles, helping build neck and upper back strength.',
    steps: [
      {
        stepNumber: 1,
        title: 'Grip the Barbell',
        instruction:
          'Stand with feet shoulder-width apart, holding a barbell with an overhand grip at thigh level.',
      },
      {
        stepNumber: 2,
        title: 'Shrug Your Shoulders',
        instruction:
          'Lift your shoulders as high as possible while keeping your arms straight.',
      },
      {
        stepNumber: 3,
        title: 'Hold and Lower',
        instruction:
          'Hold at the top for a second, then slowly lower the bar back to the starting position.',
      },
    ],
  },
  {
    id: 'russian-twists',
    name: 'Russian Twists (For Core & Abs)',
    difficulty: 'Medium',
    caloriesBurned: 210,
    videoUrl: 'https://www.example.com/russian-twists-video',
    image: 'Russian Twists',

    description:
      'Russian Twists strengthen the obliques and core, enhancing rotational strength and stability.',
    steps: [
      {
        stepNumber: 1,
        title: 'Sit and Lean Back',
        instruction:
          'Sit on the floor, lean slightly back, and lift your feet off the ground.',
      },
      {
        stepNumber: 2,
        title: 'Twist Side to Side',
        instruction:
          'Hold a weight or clasp your hands together, rotating your torso from side to side.',
      },
      {
        stepNumber: 3,
        title: 'Maintain Control',
        instruction:
          'Engage your core to maintain balance and avoid using momentum.',
      },
    ],
  },
  {
    id: 'jump-rope-running',
    name: 'Jump Rope or Running (Fat Burn)',
    difficulty: 'Hard',
    caloriesBurned: 400,
    videoUrl: 'https://www.example.com/jump-rope-running-video',
    image: 'Jump Rope Skipping',

    description:
      'Jump Rope and Running are high-intensity cardiovascular exercises that enhance endurance, burn calories, and improve overall fitness.',
    steps: [
      {
        stepNumber: 1,
        title: 'Warm-Up',
        instruction:
          'Begin with light jogging or dynamic stretching for 2-3 minutes.',
      },
      {
        stepNumber: 2,
        title: 'Choose Your Exercise',
        instruction:
          'Select either jump rope or running based on preference and availability.',
      },
      {
        stepNumber: 3,
        title: 'Perform High-Intensity Intervals',
        instruction:
          'Alternate between sprinting or fast jump rope for 30-45 seconds and light jogging for 15-30 seconds.',
      },
      {
        stepNumber: 4,
        title: 'Cool Down',
        instruction:
          'After completing your session, walk and stretch for 2-3 minutes.',
      },
    ],
  },
  {
    id: 'deadlifts-barbell-dumbbell',
    name: 'Deadlifts (Barbell or Dumbbell)',
    difficulty: 'Hard',
    caloriesBurned: 350,
    videoUrl: 'https://www.example.com/deadlifts-video',
    image: 'Barbell Deadlifts 1',

    description:
      'Deadlifts are a full-body compound movement that targets the posterior chain, including the hamstrings, glutes, back, and core.',
    steps: [
      {
        stepNumber: 1,
        title: 'Set Up',
        instruction:
          'Stand with feet hip-width apart, gripping the barbell or dumbbells in front of your thighs.',
      },
      {
        stepNumber: 2,
        title: 'Hinge at the Hips',
        instruction:
          'Lower the weight while keeping your back straight and pushing your hips backward.',
      },
      {
        stepNumber: 3,
        title: 'Lift the Weight',
        instruction:
          'Drive through your heels and extend your hips to return to a standing position.',
      },
    ],
  },
  {
    id: 'squats-shoulder-press-dumbbell',
    name: 'Squats + Shoulder Press (Dumbbell)',
    difficulty: 'Medium',
    caloriesBurned: 300,
    videoUrl: 'https://www.example.com/squats-shoulder-press-video',
    image: 'Squat With Barbell',
    description:
      'This full-body exercise combines squats with an overhead press, engaging the legs, core, and shoulders.',
    steps: [
      {
        stepNumber: 1,
        title: 'Hold the Dumbbells',
        instruction:
          'Stand with dumbbells at shoulder height and feet shoulder-width apart.',
      },
      {
        stepNumber: 2,
        title: 'Perform a Squat',
        instruction:
          'Lower into a squat while keeping your chest upright and core engaged.',
      },
      {
        stepNumber: 3,
        title: 'Press Overhead',
        instruction:
          'As you stand up, press the dumbbells overhead in a controlled motion.',
      },
    ],
  },
  {
    id: 'dumbbell-snatch',
    name: 'Dumbbell Snatch (Explosive Power)',
    difficulty: 'Hard',
    caloriesBurned: 320,
    videoUrl: 'https://www.example.com/dumbbell-snatch-video',
    image: 'Exercise',

    description:
      'The Dumbbell Snatch is an explosive movement that builds power, speed, and coordination while engaging the entire body.',
    steps: [
      {
        stepNumber: 1,
        title: 'Start Position',
        instruction:
          'Stand with feet shoulder-width apart, holding a dumbbell in one hand between your legs.',
      },
      {
        stepNumber: 2,
        title: 'Explosive Lift',
        instruction:
          'Drive through your legs and pull the dumbbell up in one motion.',
      },
      {
        stepNumber: 3,
        title: 'Lockout Overhead',
        instruction:
          'Extend your arm fully overhead and stabilize before lowering the dumbbell.',
      },
    ],
  },
  {
    id: 'jump-rope-sprints',
    name: 'Jump Rope + Sprints',
    difficulty: 'Hard',
    caloriesBurned: 400,
    videoUrl: 'https://www.example.com/jump-rope-sprints-video',
    image: 'Jump Rope Skipping',

    description:
      'A combination of jump rope and sprint intervals for high-intensity cardio and endurance training.',
    steps: [
      {
        stepNumber: 1,
        title: 'Warm-Up',
        instruction:
          'Start with light jogging and dynamic stretches for 2-3 minutes.',
      },
      {
        stepNumber: 2,
        title: 'Jump Rope Round',
        instruction: 'Jump rope at a fast pace for 30-45 seconds.',
      },
      {
        stepNumber: 3,
        title: 'Sprint Interval',
        instruction:
          'Sprint at full speed for 30 seconds, then walk for recovery.',
      },
      {
        stepNumber: 4,
        title: 'Repeat Cycle',
        instruction: 'Perform 8-12 rounds for an effective cardio workout.',
      },
    ],
  },
  {
    id: 'plank-hold',
    name: 'Plank (Hold as long as possible)',
    difficulty: 'Medium',
    caloriesBurned: 180,
    videoUrl: 'https://www.example.com/plank-hold-video',
    image: 'Plank',

    description:
      'The Plank is a core stability exercise that strengthens the abs, lower back, and shoulders.',
    steps: [
      {
        stepNumber: 1,
        title: 'Get into Position',
        instruction:
          'Lie face down and prop yourself up on your forearms and toes.',
      },
      {
        stepNumber: 2,
        title: 'Keep Your Core Tight',
        instruction:
          'Engage your abs and maintain a straight line from head to heels.',
      },
      {
        stepNumber: 3,
        title: 'Hold as Long as Possible',
        instruction:
          'Maintain the position without dropping your hips or arching your back.',
      },
    ],
  },
];
