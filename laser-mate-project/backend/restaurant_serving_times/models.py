from django.db import models
from restaurant.models import Restaurant

Hours = (
    ('1', '1'), ('2', '2'), ('3', '3'), ('4','4'), ('5', '5'),
    ('6','6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10','10'), 
    ('11', '11'), ('12', '12'), ('13', '13'), ('14', '14'), ('15','15'), 
    ('16', '16'), ('17', '17'), ('18', '18'), ('19', '19'), ('20','20'),
    ('21', '21'), ('22', '22'), ('23', '23'), ('24', '24')
)

Minutes = (
    ('00', '00'), ('15', '15'),  ('30', '30'),  ('45', '45'),
)

class Restaurant_Serving_Times(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    serving_time_start_hour = models.CharField(max_length=2, choices=Hours, default='1')
    serving_time_start_minutes = models.CharField(max_length=2, choices=Minutes, default='00')
    serving_time_end_hour = models.CharField(max_length=2, choices=Hours, default='1')
    serving_time_end_minutes = models.CharField(max_length=2, choices=Minutes, default='00')

    class Meta:
        verbose_name_plural = '2-1 Restaurant_Serving_Times'

    def __str__(self):
        return '{}'.format(self.id)