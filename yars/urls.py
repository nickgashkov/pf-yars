from __future__ import annotations

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", include("yars.apps.frontend.urls", namespace="frontend")),
    path("admin/", admin.site.urls),
    path("api/things/", include("yars.apps.things.urls", namespace="things")),
]
