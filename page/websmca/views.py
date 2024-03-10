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



#redirect a info legal
def legal(request):
    return render(request, 'legal/legal_information.html')
def privacidad(request):
    return render(request, 'legal/Privacy_Policy.html')