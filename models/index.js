const User = require("./User");
const BlogPostings = require("./BlogPostings");
const Comments = require("./Comments");

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