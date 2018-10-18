from __future__ import annotations

from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class CoreConfig(AppConfig):
    name = "yars.apps.core"
    verbose_name = _("core")
