import axios from "axios";

class LibroMatrizService {
  async getLibroMatriz(query?: string | null) {
    console.log("Hallo. Ejecutando getLibroMatriz...");
    try {
      const request = await axios.get(
        `http://localhost:3000/libro-matriz${query ? query : ""}`
      );
      console.log(request.data.data);
      return request.data.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LibroMatrizService();
