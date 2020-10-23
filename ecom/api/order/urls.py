from rest_framework import routers
from django.urls import include, path
from . import views

router = routers.SimpleRouter()
router.register(r'', views.OrderViewSet)
urlpatterns =[
    path('add/<str:id>/<str:token>/',views.add,name='order.add'),
    path('',include(router.urls)),

]
