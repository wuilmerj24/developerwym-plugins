export class Traductor {
  private idiomaActual: string;
  private traducciones: { [key: string]: { [key: string]: string } };

  constructor(idiomaInicial: string) {
    this.idiomaActual = idiomaInicial;
    console.log('idiomaActual ', this.idiomaActual);
    // Define las traducciones para diferentes idiomas
    this.traducciones = {
      en: {
        titulo_albun: 'Camera Roll',
        btn_presentar: 'Present',
        btn_cancelar: 'Cancel',
        btn_terminar: 'Finish',
        btn_editar: 'Edit',
        msj_permiso: 'Permissions are required for this functionality.',
        msj_no_data: 'Empty',
        // ... otras traducciones en inglés ...
      },
      es: {
        titulo_albun: 'Rollo de Cámara',
        btn_presentar: 'Presentar',
        btn_cancelar: 'Cancelar',
        btn_terminar: 'Terminar',
        btn_editar: 'Editar',
        msj_permiso: 'Se requieren permisos para esta funcionalidad.',
        msj_no_data: 'Vacio.',
        // ... otras traducciones en español ...
      },
      chine: {
        titulo_albun: '相册',
        btn_presentar: '目前',
        btn_cancelar: '取消',
        btn_terminar: '完成',
        btn_editar: '编辑',
        msj_permiso: '此功能需要权限。',
        msj_no_data: '空',
        // ... otras traducciones en chino ...
      },
      russian: {
        titulo_albun: 'Камерный рулон',
        btn_presentar: 'подносить',
        btn_cancelar: 'Отменить',
        btn_terminar: 'Закончить',
        btn_editar: 'Редактировать',
        msj_permiso: 'Для этой функции требуются разрешения.',
        msj_no_data: 'пустота.',
        // ... otras traducciones en ruso ...
      },
    };
  }

  // Método para cambiar el idioma
  cambiarIdioma(idioma: string) {
    this.idiomaActual = idioma;
  }

  // Método para obtener una traducción específica
  obtenerTraduccion(clave: string): string {
    if (this.traducciones[this.idiomaActual] && this.traducciones[this.idiomaActual][clave]) {
      return this.traducciones[this.idiomaActual][clave];
    }
    // Si la clave no existe en el idioma actual, devuelve la clave misma
    return clave;
  }
}
