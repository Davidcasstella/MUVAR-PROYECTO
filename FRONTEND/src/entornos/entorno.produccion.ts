/**
 * Configuración de entorno para PRODUCCIÓN
 */
export const environment = {
  production: true,
  nombre: 'produccion',
  apiUrl: 'https://api.muvar.com/api/v1',
  wsUrl: 'wss://api.muvar.com',
  oauth: {
    google: {
      clientId: 'tu-client-id-google-produccion'
    }
  },
  funciones: {
    logsConsola: false,
    debugMode: false,
    trazasRouter: false
  }
};
