from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import Search, AddUser
from rest_framework.permissions import AllowAny

from django.contrib.auth.hashers import make_password
class SearchUser(generics.ListAPIView):
    serializer_class = Search
    permission_classes = (AllowAny,)

    def get_queryset(self):
        request_db = (
            get_user_model()
            .objects.filter(
                username__icontains=self.request.GET.get("username", "None")
            )
            .values("username", "is_active", "photo")
        )

        return request_db


class RegisterUser(generics.CreateAPIView):
    serializer_class = AddUser
    
    def create(self, request, *args, **kwargs):
        request.data['password']= make_password(request.data['password'])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)
    

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        response.set_cookie('access_token', response.data['access'], httponly=True)
        return response