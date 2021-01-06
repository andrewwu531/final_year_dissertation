
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Restaurant_Serving_Time_Categories
from .serializers import Restaurant_Serving_Time_Categories_Serializer


class Restaurant_Serving_Time_Categories_View(RetrieveAPIView):
    queryset = Restaurant_Serving_Time_Categories
    serializer_class = Restaurant_Serving_Time_Categories_Serializer

