 package developerwym.plugins.ns;


 import android.content.Context;

 import androidx.annotation.NonNull;
 import androidx.annotation.Nullable;

 import com.mapbox.api.directions.v5.models.RouteOptions;
 import com.mapbox.geojson.Point;
 import com.mapbox.maps.EdgeInsets;
 import com.mapbox.navigation.base.route.NavigationRoute;
 import com.mapbox.navigation.base.route.RouterFailure;
 import com.mapbox.navigation.base.route.RouterOrigin;
 import com.mapbox.navigation.dropin.NavigationView;
 import com.mapbox.navigation.dropin.navigationview.NavigationViewListener;
 import com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue;

 import java.util.List;

 public class IEventosNavView extends NavigationViewListener {
     private Eventos eventos;

     public IEventosNavView(Context _context, final NavigationView navigationMapView, final Eventos eventos) {
         this.eventos = eventos;
     }

     @Override
     public void onActiveNavigation() {
         super.onActiveNavigation();
         this.eventos.onActiveNavigation();
     }

     @Override
     public void onArrival() {
         super.onArrival();
         this.eventos.onArrival();
     }

     @Override
     public void onAudioGuidanceStateChanged(boolean muted) {
         super.onAudioGuidanceStateChanged(muted);
         this.eventos.onAudioGuidanceStateChanged(muted);
     }

     @Override
     public void onCameraPaddingChanged(@NonNull EdgeInsets padding) {
         super.onCameraPaddingChanged(padding);
         this.eventos.onCameraPaddingChanged(padding);
     }

     @Override
     public void onDestinationChanged(@Nullable Point destination) {
         super.onDestinationChanged(destination);
         this.eventos.onDestinationChanged(destination);
     }

     @Override
     public void onDestinationPreview() {
         super.onDestinationPreview();
         this.eventos.onDestinationPreview();
     }

     @Override
     public void onFollowingCameraMode() {
         super.onFollowingCameraMode();
         this.eventos.onFollowingCameraMode();
     }

     @Override
     public void onFreeDrive() {
         super.onFreeDrive();
         this.eventos.onFreeDrive();
     }

     @Override
     public void onIdleCameraMode() {
         super.onIdleCameraMode();
         this.eventos.onIdleCameraMode();
     }

     @Override
     public void onInfoPanelCollapsed() {
         super.onInfoPanelCollapsed();
         this.eventos.onInfoPanelCollapsed();
     }

     @Override
     public void onInfoPanelDragging() {
         super.onInfoPanelDragging();
         this.eventos.onInfoPanelDragging();
     }

     @Override
     public void onInfoPanelExpanded() {
         super.onInfoPanelExpanded();
         this.eventos.onInfoPanelExpanded();
     }

     @Override
     public void onInfoPanelHidden() {
         super.onInfoPanelHidden();
         this.eventos.onInfoPanelHidden();
     }

     @Override
     public void onInfoPanelSettling() {
         super.onInfoPanelSettling();
         this.eventos.onInfoPanelSettling();
     }

     @Override
     public void onInfoPanelSlide(float slideOffset) {
         super.onInfoPanelSlide(slideOffset);
         this.eventos.onInfoPanelSlide(slideOffset);
     }

     @Override
     public void onManeuverCollapsed() {
         super.onManeuverCollapsed();
         this.eventos.onManeuverCollapsed();
     }

     @Override
     public void onManeuverExpanded() {
         super.onManeuverExpanded();
         this.eventos.onManeuverExpanded();
     }

     @Override
     public void onMapClicked(@NonNull Point point) {
         super.onMapClicked(point);
         this.eventos.onMapClicked(point);
     }

     @Override
     public void onOverviewCameraMode() {
         super.onOverviewCameraMode();
         this.eventos.onOverviewCameraMode();
     }

     @Override
     public void onRouteFetchCanceled(@NonNull RouteOptions routeOptions, @NonNull RouterOrigin routerOrigin) {
         super.onRouteFetchCanceled(routeOptions, routerOrigin);
         this.eventos.onRouteFetchCanceled(routeOptions, routerOrigin);
     }

     @Override
     public void onRouteFetchFailed(@NonNull List<RouterFailure> reasons, @NonNull RouteOptions routeOptions) {
         super.onRouteFetchFailed(reasons, routeOptions);
         this.eventos.onRouteFetchFailed(reasons, routeOptions);
     }

     @Override
     public void onRouteFetchSuccessful(@NonNull List<NavigationRoute> routes) {
         super.onRouteFetchSuccessful(routes);
         this.eventos.onRouteFetchSuccessful(routes);
     }

     @Override
     public void onRouteFetching(long requestId) {
         super.onRouteFetching(requestId);
         this.eventos.onRouteFetching(requestId);
     }

     @Override
     public void onRoutePreview() {
         super.onRoutePreview();
         this.eventos.onRoutePreview();
     }

     @Override
     public void onSpeedInfoClicked(@Nullable SpeedInfoValue speedInfo) {
         super.onSpeedInfoClicked(speedInfo);
         this.eventos.onSpeedInfoClicked(speedInfo);
     }

     public interface Eventos {
         void onActiveNavigation();

         void onArrival();

         void onAudioGuidanceStateChanged(boolean muted);

         void onCameraPaddingChanged(@NonNull EdgeInsets edgeInsets);

         void onDestinationChanged(@Nullable Point destination);

         void onDestinationPreview();

         void onFollowingCameraMode();

         void onFreeDrive();

         void onIdleCameraMode();

         void onInfoPanelCollapsed();

         void onInfoPanelDragging();

         void onInfoPanelExpanded();

         void onInfoPanelHidden();

         void onInfoPanelSettling();

         void onInfoPanelSlide(float slideOffset);

         void onManeuverCollapsed();

         void onManeuverExpanded();

         void onMapClicked(@NonNull Point point);

         void onOverviewCameraMode();

         void onRouteFetchCanceled(@NonNull RouteOptions routeOptions, @NonNull RouterOrigin routerOrigin);

         void onRouteFetchFailed(@NonNull List<RouterFailure> reasons, @NonNull RouteOptions routeOptions);

         void onRouteFetchSuccessful(@NonNull List<NavigationRoute> routes);

         void onRouteFetching(long requestId);

         void onRoutePreview();

         void onSpeedInfoClicked(@Nullable SpeedInfoValue speedInfo);
     }
 }
