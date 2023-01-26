// Importar el modulo express y gaurdarlo en una cte
import express from 'express';
const app = express();

// Importar el archivo de configuracion
import { PORT } from "./config.js";

// Importar el idex.routes
import indexRoutes from './routes/index.routes.js';

// Importar el enrutador de task.routes
import taskRoutes from "./routes/tasks.routes.js";

// Importar el modulo de cors
import cors from "cors";

// Indicar que app utilice el modulo cors para permitir peticiones desde el servidor de desarrollo del frontend
app.use(cors());

// Las peticiones antes de llegar a las rutas, se pasaran por una funcion json de express
// para que el sistema pueda procesarlo y entenderlo
app.use(express.json());

// Indicar que la aplicacion escucha por el puerto 3000
app.listen(PORT);
console.log(`Sever corriendo en el puerto ${PORT}`);

// Indicar que app haga uso de las rutas de indexRoutes
app.use(indexRoutes);

// Indicar que app haga uso de las rutas definidas en task.routes.js
app.use(taskRoutes);










