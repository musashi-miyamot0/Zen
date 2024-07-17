
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.models import TokenUser
from rest_framework_simplejwt.serializers import TokenObtainSerializer
class Search(serializers.ModelSerializer):
    
    class Meta:
        model = get_user_model()
        fields = ('username','is_active','photo',)
        

class AddUser(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('username','password','email',)
        


class AuthSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = get_user_model()
        fields = ('username', 'photo','id',)
        
