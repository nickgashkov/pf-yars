from __future__ import annotations

from django.contrib import admin
from django.urls import include, path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    path("", include("yars.apps.frontend.urls", namespace="frontend")),
    path("admin/", admin.site.urls),
    path("api/things/", include("yars.apps.things.urls", namespace="things")),
    path("api/token/obtain/", obtain_jwt_token, name="token_obtain"),
    path("api/token/refresh/", refresh_jwt_token, name="token_refresh"),
]
