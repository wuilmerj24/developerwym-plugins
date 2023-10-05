package developerwym.plugins.ns;

import android.content.Context;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.Priority;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.lang.Object;
import java.lang.System;
import developerwym.plugins.ns.R;
import android.util.Log;
import java.util.HashMap;
import android.content.res.ColorStateList;

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerAdapter.ViewHolder> {
    // private ArrayList<developerwym.plugins.ns.SpinnerDataFiles> lista;
    private ArrayList<Object> lista;

    // public RecyclerAdapter(ArrayList<developerwym.plugins.ns.SpinnerDataFiles> _lista) {
    public RecyclerAdapter(ArrayList<Object> _lista) {
    // public RecyclerAdapter(HashMap<String,Object> _lista) {
        this.lista = _lista;
    }

    @NonNull
    @Override
    public RecyclerAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater=LayoutInflater.from(parent.getContext());
        View view =layoutInflater.inflate(R.layout.custom_single_image,parent,false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerAdapter.ViewHolder holder, int position) {
        // holder.imageView.setImageURI(Uri.parse(this.lista.get(position).getFile()));
        try {
            Object objeto = this.lista.get(position);
            HashMap data= (HashMap) objeto;
            Glide
                .with(holder.itemView.getContext())
                .load(data.get("data"))
                .centerCrop()
                .override(200)
                .placeholder(new ColorDrawable(Color.BLACK))
                .error(new ColorDrawable(Color.RED))
                .priority(Priority.HIGH)
                .into(holder.imageView);
                if(Boolean.valueOf(data.get("isSelected").toString())){
                    
                }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }

    @Override
    public int getItemCount() {
        return this.lista.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{
        ImageView imageView;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            imageView=itemView.findViewById(R.id.image);
        }
    }
}
