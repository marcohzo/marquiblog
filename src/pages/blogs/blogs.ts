import { app } from "../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

interface Blog {
  id: string;
  titulo: string;
  subtitulo: string;
  cuerpo: string;
}

const db = getFirestore(app);
const blogsRef = db.collection("Blogs");
const blogsSnapshot = await blogsRef.get();
export const blogs = blogsSnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
})) as Blog[];