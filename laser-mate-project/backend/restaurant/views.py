from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Restaurant, Restaurant_QR_codes, Restaurant_PDF_Menus
from .serializers import  Restaurant_Serializer, Restaurant_QR_codes_Serializer, \
                        Restaurant_PDF_Menus_Serializer


class Restaurant_View(RetrieveAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Restaurant.objects.all()
    serializer_class = Restaurant_Serializer
    lookup_field = 'restaurant_id'


class Restaurant_QR_codes_View(ListAPIView):
    queryset = Restaurant_QR_codes
    serializer_class = Restaurant_QR_codes_Serializer


class Restaurant_PDF_Menus_View(ListAPIView):
    queryset = Restaurant_PDF_Menus
    serializer_class = Restaurant_PDF_Menus_Serializer



# class Owner_Meals_View(ListAPIView):
#     queryset = {'restaurant_id': Restaurant_ID.objects.all(),
#                 'serving_times': Restaurant_serving_times.objects.all(), 
#                 'categories': Serving_time_categories.objects.all(),
#                 'meals': Category_meals.objects.all(),
#                 'meal': Meal_details.objects.all()
#                 }
#     serializer_class = Owner_Interface_Meals_Serializer

# class Owner_Meal_View(RetrieveAPIView):
#     queryset = {'restaurant_id': Restaurant_ID.objects.all(),
#                 'serving_times': Restaurant_serving_times.objects.all(), 
#                 'categories': Serving_time_categories.objects.all(),
#                 'meals': Category_meals.objects.all(),
#                 'meal': Meal_details.objects.all(),
#                 'allergies': Meal_allergy_Info.objects.all(),
#                 'extras': Meal_extras.objects.all()
#                 }

#     serializer_class = Owner_Interface_Meal_Serializer





# class Customer_Interface_Restaurant_Meals_View(ListAPIView):
#     permission_classes = (permissions.AllowAny, )
#     queryset = {'restaurant_location': Restaurant_Accounts.objects.all(),
#                 'serving_times': Restaurant_serving_times.objects.all(), 
#                 'categories': Serving_time_categories.objects.all(),
#                 'meals': Category_meals.objects.all(),
#                 'meal': Meal_details.objects.all()
#                 }
#     serializer_class = Customer_Interface_Restaurant_Meals_Serializer


# class Customer_Interface_Restaurant_Meal_View(RetrieveAPIView):
#     permission_classes = (permissions.AllowAny, )
#     queryset = {'restaurant_location': Restaurant_Accounts.objects.all(),
#                 'serving_times': Restaurant_serving_times.objects.all(), 
#                 'categories': Serving_time_categories.objects.all(),
#                 'meals': Category_meals.objects.all(),
#                 'meal': Meal_details.objects.all(),
#                 'allergies': Meal_allergy_Info.objects.all(),
#                 'extras': Meal_extras.objects.all()
#                 }
#     serializer_class = Customer_Interface_Restaurant_Meal_Serializer


