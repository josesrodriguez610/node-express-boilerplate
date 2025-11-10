export const fetchAll = async () => {
  return [
    { id: 1, name: "Example 1A" },
    { id: 2, name: "Example 1B" },
  ];
};

export const create = async (data) => {
  return { id: Math.random(), ...data };
};
