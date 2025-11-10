// Simulate DB calls for now
export const fetchAll = async () => {
  return [
    { id: 1, title: "Example 2A", description: "This is an Example2 item" },
    { id: 2, title: "Example 2B", description: "Another Example2 item" },
  ];
};

export const create = async (data) => {
  return {
    id: Math.floor(Math.random() * 1000),
    ...data,
    createdAt: new Date().toISOString(),
  };
};
