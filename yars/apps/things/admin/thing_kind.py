from __future__ import annotations

from django.apps import apps
from django.contrib import admin

thing_kind_model = apps.get_model("things.ThingKind")


@admin.register(thing_kind_model)
class ThingKindAdmin(admin.ModelAdmin):
    pass
