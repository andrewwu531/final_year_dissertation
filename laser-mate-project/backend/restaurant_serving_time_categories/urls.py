from django.urls import path
from .views import SearchCategories


urlpatterns = [
    path('<restaurant_serving_time_id>', SearchCategories.as_view()),
    #path('owner/<slug:serving_time_hour>:<serving_time_minutes>', ITC_View().as_view()),
]
