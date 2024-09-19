from rest_framework import generics
from .models import PlanesPago, Clientes, HistorialPagos
from .serializers import PlanesPagoSerializer, ClientesSerializer, HistorialPagosSerializer

class PlanesPagoList(generics.ListCreateAPIView):
    queryset = PlanesPago.objects.all()
    serializer_class = PlanesPagoSerializer

class ClientesList(generics.ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer

class HistorialPagosList(generics.ListCreateAPIView):
    queryset = HistorialPagos.objects.all()
    serializer_class = HistorialPagosSerializer
