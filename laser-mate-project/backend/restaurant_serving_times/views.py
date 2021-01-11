from .models import Restaurant_Serving_Times
from .serializers import Restaurant_Serving_Times_Serializer
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

class Restaurant_Serving_Times_View(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = Restaurant_Serving_Times_Serializer

    def post(self, request, format=None):
        queryset = Restaurant_Serving_Times.objects.all()
        data = self.request.data

        restaurant_id_search = data['restaurant_id']
        queryset = queryset.filter(restaurant_id__exact=restaurant_id_search)

        serializer = Restaurant_Serving_Times_Serializer(queryset, many=True)

        return Response(serializer.data)