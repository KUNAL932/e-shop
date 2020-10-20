from rest_framework import routers
from django.urls import include, path
from . import views
# from .views import ProductViewSet

router = routers.SimpleRouter()
router.register(r'', views.ProductViewSet)
urlpatterns =[
    path('',include(router.urls))
]
