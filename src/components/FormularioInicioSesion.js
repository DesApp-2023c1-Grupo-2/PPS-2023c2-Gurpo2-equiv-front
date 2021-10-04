import React from 'react';
import Boton from '../elements/Boton';
//import Titulo from '../elements/Titulos';
import OlvidastePasswordLink from '../elements/OlvidastePasswordLink';
import TituloBienvenida from '../elements/TituloBienvenida';
import Formulario from '../elements/Formulario';
import ContenedorInputs from '../elements/ContenedorInputs';
import Titulosh2 from '../elements/Titulosh2';
import OlvidastePassword from '../elements/OlvidastePassword';
import ContenedorBoton from '../elements/ContenedorBoton';
import LineaSeparacion from '../elements/LineaSeparacion';
import InputMUI from '../elements/InputMUI';
import BotonMUI from '../elements/BotonMUI';

const FormularioInicioSesion = () => {
    const onSubmit = (e) => {};

    return (
        <>
            <TituloBienvenida>
                <Titulosh2 tituloh2Grande>¡Bienvenido/a!</Titulosh2>
                <Titulosh2 tituloh2Chico>Iniciar sesión</Titulosh2>
            </TituloBienvenida>

            <Formulario>
                <form
                    action=""
                    onSubmit={onSubmit}
                    style={{ height: '100%', textAlign: 'center' }}
                >
                    <div>
                        {/*<div className="input-inicio-sesion-email">
							<input type="text" placeholder="DNI" />
						</div>
						<div className="input-inicio-sesion-password">
							<input type="password" placeholder="Contraseña" />
						</div>*/}

                        <ContenedorInputs>
                            <InputMUI
                                type="text"
                                id="outlined-basic"
                                label="DNI"
                                variant="outlined"
                            />
                        </ContenedorInputs>

                        <ContenedorInputs>
                            <InputMUI
                                type="password"
                                id="outlined-basic"
                                label="Contraseña"
                                variant="outlined"
                                margin="normal"
                            />
                        </ContenedorInputs>

                        {/*
						<ContenedorInputs>
							<Input type="text" placeholder="DNI" className="" />
						</ContenedorInputs>
						
						<ContenedorInputs>
							<Input type="password" placeholder="Contraseña" />
						</ContenedorInputs>
						*/}
                    </div>

                    <OlvidastePassword>
                        <OlvidastePasswordLink href="https://www.google.com.ar">
                            ¿Olvidaste tu contraseña?
                        </OlvidastePasswordLink>
                    </OlvidastePassword>

                    <LineaSeparacion></LineaSeparacion>

                    <ContenedorBoton>
                        {/* <Boton type="submit">Ingresar</Boton> */}
                        <BotonMUI variant="contained" disableElevation>
                            Ingresar
                        </BotonMUI>
                    </ContenedorBoton>
                </form>
            </Formulario>
        </>
    );
};

export default FormularioInicioSesion;