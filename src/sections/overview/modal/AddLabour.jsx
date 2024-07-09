import { Box, TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

const AddLabour = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-8">
   
   <Box className="grid grid-cols-1 gap-4 ">


   <Box sx={{ width: "100%" }}>
       <TextField
         size="small"
         sx={{ width: "100%" }}
         {...register("mechanic", { required: "Type is required" })}
         id="outlined-mechanic-input"
         label="Mechanic"
         type="text"
       />
       {errors.mechanic && (
         <span className="text-red-500">Mechanic Name is required</span>
       )}
     </Box>


     <Box sx={{ width: "100%" }}>
       <TextField
         size="small"
         sx={{ width: "100%" }}
         {...register("duration", { required: "Type is required" })}
         id="outlined-duration-input"
         label="Duration"
         type="number"
       />
       {errors.duration && (
         <span className="text-red-500">Duration is required</span>
       )}
     </Box>

  
 
   </Box>
</form>
    </div>
  )
}

export default AddLabour