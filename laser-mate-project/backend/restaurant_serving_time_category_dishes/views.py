from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Restaurant_Serving_Time_Category_Dishes
from .serializers import Restaurant_Serving_Time_Category_Dishes_Serializer


class Restaurant_Serving_Time_Category_Dishes_View(ListAPIView):
    queryset = Restaurant_Serving_Time_Category_Dishes
    serializer_class = Restaurant_Serving_Time_Category_Dishes_Serializer


class Restaurant_Serving_Time_Category_Dish_View(RetrieveAPIView):
    queryset = Restaurant_Serving_Time_Category_Dishes
    serializer_class = Restaurant_Serving_Time_Category_Dishes_Serializer
