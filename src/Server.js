import express, { request, response } from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const server = app.listen(8080, () =>
  console.log("listen on PORT 8080--Listen")
); //ON LISTEN

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let products = [];
//La ruta raíz GET / deberá listar todos los productos de la base. (Incluyendo la limitación ?limit del desafío anterior)

app.get("/products", (request, response) => {
  response.json(products);
});

//La ruta GET /:pid deberá traer sólo el producto con el id proporcionado

app.get("/products/:id", (request, response) => {
  const productId = request.params.id;
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return response.status(404).json({ error: "Cant find the Product" });
  }
  response.json(product);
});

//La ruta POST /
app.post("/products", (request, response) => {
  const { title, description, code, price, status, stock, category } =
    request.body;

  //Data Validation
  if (
    !title ||
    !description ||
    !code ||
    !price ||
    !status ||
    !stock ||
    !category
  ) {
    return response.status(400).json({ error: "Invalid Data" });
  }

  const newProduct = {
    id: uuidv4(),
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
  };

  products.push(newProduct);
  response.status(201).json(newProduct);
});

//La ruta PUT /:pid deberá tomar un producto y actualizarlo por los campos enviados desde body.
//NUNCA se debe actualizar o eliminar el id al momento de hacer dicha actualización.
app.put("/products/:id", (request, response) => {
  const productIdFind = request.params.id;
  const { id, title, description, code, price, status, stock, category } =
    request.body;
  const productIndex = products.findIndex(
    (product) => product.id === productIdFind
  );

  if (productIndex === -1) {
    return response.status(404).json({ error: "Cant find product" });
  }

  //Data Validation
  if (
    !title ||
    !description ||
    !code ||
    !price ||
    !status ||
    !stock ||
    !category
  ) {
    return response.status(400).json({ error: "Invalid Data" });
  }

  products[productIndex] = {
    ...products[productIndex],
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
  };

  response.json(products[productIndex]);
});

//[]La ruta DELETE /:pid deberá eliminar el producto con el pid indicado.
app.delete("/products/:id", (request, response) => {
  const productIdDelete = request.params.id;
  const productIndex = products.findIndex(
    (product) => product.id === productIdDelete
  );

  if (productIndex === -1) {
    return response.status(404).json({ error: "Cant find product" });
  }

  products.splice(productIndex, 1);
  response.status(204).json({ mensaje: "Delete Data" });
});
