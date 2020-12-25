from rest_framework import viewsets
from articles.models import Article
from .serializers import ArticleSerializer

# handle all views (list, detail, create, delete, update)

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()