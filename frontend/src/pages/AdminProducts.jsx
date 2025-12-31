import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminProducts = ({ lang = "EN" }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    category_id: "",
    image: null,
    translations: {
      en: { name: "", description: "" },
      ar: { name: "", description: "" },
    },
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [newCategory, setNewCategory] = useState({ en: "", ar: "" });

  const token = sessionStorage.getItem("adminToken");

  // Fetch products
  const fetchProducts = async () => {
    try {
      if (!token) {
        console.error("No admin token found");
        return;
      }

      const res = await axios.get(
        `http://localhost:5000/products/${lang.toLowerCase()}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const mapped = res.data.map((p) => ({
        ...p,
        translations: {
          en: { name: p.enName, description: p.enDescription },
          ar: { name: p.arName, description: p.arDescription },
        },
      }));

      setProducts(mapped);
    } catch (err) {
      console.error("Fetch Products Error:", err.response || err);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/products/categories/${lang.toLowerCase()}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCategories(res.data);
    } catch (err) {
      console.error("Fetch Categories Error:", err.response || err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [lang]);

  // Handle form input change
  const handleChange = (langCode, field, value, isEdit = false) => {
    const updater = isEdit ? setEditingProduct : setNewProduct;
    updater((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [langCode]: { ...prev.translations[langCode], [field]: value },
      },
    }));
  };

  // Handle file input
  const handleFileChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (!file) return;
    const updater = isEdit ? setEditingProduct : setNewProduct;
    updater((prev) => ({ ...prev, image: file }));
  };

  // Add product
  const handleAddProduct = async () => {
    if (!newProduct.category_id || !newProduct.image)
      return alert("Select category and image");

    const formData = new FormData();
    formData.append("image", newProduct.image);
    formData.append("category_id", newProduct.category_id);
    formData.append(
      "translations",
      JSON.stringify([
        { language: "en", ...newProduct.translations.en },
        { language: "ar", ...newProduct.translations.ar },
      ])
    );

    try {
      await axios.post("http://localhost:5000/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts();
      setNewProduct({
        category_id: "",
        image: null,
        translations: {
          en: { name: "", description: "" },
          ar: { name: "", description: "" },
        },
      });
      document.getElementById("productImage").value = "";
      alert("Product added successfully!");
    } catch (err) {
      console.error("Add Product Error:", err.response || err);
    }
  };

  // Update product
  const handleUpdateProduct = async () => {
    if (!editingProduct.category_id) return alert("Select category");

    const formData = new FormData();
    if (editingProduct.image) formData.append("image", editingProduct.image);
    formData.append("category_id", editingProduct.category_id);
    formData.append(
      "translations",
      JSON.stringify([
        { language: "en", ...editingProduct.translations.en },
        { language: "ar", ...editingProduct.translations.ar },
      ])
    );

    try {
      await axios.post(
        `http://localhost:5000/products/modify/${editingProduct.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchProducts();
      setEditingProduct(null);
      alert("Product updated successfully!");
    } catch (err) {
      console.error("Update Product Error:", err.response || err);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`http://localhost:5000/products/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch (err) {
      console.error("Delete Product Error:", err.response || err);
    }
  };

  // Add category
  const handleAddCategory = async () => {
    if (!newCategory.en || !newCategory.ar) return alert("Fill both fields");

    console.log("=== ADD CATEGORY ===");
    console.log("Token:", token);
    console.log("Translations:", [
      { language: "en", name: newCategory.en },
      { language: "ar", name: newCategory.ar },
    ]);

    try {
      const res = await axios.post(
        "http://localhost:5000/products/categories/create",
        {
          translations: [
            { language: "en", name: newCategory.en },
            { language: "ar", name: newCategory.ar },
          ],
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Response from server:", res.data);
      setNewCategory({ en: "", ar: "" });
      fetchCategories();
      alert("Category added successfully!");
    } catch (err) {
      console.error("Add Category Error:", err.response || err);
      alert(err.response?.data?.message || "Error adding category");
    }
  };

  // Delete category
  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    try {
      await axios.delete(
        `http://localhost:5000/products/categories/delete/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCategories();
      fetchProducts();
    } catch (err) {
      console.error("Delete Category Error:", err.response || err);
      alert(err.response?.data?.message || "Error deleting category");
    }
  };

  // Edit product click
  const handleEditClick = (prod) => {
    setEditingProduct({
      id: prod.id,
      category_id: prod.category_id,
      image: null,
      translations: { ...prod.translations },
    });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold mb-4">Admin Products</h1>

      {/* ===== ADD / EDIT PRODUCT ===== */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="font-semibold text-xl">
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* English Name */}
          <div>
            <label className="block font-semibold">English Name</label>
            <input
              type="text"
              value={
                editingProduct
                  ? editingProduct.translations.en.name
                  : newProduct.translations.en.name
              }
              onChange={(e) =>
                handleChange("en", "name", e.target.value, !!editingProduct)
              }
              className="w-full border p-2 rounded"
            />
          </div>
          {/* Arabic Name */}
          <div>
            <label className="block font-semibold">Arabic Name</label>
            <input
              type="text"
              value={
                editingProduct
                  ? editingProduct.translations.ar.name
                  : newProduct.translations.ar.name
              }
              onChange={(e) =>
                handleChange("ar", "name", e.target.value, !!editingProduct)
              }
              className="w-full border p-2 rounded"
            />
          </div>
          {/* English Description */}
          <div>
            <label className="block font-semibold">English Description</label>
            <textarea
              value={
                editingProduct
                  ? editingProduct.translations.en.description
                  : newProduct.translations.en.description
              }
              onChange={(e) =>
                handleChange(
                  "en",
                  "description",
                  e.target.value,
                  !!editingProduct
                )
              }
              className="w-full border p-2 rounded"
            />
          </div>
          {/* Arabic Description */}
          <div>
            <label className="block font-semibold">Arabic Description</label>
            <textarea
              value={
                editingProduct
                  ? editingProduct.translations.ar.description
                  : newProduct.translations.ar.description
              }
              onChange={(e) =>
                handleChange(
                  "ar",
                  "description",
                  e.target.value,
                  !!editingProduct
                )
              }
              className="w-full border p-2 rounded"
            />
          </div>
          {/* Category */}
          <div>
            <label className="block font-semibold">Category</label>
            <select
              value={
                editingProduct
                  ? editingProduct.category_id
                  : newProduct.category_id
              }
              onChange={(e) =>
                editingProduct
                  ? setEditingProduct((prev) => ({
                      ...prev,
                      category_id: e.target.value,
                    }))
                  : setNewProduct((prev) => ({
                      ...prev,
                      category_id: e.target.value,
                    }))
              }
              className="w-full border p-2 rounded"
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          {/* Image */}
          <div>
            <label className="block font-semibold">Image</label>
            <input
              id="productImage"
              type="file"
              onChange={(e) => handleFileChange(e, !!editingProduct)}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
            className={`px-4 py-2 rounded text-white ${
              editingProduct
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
          {editingProduct && (
            <button
              onClick={() => setEditingProduct(null)}
              className="px-4 py-2 rounded bg-gray-400 hover:bg-gray-500 text-white"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* ===== ADD CATEGORY ===== */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="font-semibold text-xl">Add New Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="English Name"
            value={newCategory.en}
            onChange={(e) =>
              setNewCategory((prev) => ({ ...prev, en: e.target.value }))
            }
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Arabic Name"
            value={newCategory.ar}
            onChange={(e) =>
              setNewCategory((prev) => ({ ...prev, ar: e.target.value }))
            }
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddCategory}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Category
        </button>
      </div>

      {/* ===== EXISTING CATEGORIES ===== */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="font-semibold text-xl">Existing Categories</h2>
        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between bg-white p-2 rounded shadow"
            >
              <span>{c.name}</span>
              <button
                onClick={() => handleDeleteCategory(c.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== EXISTING PRODUCTS ===== */}
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Existing Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-center gap-4"
            >
              <img
                src={`http://localhost:5000/uploads/${p.image}`}
                alt={p.translations.en.name}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="flex-1 space-y-2">
                <p>
                  <b>{p.translations.en.name}</b>
                </p>
                <p>{p.translations.en.description}</p>
                <p>Category: {p.category}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleDeleteProduct(p.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditClick(p)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
