from rest_framework import routers
from django.urls import include, path
from . import views
# from .views import ProductViewSet

router = routers.SimpleRouter()
router.register(r'', views.UserViewSet)
urlpatterns =[
    path('login/',views.signin,name='signin'),
    path('logout/<int:id>/',views.signout,name='signout'),
    path('',include(router.urls))

]
