from django.db import models
from restaurant_serving_times.models import Restaurant_Serving_Times

class Restaurant_Serving_Time_Categories(models.Model):
    restaurant_serving_time_id = models.ForeignKey(Restaurant_Serving_Times, on_delete=models.CASCADE)
    restaurant_serving_time_category_id = models.CharField(max_length=100, primary_key=True, unique=True)
    category = models.CharField(max_length=15)

    class Meta:
        verbose_name_plural = '3-1 Restaurant Serving Time Categories'

    def __str__(self):
        return '{}'.format(self.restaurant_serving_time_category_id)
