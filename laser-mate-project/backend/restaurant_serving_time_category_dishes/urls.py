from django.urls import path
from .views import Restaurant_Serving_Time_Category_Dishes_View, \
    Restaurant_Serving_Time_Category_Dish_View


urlpatterns = [
    path('owner/dishes', Restaurant_Serving_Time_Category_Dishes_View.as_view()),
    path('owner/<slug:dish_brief_descriptions>', Restaurant_Serving_Time_Category_Dish_View.as_view()),
]
