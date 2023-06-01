const User = require("./models/User");
const BlogPostings = require("./models/BlogPostings");
const Comments = require("./models/Comments");

// Define the association between User and BlogPostings
User.hasMany(BlogPostings, { 
    foreignKey: "creator_id" 
});

BlogPostings.belongsTo(User, { 
    foreignKey: "creator_id" 
});

// Define the association between User and Comments
User.hasMany(Comments, { 
    foreignKey: "creator_id" 
});

Comments.belongsTo(User, { 
    foreignKey: "creator_id" 
});

// Define the association between BlogPostings and Comments
BlogPostings.hasMany(Comments, { 
    foreignKey: "post_id" 
});

Comments.belongsTo(BlogPostings, { 
    foreignKey: "post_id" 
});