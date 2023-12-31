import { View } from '@nativescript/core';

export class BotonForIos extends View {
  private _btn: UIButton;
  constructor(private text: string) {
    super();
  }

  createNativeView(): Object {
    this._btn = UIButton.new();
    this._btn.setTitleForState(this.text, UIControlState.Normal);

    this.nativeView = this._btn;
    return this.nativeView;
  }

  public get nativeView(): UIButton {
    return this._btn;
  }

  public set nativeView(value: UIButton) {
    this._btn = value;
  }
}
