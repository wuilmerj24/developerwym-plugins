export class SpinnerData {
  id: any;
  albunName: any;
  files: Array<SpinnerDataFiles>;
  isSelected: boolean;
  icon: string;
}

export class SpinnerDataFiles {
  id: any;
  file: any;
  isSelected: boolean;
  constructor(id: any, file: any, isSelected: boolean) {
    this.id = id;
    this.file = file;
    this.isSelected = isSelected;
  }

  public getFile(): string {
    return this.file;
  }
}
