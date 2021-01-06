from django.urls import path
from .views import SignupView_RestaurantOwner_ChefWaiter


urlpatterns = [
    path('signup_restaurantowner', SignupView_RestaurantOwner_ChefWaiter.as_view())
]
