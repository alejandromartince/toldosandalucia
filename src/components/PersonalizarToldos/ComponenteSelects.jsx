//Importamos los hooks de react
import React, { forwardRef, Suspense, useState } from "react";

//Impotamos los componentes
const SelectPersonalizarToldos = React.lazy(() =>
  import("../../components/PersonalizarToldos/SelectPersonalizarToldos.jsx")
);

//Importamos los hooks
import { seleccionarColorToldo } from "../../Hooks/PersonalizarToldos/seleccionarColorToldo.jsx";

//Importamos la informacion
import { infoSelect } from "../../constants/infoPersonalizarToldos.jsx";
import {
  useOpcionesTipoTela,
  useOpcionesTipoToldos,
  useTipoSistemaToldo,
  useUbicacion,
  usePalabras,
} from "../../components/PersonalizarToldos/OpcionesSelect.jsx";

//Importamos el contexto del idioma
import { useIdioma } from "../../Hooks/General/useIdioma.js";

const ComponenteSelects = forwardRef(
  (
    {
      setSelectMenuActivo,
      tipoToldoSeleccionado,
      setTipoToldoSeleccionado,
      setColorSeleccionado,
      seleccionCompletada,
      setSeleccionCompletada,
    },
    ref
  ) => {
    const { idioma } = useIdioma();

    //HOOKS PARA LOS SELECTS
    const [tipoTelaSeleccionado, setTipoTelaSeleccionado] = useState("");
    const [tipoSistemaToldo, setTipoSistemaToldo] = useState("");
    const [lugarUbicacion, setLugarUbicacion] = useState("");

    const opcionesTipoToldos = useOpcionesTipoToldos(idioma);
    const opcionesTipoTela = useOpcionesTipoTela(idioma);
    const opcionesTipoSistemaToldo = useTipoSistemaToldo(idioma);
    const ubicaciones = useUbicacion(idioma);
    const palabras = usePalabras[idioma];

    return (
      <div className="contenedorPadreSelectPT">
        <div className="contenedorPSelect" ref={ref}>
          <p>{infoSelect.tipoToldo[idioma]}</p>
          <Suspense
            fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
          >
            <SelectPersonalizarToldos
              opcionesSelect={opcionesTipoToldos}
              palabra={palabras.toldo}
              valorSeleccionado={tipoToldoSeleccionado}
              onChange={(valor) => {
                setTipoToldoSeleccionado(valor);
                setColorSeleccionado(null);
                setTipoTelaSeleccionado("");
                setTipoSistemaToldo(""); // limpiar si era un sistema no permitido
              }}
              onSelectMenuChange={(activo) => {
                if (activo) setSelectMenuActivo(true);
              }}
            />
          </Suspense>
        </div>

        <div className="contenedorPSelect">
          <p>{infoSelect.tipoTela[idioma]}</p>
          <Suspense
            fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
          >
            <SelectPersonalizarToldos
              opcionesSelect={opcionesTipoTela}
              palabra={palabras.tela}
              valorSeleccionado={tipoTelaSeleccionado}
              onChange={(valor) => setTipoTelaSeleccionado(valor)}
              deshabilitado={!tipoToldoSeleccionado}
              opcionesDeshabilitadas={
                tipoToldoSeleccionado === "Cofre" ||
                tipoToldoSeleccionado === "Cortinas de Interior"
                  ? ["1"]
                  : []
              }
            />
          </Suspense>
        </div>

        <div className="contenedorPSelect">
          <p>{infoSelect.Sistema[idioma]}</p>
          <Suspense
            fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
          >
            <SelectPersonalizarToldos
              opcionesSelect={opcionesTipoSistemaToldo}
              palabra={palabras.sistema}
              valorSeleccionado={tipoSistemaToldo}
              onChange={(valor) => setTipoSistemaToldo(valor)}
              deshabilitado={!tipoToldoSeleccionado} // No se puede seleccionar si no hay toldo
              opcionesDeshabilitadas={[
                ...(tipoToldoSeleccionado === "Capota" ? ["2", "3"] : []),
                ...(tipoToldoSeleccionado === "Cortinas de Interior" ? ["3"]: []),
                ...(tipoToldoSeleccionado === "Toldo Terraza" ? ["3"] : [])
              ]}
            />
          </Suspense>
        </div>

        <div className="contenedorPSelect">
          <p>{infoSelect.Ubicacion[idioma]}</p>
          <Suspense
            fallback={<p>{idioma === "es" ? "Cargando..." : "Loading..."}</p>}
          >
            <SelectPersonalizarToldos
              opcionesSelect={ubicaciones}
              palabra={palabras.ubicacion}
              valorSeleccionado={lugarUbicacion}
              onChange={(valor) => setLugarUbicacion(valor)}
            />
          </Suspense>
        </div>
      </div>

    );
  }
);

export default ComponenteSelects;
