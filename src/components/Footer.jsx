import React from "react";

const Footer = () => {
    return(
        <footer className="h-auto" style={{backgroundColor:'var(--dark-gray)'}}>
      <div className="flex justify-content-between px-8 text-white py-6">
      <div className="">
        <img className="mt-2" src="/assets/logo-footer.svg" alt="logo-footer" />
        <p className="py-4">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore.</p>
        <div className="flex gap-6 ">
        <i>
          <a href="#"><img src="/assets/facebook.svg" alt="" /></a>
        </i>
        <i>
          <a href=""><img src="/assets/instagram.svg" alt="" /></a>
        </i>
        <i>
          <a href=""><img src="/assets/x.svg" alt="" /></a>
        </i>
        </div>
      </div>
      <div className="align-content-center justify-content-start">
        <div className=""><h3>Informação</h3></div>
        <div className="">
          <ul className="list-none line-height-4 p-0">
          <li><a href="">Sobre Drip Store</a></li>
          <li><a href="">Segurança</a></li>
          <li><a href="a">Wishlist</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Trabalhe conosco</a></li>
          <li><a href="">Meus Pedidos</a></li>
          </ul>
        </div>
      </div>
      <div className="categorias-footer">
        <div className=""><h3>Categorias</h3></div>
        <div className="text-left">
          <ul className="list-none no-underline line-height-4 p-0">
            <li><a href="">Camisetas</a></li>
            <li><a href="">Calças</a></li>
            <li><a href="">Bonés</a></li>
            <li><a href="">Headphones</a></li>
            <li><a href="">Tênis</a></li>
          </ul>
        </div>
      </div>
      <div className="contato-footer">
        <div className="">
          <h3>Contato</h3>
        </div>
        <div className="">
          <ul className="list-none p-0">
          <li><a href="">Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza - <br /> CE, 60150-161</a></li>
          <li className="pt-4"><a href="">(85) 3051-3411</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="px-8 flex justify-content-center text-white">
        <h5>@ 2024 Digital College</h5>
      </div>
      
    </footer>
    )
}

export default Footer;