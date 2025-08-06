import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
// cloudinary.api.resources({
//   resource_type: 'raw'
// }, function(error, result) {
//   if (error) console.log(error);
//   else console.log(result.resources); // Lists all uploaded raw files
// });

export default cloudinary;