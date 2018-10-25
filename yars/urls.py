from __future__ import annotations

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from yars.apps.core.views import index

urlpatterns = [
    re_path("^$|^#/.*$", index, name="spa"),
    path("admin/", admin.site.urls),
    path("api/things/", include("yars.apps.things.urls", namespace="things")),
    path("api/token/obtain/", obtain_jwt_token, name="token_obtain"),
    path("api/token/refresh/", refresh_jwt_token, name="token_refresh"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
