type Pet = {
  name: string;
};
enum CatFood {
  Meat = 'Meat',
  Fish = 'Fish',
  Cheese = 'Cheese',
}
type Cat = {
  food: CatFood;
};

// intersection
function showCat(o: Pet & Cat): string {
  return `My cat ${o.name} loves to eat ${o.food}.`;
}
console.log(showCat({ name: 'Sara', food: CatFood.Fish }));

// union
function show(o: Pet | null): string {
  if (o) {
    return `My pet is called ${o.name}`;
  }
  return 'I have no pet';
}
console.log(show({ name: 'Ginger' }));
console.log(show(null));
