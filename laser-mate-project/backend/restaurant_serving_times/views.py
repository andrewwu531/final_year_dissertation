from .models import Restaurant_Serving_Times
from .serializers import Restaurant_Serving_Times_Serializer
from rest_framework.generics import ListAPIView


class Restaurant_Serving_Times_View(ListAPIView):
    queryset = Restaurant_Serving_Times
    serializer_class = Restaurant_Serving_Times_Serializer

