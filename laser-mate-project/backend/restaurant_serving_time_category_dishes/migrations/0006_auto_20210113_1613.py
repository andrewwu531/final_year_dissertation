# Generated by Django 3.1.4 on 2021-01-13 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_serving_time_category_dishes', '0005_auto_20210113_1612'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='dish_id',
            field=models.CharField(max_length=100, primary_key=True, serialize=False, unique=True),
        ),
    ]