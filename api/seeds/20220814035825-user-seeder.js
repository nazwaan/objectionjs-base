async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { username: 'admin' },
    { username: 'nazwaan' },
    { username: 'aiman' },
    { username: 'imad' },
  ]);
}

module.exports = { seed };
