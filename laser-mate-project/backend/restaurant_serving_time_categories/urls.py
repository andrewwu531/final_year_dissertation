from django.urls import path
from .views import SearchCategories


urlpatterns = [
    path('<restaurant_serving_time_id>', SearchCategories.as_view()),
]
