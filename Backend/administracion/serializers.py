from rest_framework import serializers
from .models import PlanesPago, Clientes, HistorialPagos

class PlanesPagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanesPago
        fields = ['id', 'nombre_plan']

class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = ['cedula', 'nombre', 'apellido', 'correo_electronico', 'numero_telefono', 'edad', 'fecha_nacimiento', 'foto', 'fecha_registro', 'id_plan_pago', 'estado']

class HistorialPagosSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistorialPagos
        fields = ['id', 'cedula_cliente', 'valor', 'fecha_pago', 'id_plan_pago', 'dias_restantes']
