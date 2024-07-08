from django.db import models

class Inventario(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(max_length=350)
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return self.nombre
