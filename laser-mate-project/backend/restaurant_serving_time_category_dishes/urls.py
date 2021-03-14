from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import Restaurant_Serving_Time_Category_Dish_View

urlpatterns = [
    path('search', Restaurant_Serving_Time_Category_Dish_View.as_view()),

]
