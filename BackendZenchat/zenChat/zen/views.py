from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import generics
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView,
)
from .serializers import Search, AddUser, AuthSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from django.middleware.csrf import get_token
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.authentication import JWTAuthentication

from rest_framework_simplejwt.tokens import RefreshToken


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
        request.data["password"] = make_password(request.data["password"])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            value=f"{response.data['refresh']}",
            key="refresh",
            secure=False,
            samesite="Strict",
            httponly=True,
        )
        response["Access-Control-Allow-Credentials"] = True
        return response


# class Test(generics.ListAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = Check
#     permission_classes = (IsAuthenticated,)


class TokenRefreshViewCustom(TokenRefreshView):
    def post(self, request: Request, *args, **kwargs) -> Response:
        serializer = self.get_serializer(data={"refresh": request.COOKIES["refresh"]})

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)


class GetUser(APIView, JWTAuthentication):
    user_model = get_user_model()

    def get(self, request: Request, *args, **kwargs):
        user = self.authenticate(request=request)[0]
        obj_user = AuthSerializer(user).data
        return Response({"user": obj_user})


class KillToken(TokenBlacklistView, APIView):
    def post(self, request: Request, *args, **kwargs):
        token = RefreshToken(request.COOKIES["refresh"])
        token.blacklist()
        rsp = Response(status=status.HTTP_205_RESET_CONTENT)
        rsp.set_cookie(
            value="", key="refresh", expires=0, httponly=True, samesite="Strict"
        )
        return rsp
