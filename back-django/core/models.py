from django.db import models

# Create your models here.
class Tarefa(models.Model):
    tarefa = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    concluido = models.BooleanField(default=False)
    



    
    def __str__(self):
        return self.tarefa + " / " + self.categoria + " /" + self.concluido 