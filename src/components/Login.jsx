import { useState } from "react"
import { Form } from "react-router-dom";
function Login() {
    const [name, setName] = useState('');
  return (
    <div className="container fluid h-100  d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-primary">Bienvenido a My ToDo</h1>
      <Form className="w-50" method="POST">
        <div className="d-flex  flex-column w-100 p-4 gap-2">
          <label className="fw-bold text-primary " htmlFor="nameInput">Introduce tu nombre</label>
          <input className="form-control" type="text" id="nameInput" name="userName" placeholder="Nombre" value={name} onChange={ e => setName(e.target.value)}/>
          <input className="btn btn-primary text-white" type="submit" value="Entrar" />

        </div>
      </Form>
    </div>
  )
}

export default Login
