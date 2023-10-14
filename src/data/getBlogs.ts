import { app } from "../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

interface Blog {
  id: string;
  titulo: string;
  subtitulo: string;
  cuerpo: string;
}

const db = getFirestore(app);
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const blogsRef = db.collection("Blogs");
    const blogsSnapshot = await blogsRef.get();
    const blogs = blogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Blog[];
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    throw new Error("Error fetching blogs");
  }
};
