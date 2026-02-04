/**
 * Configuración de entorno para PREPRODUCCIÓN
 */
export const environment = {
  production: true,
  nombre: 'preproduccion',
  apiUrl: 'https://preproduccion-api.muvar.com/api/v1',
  wsUrl: 'wss://preproduccion-api.muvar.com',
  oauth: {
    google: {
      clientId: 'tu-client-id-google-preproduccion'
    }
  },
  funciones: {
    logsConsola: true,
    debugMode: false,
    trazasRouter: false
  }
};
