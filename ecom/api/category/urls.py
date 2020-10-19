from rest_framework import routers
from django.urls import include, path
from . import views
from .views import CategoryViewSet

router = routers.SimpleRouter()
router.register(r'', views.CategoryViewSet)
urlpatterns =[
    path('',include(router.urls))
]
