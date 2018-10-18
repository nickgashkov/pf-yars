from __future__ import annotations

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Thing(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)

    class Meta:
        verbose_name = _("thing")
        verbose_name_plural = _("things")

    def __str__(self) -> str:
        return self.name
