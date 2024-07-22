const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Data Dummy for Categories
const categories = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Perabotan' },
  { id: 3, name: 'Pakaian' },
  { id: 4, name: 'Olahraga' },
  { id: 5, name: 'Kecantikan' }
];

// Data Dummy for Products
const products = [
  { id: 1, name: 'Laptop', category: 'Elektronik' },
  { id: 2, name: 'Meja', category: 'Perabotan' },
  { id: 3, name: 'Kamera', category: 'Elektronik' },
  { id: 4, name: 'Sofa', category: 'Perabotan' },
  { id: 5, name: 'Kaos', category: 'Pakaian' },
  { id: 6, name: 'Sepatu Lari', category: 'Olahraga' },
  { id: 7, name: 'Parfum', category: 'Kecantikan' },
  { id: 8, name: 'Televisi', category: 'Elektronik' },
  { id: 9, name: 'Lemari', category: 'Perabotan' },
  { id: 10, name: 'Celana', category: 'Pakaian' }
];

app.get("/categories", async (req, res) => {
  try {
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = categories.find((category) => category.id == id);
	if (!category) {
	  return res.status(404).json({ message: "Category not found" });
		
	}
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/categories", async (req, res) => {
  try {
    const { name } = req.body;
	if (!name) return res.status(400).json({ message: "Name is required" });
    const category = { id: categories.length + 1, name: name };
    categories.push(category);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.put("/categories/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;

	if (!name) return res.status(400).json({ message: "Name is required" });
    const category = categories.find((category) => category.id == id);
	if (!category) return res.status(404).json({ message: "Category not found" });

    category.name = name;
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/categories/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = categories.find((category) => category.id == id);
	if (!category) return res.status(404).json({ message: "Category not found" });
		
    const index = categories.indexOf(category);
    categories.splice(index, 1);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
	const { name } = req.query;
	let filteredProducts = products;
	if (name) {
	  filteredProducts = products.filter((product) =>	product.name.includes(name));
	}
	res.status(200).json(filteredProducts);
  } catch (error) {
	res.status(500).json({ message: error.message });
  }
});

app.get("/categories/:id/products", async (req, res) => {
  try {
	const id = req.params.id;
	const { name } = req.query;
	const category = categories.find((category) => category.id == id);
	if (!category) {
	  return res.status(404).json({ message: "Category not found" });
	}
	let filteredProducts = products.filter((product) => product.category == category.name);
	
	if (name) {
	  filteredProducts = filteredProducts.filter((product) =>	product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase));
	}
	if (filteredProducts.length == 0) {
	  return res.status(404).json({ message: "Product not found" });
	}
	return res.status(200).json(filteredProducts);
  } catch (error) {
	return res.status(500).json({ message: error.message });
  }
})
app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
