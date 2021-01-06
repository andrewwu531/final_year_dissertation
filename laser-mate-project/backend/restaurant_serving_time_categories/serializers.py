from rest_framework import serializers
from .models import Restaurant_Serving_Time_Categories



class Restaurant_Serving_Time_Categories_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant_Serving_Time_Categories
        fields = '__all__' 
