from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
def home(requests):
    return JsonResponse({"message":"Django web app","name":"kunal"})
