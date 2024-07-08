from django.shortcuts import render
from rest_framework import viewsets
from .serializer import InventarioSerializer
from .models import Inventario

# Create your views here.

class InventoryView(viewsets.ModelViewSet):
    serializer_class = InventarioSerializer
    queryset = Inventario.objects.all()