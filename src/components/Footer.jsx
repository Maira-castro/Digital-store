import React from "react";

const Footer = () => {
    return(
        <footer className="h-auto" style={{backgroundColor:'var(--dark-gray)'}}>
      <div className="flex justify-content-between px-8">
      <div className=" align-content-center">
        <img src="./src/assets/logo-footer.svg" alt="logo-footer" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <div className="flex gap-6 ">
        <i>
          <a href="#"><img src="./src/assets/facebook.svg" alt="" /></a>
        </i>
        <i>
          <a href=""><img src="./src/assets/instagram.svg" alt="" /></a>
        </i>
        <i>
          <a href=""><img src="./src/assets/x.svg" alt="" /></a>
        </i>
        </div>
      </div>
      <div className="align-content-center justify-content-start">
        <div className=""><h3>Informação</h3></div>
        <div className="">
          <ul className="list-none">
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
        <div className="">
          <ul className="list-none">
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
      </div>
      <div className="contato-footer">
        <div className="">
          <h3>Contato</h3>
        </div>
        <div className="">
          <ul className="list-none">
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="px-8 flex justify-content-center ">
        <h5>@ 2024 Digital College</h5>
      </div>
      
    </footer>
    )
}

export default Footer;