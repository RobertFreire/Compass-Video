import React from 'react';
import './Footer.css';
import logo from '../../assets/Images/logo_footer.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="image_footer">
                <img src={logo} alt="UOL_logo" />
            </div>
            <div className="frame6">
                <p>Política de privacidad</p>
                <p>Acuerdo de suscripción</p>
                <p>Ayuda</p>
                <p>Dispositivos compatibles</p>
                <p>Acerca de Disney+</p>
                <p>Publicidad personalizada</p>
            </div>
            <div className="frame7">
                <p>Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.</p>
                <p>© Disney. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer
