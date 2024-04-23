import { useRef } from "react";
import "../../styles/pay.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import Modal from "../../modals/Modal";

const API = "https://cp-staging.onrender.com/v1/complete";

function Pay() {
  const context = useContext(ShoppingCartContext);
  const form = useRef(null);
  const handleSubmit = (event) => {
    //preventDefault para que envie los valores no por url sino que continue con la lógica que se tiene. Así no se recargará la página
    event.preventDefault();
    //FormData nos permite instanciar los elementos que se encuentran dentro del formulario y los va a capturar conforme sean llenados. Acceder a los valores del form por medio de current
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      dni: formData.get("numberDocument"),
      operation_date: "123456789",
    };
    fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(() => context.openModal())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="pay-section">
        <div>
          <h1>Tarjeta de Crédito o Débito</h1>
          <div className="container-form">
            <form className="form" action="" ref={form}>
              <label className=" label label-card-number">
                <input
                  className="input input-card-number"
                  type="number"
                  name="cardNumber"
                  placeholder="Número de tarjeta"
                />
              </label>
              <label className="label label-expiration-date">
                <input
                  className="input input-expiration-date"
                  name="expirationDate"
                  type="date"
                  placeholder="MM/DD"
                />
              </label>
              <label className="label label-cvv">
                <input
                  className="input input-cvv"
                  name="cvv"
                  type="number"
                  placeholder="CVV"
                />
              </label>
              <label className="label label-name">
                <input
                  className="input input-name"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                />
              </label>
              <label className="label label-lastname">
                <input
                  className="input input-lastname"
                  name="lastname"
                  type="text"
                  placeholder="Apellido"
                />
              </label>
              <label className="label label-lastname">
                <input
                  className="input input-email"
                  name="email"
                  type="text"
                  placeholder="Correo electrónico"
                />
              </label>
              <select className="input" name="document">
                <option value="DNI">DNI</option>
                <option value="CARNET_ENTRAJERIA">CARNET_EXTRANJERIA</option>
              </select>
              <label className="label label-number-document">
                <input
                  className="input input-number-document"
                  name="numberDocument"
                  type="text"
                  placeholder="Número de documento"
                />
              </label>
              <div className="container-button">
                <button
                  onClick={handleSubmit}
                  className="primary-button pay-button"
                >
                  Pagar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {context.isOpenModal && <Modal />}
    </>
  );
}

export default Pay;
