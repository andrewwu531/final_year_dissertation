# Generated by Django 3.1.4 on 2021-01-07 19:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('restaurant_serving_time_categories', '0002_auto_20210107_1921'),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant_Serving_Time_Category_Dishes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dish_brief_descriptions', models.CharField(max_length=15)),
                ('dish_price', models.CharField(max_length=6)),
                ('dish_longer_descriptions', models.CharField(max_length=30)),
                ('extras1', models.CharField(blank=True, max_length=20)),
                ('extras2', models.CharField(blank=True, max_length=20)),
                ('extras3', models.CharField(blank=True, max_length=20)),
                ('food_labels', models.CharField(choices=[('nut free', 'nut free'), ('vegan', 'vegan'), ('vegetarian', 'vegetarian')], default='nut free', max_length=10)),
                ('availability', models.BooleanField()),
                ('restaurant_serving_time_category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurant_serving_time_categories.restaurant_serving_time_categories')),
            ],
            options={
                'verbose_name_plural': '4-1 Restaurant Serving Time Category Dishes',
            },
        ),
    ]
