from django.contrib import admin
from .models import Restaurant_Serving_Times
from restaurant_serving_time_categories.admin import Restaurant_Serving_Time_Categories_Inline


class Restaurant_Serving_Times_Admin(admin.ModelAdmin):
    list_display = ('restaurant_id','serving_time_start_hour', 'serving_time_start_minutes', \
            'serving_time_end_hour', 'serving_time_start_minutes')
    search_fields = ('restaurant_id',)
    inlines = [Restaurant_Serving_Time_Categories_Inline]


admin.site.register(Restaurant_Serving_Times, Restaurant_Serving_Times_Admin)



