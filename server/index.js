// Importar el modulo express y gaurdarlo en una cte
import express from 'express';
const app = express();

// Importar el archivo de configuracion
import { PORT } from "./config.js";

// Importar el idex.routes
import indexRoutes from './routes/index.routes.js';

// Importar el enrutador de task.routes
import taskRoutes from "./routes/tasks.routes.js";

// Indicar que la aplicacion escucha por el puerto 3000
app.listen(PORT);
console.log(`Sever corriendo en el puerto ${PORT}`);

// Indicar que app haga uso de las rutas de indexRoutes
app.use(indexRoutes);

// Indicar que app haga uso de las rutas definidas en task.routes.js
app.use(taskRoutes);







