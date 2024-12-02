import { DEV_TO_POSTS_LIST_API } from "@/constants"
import { DevToPost } from "@/types"
import axios from "axios"
import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState<DevToPost[]>([])
    const [loading, setLoading] = useState(false)

    const fetchPosts = async () => {
        setLoading(false)
        try {
            const response = await axios.get(DEV_TO_POSTS_LIST_API)
            setBlogs(response.data)
        } catch (error) {
            setBlogs([])
        }
        setLoading(false)
    }

    useEffect(() => { fetchPosts() }, [])

    return ({
        blogs,
        loading,
    })
}

export default useBlogs
