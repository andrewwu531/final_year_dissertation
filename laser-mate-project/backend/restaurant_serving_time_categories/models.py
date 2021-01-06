from django.db import models
from restaurant_serving_times.models import Restaurant_Serving_Times

class Restaurant_Serving_Time_Categories(models.Model):
    restaurant_serving_time = models.ForeignKey(Restaurant_Serving_Times, on_delete=models.CASCADE)
    category = models.CharField(max_length=15)

    class Meta:
        verbose_name_plural = '3-1 Restaurant_Serving_Time_Categories'

    def __str__(self):
        return '{}{}'.format(str(self.restaurant_serving_time.restaurant.restaurant_id), \
            str(self.restaurant_serving_time.serving_time_start_hour))
        