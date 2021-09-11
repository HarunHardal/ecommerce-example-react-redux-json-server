import React from "react";
import SelectInput from "../toolbox/SeletInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "ekle"}</h2>
      <TextInput
        name="ProductName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Hata"
        placeHolder = 'Please Enter Value'
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Save
      </button>

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="choose"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="ERROR"
      ></SelectInput>

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error="Hata"
        placeHolder = 'Please Enter Value'
      ></TextInput>

      <TextInput
        name="quantityPerUnit"
        label="Quantity PerUnit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error="Hata"
        placeHolder = 'Please Enter Value'
      ></TextInput>

      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error="Hata"
        placeHolder = 'Please Enter Value'
      ></TextInput>
      <button type="submit" className="btn btn-success">Save</button>
    </form>
  );
};

export default ProductDetail;
