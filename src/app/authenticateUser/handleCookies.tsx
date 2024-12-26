"use server";
import { cookies } from 'next/headers'

export async function setCookie() {
  const cookieStore = await cookies()
  cookieStore.set({
    name: "user",
    value:"7uDZxC4a2ZY9CkXBhell59vVTw7WkSbvPcqAeRWYcm2eEw5Pjn",
    path: "/",
    sameSite: true,
    secure: true,
  })
}

export default async function DeleteCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('user');
}