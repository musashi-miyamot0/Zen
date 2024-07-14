
from django.conf.urls.static import static
from django.urls import path
from . import views
from zenChat import settings





urlpatterns = [
    path('api/v1/search/', views.SearchUser.as_view(), name='test'),
    path('api/v1/register/', views.RegisterUser.as_view(), name='register'),
    path('api/v1/token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
               ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
    