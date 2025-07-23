import { Html } from "@react-three/drei";

//Importamos el contexto del idioma
import { useIdioma } from '../../Hooks/General/useIdioma.js'

import "./PantallaCargaProductos.css";

const PantallaCargaParaCanvas = () => {
    const { idioma } = useIdioma();

    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            {/* Spinner */}
            <div className="carga-contenedor">
                <div className="spinner"></div>

            </div>
            {/* Texto de carga */}
            <p
                style={{
                    fontSize: 14,
                    color: "#f1f1f1",
                    fontWeight: "300",
                    marginTop: 40,
                }}
            >
                {idioma === "es" ? "Cargando..." : "Loading..."}
            </p>
        </Html>
    );
}

export default PantallaCargaParaCanvas;
