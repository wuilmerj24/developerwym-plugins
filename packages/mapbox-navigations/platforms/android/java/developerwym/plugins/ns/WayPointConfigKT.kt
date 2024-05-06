package developerwym.plugins.ns;

import android.content.Context
import com.mapbox.api.directions.v5.DirectionsCriteria
import com.mapbox.api.directions.v5.models.RouteOptions
import com.mapbox.geojson.Point
import com.mapbox.navigation.base.extensions.applyDefaultNavigationOptions
import com.mapbox.navigation.base.extensions.applyLanguageAndVoiceUnitOptions

open class WaypointConfigKT(var context:Context) {
    open fun createRoutes():RouteOptions.Builder{
        /*return RouteOptions
            .builder()
            .applyDefaultNavigationOptions()
            .applyLanguageAndVoiceUnitOptions(this.context)
            .coordinatesList(coordenadas)
            .profile(DirectionsCriteria.PROFILE_DRIVING)
            .alternatives(true)
            .enableRefresh(true)
            .voiceInstructions(true)
            .build()*/
        var routeOptins=RouteOptions.builder().applyDefaultNavigationOptions().applyLanguageAndVoiceUnitOptions(this.context);
        
        return routeOptins
    }
}