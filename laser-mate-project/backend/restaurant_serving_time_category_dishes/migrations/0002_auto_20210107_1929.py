# Generated by Django 3.1.4 on 2021-01-07 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_serving_time_category_dishes', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant_serving_time_category_dishes',
            name='food_labels',
        ),
        migrations.AddField(
            model_name='restaurant_serving_time_category_dishes',
            name='food_labels1',
            field=models.CharField(choices=[('nut free', 'nut free'), ('vegan', 'vegan'), ('vegetarian', 'vegetarian'), ('none', 'none')], default='none', max_length=10),
        ),
        migrations.AddField(
            model_name='restaurant_serving_time_category_dishes',
            name='food_labels2',
            field=models.CharField(choices=[('nut free', 'nut free'), ('vegan', 'vegan'), ('vegetarian', 'vegetarian'), ('none', 'none')], default='none', max_length=10),
        ),
    ]
