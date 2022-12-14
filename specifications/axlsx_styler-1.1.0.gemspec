# -*- encoding: utf-8 -*-
# stub: axlsx_styler 1.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "axlsx_styler".freeze
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Weston Ganger".freeze, "Anton Sakovich".freeze]
  s.date = "2020-08-26"
  s.description = "Build clean and maintainable styles for your axlsx spreadsheets. Build your spreadsheeet with data and then apply styles later.".freeze
  s.email = ["weston@westonganger.com".freeze, "sakovias@gmail.com".freeze]
  s.homepage = "https://github.com/axlsx-styler-gem/axlsx_styler".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3.0".freeze)
  s.rubygems_version = "3.3.7".freeze
  s.summary = "Build clean and maintainable styles for your axlsx spreadsheets. Build your spreadsheeet with data and then apply styles later.".freeze

  s.installed_by_version = "3.3.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<caxlsx>.freeze, [">= 2.0.2"])
    s.add_runtime_dependency(%q<activesupport>.freeze, [">= 3.1"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_development_dependency(%q<minitest-reporters>.freeze, [">= 0"])
    s.add_development_dependency(%q<appraisal>.freeze, [">= 0"])
    s.add_development_dependency(%q<rails>.freeze, [">= 0"])
    s.add_development_dependency(%q<sqlite3>.freeze, [">= 0"])
  else
    s.add_dependency(%q<caxlsx>.freeze, [">= 2.0.2"])
    s.add_dependency(%q<activesupport>.freeze, [">= 3.1"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_dependency(%q<minitest-reporters>.freeze, [">= 0"])
    s.add_dependency(%q<appraisal>.freeze, [">= 0"])
    s.add_dependency(%q<rails>.freeze, [">= 0"])
    s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
  end
end
