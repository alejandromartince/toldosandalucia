import { Suspense, useState } from "react";

//Impotamos los componentes
import SelectPersonalizarToldos from "./SelectPersonalizarToldos";

import { infoPersonalizarToldos } from "../../constants/infoPersonalizarToldos";
import {
  useOpcionesTipoTela,
  useOpcionesTipoToldos,
} from "../../components/PersonalizarToldos/OpcionesSelect";

import { useIdioma } from "../../contexts/IdiomaContext";

const ComponenteSelects = () => {
  const [selectMenuActivo, setSelectMenuActivo] = useState(false);

  const contenido = infoPersonalizarToldos;
  const { idioma } = useIdioma();

  //OPCIONES PARA LOS SELECTS
  const [tipoToldoSeleccionado, setTipoToldoSeleccionado] = useState("");
  const [tipoTelaSeleccionado, setTipoTelaSeleccionado] = useState("");

  const opcionesTipoToldos = useOpcionesTipoToldos(idioma);
  const opcionesTipoTela = useOpcionesTipoTela(idioma);

  return (
    <div>
      <div className="contenedorPSelect">
        <p>{contenido.tipoToldo[idioma]}</p>
        <Suspense
          fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
        >
          <SelectPersonalizarToldos
            opcionesSelect={opcionesTipoToldos}
            palabra={idioma === "es" ? "toldo" : "awning"}
            valorSeleccionado={tipoToldoSeleccionado}
            onChange={(valor) => setTipoToldoSeleccionado(valor)}
            onSelectMenuChange={setSelectMenuActivo}
          />
        </Suspense>
      </div>

      <div className="contenedorPSelect">
        <p>{contenido.tipoTela[idioma]}</p>
        <Suspense
          fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
        >
          {" "}
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
};

export default ComponenteSelects;
