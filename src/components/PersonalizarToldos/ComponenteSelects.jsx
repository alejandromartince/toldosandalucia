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
} from "../../components/PersonalizarToldos/OpcionesSelect";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

const ComponenteSelects = forwardRef(
  ({ selectMenuActivo, setSelectMenuActivo }, ref) => {
    const contenido = infoPersonalizarToldos;
    const { idioma } = useIdioma();

    //OPCIONES PARA LOS SELECTS
    const [tipoToldoSeleccionado, setTipoToldoSeleccionado] = useState("");
    const [tipoTelaSeleccionado, setTipoTelaSeleccionado] = useState("");

    const opcionesTipoToldos = useOpcionesTipoToldos(idioma);
    const opcionesTipoTela = useOpcionesTipoTela(idioma);

    return (
      <div>
        <div className="contenedorPSelect" ref={ref}>
          <p>{contenido.tipoToldo[idioma]}</p>
          <Suspense
            fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
          >
            <SelectPersonalizarToldos
              opcionesSelect={opcionesTipoToldos}
              palabra={idioma === "es" ? "toldo" : "awning"}
              valorSeleccionado={tipoToldoSeleccionado}
              onChange={(valor) => setTipoToldoSeleccionado(valor)}
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
                tipoToldoSeleccionado === "Cofre" ? ["PVC (Impermeable)"] : []
              }
            />
          </Suspense>
        </div>
      </div>
    );
  }
);

export default ComponenteSelects;
