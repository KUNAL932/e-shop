from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from .serializers import OrderSerializer
from .models import Order
from django.http import JsonResponse
from django.contrib.auth import get_user_model
# Create your views here.


def validate_user_session(id,token):
    userModel = get_user_model()
    try:
        user = userModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except userModel.DoesNotExist:
        return False

@csrf_exempt
def add(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({"error":"Please Login then try to add, Session Expired","code":"500"})

    if request.method == "POST":
        user_id = id
        transaction_id = request.POST['transaction_id']
        products = request.POST['products']
        amount = request.POST['amount']
        total_pro = len(products.split(",")[:-1])

        userModel = get_user_model()

        try:
            user = userModel.objects.get(pk=id)

        except userModel.DoesNotExist:
            return JsonResponse({"error":"User DoesNot Exist"})
        
        ordr = Order(user=user,product_names=products,total_products=total_pro,total_amount=amount,transaction_id=transaction_id)
        ordr.save()
        return JsonResponse({"success":True,"error":False,"msg":"Order Placed Successfully!"})       

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('name')
    serializer_class = OrderSerializer
 
