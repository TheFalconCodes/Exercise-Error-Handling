function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
		return true; //Success
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

let vacationDays = 0;
const totalMissions = 20;

for (let i = 0; i < totalMissions; i++) 
{
try {
		mysteryOperation ()
		vacationDays += 13; //Successful operation
		}
	 
catch {
		vacationDays += 1; // Unsuccesful operation
		}

finally {
			vacationDays +=3; // Attendance bonus
		}
}

console.log(`Total vacation days: ${vacationDays}`);