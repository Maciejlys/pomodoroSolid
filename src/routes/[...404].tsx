import { createEffect } from "solid-js";
import { Navigate, redirect } from "solid-start";

export default function NotFound() {
  return <Navigate href="/" />;
}
