package developerwym.plugins.ns;

import android.content.Context;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class RecyclerViewController {
    private Context context;
    private  RecyclerView recyclerView;
    String[] data = {"Item 1", "Item 2", "Item 3","item 4","Item 5", "Item 6", "Item 7","item 8","Item 9", "Item 10", "Item 11","item 12",};

    public RecyclerViewController(Context _context){
        this.context=_context;
    }

    public RecyclerView.Adapter setAdapterRecyclerView(RecyclerView _recyclerView){
        this.recyclerView=_recyclerView;
        RecyclerView.Adapter<MyViewHolder> adapter = new RecyclerView.Adapter<MyViewHolder>() {
            @NonNull
            @Override
            public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
                return new MyViewHolder(parent.getContext());
            }

            @Override
            public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
                holder.textView.setText(data[position]);
            }

            @Override
            public int getItemCount() {
                return data.length;
            }
        };
        this.recyclerView.setAdapter(adapter);
        return this.recyclerView.getAdapter();
    }
}


class MyViewHolder extends RecyclerView.ViewHolder {
    public TextView textView;

    public MyViewHolder(Context context) {
        super(new TextView(context));
        textView = (TextView) itemView;
        textView.setTextSize(18);
        textView.setPadding(16, 16, 16, 16);
    }
}