# from restaurant_serving_times.models import Restaurant_Serving_Times
# from restaurant_serving_times.serializers import Restaurant_Serving_Times_Serializer
from rest_framework.generics import ListAPIView
from .models import Restaurant_Serving_Time_Categories
from .serializers import Restaurant_Serving_Time_Categories_Serializer


class Restaurant_Serving_Time_Categories_View(ListAPIView):
    queryset = Restaurant_Serving_Time_Categories
    serializer_class = Restaurant_Serving_Time_Categories_Serializer

