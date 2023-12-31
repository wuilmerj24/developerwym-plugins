import { TipoFile } from '../enums/tipofile.enum';

export class GaleriaViewAlbumns {
  id: number;
  albunName: string;
  files: Array<GaleriaViewAlbumnsData>;
  icon: string;
  isSelected: boolean;
  constructor(id: number, albunName: string, files: Array<GaleriaViewAlbumnsData>, icon: string, isSelected: boolean) {
    this.id = id;
    this.albunName = albunName;
    this.files = files;
    this.icon = icon;
    this.isSelected = isSelected;
  }

  set setIsSelected(value: boolean) {
    this.isSelected = value;
  }

  get getIsSelected(): boolean {
    return this.isSelected;
  }
}

export class GaleriaViewAlbumnsData {
  id: number;
  file: string;
  isSelected: boolean;
  tipo: TipoFile;
  constructor(id: number, file: string, isSelected: boolean, tipo: TipoFile) {
    this.id = id;
    this.file = file;
    this.isSelected = isSelected;
    this.tipo = tipo;
  }

  set setIsSelected(value: boolean) {
    this.isSelected = value;
  }

  get getIsSelected(): boolean {
    return this.isSelected;
  }
}
