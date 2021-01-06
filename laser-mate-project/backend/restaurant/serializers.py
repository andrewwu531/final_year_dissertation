from rest_framework import serializers
from .models import Restaurant, Restaurant_QR_codes, Restaurant_Menus



class Restaurant_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__' 


class Restaurant_QR_codes_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant_QR_codes
        fields = '__all__' 


class Restaurant_Menus_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant_Menus
        fields = '__all__'


# class Category_Meals_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category_meals
#         fields = ('meals_brief_descriptions')

# class Meal_Brief_Details_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Meal_details
#         fields = ('meals_brief_descriptions', 'dish_price', 'meal_photo')

# class Meal_Allergy_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Meal_allergy_Info
#         fields = ('allergies')
    

# class Meal_Extras_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Meal_extras
#         fields = ('extras')


# class Meal_Long_Details_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Meal_details
#         fields = ('meal_brief_descriptions', 'meal_long_descriptions', 'dish_price',
#                     'meal_longer_descriptions', 'availability', 'meal_photo')



# class Owner_Interface_Serving_Times_Serializer(serializers.ModelSerializer):
#     restaurant_id = Restaurant_ID_Serializer()
#     serving_times = Restaurant_Serving_Times_Serializer(many=True)

# class Owner_Interface_Meals_Serializer(serializers.ModelSerializer):
#     restaurant_id = Restaurant_ID_Serializer()
#     restaurant_serving_times = Restaurant_Serving_Times_Serializer(many=True)
#     restaurant_categories = Serving_Time_Categories_Serializer(many=True)
#     restaurant_meals = Category_Meals_Serializer(many=True)
#     restaurant_meal_brief_details = Meal_Brief_Details_Serializer()

# class Owner_Interface_Meal_Serializer(serializers.ModelSerializer):
#     restaurant_id = Restaurant_ID_Serializer()
#     restaurant_serving_times = Restaurant_Serving_Times_Serializer(many=True)
#     restaurant_categories = Serving_Time_Categories_Serializer(many=True)
#     restaurant_meals = Category_Meals_Serializer(many=True)
#     restaurant_meal_long_details = Meal_Long_Details_Serializer()
#     restaurant_meal_allergy = Meal_Allergy_Serializer(many=True)
#     restaurant_meal_extras = Meal_Extras_Serializer(many=True)


# class Customer_Interface_Restaurant_Meals_Serializer(serializers.ModelSerializer):
#     restaurant_id = Restaurant_ID_Serializer()
#     restaurant_location = Restaurant_Location_Serializer()
#     restaurant_serving_times = Restaurant_Serving_Times_Serializer(many=True)
#     restaurant_categories = Serving_Time_Categories_Serializer(many=True)
#     restaurant_meals = Category_Meals_Serializer(many=True)
#     restaurant_meal_brief_details = Meal_Long_Details_Serializer()


# class Customer_Interface_Restaurant_Meal_Serializer(serializers.ModelSerializer):
#     restaurant_id = Restaurant_ID_Serializer()
#     restaurant_location = Restaurant_Location_Serializer()
#     restaurant_serving_times = Restaurant_Serving_Times_Serializer(many=True)
#     restaurant_categories = Serving_Time_Categories_Serializer(many=True)
#     restaurant_meals = Category_Meals_Serializer(many=True)
#     restaurant_meal_long_details = Meal_Long_Details_Serializer()
#     restaurant_meal_allergy = Meal_Allergy_Serializer(many=True)
#     restaurant_meal_extras = Meal_Extras_Serializer(many=True)




# class Company_Staff_Interface_Basic_Restaurant_Page_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Restaurant_Accounts
#         fields = ('restaurant_id', 'restaurant_name', 'owner_name', 'restaurant_address', 'restaurant_postcode',
#                     'restaurant_city', 'restaurant_country', 'restaurant_menu_weblink', 'restaurant_phone_number')


# class Company_Staff_Interface_Restaurant_Admin_Page_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Restaurant_Accounts
#         fields = ('restaurant_id', 'restaurant_username', 'restaurant_password', 'number_of_tables')

