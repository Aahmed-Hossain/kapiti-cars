import { useForm } from "react-hook-form";

import { Box, TextField } from "@mui/material";


const AddInventory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
return(
  <div>
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-8">
   
            <Box className="grid grid-cols-2 gap-4 ">
              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{ width: "100%" }}
                  {...register("name", { required: "Type is required" })}
                  id="outlined-name-input"
                  label="Product Name"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-500">Product Name is required</span>
                )}
              </Box>

              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{ width: "100%" }}
                  {...register("quantity", { required: "Type is required" })}
                  id="outlined-quantity-input"
                  label="Quantity"
                  type="number"
                />
                {errors.quantity && (
                  <span className="text-red-500">Quantity is required</span>
                )}
              </Box>

              
              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{ width: "100%" }}
                  {...register("price", { required: "Type is required" })}
                  id="outlined-price-input"
                  label="Cost Price"
                  type="number"
                />
                {errors.price && (
                  <span className="text-red-500">price is required</span>
                )}
              </Box>

              
              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  sx={{ width: "100%" }}
                  {...register("retail_price", { required: "Type is required" })}
                  id="outlined-retail_price-input"
                  label="Retail Price"
                  type="number"
                />
                {errors.retail_price && (
                  <span className="text-red-500">retail_price is required</span>
                )}
              </Box>

          
            </Box>
        </form>
  </div>
)
}

  
   
  

export default AddInventory