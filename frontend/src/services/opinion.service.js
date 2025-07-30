import axios from "axios";

const listarOpiniones = async () => {
  const res = await axios.get("http://localhost:3000/api/opiniones");
 
  if (!Array.isArray(res.data)) return { data: [] };
  return res;
};
const crearOpinion = (data) =>
  axios.post("http://localhost:3000/api/opiniones", data);
const eliminarOpinion = (id) =>
  axios.delete(`http://localhost:3000/api/opiniones/${id}`);

const opinionService = {
  listarOpiniones,
  crearOpinion,
  eliminarOpinion,
};

export default opinionService;
