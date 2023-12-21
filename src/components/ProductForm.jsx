import { useState } from "react";
function ProductForm() {
  const [name, setName] = useState("");
  const [onchangeName, setOnchangeName] = useState("");
  const [image, setimage] = useState("");
  const [onchangeimage, setOnchangeimage] = useState("");
  const [price, setPrice] = useState("");
  const [onchangePrice, setOnchangePrice] = useState("");
  const [description, setDescription] = useState("");
  const [onchangeDescription, setOnchangeDescription] = useState("");

  return (
    <form
      className="post-form"
      onSubmit={(event) => {
        setName(onchangeName);
        setimage(onchangeimage);
        setPrice(onchangePrice);
        setDescription(onchangeDescription);
        event.preventDefault();

        alert(`{
    "name": "${name}",
    "price": ${price},
    "image": "${image}",
    "description": "${description}"
}
      `);
      }}
    >
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setOnchangeName(event.target.value);
            }}
            value={onchangeName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setOnchangeimage(event.target.value);
            }}
            value={onchangeimage}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setOnchangePrice(event.target.value);
            }}
            value={onchangePrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setOnchangeDescription(event.target.value);
            }}
            value={onchangeDescription}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
