import { useCallback, useRef, useState } from "react";
import { useMemo } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {
  const inputSenhaRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailLength = useMemo(() => {
    console.log("executando");
    return email.length;
  }, [email.length]);

  // useEffect(() => {
  //   if (window.confirm("+18?")) {
  //     console.log("SIM");
  //   } else {
  //     console.log("NÃO");
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(email)
  // }, [email]);

  // useEffect(() => {
  //   console.log(senha)
  // }, [senha]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  return (
    <div className="divLogin">
      <form>
        {/* <p>Número de caracteres no Email: {emailLength}</p> */}

        <InputLogin
          label="email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputSenhaRef.current?.focus()}
        />

        <InputLogin
          type="password"
          label="senha"
          value={senha}
          ref={inputSenhaRef}
          onChange={(newValue) => setSenha(newValue)}
          
        />

        <ButtonLogin 
        type="button" 
        onClick={handleEntrar}>
          Enviar
        </ButtonLogin>
        
        <button 
        className="secondaryButton"
        type="button" 
        onClick={handleEntrar}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};
