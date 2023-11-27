import react from 'react';
import '../assets/styles/Form.css'


export const Form = () => {
  return(

    <div className='formContainer' id='form'>
      <form action="post" className='formulario'>
      <h3>CONTACTO</h3>
      <p className='formParagraph'>Envianos un mensaje y nos pondremos en contacto a la brevedad</p>
        <div className="Nombre">
        <label className='labelCampo' htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />
        </div>
        <div className="Email">
        <label className='labelCampo' htmlFor="Email">Email</label>
        <input type="email" name="email" id="email" />
        </div>
        <div className="Comentario">
        <label className='labelCampo' htmlFor="comentario">Comentario</label>
        <textarea type="textarea" cols={20} rows={6} name="comentario" id="comentario" />
        </div>
        <button className='formButton' type='submit'>Enviar</button>
      </form>
    </div>

 )

}