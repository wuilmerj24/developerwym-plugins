declare module developerwym.plugins.ns {
  import Context = android.content.Context;
  import RecyclerView = androidx.recyclerview.widget.RecyclerView;

  class RecyclerViewController {
    private context: Context;
    private recyclerView: RecyclerView;
    private data: string[];

    constructor(context: Context);

    setAdapterRecyclerView(recyclerView: RecyclerView): RecyclerView.Adapter<MyViewHolder>;
  }

  class MyViewHolder extends RecyclerView.ViewHolder {
    public textView: TextView;

    constructor(context: Context);
  }
}
