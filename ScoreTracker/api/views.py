import base64
import hashlib

import bcrypt
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer


# Create your views here.
@api_view(["GET"])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def addUser(request):
    print(request.data)
    hashedPassword = bcrypt.hashpw(
        request.data["password"].encode("utf-8"),
        bcrypt.gensalt(),
    )
    data = {"name": request.data["name"], "password": hashedPassword.decode("ascii")}
    print(hashedPassword)
    serializer = UserSerializer(data=data)
    print(serializer)
    if serializer.is_valid():
        serializer.save()
    else:
        print("Didn't save")
    return Response(serializer.data)


@api_view(["PUT"])
def updateUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(["DELETE"])
def deleteUser(request, pk):
    user = User.objects.get(id=pk)
    user.delete()

    return Response("Item deleted")


@api_view(["GET"])
def loginUser(request):
    user = User.objects.get(name=request.data["name"])
    password = request.data["password"].encode("utf-8")
    print(password)
    print(user.password.encode("utf-8"))

    if bcrypt.checkpw(password, user.password.encode("utf-8")):
        return Response({"success": True}, status=status.HTTP_200_OK)
    else:
        return Response({"success": False}, status=status.HTTP_401_UNAUTHORIZED)
