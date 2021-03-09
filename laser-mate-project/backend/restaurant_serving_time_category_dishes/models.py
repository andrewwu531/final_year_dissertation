from django.db import models
from restaurant_serving_time_categories.models import Restaurant_Serving_Time_Categories

Food_Labels = (
    ('nut free', 'nut free'), ('vegan', 'vegan'), 
    ('vegetarian', 'vegetarian'), ('none', 'none')
)

class Restaurant_Serving_Time_Category_Dishes(models.Model):
    restaurant_serving_time_category_id = models.ForeignKey(Restaurant_Serving_Time_Categories, on_delete=models.CASCADE)
    dish_id = models.CharField(max_length=100, primary_key=True, unique=True)
    dish_brief_descriptions = models.CharField(max_length=20)
    dish_price = models.CharField(max_length=9)
    dish_photo = models.FileField(upload_to='meal_photos/', default='-')
    dish_longer_descriptions = models.CharField(max_length=100)
    extras1 = models.CharField(max_length=40, blank=True)
    extras2 = models.CharField(max_length=40, blank=True)
    extras3 = models.CharField(max_length=40, blank=True)
    food_labels1 = models.CharField(max_length=20, choices=Food_Labels,default='none')
    food_labels2 = models.CharField(max_length=20, choices=Food_Labels,default='none')
    availability = models.BooleanField()

    class Meta:
        verbose_name_plural = '4-1 Restaurant Serving Time Category Dishes'

    def __str__(self):
        return '{}'.format(self.restaurant_serving_time_category_id)
