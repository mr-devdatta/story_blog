from django.http import JsonResponse
from django.http import HttpResponse

def hello_user(request):
    #return JsonResponse({"message": "Hello from Django!"})
    return HttpResponse("This is a simple text response from function <b>def hello_user()</b> !")