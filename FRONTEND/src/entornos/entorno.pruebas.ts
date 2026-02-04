/**
 * Configuración de entorno para PRUEBAS
 */
export const environment = {
  production: false,
  nombre: 'pruebas',
  apiUrl: 'https://pruebas-api.muvar.com/api/v1',
  wsUrl: 'wss://pruebas-api.muvar.com',
  oauth: {
    google: {
      clientId: 'tu-client-id-google-pruebas'
    }
  },
  funciones: {
    logsConsola: true,
    debugMode: false,
    trazasRouter: false
  }
};
