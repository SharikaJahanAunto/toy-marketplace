/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const AddAToy = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://toy-marketplace-server-mocha.vercel.app/toys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
          <label htmlFor="pictureUrl" className="text-gray-700">
            Picture URL of the toy:
          </label>
          <input
            {...register("pictureUrl")}
            id="pictureUrl"
            className="form-input mt-1 block w-full"
          />
        </div>

        <div>
          <label htmlFor="name" className="text-gray-700">
            Name:
          </label>
          <input
            {...register("name")}
            id="name"
            className="form-input mt-1 block w-full"
          />
        </div>

        {user && (
          <>
            <div>
              <label htmlFor="sellerName" className="text-gray-700">
                Seller Name:
              </label>
              <input
                {...register("sellerName")}
                id="sellerName"
                defaultValue={user.displayName}
                className="form-input mt-1 block w-full"
              />
            </div>

            <div>
              <label htmlFor="sellerEmail" className="text-gray-700">
                Seller Email:
              </label>
              <input
                {...register("sellerEmail")}
                id="sellerEmail"
                defaultValue={user.email}
                className="form-input mt-1 block w-full"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="subCategory" className="text-gray-700">
            Sub-category:
          </label>
          <select
            {...register("subCategory")}
            id="subCategory"
            className="form-select mt-1 block w-full"
          >
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className="text-gray-700">
            Price:
          </label>
          <input
            {...register("price")}
            id="price"
            type="number"
            className="form-input mt-1 block w-full"
          />
        </div>

        <div>
          <label htmlFor="rating" className="text-gray-700">
            Rating:
          </label>
          <input
            {...register("rating")}
            id="rating"
            type="number"
            className="form-input mt-1 block w-full"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="text-gray-700">
            Available Quantity:
          </label>
          <input
            {...register("quantity")}
            id="quantity"
            type="number"
            className="form-input mt-1 block w-full"
          />
        </div>
        
        <div>
          <label htmlFor="detailDescription" className="text-gray-700">
            Detail Description:
          </label>
          <textarea
            {...register("detailDescription")}
            id="detailDescription"
            className="form-textarea mt-1 block w-full"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddAToy;
