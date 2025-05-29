import './index.css';



function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Fale Conosco</h2>
        <form>
          <input type="text" placeholder="Nome:" required />
          <input type="text" placeholder="Telefone:" required />
          <input type="email" placeholder="E-mail:" required />
          <select required>
            <option value="">Selecione o assunto:</option>
            <option value="banho">Banho</option>
            <option value="creche">Creche</option>
            <option value="hospedagem">Hospedagem</option>
            <option value="outros">Outros</option>
          </select>
          <textarea placeholder="Mensagem:" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

