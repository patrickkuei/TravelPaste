"use client";

import { login } from "@/app/actions/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

const Login = () => {
  const [state, action] = useFormState(login, undefined);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state && !state.error) {
      router.replace("/home");
    } else if (state && state.error) {
      formRef.current?.reset();
    }
  }, [router, state]);

  return (
    <div className="mt-[56px] mb-[54px] px-6 w-full overflow-y-auto flex flex-col items-center">
      <div className={`my-[23px] font-bold ${state?.error && "text-red-500"}`}>
        {state?.error
          ? "Incorrect account or password"
          : "Welcome to TravelPaste"}
      </div>
      <form ref={formRef} className="flex flex-col w-full" action={action}>
        <LoginInput name="email" />
        <LoginInput name="password" />
        <div className="mt-[-8px] mb-6 flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2 h-6 w-6"
            defaultChecked
          />
          <label htmlFor="remember">Remember me</label>
          <span className="text-[#C1C1C1] ml-auto">Forgot password?</span>
        </div>
        <input
          value="Log in"
          className={`w-[200px] h-[50px] rounded-full self-center font-bold text-white hover:cursor-pointer peer-invalid:bg-gray-300 peer-invalid:pointer-events-none ${"bg-[#A6B1E1]"}`}
          type="submit"
        />
      </form>
      <span className="mt-4">
        Don’t have an account?
        <b> Create an account.</b>
      </span>
    </div>
  );
};

export default Login;

const LoginInput = ({ name }: { name: string }) => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  return (
    <>
      <label htmlFor={name} className="capitalize">
        {name}
      </label>
      <input
        className="mb-2 rounded p-2 h-10 ring-1 ring-inset ring-gray-200 transition duration-200 ease-out focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-600 autofill:outline-none autofill:ring-1 autofill:ring-inset autofill:ring-gray-600 peer"
        type={name === "password" && !shouldShowPassword ? "password" : "text"}
        name={name}
        required
        autoComplete="off"
        id={name}
        defaultValue="admin"
      />
      {name === "password" && (
        <Image
          width={24}
          height={24}
          src={`/icons/mono_eye${shouldShowPassword ? "" : "_hide"}.svg`}
          alt="hide"
          className="relative bottom-10 ml-auto right-3 hover:cursor-pointer"
          onClick={() => setShouldShowPassword((prev) => !prev)}
        />
      )}
    </>
  );
};
