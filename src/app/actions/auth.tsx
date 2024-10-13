export async function login(state: FormState, formData: FormData) {
  console.log(state, formData.get("email"));

  if (
    formData.get("email") === "admin" &&
    formData.get("password") === "admin"
  ) {
    return { message: "Login successful" };
  } else {
    return { message: "Login failed", error: "Wrong email" };
  }
}

export type FormState =
  | {
      errors?: string;
      message?: string;
    }
  | undefined;
