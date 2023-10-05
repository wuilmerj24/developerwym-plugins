import { Color } from '@nativescript/core';
import { SpinnerData } from '../class/spinner.data.class';

@NativeClass()
export class SpinnerAdapter extends android.widget.BaseAdapter {
  constructor(private files: Array<SpinnerData>, private context: android.content.Context, private textColor: string, private bgColorSpinnerList: string, private bgColorSpinner: string) {
    super();
  }

  public getItemId(param0: number): number {
    return 0;
  }

  public getItem(param0: number) {
    this.files[param0];
  }

  public getCount(): number {
    return this.files.length;
  }

  public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
    const linearL: android.widget.LinearLayout = new android.widget.LinearLayout(this.context);
    const image: android.widget.ImageView = new android.widget.ImageView(this.context);
    const txt: android.widget.TextView = new android.widget.TextView(this.context);
    linearL.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    linearL.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    linearL.setGravity(android.view.Gravity.CENTER_VERTICAL);
    image.setLayoutParams(new android.view.ViewGroup.LayoutParams(120, 120));
    com.bumptech.glide.Glide.with(this.context).load(this.files[position].icon).centerCrop().into(image);

    txt.setText(java.lang.String.valueOf(` ${this.files[position].albunName}`));
    txt.setTextSize(19);
    txt.setTextColor(new Color(this.textColor).android);
    linearL.addView(image);
    linearL.addView(txt);
    linearL.setBackgroundColor(new Color(this.bgColorSpinner).android);
    return linearL;
  }

  public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
    const linearL: android.widget.LinearLayout = new android.widget.LinearLayout(this.context);
    const image: android.widget.ImageView = new android.widget.ImageView(this.context);
    const txt: android.widget.TextView = new android.widget.TextView(this.context);
    linearL.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 120));
    linearL.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    linearL.setGravity(android.view.Gravity.CENTER_VERTICAL);
    image.setLayoutParams(new android.view.ViewGroup.LayoutParams(120, 120));
    com.bumptech.glide.Glide.with(this.context).load(this.files[position].icon).centerCrop().into(image);

    txt.setText(java.lang.String.valueOf(` ${this.files[position].albunName} (${this.files[position].files.length + 1})`));
    txt.setTextSize(19);
    txt.setTextColor(new Color(this.textColor).android);
    linearL.addView(image);
    linearL.addView(txt);
    linearL.setBackgroundColor(new Color(this.bgColorSpinnerList).android);
    if (this.files[position].isSelected) {
      linearL.setBackgroundColor(android.graphics.Color.argb(128, 0, 0, 0));
    }
    return linearL;
  }
}
