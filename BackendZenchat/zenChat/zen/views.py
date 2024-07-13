from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import generics
from .serializers import Search
from rest_framework.permissions import AllowAny

class SearchUser(generics.ListAPIView ):
    serializer_class = Search
    permission_classes = (AllowAny,)
    
    def get_queryset(self):
        #TODO костыль None                                                                                  \/
        request_db = get_user_model().objects.filter(username__icontains=self.request.GET.get('username','None')).values('username','is_active','photo')

        return request_db

    