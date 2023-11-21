const ROLES = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLES,
  users: [
    { id: 1, name: "BM", role: ROLES.ADMIN },
    { id: 2, name: "John", role: ROLES.BASIC },
    { id: 3, name: "Bob", role: ROLES.BASIC },
  ],
  projects: [
    { id: 1, name: "BM's Project", userID: 1 },
    { id: 2, name: "John's Project", userID: 2 },
    { id: 3, name: "Bob's Project", userID: 3 },
  ],
};
