import { ARAddPlaneOptions, ARDimensions, ARPlane as IARPlane, ARPosition } from "../../common";
import { ARCommonGeometryNode } from "./arcommongeometry";

export class ARPlane extends ARCommonGeometryNode implements IARPlane {
  private planeGeometry: SCNBox;
  private anchor: ARAnchor;

  id: string;
  position: ARPosition;
  ios: SCNNode;

  constructor(options?: ARAddPlaneOptions, node?: SCNNode) {
    if (options) {
      super(options, node);
    }
  }

  static createExternal(options: ARAddPlaneOptions): ARPlane {
    const dimensions: ARDimensions = <ARDimensions>(typeof options.dimensions !== "number" ? options.dimensions : {
      x: options.dimensions,
      y: options.dimensions
    });

    const plane = SCNPlane.planeWithWidthHeight(dimensions.x, dimensions.y);
    return new ARPlane(options, SCNNode.nodeWithGeometry(plane));
  }

  static create(anchor: ARAnchor, opacity: number, material: SCNMaterial) {
    const instance = new ARPlane();
    instance.ios = SCNNode.new();
    instance.anchor = anchor;

    // anchor.extent is undefined so we need to hack to extract it :(
    const anchorstr = "" + anchor;
    const extentStart = anchorstr.indexOf("extent=(") + "extent=(".length;
    const extentStr = anchorstr.substring(extentStart, anchorstr.indexOf(")", extentStart));
    const extendParts = extentStr.split(" ");
    const planeHeight = 0.01;
    instance.planeGeometry = SCNBox.boxWithWidthHeightLengthChamferRadius(+extendParts[0], planeHeight, +extendParts[2], 0);

    const translationStart = anchorstr.indexOf("<translation=(") + "<translation=(".length;
    const translationStr = anchorstr.substring(translationStart, anchorstr.indexOf(")", translationStart));
    const translationParts = translationStr.split(" ");
    instance.position = new ARPosition(+translationParts[0], +translationParts[1], +translationParts[2]);

    instance.setMaterial(material, opacity);

    const planeNode = SCNNode.nodeWithGeometry(instance.planeGeometry);
    planeNode.position = {x: 0, y: -planeHeight / 2, z: 0};
    planeNode.physicsBody = SCNPhysicsBody.bodyWithTypeShape(
        SCNPhysicsBodyType.Kinematic,
        SCNPhysicsShape.shapeWithGeometryOptions(instance.planeGeometry, null));

    ARPlane.setTextureScale(instance.planeGeometry);

    instance.ios.addChildNode(planeNode);
    instance.id = instance.anchor.identifier.UUIDString;
    return instance;
  }

  setMaterial(material: SCNMaterial | null, opacity: number): void {
    const transparentMaterial = SCNMaterial.new();
    transparentMaterial.diffuse.contents = UIColor.colorWithWhiteAlpha(1.0, 0.0);

    const materialArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(6);
    materialArray.addObject(transparentMaterial);
    materialArray.addObject(transparentMaterial);
    materialArray.addObject(transparentMaterial);
    materialArray.addObject(transparentMaterial);
    if (opacity === 0 || material === null) {
      materialArray.addObject(transparentMaterial);
    } else {
      material.transparency = opacity;
      materialArray.addObject(material);
    }
    materialArray.addObject(transparentMaterial);
    this.planeGeometry.materials = materialArray;
  }

  update(anchor: any) {
    // anchor.extent is undefined so we need to hack to extract it
    const anchorstr = "" + anchor;
    const extentStart = anchorstr.indexOf("extent=(") + "extent=(".length;
    const extentStr = anchorstr.substring(extentStart, anchorstr.indexOf(")", extentStart));
    const extendParts = extentStr.split(" ");

    // if this was a wrapper class we can have a 'planeGeometry' property there without using 'plany: any'
    this.planeGeometry.width = +extendParts[0];
    this.planeGeometry.length = +extendParts[2];

    const centerStart = anchorstr.indexOf("center=(") + "center=(".length;
    const centerStr = anchorstr.substring(centerStart, anchorstr.indexOf(")", centerStart));
    const centerParts = centerStr.split(" ");

    this.ios.position = {x: +centerParts[0], y: 0, z: +centerParts[2]};

    const childNode = this.ios.childNodes.firstObject;
    childNode.physicsBody = SCNPhysicsBody.bodyWithTypeShape(
        SCNPhysicsBodyType.Kinematic,
        SCNPhysicsShape.shapeWithGeometryOptions(this.planeGeometry, null));

    ARPlane.setTextureScale(this.planeGeometry);
  }

  remove() {
    this.ios.removeFromParentNode();
    // removal from the global 'planes' property is done at 'rendererDidRemoveNodeForAnchor'
  }

  private static setTextureScale(planeGeometry: SCNBox): void {
    const width = planeGeometry.width;
    const height = planeGeometry.length;
    const material = planeGeometry.materials[4];
    const scaleFactor = 1;

    // because this commented line is not possible, we do it differently:
    // const m = {sx: width * scaleFactor, sy: height * scaleFactor, sz: 1};
    const m = new SCNMatrix4();
    m.m11 = width * scaleFactor;
    m.m22 = height * scaleFactor;
    m.m33 = 1;

    material.diffuse.contentsTransform = m;
    material.roughness.contentsTransform = m;
    material.metalness.contentsTransform = m;
    material.normal.contentsTransform = m;
  }
}
