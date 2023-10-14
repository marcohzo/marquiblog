import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const GET: APIRoute = async ({params, request}) => {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/'
    })
  )
}
export const POST: APIRoute = async ({ request, redirect }) => {
  console.log('in api route')
  const formData = await request.formData();
  console.log(formData)
  const titulo = formData.get("titulo")?.toString();
  const subtitulo = formData.get("subtitulo")?.toString();
  const cuerpo = formData.get("cuerpo")?.toString();

  if (!titulo || !subtitulo || !cuerpo) {
    return new Response("Faltan campos obligatorios", {
      status: 400,
    });
  }

  try {
    const db = getFirestore(app);
    const articlesRef = db.collection("Blogs");
    await articlesRef.add({
      titulo,
      subtitulo,
      cuerpo,
    });
  } catch (error) {
    return new Response("Algo salió mal", {
      status: 500,
    });
  }
  return redirect("/");
};
