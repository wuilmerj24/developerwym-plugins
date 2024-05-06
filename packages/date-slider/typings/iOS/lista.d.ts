declare class ListaForNs extends NSObject {
  static alloc(): ListaForNs; // inherited from NSObject

  static new(): ListaForNs; // inherited from NSObject

  createScrollWithContenedor(contenedor: UIView): void;
}
