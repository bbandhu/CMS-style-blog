const sequelize = require("../config/connection");

const { User, BlogPostings, Comments } = require("../models");

const userSeedData = require("./userData.json");
const blogpostsData = require("./blogpostsData.json");
const commentsData = require("./commentsData.json");

const seedDb = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- database synced -----\n");

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  console.log("'\n ----- Users seeded -----\n");

  for (const blog_postings of blogpostsData) {
    await BlogPostings.create({
      ...blog_postings,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  console.log("\n----- BlogPostings seeded -----\n");

  await Comments.bulkCreate(commentsData, {
    individualHooks: true,
    returning: true,
  });

  console.log("'\n ----- Comments seeded -----\n");

  process.exit(0);
};

seedDb();