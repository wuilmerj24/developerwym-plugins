package upinn.plugins.ns;

import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class CustomRecyclerView extends RecyclerView.OnScrollListener {
    private ScrollEvento scrollEvento;

    public CustomRecyclerView(Context context, final RecyclerView recyclerView, final ScrollEvento scrollEvento) {
        this.scrollEvento = scrollEvento;
    }

    @Override
    public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
        super.onScrolled(recyclerView, dx, dy);
        this.scrollEvento.onScrolled(recyclerView, dx, dy);
    }

    @Override
    public void onScrollStateChanged(@NonNull RecyclerView recyclerView, int newState) {
        super.onScrollStateChanged(recyclerView, newState);
        this.scrollEvento.onScrollStateChanged(recyclerView, newState);
    }

    public interface ScrollEvento {
        void onScrolled(RecyclerView recyclerView, int dx, int dy);

        void onScrollStateChanged(RecyclerView recyclerView, int state);
    }
}
