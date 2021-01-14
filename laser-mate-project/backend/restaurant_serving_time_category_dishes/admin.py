from django.contrib import admin
from .models import Restaurant_Serving_Time_Category_Dishes


class Restaurant_Serving_Time_Category_Dishes_Admin(admin.ModelAdmin):
    list_display = ('restaurant_serving_time_category_id', 'dish_id', 'dish_brief_descriptions', 'dish_price', \
                    'dish_longer_descriptions', 'extras1', 'extras2', 'extras3', \
                    'food_labels1', 'food_labels2', 'availability', 'dish_photo',
    )
    search_fields = ('restaurant_serving_time_category_id',)


admin.site.register(Restaurant_Serving_Time_Category_Dishes, Restaurant_Serving_Time_Category_Dishes_Admin)



