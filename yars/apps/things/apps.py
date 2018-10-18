from __future__ import annotations

from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class RecipesConfig(AppConfig):
    name = "yars.apps.things"
    verbose_name = _("things")
