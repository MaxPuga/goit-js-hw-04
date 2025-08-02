function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }
  let totalCalories = 0;

  for (let index in days) {
    totalCalories += days[index].calories;
  }

  return totalCalories / days.length;
}
