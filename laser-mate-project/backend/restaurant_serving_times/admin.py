from django.contrib import admin
from .models import Restaurant_Serving_Times


class Restaurant_Serving_Times_Admin(admin.ModelAdmin):
    list_display = ('restaurant_id', 'restaurant_serving_time_id', 'serving_time_start_hour', 'serving_time_start_minutes', \
            'serving_time_end_hour', 'serving_time_end_minutes')
    search_fields = ('restaurant_id__restaurant_id',)


admin.site.register(Restaurant_Serving_Times, Restaurant_Serving_Times_Admin)



