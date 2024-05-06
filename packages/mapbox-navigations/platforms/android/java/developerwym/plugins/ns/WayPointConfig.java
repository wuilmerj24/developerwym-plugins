package developerwym.plugins.ns;

import android.content.Context;
import androidx.annotation.NonNull;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import com.mapbox.api.directions.v5.DirectionsCriteria;
import com.mapbox.api.directions.v5.models.RouteOptions;
import com.mapbox.geojson.Point;
import com.mapbox.navigation.base.options.NavigationOptions;
import com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
import developerwym.plugins.ns.R;

import java.util.List;

public class WayPointConfig {
    private Context context;
    private String token;

    public WayPointConfig(Context _context, String _token) {
        this.context = _context;
        this.token = _token;
        /*NavigationOptions navigationOptions = new NavigationOptions.Builder(_context)
                .isDebugLoggingEnabled(true)
                .enableSensors(true)
                .accessToken(_token).build();
        MapboxNavigationApp.setup(
                navigationOptions).attach(new LifecycleOwner() {
                    @NonNull
                    @Override
                    public Lifecycle getLifecycle() {
                        return null;
                    }
                });*/
    }

    public RouteOptions createRoutes(List<Point> coordenadas) {
        RouteOptions routeOptions = RouteOptions
                .builder()
                .profile(DirectionsCriteria.PROFILE_DRIVING)
                .alternatives(true) 
                .coordinatesList(coordenadas)
                .build();
        return routeOptions;
    }

}
