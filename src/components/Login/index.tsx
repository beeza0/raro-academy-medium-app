import axios from "axios";
import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

export const Login = () => {

  const [login, setLogin] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  const postLogin = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
    event.preventDefault()
    console.log(event.target);
    try {
      const response = await axios.post('http://3.221.159.196:3307/auth/login', { login, senha })
      console.log(response)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://rarolabs.com.br/assets/logo-cae9beb1976500005b5e29dea19bdaa2761082232703a16beb71ffd2117014e5.png"
            alt="Workflow"
          />
        </div>
        <form className="mt-8 space-y-6" action="#" onSubmit={postLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-5">
              <Input
                type="text"
                name="login"
                label="Login"
                placeholder="login"
                required
                value={ login }
                onChange={ (e: any) => setLogin(e.target.value) }
              />
            </div>

            <div className="mt-5">
              <Input
                type="password"
                name="senha"
                label="senha"
                placeholder="********"
                required
                value={ senha }
                onChange={ (e: any) => setSenha(e.target.value) }
              />
            </div>
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
};