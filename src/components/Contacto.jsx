import { useForm } from "react-hook-form";

const Contacto = () => {

  const {register, handleSubmit} = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  

  return (
    <div className='container'>
      <h1 className='main-title'>Contacto</h1>
<form className='formulario' onSubmit={handleSubmit(enviar)}>

  <input type="text" placeholder='ingresa tu nombre'{...register("nombre")} />

  <input type="email" placeholder='ingresa tu email'{...register("email")} />

<input type="telefono" placeholder='ingresa tu telefono'{...register("telefono")} />


  <button  className='enviar' type='submit'>Enviar</button>
</form>
    </div>
  )
}

export default Contacto