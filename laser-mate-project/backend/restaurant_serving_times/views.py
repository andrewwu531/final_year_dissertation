from .models import Restaurant_Serving_Times
from .serializers import Restaurant_Serving_Times_Serializer
from rest_framework.generics import RetrieveAPIView


class Restaurant_Serving_Times_View(RetrieveAPIView):
    queryset = Restaurant_Serving_Times
    serializer_class = Restaurant_Serving_Times_Serializer

