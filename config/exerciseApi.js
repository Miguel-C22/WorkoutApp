const apiKey = process.env.NEXT_PUBLIC_EXERCISEDB_API_KEY;
  
export async function getSpecificExercises(bodyPart) {

    //Replaces any spaces with %20
    const formattedBodyPart = bodyPart.toLowerCase().replace(/\s/g, '%20');

    try {
      const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${formattedBodyPart}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      });
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  }

export async function displayExercises(){
  try {
    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises?limit=10`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
  }
}
