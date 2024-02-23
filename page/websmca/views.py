from django.shortcuts import render



# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def company(request):
    return render(request, 'pages/company.html')

def contact(request):
    return render(request, 'pages/contact.html')

def product(request):
    return render(request, 'pages/product.html')
