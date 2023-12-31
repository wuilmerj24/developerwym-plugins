import { View } from '@nativescript/core';

export class BotonForAndroid extends View {
  private _btn: android.widget.Button;
  constructor(private text: string) {
    super();
  }

  createNativeView(): Object {
    this._btn = new android.widget.Button(this._context);
    this._btn.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    this._btn.setId(android.view.View.generateViewId());
    this._btn.setText(this.text);
    this._btn.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    this.nativeView = this._btn;
    return this.nativeView;
  }

  public get nativeView(): android.widget.Button {
    return this._btn;
  }

  public set nativeView(value: android.widget.Button) {
    this._btn = value;
  }
}
