.PHONY: fmt update upgrade


SRCDIR = $(shell pwd)
CODEDIR = $(SRCDIR)/yars
DEPSDIR = $(SRCDIR)/deploy/requirements

CUSTOM_COMPILE_COMMAND="make update"

update:
	pip-compile --upgrade --output-file $(DEPSDIR)/base.out $(DEPSDIR)/base.in
	pip-compile --upgrade --output-file $(DEPSDIR)/dev.out  $(DEPSDIR)/dev.in

upgrade:
	pip-sync $(DEPSDIR)/dev.out
