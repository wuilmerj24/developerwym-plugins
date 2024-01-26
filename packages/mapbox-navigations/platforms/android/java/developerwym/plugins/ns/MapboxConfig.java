package developerwym.plugins.ns;

import com.mapbox.navigation.dropin.NavigationView;
import android.content.Context;

public class MapboxConfig {
    public MapboxConfig() {
    }

    public void configStyles(Context context,NavigationView navigationView, int infoPanelBackground, String compassButtonStyle) {
        int resourceId = context.getResources().getIdentifier(compassButtonStyle, "drawable", context.getPackageName());
        navigationView.customizeViewOptions((options) -> {
            options.setShowCameraModeActionButton(true);

            return kotlin.Unit.INSTANCE;
        });
    }

}
