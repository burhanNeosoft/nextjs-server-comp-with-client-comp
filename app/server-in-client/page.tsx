import ClientCompo from "./ClientCompo"; /* untill this compo is loaded(compile) the parent compo(<ClientCompo/>) won't be visible */
import ServerCompo from "./ServerCompo";
const ServerInClient = () => {
  return (
    <>
      <h1>Main Compo</h1>
      <ClientCompo>
        <ServerCompo />
      </ClientCompo>
    </>
  );
};

export default ServerInClient;
