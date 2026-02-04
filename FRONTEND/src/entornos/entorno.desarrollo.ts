/**
 * Configuración de entorno para DESARROLLO
 */
export const environment = {
  production: false,
  nombre: 'desarrollo',
  apiUrl: 'http://localhost:3000/api/v1',
  wsUrl: 'ws://localhost:3000',
  oauth: {
    google: {
      clientId: 'tu-client-id-google-desarrollo'
    }
  },
  funciones: {
    logsConsola: true,
    debugMode: true,
    trazasRouter: false
  }
};
