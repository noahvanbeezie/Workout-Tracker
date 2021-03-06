CREATE TABLE workout_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (60),
    password VARCHAR (240),
    age INT,
    weight INT,
    feet INT,
    inches INT
);

CREATE TABLE workouts (
    workoutusername VARCHAR(240),
    day1workout1 VARCHAR (120),
    day1workout1reps INT,
    day1workout1sets INT,
    day1workout2 VARCHAR (120),
    day1workout2reps INT,
    day1workout2sets INT,
    day1workout3 VARCHAR (120),
    day1workout3reps INT,
    day1workout3sets INT,
    day1workout4 VARCHAR (120),
    day1workout4reps INT,
    day1workout4sets INT,
    day1workout5 VARCHAR (120),
    day1workout5reps INT,
    day1workout5sets INT,
    day2workout1 VARCHAR (120),
    day2workout1reps INT,
    day2workout1sets INT,
    day2workout2 VARCHAR (120),
    day2workout2reps INT,
    day2workout2sets INT,
    day2workout3 VARCHAR (120),
    day2workout3reps INT,
    day2workout3sets INT,
    day2workout4 VARCHAR (120),
    day2workout4reps INT,
    day2workout4sets INT,
    day2workout5 VARCHAR (120),
    day2workout5reps INT,
    day2workout5sets INT,
    day3workout1 VARCHAR (120),
    day3workout1reps INT,
    day3workout1sets INT,
    day3workout2 VARCHAR (120),
    day3workout2reps INT,
    day3workout2sets INT,
    day3workout3 VARCHAR (120),
    day3workout3reps INT,
    day3workout3sets INT,
    day3workout4 VARCHAR (120),
    day3workout4reps INT,
    day3workout4sets INT,
    day3workout5 VARCHAR (120),
    day3workout5reps INT,
    day3workout5sets INT,
    day4workout1 VARCHAR (120),
    day4workout1reps INT,
    day4workout1sets INT,
    day4workout2 VARCHAR (120),
    day4workout2reps INT,
    day4workout2sets INT,
    day4workout3 VARCHAR (120),
    day4workout3reps INT,
    day4workout3sets INT,
    day4workout4 VARCHAR (120),
    day4workout4reps INT,
    day4workout4sets INT,
    day4workout5 VARCHAR (120),
    day4workout5reps INT,
    day4workout5sets INT,
    day5workout1 VARCHAR (120),
    day5workout1reps INT,
    day5workout1sets INT,
    day5workout2 VARCHAR (120),
    day5workout2reps INT,
    day5workout2sets INT,
    day5workout3 VARCHAR (120),
    day5workout3reps INT,
    day5workout3sets INT,
    day5workout4 VARCHAR (120),
    day5workout4reps INT,
    day5workout4sets INT,
    day5workout5 VARCHAR (120),
    day5workout5reps INT,
    day5workout5sets INT
);
