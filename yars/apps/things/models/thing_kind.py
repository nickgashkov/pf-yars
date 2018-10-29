from __future__ import annotations

from django.db import models
from django.utils.translation import ugettext_lazy as _


class ThingKind(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = _("thing kind")
        verbose_name_plural = _("things kinds")

    def __str__(self) -> str:
        return self.name
