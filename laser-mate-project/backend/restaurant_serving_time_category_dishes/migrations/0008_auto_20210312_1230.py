# Generated by Django 3.1.4 on 2021-03-12 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_serving_time_category_dishes', '0007_auto_20210311_1449'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='dish_photo',
            field=models.ImageField(upload_to='meal_photos/'),
        ),
    ]