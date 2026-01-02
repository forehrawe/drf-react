from django.db import models

# Create your models here.
class users2(models.Model):
    username = models.CharField()
    password = models.CharField()
    email = models.EmailField()