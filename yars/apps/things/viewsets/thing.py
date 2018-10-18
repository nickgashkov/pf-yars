from __future__ import annotations

from django.apps import apps
from rest_framework import viewsets

from yars.apps.things.serializers import ThingSerializer


class ThingViewSet(viewsets.ModelViewSet):
    model = apps.get_model("things.Thing")
    queryset = model.objects.all()

    serializer_class = ThingSerializer
