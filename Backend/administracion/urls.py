from django.urls import path
from . import views

urlpatterns = [
    path('planes/', views.PlanesPagoList.as_view(), name='planes_pago_list'), 
    path('clientes/', views.ClientesList.as_view(), name='clientes_list'),   
    path('clientes/<int:cedula>/historial/', views.HistorialPagosList.as_view(), name='historial_pagos_cliente'),
    path('clientes/<int:cedula>/', views.ClientesDetail.as_view(), name='cliente_detail'),

]
