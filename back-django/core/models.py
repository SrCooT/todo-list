from django.db import models

class Tarefa(models.Model):
    tarefa = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    concluido = models.BooleanField()

    def alternar_concluido(self):
        # Alterna entre 'True' e 'False'
        self.concluido = not self.concluido
        self.save()

    def __str__(self):
        return self.tarefa + " / " + self.categoria + " / " + str(self.concluido )
