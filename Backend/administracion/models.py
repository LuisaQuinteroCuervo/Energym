from django.db import models

# Modelo para los planes de pago
class PlanesPago(models.Model):
    nombre_plan = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.nombre_plan

# Modelo para los clientes
class Clientes(models.Model):
    ESTADO_CHOICES = [
        ('Activo', 'Activo'),
        ('Inactivo', 'Inactivo'),
    ]
    
    cedula = models.BigIntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    correo_electronico = models.EmailField(max_length=100)
    numero_telefono = models.CharField(max_length=15)
    edad = models.IntegerField()
    fecha_nacimiento = models.DateField()
    foto = models.CharField(max_length=255, blank=True, null=True)
    fecha_registro = models.DateField(auto_now_add=True)
    estado = models.CharField(max_length=8, choices=ESTADO_CHOICES, default='Inactivo')



    def __str__(self):
        return self.id_plan_pago.nombre_plan

# Modelo para el historial de pagos
class HistorialPagos(models.Model):
    cedula_cliente = models.ForeignKey(Clientes, on_delete=models.CASCADE)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_pago = models.DateField()
    id_plan_pago = models.ForeignKey(PlanesPago, on_delete=models.SET_NULL, null=True)
    dias_restantes = models.IntegerField()

    def __str__(self):
        return f'Pago de {self.cedula_cliente.nombre} {self.cedula_cliente.apellido} por {self.valor}'
