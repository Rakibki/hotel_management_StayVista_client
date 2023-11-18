import axios from "axios"

const UploadImage = async (image) => {
    const formData = new FormData()
    formData.append("image", image) 
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_HOSTING_KEY}`, formData)
    return res.data.data.display_url
}

export default UploadImage