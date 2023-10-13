import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);
const articlesRef = db.collection("Blogs");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const titulo = formData.get("titulo")?.toString();
  const subtitulo = formData.get("subtitulo")?.toString();
  const cuerpo = formData.get("cuerpo")?.toString();

  if (!titulo || !subtitulo || !cuerpo) {
    return new Response("Faltan campos obligatorios", {
      status: 400,
    });
  }

  if (!params.id) {
    return new Response("No se puede encontrar el artículo", {
      status: 404,
    });
  }

  try {
    await articlesRef.doc(params.id).update({
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

export const DELETE: APIRoute = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("No se puede encontrar el artículo", {
      status: 404,
    });
  }

  try {
    await articlesRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Algo salió mal", {
      status: 500,
    });
  }
  return redirect("/");
};
