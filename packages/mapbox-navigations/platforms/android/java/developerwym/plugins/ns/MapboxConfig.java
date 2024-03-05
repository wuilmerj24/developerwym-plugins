package developerwym.plugins.ns;

import com.mapbox.navigation.dropin.NavigationView;
import android.content.Context;
import com.mapbox.navigation.dropin.ViewOptionsCustomization;
import com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions;

public class MapboxConfig {

    public void setViewOptionsCustomization(ViewOptionsCustomization viewOptionsCustomization, Context context) {
        MapboxRouteLineOptions.Builder mapbixRouteLineoptions = new MapboxRouteLineOptions.Builder(context);
        viewOptionsCustomization.setRouteLineOptions(mapbixRouteLineoptions.build());
    }

}
