# from restaurant_serving_times.models import Restaurant_Serving_Times
# from restaurant_serving_times.serializers import Restaurant_Serving_Times_Serializer
from rest_framework.generics import ListAPIView
from .models import Restaurant_Serving_Time_Categories
from .serializers import Restaurant_Serving_Time_Categories_Serializer
from rest_framework.response import Response
from rest_framework import permissions

class Restaurant_Serving_Time_Categories_View(ListAPIView):
    queryset = Restaurant_Serving_Time_Categories
    serializer_class = Restaurant_Serving_Time_Categories_Serializer

    
class SearchCategories(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = Restaurant_Serving_Time_Categories_Serializer 
    
    def get_queryset(self):
        restaurant_serving_time_id = self.kwargs['restaurant_serving_time_id']
        return Restaurant_Serving_Time_Categories.objects.filter(restaurant_serving_time_id=restaurant_serving_time_id)