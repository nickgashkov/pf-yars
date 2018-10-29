from __future__ import annotations

from django.apps import apps
from rest_framework import serializers


class ThingSerializer(serializers.ModelSerializer):
    kind = serializers.StringRelatedField()

    class Meta:
        model = apps.get_model("things.Thing")
        fields = ("id", "name", "description", "kind", "image", "rating")
