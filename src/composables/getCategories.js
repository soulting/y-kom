const getCategories = async () => {
  const data = {
    loaded: true,
    categories: null,
  };
  try {
    const response = await fetch("http://localhost:3000/kategorie");
    if (response.ok) {
      data.categories = await response.json();
      return data;
    } else throw new Error("categories could't be loaded");
  } catch (error) {
    return error;
  }
};

export default getCategories;
