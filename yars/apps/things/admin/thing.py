from __future__ import annotations

from django.apps import apps
from django.contrib import admin

thing_model = apps.get_model("things.Thing")


@admin.register(thing_model)
class ThingAdmin(admin.ModelAdmin):
    pass
