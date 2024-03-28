from django.urls import path
from . import views


urlpatterns = [
    path('',views.index,name='index'),
    path('company/',views.company,name='company'),
    path('contact/',views.contact,name='contact'),
    path('product/',views.product,name='product'),
<<<<<<< HEAD

    path('legal/',views.legal,name='legal'),
    path('privacidad/',views.privacidad,name='privacidad'),
=======
    
    path('legal/',views.legal,name='legal'),
    path('privacidad/',views.privacidad,name='privacidad'),

    

>>>>>>> origin/frontend
]
