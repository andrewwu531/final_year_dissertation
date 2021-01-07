from rest_framework import serializers
from .models import Restaurant_Serving_Time_Category_Dishes



class Restaurant_Serving_Time_Category_Dishes_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant_Serving_Time_Category_Dishes
        fields = '__all__' 
