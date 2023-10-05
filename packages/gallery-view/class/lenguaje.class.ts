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
        // ... otras traducciones en inglés ...
      },
      es: {
        titulo_albun: 'Rollo de Cámara',
        btn_presentar: 'Presentar',
        btn_cancelar: 'Cancelar',
        btn_terminar: 'Terminar',
        btn_editar: 'Editar',
        msj_permiso: 'Se requieren permisos para esta funcionalidad.',
        // ... otras traducciones en español ...
      },
      chine: {
        titulo_albun: '相册 (Xiàngcè)',
        btn_presentar: '目前',
        btn_cancelar: '取消 (Qǔxiāo)',
        btn_terminar: '完成 (Wánchéng)',
        btn_editar: '编辑 (Biānjí)',
        msj_permiso: '此功能需要权限。 (Cǐ gōngnéng xūyào quánxiàn)',
        // ... otras traducciones en chino ...
      },
      russian: {
        titulo_albun: 'Камерный рулон (Kamernyy rulon)',
        btn_presentar: 'подносить',
        btn_cancelar: "Отменить (Otmenit')",
        btn_terminar: "Закончить (Zakonchit')",
        btn_editar: "Редактировать (Redaktirovat')",
        msj_permiso: 'Для этой функции требуются разрешения. (Dlya ètoj funktsii trebuyutsya razresheniya)',
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
