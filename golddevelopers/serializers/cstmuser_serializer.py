from dataclasses import fields
from api.models import users2
from rest_framework.serializers import ModelSerializer

class custom_user(ModelSerializer):
    class Meta:
        model = users2
        fields = "__all__"