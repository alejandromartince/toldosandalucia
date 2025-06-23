import { lazy } from "react";

export const lazyModelbyName = (modelName) => {
    switch (modelName) {
        case "Toldo":
            return lazy(() => import("../../components/Objetos 3D/Toldos/Toldo"));
        case "Cofre":
            return lazy(() => import("../../components/Objetos 3D/Toldos/Cofre.jsx"));
        case "Veranda":
            return lazy(() => import("../../components/Objetos 3D/Toldos/Veranda"));
        case "Capota":
            return lazy(() => import("../../components/Objetos 3D/Toldos/Capota"));
        case "Pergola":
            return lazy(() => import("../../components/Objetos 3D/Toldos/Pergola"));
        default:
            throw new Error(`Unknown model name: ${modelName}`);
    }
}