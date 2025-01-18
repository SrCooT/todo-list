from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Tarefa
from .serializers import TarefaSerializer


class TarefaViewSet(viewsets.ModelViewSet):
    queryset = Tarefa.objects.all()
    serializer_class = TarefaSerializer

    @action(detail=True, methods=['patch'])
    def marcar_concluido(self, request, pk=None):
        tarefa = self.get_object()
        tarefa.concluido = True
        tarefa.save()
        return Response({'status': 'Tarefa marcada como concluída!'}, status=status.HTTP_200_OK)
