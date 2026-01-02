from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.contrib.auth.models import User
from serializers.cstmuser_serializer import custom_user
from .models import users2

class ApiViewSet(ModelViewSet):
    queryset = users2.objects.all()
    serializer_class = custom_user
    