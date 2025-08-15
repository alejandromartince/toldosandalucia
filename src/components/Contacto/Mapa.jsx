import { useIdioma } from "../../Hooks/General/useIdioma";

const Mapa = ({ idioma }) => {
  const idiomaTexto = idioma;
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.845256782632!2d-4.533447524706247!3d36.606035778621425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fc9a06ccb465%3A0x14527abdef1ec2fa!2sToldos%20Andaluc%C3%ADa!5e0!3m2!1ses!2ses!4v1755270407583!5m2!1s${idiomaTexto}!2sen`;
  return (
    <div
      style={{
        height: "250px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.58)",
        marginTop: "1rem",
      }}
    >
      <iframe
        title="Mapa Toldos Andalucía"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={src}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer"      // ⚡ Evita enviar cookies del navegador a Google
        sandbox="allow-scripts allow-same-origin allow-popups" // ⚡ Limita el iframe y reduce warnings
      ></iframe>
    </div>
  );
};

export default Mapa;
