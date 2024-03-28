from django.shortcuts import redirect, render
import pyrebase
from django.contrib import messages

from .models import Faq

config={
    "apiKey": "AIzaSyB9_oBEMRbe2kFIrvcMkWi383lJA8KEeLI",
    "authDomain": "comments-bd775.firebaseapp.com",
    "databaseURL": "https://comments-bd775-default-rtdb.firebaseio.com",
    "projectId": "comments-bd775",
    "storageBucket": "comments-bd775.appspot.com",
    "messagingSenderId": "336397319771",
    "appId": "1:336397319771:web:38a4fa85de3a51fbc5c97e",
}
firebase=pyrebase.initialize_app(config)
authe=firebase.auth()
database=firebase.database()

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def company(request):
    return render(request, 'pages/company.html')

def contact(request):
    if request.method == "POST":
        # Obtén los datos del formulario
        name = request.POST.get("Name")
        email = request.POST.get("Email")
        phone = request.POST.get("Phone")
        address = request.POST.get("Address")
        question = request.POST.get("Question")

        # Guarda los datos en Firebase
        data = {
            "Name": name,
            "Email": email,
            "Phone": phone,
            "Address": address,
            "Question": question
        }
        try:
            database.child("Data").push(data)
            messages.success(request, 'Formulario enviado correctamente.')
        except:
            messages.error(request, 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.')

        return redirect('contact')

    return render(request, 'pages/contact.html')

def product(request):
    return render(request, 'pages/product.html')

<<<<<<< HEAD
#redirect a info legal
def legal(request):
    return render(request, 'legal/legal_information.html')

=======


#redirect a info legal
def legal(request):
    return render(request, 'legal/legal_information.html')
>>>>>>> origin/frontend
def privacidad(request):
    return render(request, 'legal/Privacy_Policy.html')