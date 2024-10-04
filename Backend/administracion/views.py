from rest_framework import generics
from .models import PlanesPago, Clientes, HistorialPagos
from .serializers import PlanesPagoSerializer, ClientesSerializer, HistorialPagosSerializer
from rest_framework.response import Response
from rest_framework import status

class PlanesPagoList(generics.ListCreateAPIView):
    queryset = PlanesPago.objects.all()
    serializer_class = PlanesPagoSerializer

class ClientesList(generics.ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer

class ClientesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    lookup_field = 'cedula'

class HistorialPagosList(generics.ListCreateAPIView):
    serializer_class = HistorialPagosSerializer

    def get_queryset(self):
        # Filtra el historial de pagos según la cédula del cliente
        cedula_cliente = self.kwargs['cedula']
        return HistorialPagos.objects.filter(cedula_cliente=cedula_cliente)

    def perform_create(self, serializer):
        # Al crear un registro de pago, toma la cédula del cliente automáticamente desde la URL
        cedula_cliente = self.kwargs['cedula']
        cliente = Clientes.objects.get(cedula=cedula_cliente)
        serializer.save(cedula_cliente=cliente)

    def get(self, request, *args, **kwargs):
        # Verifica si el cliente existe antes de listar el historial
        cedula_cliente = self.kwargs['cedula']
        cliente_existente = Clientes.objects.filter(cedula=cedula_cliente).exists()
        if not cliente_existente:
            return Response({"detail": "Cliente no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Verifica si el cliente existe antes de crear un registro de pago
        cedula_cliente = self.kwargs['cedula']
        cliente_existente = Clientes.objects.filter(cedula=cedula_cliente).exists()
        if not cliente_existente:
            return Response({"detail": "Cliente no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        return super().post(request, *args, **kwargs)