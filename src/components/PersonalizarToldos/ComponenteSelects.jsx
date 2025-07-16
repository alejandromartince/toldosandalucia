//Importamos los hooks de react
import React, { forwardRef, Suspense, useState } from "react";

//Impotamos los componentes
const SelectPersonalizarToldos = React.lazy(() =>
  import("../../components/PersonalizarToldos/SelectPersonalizarToldos")
);

//Importamos la informacion
import { infoPersonalizarToldos } from "../../constants/infoPersonalizarToldos";
import {
  useOpcionesTipoTela,
  useOpcionesTipoToldos,
  useTipoSistemaToldo,
  useUbicacion,
} from "../../components/PersonalizarToldos/OpcionesSelect";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

const ComponenteSelects = forwardRef(({ setSelectMenuActivo }, ref) => {
  const contenido = infoPersonalizarToldos;
  const { idioma } = useIdioma();

  //OPCIONES PARA LOS SELECTS
  const [tipoToldoSeleccionado, setTipoToldoSeleccionado] = useState("");
  const [tipoTelaSeleccionado, setTipoTelaSeleccionado] = useState("");
  const [tipoSistemaToldo, setTipoSistemaToldo] = useState("");
  const [lugarUbicacion, setLugarUbicacion] = useState("");

  const opcionesTipoToldos = useOpcionesTipoToldos(idioma);
  const opcionesTipoTela = useOpcionesTipoTela(idioma);
  const opcionesTipoSistemaToldo = useTipoSistemaToldo(idioma);
  const ubicaciones = useUbicacion(idioma);

  return (
    <div className="contenedorPadreSelectPT">
      <div className="contenedorPSelect" ref={ref}>
        <p>{contenido.tipoToldo[idioma]}</p>
        <Suspense
          fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
        >
          <SelectPersonalizarToldos
            opcionesSelect={opcionesTipoToldos}
            palabra={idioma === "es" ? "toldo" : "awning"}
            valorSeleccionado={tipoToldoSeleccionado}
            onChange={(valor) => {
              setTipoToldoSeleccionado(valor);

              // Verificar restricciones para tela
              if (valor === "Cofre" && tipoTelaSeleccionado === "1") {
                setTipoTelaSeleccionado(""); // limpiar si era PVC
              }

              if (
                valor === "Capota" &&
                (tipoSistemaToldo === "2" || tipoSistemaToldo === "3")
              ) {
                setTipoSistemaToldo(""); // limpiar si era un sistema no permitido
              }
            }}
            onSelectMenuChange={(activo) => {
              if (activo) setSelectMenuActivo(true);
            }}
          />
        </Suspense>
      </div>

      <div className="contenedorPSelect">
        <p>{contenido.tipoTela[idioma]}</p>
        <Suspense
          fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
        >
          <SelectPersonalizarToldos
            opcionesSelect={opcionesTipoTela}
            palabra={idioma === "es" ? "tela" : "fabric"}
            valorSeleccionado={tipoTelaSeleccionado}
            onChange={(valor) => setTipoTelaSeleccionado(valor)}
            deshabilitado={!tipoToldoSeleccionado} // No se puede seleccionar si no hay toldo
            opcionesDeshabilitadas={
              tipoToldoSeleccionado === "Cofre" ? ["1"] : []
            }
          />
        </Suspense>
      </div>
      
      <div className="contenedorPSelect">
        <p>{contenido.Sistema[idioma]}</p>
        <Suspense
          fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
        >
          <SelectPersonalizarToldos
            opcionesSelect={opcionesTipoSistemaToldo}
            palabra={idioma === "es" ? "instalación" : "installation"}
            valorSeleccionado={tipoSistemaToldo}
            onChange={(valor) => setTipoSistemaToldo(valor)}
            deshabilitado={!tipoToldoSeleccionado} // No se puede seleccionar si no hay toldo
            opcionesDeshabilitadas={
              tipoToldoSeleccionado === "Capota" ? ["2", "3"] : []
            }
          />
        </Suspense>
      </div>

      <div className="contenedorPSelect">
        <p>{contenido.Ubicacion[idioma]}</p>
        <Suspense
          fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
        >
          <SelectPersonalizarToldos
            opcionesSelect={ubicaciones}
            palabra={idioma === "es" ? "ubicación" : "ubication"}
            valorSeleccionado={lugarUbicacion}
            onChange={(valor) => setLugarUbicacion(valor)}
          />
        </Suspense>
      </div>
    </div>
  );
});

export default ComponenteSelects;
