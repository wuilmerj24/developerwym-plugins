import { Color } from '@nativescript/core';
import { CalendarMonth } from '../interfaces/meses.interface';
import { Dia } from '../interfaces/dias.interface';
import { Shape } from '../enums/formas.enum';

@NativeClass()
export class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public txtDayName: android.widget.TextView;
  public txtDayNum: android.widget.TextView;
  constructor(public view: android.view.View, txtDayNameId: number, txtDayNumId: number) {
    super(view);
    this.txtDayName = view.findViewById(txtDayNameId) as android.widget.TextView;
    this.txtDayNum = view.findViewById(txtDayNumId) as android.widget.TextView;
  }
}

@NativeClass()
export class AdapterCAndroid extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolder> {
  constructor(private files: Array<Dia>, private tipo_view: Shape, private error_view: string, private txtColorDayName: string, private txtColorDayNameSize: number, private txtColorDayNum: string, private txtColorDayNumSize: number, private currentDateBorderColor: string, private bgColorActive: string, private bgColorDeactive: string) {
    super();
  }

  public getItemCount(): number {
    if (this.files != null || this.files != undefined || this.files.length == 0) {
      return this.files.length;
    }
    return 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): ViewHolder {
    const linearLayout: android.widget.LinearLayout = new android.widget.LinearLayout(parent.getContext());
    linearLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
    linearLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
    linearLayout.setPadding(10, 10, 10, 10);
    linearLayout.setElevation(10);
    const drawable: android.graphics.drawable.GradientDrawable = new android.graphics.drawable.GradientDrawable();
    drawable.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
    drawable.setColor(new Color(this.bgColorDeactive).android);
    drawable.setStroke(1, new Color('transparent').android);

    switch (this.tipo_view) {
      case Shape.CIRCLE:
        drawable.setCornerRadius(100);
        linearLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(200, 200));
        break;
      case Shape.SQUARE:
        drawable.setCornerRadius(10);
        linearLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(170, 170));
        break;
      case Shape.VERTICAL_RECTANGLE:
        drawable.setCornerRadius(15);
        linearLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(170, 210));
        break;
      default:
        console.log(this.error_view);
        break;
    }

    linearLayout.setBackground(drawable);

    const txtDayName: android.widget.TextView = new android.widget.TextView(parent.getContext());
    txtDayName.setId(android.view.View.generateViewId());
    txtDayName.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
    txtDayName.setTextColor(new Color(this.txtColorDayName).android);
    txtDayName.setTextSize(parseFloat(this.txtColorDayNameSize.toString()));
    txtDayName.setGravity(android.view.Gravity.CENTER);
    txtDayName.setTypeface(null, android.graphics.Typeface.BOLD);
    txtDayName.setShadowLayer(5, 1, 1, android.graphics.Color.GRAY);
    linearLayout.addView(txtDayName);

    const txtDayNum: android.widget.TextView = new android.widget.TextView(parent.getContext());
    txtDayNum.setId(android.view.View.generateViewId());
    const layoutParams: android.widget.LinearLayout.LayoutParams = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
    layoutParams.gravity = android.view.Gravity.CENTER;
    txtDayNum.setLayoutParams(layoutParams);
    txtDayNum.setTextColor(new Color(this.txtColorDayNum).android);
    txtDayNum.setTextSize(parseFloat(this.txtColorDayNumSize.toString()));
    txtDayNum.setTypeface(null, android.graphics.Typeface.BOLD);
    txtDayNum.setShadowLayer(5, 1, 1, android.graphics.Color.GRAY);
    linearLayout.addView(txtDayNum);

    return new ViewHolder(linearLayout, txtDayName.getId(), txtDayNum.getId());
  }

  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
  public onBindViewHolder(holder: ViewHolder, position: number): void {
    if (this.files[position].isCurrentDate) {
      const drawable: android.graphics.drawable.GradientDrawable = holder.itemView.getBackground() as android.graphics.drawable.GradientDrawable;
      drawable.setColor(new Color(this.bgColorDeactive).android);
      drawable.setStroke(1, new Color(this.currentDateBorderColor).android);
      holder.itemView.setBackground(drawable);
    }
    let dayName: string = this.files[position].dayName.substring(0, 3);
    dayName = dayName.substring(0, 1).toUpperCase() + dayName.substring(1, 3);
    holder.txtDayName.setText(dayName);
    holder.txtDayNum.setText(this.files[position].dayNum.toString());
  }
}
