from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.contrib.auth.models import User
from serializers.user_serializer import DefaultUserSerializer

class ApiViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = DefaultUserSerializer
    