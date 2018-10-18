from __future__ import annotations

from django.urls import path

from yars.apps.frontend.views import index

app_name = "frontend"

urlpatterns = [path("", index)]
