import random
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorator.csrf import csrf_exempt
from django.contrib.auth import login,logout
# Create your views here.
def generate_session_token(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97,123)] + [str(i) for i in range(10)]) for _ in range(length) ) 
@csrf_exempt
def signin(request):
    if not request.method =='POST':
        return JsonResponse({"error":"Send A Post Request With Valid Parameters"})

    username = request.POST['email']
    password = request.POST['password']

    if not  re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)",username):
        return JsonResponse({"error":"Enter A Valid Email "})
        
    if len(password)<3 :
        return JsonResponse({'error':'Enter A Password Of More Than 3 Characters'})

    userModel = get_user_model()

    try:
        user = userModel.objects.get(email=username)
        if user.check_password(password):
            user_dict = userModel.objects.filter(email=username).values().first()
            user_dict.pop('password')

            if user.session_token != '0':
                user.session_token= 0
                user.save()
                return JsonResponse({"error":"Previous Session Exists"})

            token = generate_session_token()
            user.session_token = token
            user.save()
            login(request,user)
            return JsonResponse({"token":token,"user":user_dict})
        else:
            return JsonResponse({"error":"Invalid Password"})
    except username.DoesNotExist:
        pass
    