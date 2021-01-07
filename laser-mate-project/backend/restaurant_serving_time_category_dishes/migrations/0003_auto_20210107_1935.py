# Generated by Django 3.1.4 on 2021-01-07 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_serving_time_category_dishes', '0002_auto_20210107_1929'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='dish_brief_descriptions',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='dish_longer_descriptions',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='dish_price',
            field=models.CharField(max_length=9),
        ),
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='extras1',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='extras2',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='extras3',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='food_labels1',
            field=models.CharField(choices=[('nut free', 'nut free'), ('vegan', 'vegan'), ('vegetarian', 'vegetarian'), ('none', 'none')], default='none', max_length=20),
        ),
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='food_labels2',
            field=models.CharField(choices=[('nut free', 'nut free'), ('vegan', 'vegan'), ('vegetarian', 'vegetarian'), ('none', 'none')], default='none', max_length=20),
        ),
    ]
