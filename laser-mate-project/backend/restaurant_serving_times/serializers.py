from rest_framework import serializers
from .models import Restaurant_Serving_Times



class Restaurant_Serving_Times_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant_Serving_Times
        fields = '__all__' 
