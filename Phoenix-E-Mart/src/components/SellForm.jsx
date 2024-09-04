import React from "react";
import "./SellForm.css";
import Selector from "./Selector";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

let options = ["electronics", "automobile", "mobiles", "furniture", "hardware"];

function SellForm() {
  const authSlice = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    age: "",
    price: "",
    address: "",
    owner: "",
    tags: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const tagHandler=(catg)=>{
    setFormData({
      ...formData,
      ['tags']: catg,
    });
  }
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      console.log(formData.images);
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("age", formData.age);
      form.append("price", formData.price);
      form.append("address", formData.address);
      form.append("tags", formData.tags);
      form.append("owner", authSlice.user.uname);
      let imgs = [];
      formData.images.forEach((image) => {
        // imgs.push(image);
        form.append("images", image);
      });

      console.log(form);

      let response = await axios.post(
        `${import.meta.env.VITE_API_URL}/postProduct`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      console.log("Form submitted successfully");
      toast.success(`${response.message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
      navigate("/MyAds");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="containform bg-black ">
        <p className="text-2xl font-semibold text-orange-600">
          Please fill in the product details
        </p>
        <br />
        <hr />
        <br />
        <form onSubmit={submitHandler}>
          <p className="font-semibold text-orange-400">Ad title:</p>
          <input
            type="text"
            className="adtitl"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <br />

          <p className="text-white">
            Mention the name of your item with some key features
          </p>
          <br />

          <p className="font-semibold text-orange-400">Description</p>

          <textarea
            className="adddesc"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <br />
          <p className="text-white">
            Include condition, features and reason for selling
          </p>
          <br />
          <label htmlFor="selectedOption" className="mb-8 font-semibold text-orange-400">
            Select Catagory for the product:-
          </label>
          <Selector option={options} onSelect={tagHandler} />
          <br />

          <p className="font-semibold text-orange-400">How old is your item?</p>
          <input
            type="text"
            className="addoldness"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <br />
          <p className="text-white">Mention clearly</p>
          <br />
          <p className="font-semibold text-orange-400">Set price:</p>
          <input
            type="text"
            // ref={priceRef}
            className="addprice"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <br />
          <p className="text-white">In rupees ₹</p>
          <br />
          <hr />
          <br />
          <p className="font-semibold text-orange-400">
            <i className="fa fa-address-book-o"></i> Please confirm your address
          </p>
          <input
            type="text"
            className="addcity"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <hr />
          <br />
          
          <br />
          <p className="font-semibold mb-6 text-orange-400">Upload Images :-</p>
          <input
            className="addimages"
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
            required
          />

          <br />
          <hr />
          <div
            // id="empty-warning"
            className="hidden"
            // style="text-align: center; color: crimson"
          >
            Any field shouldn't be empty !
          </div>
          <div
            // id="neg-warning"
            className="hidden"
            // style="text-align: center; color: crimson"
          >
            Price shouldn't be 0 or less than 0 !
          </div>

          <div
            // id="pat-warning"
            className="hidden"
            // style="text-align: center; color: crimson"
          >
            title or age field shouldn't contain special characters !
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-success mt-6 ml-96 bg-green-500 text-neutral-50"
            required
            // style="margin-left: 45%"
          />
          <ToastContainer />
        </form>
      </div>
    </>
  );
}

export default SellForm;
