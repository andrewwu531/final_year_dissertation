from django.contrib import admin
from .models import Restaurant_Serving_Time_Categories


class Restaurant_Serving_Time_Categories_Inline(admin.TabularInline):
    model = Restaurant_Serving_Time_Categories
    raw_id_fields = ['restaurant_serving_time']
    list_display = ('restaurant_id','serving_time_start_hour', 'serving_time_start_minutes', \
            'serving_time_end_hour', 'serving_time_start_minutes', 'category')





