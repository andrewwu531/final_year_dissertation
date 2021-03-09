from django.urls import path
from .views import Restaurant_Serving_Time_Category_Dish_View

urlpatterns = [
    path('search', Restaurant_Serving_Time_Category_Dish_View.as_view()),
]
