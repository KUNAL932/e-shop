from rest_framework import routers
from django.urls import include, path
from . import views


router = routers.SimpleRouter()
router.register(r'', views.CategoryViewSet)
urlpatterns =[
    path('',include(router.urls))
]
