from django.urls import path
from . import views


urlpatterns = [
    path('',views.index,name='index'),
    path('company/',views.company,name='company'),
    path('contact/',views.contact,name='contact'),
    path('product/',views.product,name='product'),
    path('faq/', views.faq, name='faq'),

    path('legal/',views.legal,name='legal'),
    path('privacidad/',views.privacidad,name='privacidad'),
]
