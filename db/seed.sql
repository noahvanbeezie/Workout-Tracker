CREATE TABLE workout_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (60),
    password VARCHAR (240),
    age INT,
    weight INT,
    feet INT,
    inches INT
);

CREATE TABLE dayoneworkout (
    workoutusername VARCHAR(240),
    workout1 VARCHAR (120),
    workout1reps INT,
    workout1sets INT,
    workout2 VARCHAR (120),
    workout2reps INT,
    workout2sets INT,
    workout3 VARCHAR (120),
    workout3reps INT,
    workout3sets INT,
    workout4 VARCHAR (120),
    workout4reps INT,
    workout4sets INT,
    workout5 VARCHAR (120),
    workout5reps INT,
    workout5sets INT
);

CREATE TABLE daytwoworkout (
    workoutusername VARCHAR(240),
    workout1 VARCHAR (120),
    workout1reps INT,
    workout1sets INT,
    workout2 VARCHAR (120),
    workout2reps INT,
    workout2sets INT,
    workout3 VARCHAR (120),
    workout3reps INT,
    workout3sets INT,
    workout4 VARCHAR (120),
    workout4reps INT,
    workout4sets INT,
    workout5 VARCHAR (120),
    workout5reps INT,
    workout5sets INT
);

CREATE TABLE daythreeworkout (
    workoutusername VARCHAR(240),
    workout1 VARCHAR (120),
    workout1reps INT,
    workout1sets INT,
    workout2 VARCHAR (120),
    workout2reps INT,
    workout2sets INT,
    workout3 VARCHAR (120),
    workout3reps INT,
    workout3sets INT,
    workout4 VARCHAR (120),
    workout4reps INT,
    workout4sets INT,
    workout5 VARCHAR (120),
    workout5reps INT,
    workout5sets INT
);

CREATE TABLE dayfourworkout (
    workoutusername VARCHAR(240),
    workout1 VARCHAR (120),
    workout1reps INT,
    workout1sets INT,
    workout2 VARCHAR (120),
    workout2reps INT,
    workout2sets INT,
    workout3 VARCHAR (120),
    workout3reps INT,
    workout3sets INT,
    workout4 VARCHAR (120),
    workout4reps INT,
    workout4sets INT,
    workout5 VARCHAR (120),
    workout5reps INT,
    workout5sets INT
);

CREATE TABLE dayfiveworkout (
    workoutusername VARCHAR(240),
    workout1 VARCHAR (120),
    workout1reps INT,
    workout1sets INT,
    workout2 VARCHAR (120),
    workout2reps INT,
    workout2sets INT,
    workout3 VARCHAR (120),
    workout3reps INT,
    workout3sets INT,
    workout4 VARCHAR (120),
    workout4reps INT,
    workout4sets INT,
    workout5 VARCHAR (120),
    workout5reps INT,
    workout5sets INT
);