from django.contrib import admin
from restaurant_serving_times.models import Restaurant_Serving_Times
from .models import Restaurant_Serving_Time_Categories


class Restaurant_Serving_Time_Categories_Admin(admin.ModelAdmin):
    list_display = ('restaurant_serving_time_id', 'restaurant_serving_time_category_id', 'category')
    search_fields = ('restaurant_serving_time_id',)


admin.site.register(Restaurant_Serving_Time_Categories, Restaurant_Serving_Time_Categories_Admin)



