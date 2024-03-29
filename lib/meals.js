import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(){
    //if use single row use get() use all when 
    //fetchimg data and get all data and another one use run if inseting data
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('Loading meals Failed');
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  }