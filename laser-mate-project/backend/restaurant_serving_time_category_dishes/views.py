from rest_framework.views import APIView
from .models import Restaurant_Serving_Time_Category_Dishes
from .serializers import Restaurant_Serving_Time_Category_Dishes_Serializer
from rest_framework import permissions
from rest_framework.response import Response

class Restaurant_Serving_Time_Category_Dish_View(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = Restaurant_Serving_Time_Category_Dishes_Serializer

    def post(self, request, format=None):
        queryset = Restaurant_Serving_Time_Category_Dishes.objects.all()
        data = self.request.data

        restaurant_serving_time_category_id_search = data['restaurant_serving_time_category_id']
        queryset = queryset.filter(restaurant_serving_time_category_id__exact=restaurant_serving_time_category_id_search)

        serializer = Restaurant_Serving_Time_Category_Dishes_Serializer(queryset, many=True)

        return Response(serializer.data)