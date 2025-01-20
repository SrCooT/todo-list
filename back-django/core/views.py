from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Tarefa
from .serializers import TarefaSerializer

class TarefaViewSet(viewsets.ModelViewSet):
    queryset = Tarefa.objects.all()
    serializer_class = TarefaSerializer

    
@action(detail=True, methods=['patch'])
def alternar_concluido(self, request, pk=None):
    tarefa = self.get_object()
    tarefa.alternar_concluido()
    return Response({'status': f'Tarefa agora está {"Concluído" if tarefa.concluido == "True" else "Não Concluído"}'}, status=status.HTTP_200_OK)