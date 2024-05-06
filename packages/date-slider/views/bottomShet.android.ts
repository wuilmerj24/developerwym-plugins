import { AnimationCurve, Button, Color, GestureEvents, GestureTypes, GridUnitType, ItemSpec, Screen, TapGestureEventData, WrapLayout } from '@nativescript/core';
import { CalendarMonth } from '../interfaces/meses.interface';

export class SheetForAndroid extends WrapLayout {
  public mes: string;
  constructor(private files: Array<CalendarMonth>, private bottomSheetDialog: com.google.android.material.bottomsheet.BottomSheetDialog) {
    super();
    this.width = Screen.mainScreen.widthDIPs;
    this.height = Screen.mainScreen.heightDIPs / 3;
    this.animate({
      translate: { x: 0, y: 0 },
      duration: 500,
      curve: AnimationCurve.easeInOut,
    });
    this.createItems();
  }

  private createItems() {
    for (let i: number = 0; i < this.files.length; i++) {
      const btn: Button = new Button();
      btn.backgroundColor = new Color('transparent');
      btn.boxShadow = 'none';
      btn.textWrap = true;
      btn.text = this.files[i].monthName;

      btn.borderColor = this.files[i].isSelected ? new Color('red') : new Color('transparent');
      btn.borderWidth = this.files[i].isSelected ? 0.1 : 0;
      btn.androidElevation = 0;
      btn.margin = 2;
      btn.style.textTransform = 'capitalize';
      btn.once('tap', (args: TapGestureEventData) => {
        this.mes = this.files[i].monthName;
        this.bottomSheetDialog.dismiss();
      });
      this.addChild(btn);
    }
  }

  initNativeView(): void {
    super.initNativeView();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    this.animate({
      translate: { x: 0, y: this.getMeasuredHeight() },
      duration: 500,
      curve: AnimationCurve.easeInOut,
    });
  }
}
