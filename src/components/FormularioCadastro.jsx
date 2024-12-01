import React from "react";
import styled from "styled-components";

const FormularioCadastro = () => {
  return (
    <div className="justify-center flex py-10 ssm:px-3">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:max-w-lg md:max-w-md xl:max-w-xl bg-light-gray-3 ">
      {" "}
      <h1 className="text-2xl font-bold mb-6">Criar Conta</h1>{" "}
      <h3 className="text-xl font-semibold mb-4">Informações Pessoais</h3>{" "}
      <form>
        {" "}
        <label className="block mb-2" htmlFor="nome-completo">
          Nome Completo:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="text"
          id="nome-completo"
          name="nome-completo"
          required
        />{" "}
        <label className="block mb-2" htmlFor="cpf">
          CPF:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="text"
          id="cpf"
          name="cpf"
          required
        />{" "}
        <label className="block mb-2" htmlFor="email">
          Email:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="email"
          id="email"
          name="email"
          required
        />{" "}
        <label className="block mb-2" htmlFor="celular">
          Celular:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="tel"
          id="celular"
          name="celular"
          required
        />{" "}
        <h3 className="text-xl font-semibold mb-4 pt-10">Informações de Entrega</h3>
        <label className="block mb-2" htmlFor="endereco">
          Endereço:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="text"
          id="endereco"
          name="endereco"
          required
        />{" "}
        <label className="block mb-2" htmlFor="bairro">
          Bairro:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="text"
          id="bairro"
          name="bairro"
          required
        />{" "}
        <label className="block mb-2" htmlFor="cidade">
          Cidade:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="text"
          id="cidade"
          name="cidade"
          required
        />{" "}
        <label className="block mb-2" htmlFor="cep">
          CEP:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="text"
          id="cep"
          name="cep"
          required
        />{" "}
        <label className="block mb-2" htmlFor="complemento">
          Complemento:
        </label>{" "}
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="text"
          id="complemento"
          name="complemento"
        />{" "}
        <label className="flex items-start mb-6">
          {" "}
          <input type="checkbox" name="newsletter" className="mr-3 " />Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.{" "}
        </label>{" "}
        <button className="w-full bg-primary text-white-color p-2 rounded hover:bg-tertiary ">
          Confirmar
        </button>{" "}
      </form>{" "}
    </div>
    </div>
  );
};
export default FormularioCadastro;
