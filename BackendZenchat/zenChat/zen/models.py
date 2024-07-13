from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
# Create your models here.

class User(AbstractUser):
    photo = models.ImageField(upload_to='avatar', default=None, blank=True, null=True)


class Message(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL,null=True ,related_name='messages')
    chat = models.ForeignKey('Chat',on_delete=models.CASCADE)
    text = models.TextField()
    data_send = models.DateTimeField(auto_now_add=True)
    data_update = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    
class Chat(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete = models.SET_NULL,null=True, related_name='chats')
    perm_user = models.ForeignKey(get_user_model(),on_delete=models.SET_NULL,null=True,)
    data_create = models.DateTimeField(auto_now_add=True)